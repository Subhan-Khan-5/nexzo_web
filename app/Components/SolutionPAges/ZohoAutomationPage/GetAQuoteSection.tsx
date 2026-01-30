"use client";

import { useState } from "react";

interface GetAQuoteSectionProps {
  title?: string;
}

export default function GetAQuoteSection({
  title = "Get A Quote",
}: GetAQuoteSectionProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
  };

  return (
    <section className="relative mt-[10vh] px-2 min-w-[380px] w-full mx-auto md:px-6 md:px-[7.5vw] bg-white">
      {/* Grid pattern background */}
      <div className="absolute bg-cover bg-center h-[40vh] top-[50%] -translate-y-1/2 right-[0] z-0">
        <img src="/images/grid2.png" alt="grid" />
      </div>
      <div className="absolute bg-cover bg-center h-[40vh] top-[70%] -translate-y-1/2 left-[0] z-0">
        <img src="/images/grid2.png" alt="grid" />
      </div>

      <div className="relative z-10 min-w-[350px] mx-auto py-12 md:py-16">
        {/* Main Form Container */}
        <div
          className="
            bg-gradient-to-b
  from-[#F8F7F8]/85
  via-[#F8F7F8]/75
  to-[#F8F7F8]/90
  backdrop-blur-xl
  rounded-[60px]
  px-6 py-10
  md:px-12 md:py-16
  border border-[#4B0082]
  max-w-4xl
  mx-auto
          "
        >
          {/* Form Title */}
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-[500] text-gray-900 mb-8 md:mb-12 text-center">
            {title}
          </h2>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name and Email Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Name Field */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Name*
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-purple-200 bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition"
                  placeholder="Your name"
                />
              </div>

              {/* Email Field */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  E-mail Address*
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-purple-200 bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition"
                  placeholder="your.email@example.com"
                />
              </div>
            </div>

            {/* Subject Field */}
            <div>
              <label
                htmlFor="subject"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-purple-200 bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition"
                placeholder="Subject of your message"
              />
            </div>

            {/* Message Field */}
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Message*
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={4}
                className="w-full px-4 py-3 rounded-lg border border-purple-200 bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition resize-none"
                placeholder="Your message here..."
              />
            </div>

            {/* Submit Button */}
            <div className="flex justify-start ">
              <button
                type="submit"
                className="bg-[#4B0082] hover:bg-[#5a0099] text-white font-semibold px-8 py-4 rounded-xl text-base md:text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

