"use client";

import { useState } from "react";

const GetinTouch = () => {
  const [formData, setFormData] = useState({
    name: "",
    subject: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: "" });

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "4759b870-7408-4ed5-9c64-12653999dddb",
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
          to: "emranrifat.dev@gmail.com",
        }),
      });

      const result = await response.json();

      if (result.success) {
        setSubmitStatus({
          type: "success",
          message: "Message sent successfully ! I'll get back to you soon.✅",
        });
        setFormData({
          name: "",
          subject: "",
          email: "",
          message: "",
        });
      } else {
        throw new Error("Failed to send message");
      }
    } catch {
      setSubmitStatus({
        type: "error",
        message:
          "Failed to send message. Please try again or email me directly.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section
      id="contact-form"
      className="py-14 sm:py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-black scroll-mt-20"
    >
      <div className="max-w-7xl mx-auto">
        {/* Contact Info Section */}
        <div className="mb-10 sm:mb-14">
          <h3 className="text-2xl sm:text-3xl font-bold text-blue-600 dark:text-cyan-400 mb-3 sm:mb-4">
            Get In Touch
          </h3>
          <p className="dark:text-slate-300 text-gray-700 text-sm sm:text-base mb-6 sm:mb-8 leading-relaxed max-w-2xl">
            Feel free to get in touch with me. I am always open to discussing
            new projects, creative ideas or opportunities to be part of your
            visions.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {/* Address */}
            <div className="flex items-start gap-3.5 sm:gap-4 p-4 sm:p-6 bg-gray-100 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-cyan-500/20 hover:border-blue-400 dark:hover:border-cyan-500/50 transition-all shadow-sm">
              <svg
                className="w-6 h-6 sm:w-7 sm:h-7 text-blue-600 dark:text-cyan-400 mt-0.5 shrink-0"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
              </svg>
              <div className="min-w-0">
                <h4 className="text-slate-900 dark:text-white font-semibold mb-1 text-sm">
                  Address
                </h4>
                <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                  Block-D, House-38, Road-3
                  <br />
                  Mirpur-12, Dhaka
                </p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start gap-3.5 sm:gap-4 p-4 sm:p-6 bg-gray-100 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-cyan-500/20 hover:border-blue-400 dark:hover:border-cyan-500/50 transition-all shadow-sm">
              <svg
                className="w-6 h-6 sm:w-7 sm:h-7 text-blue-600 dark:text-cyan-400 mt-0.5 shrink-0"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
              <div className="min-w-0">
                <h4 className="text-slate-900 dark:text-white font-semibold mb-1 text-sm">
                  Email
                </h4>
                <a
                  href="mailto:emranrifat.dev@gmail.com"
                  className="text-slate-600 dark:text-slate-300 text-sm hover:text-blue-600 dark:hover:text-cyan-400 transition break-all"
                >
                  emranrifat.dev@gmail.com
                </a>
              </div>
            </div>

            {/* Phone */}
            <div className="sm:col-span-2 lg:col-span-1 flex items-start gap-3.5 sm:gap-4 p-4 sm:p-6 bg-gray-100 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-cyan-500/20 hover:border-blue-400 dark:hover:border-cyan-500/50 transition-all shadow-sm">
              <svg
                className="w-6 h-6 sm:w-7 sm:h-7 text-blue-600 dark:text-cyan-400 mt-0.5 shrink-0"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              <div className="min-w-0">
                <h4 className="text-slate-900 dark:text-white font-semibold mb-1 text-sm">
                  Phone
                </h4>
                <div className="flex flex-col space-y-0.5 text-sm text-slate-600 dark:text-slate-300">
                  <a
                    href="tel:+8801738435502"
                    className="hover:text-blue-600 dark:hover:text-cyan-400 transition"
                  >
                    +88 01738435502
                  </a>
                  <a
                    href="tel:+8801410425191"
                    className="hover:text-blue-600 dark:hover:text-cyan-400 transition"
                  >
                    +88 01410425191
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Form and Map Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {/* Left Side - Contact Form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your Name"
                  required
                  className="w-full px-4 sm:px-5 py-3 bg-white dark:bg-transparent border-2 border-blue-300 dark:border-cyan-500 rounded-lg text-slate-900 dark:text-white placeholder-slate-500 dark:placeholder-slate-400 focus:outline-none focus:border-blue-500 dark:focus:border-cyan-400 transition text-base sm:text-sm"
                />
              </div>

              <div>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Subject"
                  required
                  className="w-full px-4 sm:px-5 py-3 bg-white dark:bg-transparent border-2 border-blue-300 dark:border-cyan-500 rounded-lg text-slate-900 dark:text-white placeholder-slate-500 dark:placeholder-slate-400 focus:outline-none focus:border-blue-500 dark:focus:border-cyan-400 transition text-base sm:text-sm"
                />
              </div>

              <div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  required
                  className="w-full px-4 sm:px-5 py-3 bg-white dark:bg-transparent border-2 border-blue-300 dark:border-cyan-500 rounded-lg text-slate-900 dark:text-white placeholder-slate-500 dark:placeholder-slate-400 focus:outline-none focus:border-blue-500 dark:focus:border-cyan-400 transition text-base sm:text-sm"
                />
              </div>

              <div>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Message"
                  required
                  rows={4}
                  className="w-full px-4 sm:px-5 py-3 bg-white dark:bg-transparent border-2 border-blue-300 dark:border-cyan-500 rounded-lg text-slate-900 dark:text-white placeholder-slate-500 dark:placeholder-slate-400 focus:outline-none focus:border-blue-500 dark:focus:border-cyan-400 transition resize-none text-base sm:text-sm"
                ></textarea>
              </div>

              <div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto px-10 py-3 border-2 border-blue-500 dark:border-cyan-500 text-blue-600 dark:text-cyan-400 font-semibold rounded-lg hover:bg-blue-500 dark:hover:bg-cyan-500 hover:text-white dark:hover:text-slate-900 transition-all duration-300 text-sm disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Sending..." : "Send ➠"}
                </button>
              </div>

              {/* Status Message */}
              {submitStatus.type && (
                <div
                  className={`p-4 rounded-lg text-sm ${
                    submitStatus.type === "success"
                      ? "bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 border border-green-300 dark:border-green-700"
                      : "bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400 border border-red-300 dark:border-red-700"
                  }`}
                >
                  {submitStatus.message}
                </div>
              )}
            </form>
          </div>

          {/* Right Side - Google Map */}
          <div className="w-full h-[280px] sm:h-[350px] lg:h-full lg:min-h-[380px] rounded-xl overflow-hidden shadow-2xl border border-slate-200 dark:border-slate-800">
            <iframe
              title="Mirpur 12, Dhaka Location Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3649.7489172176865!2d90.37049687589875!3d23.827525885810054!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c100424165fb%3A0x2e67d952a76ab9e8!2sMirpur%2012.%20D%20Block!5e0!3m2!1sen!2sbd!4v1768987947568!5m2!1sen!2sbd"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetinTouch;
