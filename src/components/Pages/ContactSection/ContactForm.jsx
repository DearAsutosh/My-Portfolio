import { SendHorizontal } from "lucide-react";
import React from "react";
import toast, { Toaster } from "react-hot-toast";

export default function ContactForm() {
  const onSubmit = async (event) => {
    event.preventDefault();
    toast.loading("Sending your thoughts...", { id: "contact" });

    const formData = new FormData(event.target);
    formData.append("access_key", "9202f024-4bbe-43cc-8abc-b6c4e0afc0a8");
    formData.append("subject", "New Contact from Portfolio");
    formData.append("from_name", "Portfolio Contact Form");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        toast.success("Sent! Thanks for reaching out.", { id: "contact" });
        event.target.reset();
      } else {
        toast.error("Oops! Something went wrong.", { id: "contact" });
      }
    } catch (error) {
      toast.error("Network issue. Try again later.", { id: "contact" });
    }
  };

  return (
    <div className="w-1/2 flex items-center justify-center px-4 py-20 text-white">
      <Toaster position="top-right" reverseOrder={false} />
      <form onSubmit={onSubmit} className="min-w-80 md:min-w-96 max-w-lg space-y-6">
        <h2 className="text-4xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-[#76e2f4] to-[#5dcde3]">
          Let's Connect
        </h2>

        <div className="relative">
          <input
            type="text"
            name="name"
            required
            placeholder=" "
            className="w-full px-0 py-2 bg-transparent text-white border-0 border-b border-[#444] focus:border-[#76e2f4] focus:ring-0 transition duration-300 peer"
          />
          <label className="absolute -top-2 left-0 text-[#aaa] peer-focus:text-[#76e2f4] transition duration-300 peer-placeholder-shown:translate-y-5 peer-focus:-translate-y-4">
            Your Name
          </label>
        </div>

        <div className="relative">
          <input
            type="email"
            name="email"
            required
            placeholder=" "
            className="w-full px-0 py-2 bg-transparent text-white border-0 border-b border-[#444] focus:border-[#76e2f4] focus:ring-0 transition duration-300 peer"
          />
          <label className="absolute top-0 left-0 text-[#aaa] peer-focus:text-[#76e2f4] transition duration-300 peer-placeholder-shown:translate-y-4 peer-focus:translate-y-0">
            Email Address
          </label>
        </div>

        <div className="relative">
          <textarea
            name="message"
            required
            rows={1}
            placeholder=" "
            className="w-full px-0 py-2 bg-transparent text-white border-0 border-b border-[#444] focus:border-[#76e2f4] focus:ring-0 resize-none transition duration-300 peer"
          ></textarea>
          <label className="absolute top-0 left-0 text-[#aaa] peer-focus:text-[#76e2f4] transition duration-300 peer-placeholder-shown:translate-y-4 peer-focus:translate-y-0">
            Your Message
          </label>
        </div>

        <button
          type="submit"
          className="w-full group py-3 text-black font-semibold rounded-lg transition-all duration-300 overflow-hidden"
        >
          <span className="block w-full h-full relative">
            <span className="absolute inset-0 bg-gradient-to-r from-[#76e2f4] to-[#5dcde3] rounded-lg transition-all duration-300 group-hover:opacity-90" />
            <span className="relative z-10 flex items-center justify-center gap-2 py-2 hover:text-gray-100 hover:bg-slate-950 hover:border rounded-md">
              Send Message
              <SendHorizontal />
            </span>
          </span>
        </button>
      </form>
    </div>
  );
}
