import { Route, Routes } from "react-router-dom";
import Footer from "./component/Footer";
import Navbar from "./component/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Courses from "./pages/Courses";
import Tutors from "./pages/Tutors";
import Contact from "./pages/Contact";
import { FaWhatsapp } from "react-icons/fa";

function App() {
  const whatsappNumber = "923001234567"; // <-- replace with your WhatsApp number (without +)
  const whatsappMessage =
    "Hello! I’d like to know more about your tutoring services.";
  return (
    <div className="">
      <Navbar />
      <a
        href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
          whatsappMessage
        )}`}
        target="_blank"
        rel="noopener noreferrer"
        className=" fixed z-100 right-10 bottom-10 flex items-center  bg-green-500 hover:bg-green-600 p-3 text-white rounded-full transition"
      >
        <FaWhatsapp className="text-4xl" />
      </a>
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/tutors" element={<Tutors />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
