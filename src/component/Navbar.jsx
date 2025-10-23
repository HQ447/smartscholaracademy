import { useState } from "react";
import { FaWhatsapp, FaBars, FaTimes } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "" },
    { name: "Courses", href: "/courses" },
    { name: "Our Tutors", href: "/tutors" },
    { name: "About Us", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  const whatsappNumber = "923001234567"; // <-- replace with your WhatsApp number (without +)
  const whatsappMessage =
    "Hello! I’d like to know more about your tutoring services.";

  return (
    <nav className="w-full bg-[#ffffffad] md:bg-white shadow-md fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 md:px-6 py-3 md:py-4">
        {/* Left: Logo */}
        <div className="flex items-center gap-2">
          <img
            src="https://smartscholaredu.com/wp-content/uploads/2025/07/HD_LOGO__1___1_-removebg-preview.png"
            alt="Smart Scholars Academy"
            className="w-10 h-10 md:w-14 md:h-14 rounded-full object-cover"
          />
          <h1 className="md:text-xl text-sm font-bold text-blue-900  sm:block">
            Smart Scholars Academy
          </h1>
        </div>

        {/* Center: Nav Links */}
        <ul className="hidden md:flex items-center gap-8 text-gray-700 font-medium">
          {navLinks.map((link, index) => (
            <NavLink to={link.href} key={index}>
              {link.name}
            </NavLink>
          ))}
        </ul>

        {/* Right: WhatsApp Button */}
        <div className="hidden md:block">
          <a
            href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
              whatsappMessage
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-5 py-2 rounded-full transition"
          >
            <FaWhatsapp className="text-xl" />
            Contact Us
          </a>
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-2xl text-gray-700"
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#ffffffd8] absolute top-[64px] left-0 w-full shadow-lg z-40 animate-slideDown">
          <ul className="flex flex-col items-center py-6 space-y-4 font-medium text-gray-700">
            {navLinks.map((link, index) => (
              <NavLink
                key={index}
                to={link.href}
                className="hover:text-blue-600 transition-colors duration-300"
                onClick={() => setMenuOpen(false)}
              >
                {link.name}
              </NavLink>
            ))}
            <li>
              <a
                href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
                  whatsappMessage
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-5 py-2 rounded-full transition"
              >
                <FaWhatsapp className="text-xl" />
                Contact Us
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
