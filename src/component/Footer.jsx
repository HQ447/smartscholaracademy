import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-8 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 sm:grid-cols-2 gap-10">
        {/* ===== LOGO + CTA ===== */}
        <div>
          <img
            src="https://smartscholaredu.com/wp-content/uploads/2025/07/HD_LOGO__1___1_-removebg-preview.png"
            alt="SmartScholarsAcademy Logo"
            className="w-15 md:w-36 mb-4 "
          />
          <h3 className="text-xl font-semibold text-white mb-3">
            Book a Free Trial Now
          </h3>
          <p className="text-sm text-gray-400 leading-relaxed">
            Unlock your child’s potential with expert tutors and interactive
            learning.
          </p>
        </div>

        {/* ===== COMPANY INFO ===== */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">
            Company Information
          </h3>
          <ul className="space-y-2 text-sm">
            {[
              "Careers",
              "Blog",
              "Subject Answers",
              "Become a Tutor",
              "Schools",
              "Safeguarding Policy",
              "FAQs",
              "Using the Online Lesson Space",
              "Testimonials & Press",
              "Sitemap",
            ].map((item, i) => (
              <li
                key={i}
                className="hover:text-blue-400 cursor-pointer transition"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* ===== POPULAR REQUESTS ===== */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">
            Popular Requests
          </h3>
          <ul className="space-y-2 text-sm">
            {[
              "Maths Tutor",
              "Chemistry Tutor",
              "Physics Tutor",
              "Biology Tutor",
              "English Tutor",
              "GCSE Tutors",
              "A Level Tutors",
              "IB Tutors",
              "Physics & Maths Tutors",
              "Chemistry & Maths Tutors",
              "GCSE Maths Tutors",
            ].map((item, i) => (
              <li
                key={i}
                className="hover:text-blue-400 cursor-pointer transition"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* ===== SOCIAL / CONTACT ===== */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">
            We are Here to Help
          </h3>
          <p className="text-sm text-gray-400 mb-4">
            Connect with us on our social platforms for updates and support.
          </p>
          <div className="flex items-center gap-4 text-white text-xl">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 p-2 rounded-full hover:bg-blue-700 transition"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-pink-500 p-2 rounded-full hover:bg-pink-600 transition"
            >
              <FaInstagram />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-500 p-2 rounded-full hover:bg-blue-600 transition"
            >
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>

      {/* ===== COPYRIGHT ===== */}
      <div className="border-t border-gray-700 mt-12 pt-6 text-center text-sm text-gray-500">
        Copyright © 2025{" "}
        <span className="text-white font-semibold">Hammad Ahmad</span> — All
        Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
