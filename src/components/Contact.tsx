"use client";

import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  useEffect(() => {
    AOS.init({ duration: 1000, once: true, easing: "ease-in-out" });
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    if (!formData.name.trim() || !formData.phone.trim()) return false;
    if (!/\S+@\S+\.\S+/.test(formData.email)) return false;
    if (formData.message.trim().length < 1) return false;
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) {
      setStatus("error");
      return;
    }

    try {
      const scriptURL = "https://sheetdb.io/api/v1/k05ud97qwy841";

      const form = e.target as HTMLFormElement;
      const formDataToSend = new FormData(form);

      const response = await fetch(scriptURL, {
        method: "POST",
        body: formDataToSend,
      });

      console.log(response);

      if (response.ok) {
        setFormData({ name: "", phone: "", email: "", message: "" });
        setStatus("success");
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error("Submission error:", error);
      setStatus("error");
    }
  };

  return (
    <section
      aria-labelledby="contact-heading"
      className="relative w-full max-w-screen-xl mx-auto py-10 px-4 sm:px-6 lg:px-8 bg-[#EB7A2E0D] border border-[#EB7A2E] rounded-xl shadow-xl mb-12"
    >
      <div className="mx-auto">
        <h2
          id="contact-heading"
          className="text-3xl md:text-[35px] font-bold text-center text-[#EB7A2E] mb-12"
          data-aos="fade-up"
        >
          Contact Us
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          {/* Google Map */}
          <div
            data-aos="fade-right"
            className="w-full h-64 sm:h-[400px] rounded-xl overflow-hidden shadow-lg"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4365.0602967172235!2d77.77101617637531!3d29.9780579749571!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ec90037327523%3A0x3604faef3f6af2d1!2sAuxo%20Industries%20Pvt.%20Ltd.!5e1!3m2!1sen!2sin!4v1759250176902!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
              aria-hidden="false"
              tabIndex={0}
              title="Google Map"
            ></iframe>
          </div>

          {/* Contact Form */}
          <form
            data-aos="fade-left"
            onSubmit={handleSubmit}
            className="p-4 sm:p-6 w-full space-y-6"
          >
            {/* First + Last Name */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 border-2 rounded-lg focus:ring-2 focus:ring-[#EB7A2E] outline-none bg-white shadow-sm"
                required
              />
              <input
                type="phone"
                name="phone"
                placeholder="Phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-3 border-2 rounded-lg focus:ring-2 focus:ring-[#EB7A2E] outline-none bg-white shadow-sm"
                required
              />
            </div>

            {/* Email */}
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 border-2 rounded-lg focus:ring-2 focus:ring-[#EB7A2E] outline-none bg-white shadow-sm"
              required
            />

            {/* Message */}
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              rows={5}
              className="w-full px-4 py-3 border-2 rounded-lg focus:ring-2 focus:ring-[#EB7A2E] outline-none bg-white shadow-sm resize-none"
              required
            ></textarea>

            {/* Submit Button */}
            <div className="flex justify-center space-x-4">
              <button
                type="submit"
                className="bg-[#EB7A2E] w-[176px] text-[20px] border-2 border-black text-white font-semibold py-3 px-6 rounded-lg transition duration-300 ease-in-out hover:bg-[#d8681f] hover:shadow-lg cursor-pointer"
              >
                Submit
              </button>

              {/* Status Messages */}
              {status === "success" && (
                <p className="text-green-600 text-sm">
                  ✅ Form submitted successfully!
                </p>
              )}
              {status === "error" && (
                <p className="text-red-600 text-sm">
                  ❌ Please fill out all fields correctly.
                </p>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
