import React from "react";
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-16 px-6 mt-10">
      <div className="max-w-5xl mx-auto bg-white p-10 rounded-2xl shadow-lg">
        <h1 className="text-4xl font-bold text-center text-blue-700 mb-4">
          Contact Us
        </h1>
        <p className="text-center text-lg text-gray-600 mb-10">
          Feel Free To Contact & Reach Us For More Info
        </p>

        {/* Contact Info */}
        <div className="text-center mb-10">
          <p className="text-gray-700">
            Welcome to our website, we are glad to have you around. If you want
            us to find the best suitable tutor for you, just contact us:
          </p>
          <p className="mt-4 font-medium">📞 Call Us: +92 300 1234567</p>
          <p className="font-medium">✉️ Email: info@smartscholar.com</p>
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-6 mb-10">
          <a href="#" className="text-blue-600 text-3xl hover:text-blue-800">
            <FaFacebook />
          </a>
          <a href="#" className="text-pink-600 text-3xl hover:text-pink-800">
            <FaInstagram />
          </a>
          <a
            href="https://wa.me/923001234567"
            target="_blank"
            rel="noreferrer"
            className="text-green-600 text-3xl hover:text-green-800"
          >
            <FaWhatsapp />
          </a>
        </div>

        {/* Contact Form */}
        <form className="space-y-6 max-w-xl mx-auto">
          <div>
            <label className="block mb-2 font-medium">Your Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block mb-2 font-medium">Your Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block mb-2 font-medium">
              Your Message (optional)
            </label>
            <textarea
              rows="4"
              placeholder="Write your message..."
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
