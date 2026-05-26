"use server";

import nodemailer from "nodemailer";

export type ContactActionState = {
  status: "idle" | "success" | "error";
  message?: string;
};

const {
  SMTP_HOST,
  SMTP_PORT,
  SMTP_USER,
  SMTP_PASS,
  EMAIL_FROM,
  EMAIL_TO,
} = process.env;

const transporter = nodemailer.createTransport({
  host: SMTP_HOST,
  port: Number(SMTP_PORT ?? "587"),
  secure: Number(SMTP_PORT ?? "587") === 465,
  auth: {
    user: SMTP_USER,
    pass: SMTP_PASS,
  },
});

function validateEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function submitContactForm(
  _previousState: ContactActionState,
  formData: FormData
): Promise<ContactActionState> {
  if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS || !EMAIL_FROM || !EMAIL_TO) {
    return {
      status: "error",
      message: "Email service is not configured. Please check environment variables.",
    };
  }

  const name = String(formData.get("name") || "").trim();
  const email = String(formData.get("email") || "").trim();
  const message = String(formData.get("message") || "").trim();

  if (!name || !email || !message) {
    return {
      status: "error",
      message: "Please provide name, email, and message.",
    };
  }

  if (!validateEmail(email)) {
    return {
      status: "error",
      message: "Invalid email address.",
    };
  }

  const rawAttachments = formData.getAll("attachments");
  const attachments: Array<{
    filename: string;
    content: Buffer;
    contentType?: string;
  }> = [];

  for (const item of rawAttachments) {
    if (item instanceof File && item.size > 0) {
      const content = Buffer.from(await item.arrayBuffer());
      attachments.push({
        filename: item.name,
        content,
        contentType: item.type || undefined,
      });
    }
  }

  try {
    await transporter.sendMail({
      from: EMAIL_FROM,
      to: EMAIL_TO,
      replyTo: email,
      subject: `New message from ${name} via portfolio site`,
      html: `
        <div>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Message:</strong></p>
          <p>${message.replace(/\n/g, "<br />")}</p>
        </div>
      `,
      attachments: attachments.length > 0 ? attachments : undefined,
    });

    return {
      status: "success",
      message: "Message sent successfully. I will get back to you soon.",
    };
  } catch (error) {
    console.error("Contact form send error", error);
    return {
      status: "error",
      message: "Unable to send email. Please try again later.",
    };
  }
}
