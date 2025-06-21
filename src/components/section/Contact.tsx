// import React, { useState } from "react";

// export default function ContactForm() {
//   const [form, setForm] = useState({ name: "", email: "", message: "" });
//   const [submitted, setSubmitted] = useState(false);

//   const handleChange = (
//     e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
//   ) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();

//     try {
//       const response = await fetch("http://localhost:5000/api/send-email", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(form),
//       });

//       if (response.ok) {
//         setSubmitted(true);
//         // Очистити форму, якщо потрібно:
//         // setForm({ name: "", email: "", message: "" });
//       } else {
//         alert("Не вдалося надіслати повідомлення");
//       }
//     } catch (error) {
//       console.error(error);
//       alert("Виникла помилка");
//     }
//   };

//   return (
//     <div className="relative max-w-md mx-auto p-6 rounded shadow">
//       <h2 className="text-2xl font-bold mb-4">Feedback</h2>

//       <form onSubmit={handleSubmit} className="space-y-4">
//         <div>
//           <label className="block mb-1 font-medium" htmlFor="name">
//             Name
//           </label>
//           <input
//             className="w-full border rounded px-3 py-2"
//             type="text"
//             id="name"
//             name="name"
//             value={form.name}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div>
//           <label className="block mb-1 font-medium" htmlFor="email">
//             Email
//           </label>
//           <input
//             className="w-full border rounded px-3 py-2"
//             type="email"
//             id="email"
//             name="email"
//             value={form.email}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div>
//           <label className="block mb-1 font-medium" htmlFor="message">
//             Message
//           </label>
//           <textarea
//             className="w-full border rounded px-3 py-2"
//             id="message"
//             name="message"
//             rows={4}
//             value={form.message}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <button
//           type="submit"
//           className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
//           Надіслати
//         </button>
//       </form>

//       {/* Popup */}
//       {submitted && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
//           <div className="bg-white  p-6 rounded shadow-md text-center max-w-sm w-full">
//             <h3 className="text-lg font-semibold text-acces mb-2">
//               Дякуємо!
//             </h3>
//             <p className="mb-4 text-acces">Ваше повідомлення успішно надіслано.</p>
//             <button
//               onClick={() => setSubmitted(false)}
//               className="bg-green-600 text-acces px-4 py-2 rounded hover:bg-green-700">
//               Закрити
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (response.ok) {
        setSubmitted(true);
        setShowPopup(true);
        setForm({ name: "", email: "", message: "" }); // очищення форми
      } else {
        alert("Не вдалося надіслати повідомлення");
      }
    } catch (error) {
      console.error(error);
      alert("Виникла помилка");
    }
  };

  const closePopup = () => {
    setShowPopup(false);
    setTimeout(() => setSubmitted(false), 300); // плавне завершення
  };

  return (
    <div className="relative max-w-md mx-auto p-6 rounded shadow">
      <h2 className="text-2xl font-bold mb-4">Contact</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <input
            className="w-full border bg-transparent rounded px-3 py-2"
            type="text"
            id="name"
            name="name"
            placeholder="Name"
            value={form.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <input
            className="w-full border rounded bg-transparent px-3 py-2"
            type="email"
            id="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <textarea
            className="w-full border rounded px-3 py-2"
            id="message"
            placeholder="Message"
            name="message"
            rows={4}
            value={form.message}
            onChange={handleChange}
            required
          />
        </div>
        <Button
          type="submit"
          className="bg-btn hover:bg-acces border-btn rounded-full px-8">
          Send
        </Button>
      </form>

      {/* Анімований попап */}
      {submitted && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div
            className={`bg-white p-6 rounded shadow-md text-center max-w-sm w-full transform transition duration-300 ${
              showPopup ? "opacity-100 scale-100" : "opacity-0 scale-90"
            }`}>
            <h3 className="text-lg font-semibold text-acces mb-2">Дякуємо!</h3>
            <p className="mb-4 text-acces">
              Ваше повідомлення успішно надіслано.
            </p>
            <button
              onClick={closePopup}
              className="bg-green-600 text-acces px-4 py-2 rounded hover:bg-green-700">
              Закрити
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
