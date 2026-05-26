"use client";

import {
  submitContactForm,
  type ContactActionState,
} from "@/app/actions/contact";
import { Button } from "@/components/ui/button";
import { Loader2, Paperclip, X } from "lucide-react";
import { useActionState, useEffect, useState } from "react";
import { toast } from "sonner";

const initialState: ContactActionState = {
  status: "idle",
};

function SubmitButton({ isPending }: { isPending: boolean }) {
  return (
    <Button
      type="submit"
      disabled={isPending}
      className="w-full rounded-xl bg-btn hover:bg-acces text-black font-medium transition disabled:opacity-50"
    >
      {isPending ? (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin inline" />
          Sending message...
        </>
      ) : (
        "Send message"
      )}
    </Button>
  );
}

export default function ContactForm() {
  const [state, formAction, isPending] = useActionState(
    submitContactForm,
    initialState
  );

  const [files, setFiles] = useState<File[]>([]);

  useEffect(() => {
    if (state.status === "success" && state.message) {
      toast.success(state.message);
      setFiles([]);
    }

    if (state.status === "error" && state.message) {
      toast.error(state.message);
    }
  }, [state]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;
    setFiles(Array.from(e.target.files));
  };

  const removeFile = (index: number) => {
    setFiles((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <div className="relative max-w-md mx-auto p-6 rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-md shadow-lg">

      {/* HEADER */}
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-white">Let’s work together</h2>
        <p className="text-sm text-gray-400 mt-1">
          Send a message and I’ll get back to you as soon as possible.
        </p>
      </div>

      <form action={formAction} className="space-y-4">

        <input
          className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder:text-gray-500 focus:border-acces outline-none transition"
          type="text"
          name="name"
          placeholder="Your name"
          required
          disabled={isPending}
        />

        <input
          className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder:text-gray-500 focus:border-acces outline-none transition"
          type="email"
          name="email"
          placeholder="Your email"
          required
          disabled={isPending}
        />

        <textarea
          className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder:text-gray-500 focus:border-acces outline-none transition"
          name="message"
          rows={5}
          placeholder="Tell me about your project..."
          required
          disabled={isPending}
        />

        {/* FILE UPLOAD */}
        <label className="flex items-center gap-2 px-4 py-3 rounded-xl border border-white/10 bg-white/[0.03] cursor-pointer hover:border-acces transition">
          <Paperclip className="w-4 h-4 text-gray-400" />
          <span className="text-sm text-gray-400">
            Attach files (optional)
          </span>
          <input
            type="file"
            name="attachments"
            multiple
            className="hidden"
            onChange={handleFileChange}
            disabled={isPending}
          />
        </label>

        {/* FILE LIST */}
        {files.length > 0 && (
          <div className="space-y-2">
            {files.map((file, i) => (
              <div
                key={i}
                className="flex items-center justify-between text-sm px-3 py-2 rounded-lg bg-white/5 border border-white/10"
              >
                <span className="text-gray-300 truncate max-w-[200px]">
                  {file.name}
                </span>
                <button
                  type="button"
                  onClick={() => removeFile(i)}
                  className="text-red-400 hover:text-red-300"
                >
                  <X size={16} />
                </button>
              </div>
            ))}
          </div>
        )}

        <SubmitButton isPending={isPending} />
      </form>
    </div>
  );
}