import { useState } from "react";
import {
  Star,
  BookOpen,
  Users,
  ChevronRight,
  Quote,
  ChevronLeft,
} from "lucide-react";
import { NavLink } from "react-router-dom";

const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const subjects = [
    "Maths",
    "Statistics",
    "English",
    "Physics",
    "Chemistry",
    "Biology",
    "Computer",
    "Coding",
    "Geography",
    "Economics",
    "Accounting",
    "Quran",
    "IELTS & TOEFL",
    "History",
  ];

  const steps = [
    {
      number: "01",
      title: "Choose Your Subject",
      desc: "Browse our comprehensive subject catalog and select the course that matches your learning goals.",
    },
    {
      number: "02",
      title: "Book Your Tutor",
      desc: "Review tutor profiles, check availability, and schedule sessions that fit your calendar.",
    },
    {
      number: "03",
      title: "Start Learning",
      desc: "Join interactive live sessions and access learning materials anytime, anywhere.",
    },
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Parent",
      image:
        "https://ui-avatars.com/api/?name=Sarah+Johnson&background=3b82f6&color=fff&size=100",
      rating: 5,
      text: "My daughter's confidence in mathematics has soared! The tutors are patient, knowledgeable, and truly care about her progress. We've seen remarkable improvement in just 3 months.",
    },
    {
      name: "Michael Chen",
      role: "Student",
      image:
        "https://ui-avatars.com/api/?name=Michael+Chen&background=3b82f6&color=fff&size=100",
      rating: 5,
      text: "The interactive lessons make learning enjoyable. I went from struggling in physics to getting top grades in my class! The tutors explain everything so clearly.",
    },
    {
      name: "Emily Rodriguez",
      role: "Parent",
      image:
        "https://ui-avatars.com/api/?name=Emily+Rodriguez&background=3b82f6&color=fff&size=100",
      rating: 5,
      text: "Flexible scheduling and personalized attention - exactly what we needed. The platform is easy to use and very effective. Highly recommended!",
    },
    {
      name: "Ahmed Ali",
      role: "Student",
      image:
        "https://ui-avatars.com/api/?name=Ahmed+Ali&background=3b82f6&color=fff&size=100",
      rating: 5,
      text: "Best online learning experience I've had. The teachers are supportive and the lessons are well-structured. My grades have improved significantly!",
    },
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <div className="w-full font-sans text-gray-800">
      {/* ================= HERO SECTION ================= */}
      <section
        className="relative bg-cover bg-center min-h-[85vh] lg:min-h-[90vh] flex items-center pt-20"
        style={{
          backgroundImage:
            "url('https://img.freepik.com/free-photo/virtual-classroom-study-space_23-2149178644.jpg?semt=ais_hybrid&w=740&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 via-blue-900/70 to-transparent"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20 w-full">
          <div className="max-w-2xl">
            <div className="inline-block mb-4 px-4 py-2 bg-blue-500/20 backdrop-blur-sm rounded-full border border-blue-400/30">
              <span className="text-blue-100 text-sm font-medium">
                🎓 Rated 4.96/5 by Parents
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
              Online Tutoring That Releases Potential
            </h1>

            <p className="text-lg sm:text-xl text-blue-50 mb-8 leading-relaxed">
              Homeschooling & Online School — Live One-on-One & Group Sessions
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <NavLink
                to="/courses"
                className="group inline-flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white  text-sm px-6 md:px-8 py-3 md:py-4 rounded-lg font-semibold transition-all shadow-lg hover:shadow-xl"
              >
                Explore Courses
                <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </NavLink>

              <NavLink
                to="/contact"
                className="inline-flex items-center justify-center bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white border-2 border-white/30 px-6 py-3 text-sm md:px-8 md:py-4  rounded-lg font-semibold transition-all"
              >
                Book Free Trial
              </NavLink>
            </div>
          </div>
        </div>
      </section>

      {/* ================= OUR SUBJECTS ================= */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              Comprehensive Subject Coverage
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              From core academics to specialized courses, we offer expert
              tutoring across all major subjects
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {subjects.map((subject, idx) => (
              <span
                key={idx}
                className="px-6 py-3 bg-white shadow-sm hover:shadow-md rounded-full text-gray-700 hover:bg-blue-600 hover:text-white transition-all cursor-pointer font-medium"
              >
                {subject}
              </span>
            ))}
          </div>

          <div className="text-center">
            <NavLink
              to="/courses"
              className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 text-sm  md:px-8 md:py-4 rounded-lg font-semibold transition-all shadow-lg hover:shadow-xl"
            >
              View All Subjects
              <ChevronRight className="ml-2 w-5 h-5" />
            </NavLink>
          </div>
        </div>
      </section>

      {/* ================= WHY CHOOSE US ================= */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              Why Choose Us To Gain Knowledge !
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
              At Smart Scholar Online Academy, we combine expert instruction,
              flexible learning, and personalized support — so every student
              learns with confidence and clarity. Your goals are our priority,
              and your success is our mission.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mt-16">
            {/* Left Side - Image */}
            <div className="order-2 lg:order-1">
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80"
                  alt="Students learning together"
                  className="rounded-2xl shadow-2xl w-full h-auto"
                />
                <div className="absolute -bottom-6 -right-6 bg-blue-600 text-white p-6 rounded-xl shadow-xl hidden sm:block">
                  <div className="text-4xl font-bold">96%</div>
                  <div className="text-sm">Success Rate</div>
                </div>
              </div>
            </div>

            {/* Right Side - Content & Feature Cards */}
            <div className="order-1 lg:order-2">
              <div className="space-y-6">
                {/* Feature Card 1 */}
                <div className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all border border-blue-100">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-14 h-14 bg-blue-600 rounded-lg flex items-center justify-center">
                      <Users className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold mb-3">
                        Experienced Teachers
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        Our teachers are highly qualified with years of real
                        classroom and online teaching experience. They simplify
                        complex topics and guide each student with care and
                        clarity.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Feature Card 2 */}
                <div className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all border border-blue-100">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-14 h-14 bg-blue-600 rounded-lg flex items-center justify-center">
                      <BookOpen className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold mb-3">
                        30+ Online Courses
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        We offer 30+ structured online courses designed for
                        students of all levels. Learn at your own pace with
                        expert guidance and interactive contents.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= HOW IT WORKS ================= */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              Start Learning in Three Simple Steps
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Getting started is easy. Follow these steps to begin your learning
              journey
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            {steps.map((step, i) => (
              <div key={i} className="relative">
                <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all border border-gray-100">
                  <div className="mb-4 w-16 h-16 justify-self-center md:justify-self-start bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold">
                    {step.number}
                  </div>
                  <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{step.desc}</p>
                </div>

                {i < steps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-6 transform -translate-y-1/2 z-10">
                    <ChevronRight className="w-8 h-8 text-blue-300" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= FEEDBACK CAROUSEL ================= */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-blue-50 to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              What Our Students & Parents Say
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Join thousands of satisfied families who trust us for quality
              education
            </p>
          </div>

          <div className="relative max-w-4xl mx-auto">
            {/* Carousel Container */}
            <div className="bg-white p-8 md:p-12 rounded-2xl shadow-2xl">
              <Quote className="w-10 h-10 md:w-12 md:h-12 text-blue-600 mb-6 opacity-50" />

              {/* Rating Stars */}
              <div className="flex mb-6">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 md:w-6 md:h-6 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-gray-700 text-sm md:text-xl mb-8 leading-relaxed min-h-[120px]">
                "{testimonials[currentIndex].text}"
              </p>

              {/* Author Info */}
              <div className="flex items-center gap-4 mb-6">
                <img
                  src={testimonials[currentIndex].image}
                  alt={testimonials[currentIndex].name}
                  className="w-12 h-12 md:w-16 md:h-16 rounded-full"
                />
                <div>
                  <h4 className="font-bold text-gray-900 text-lg">
                    {testimonials[currentIndex].name}
                  </h4>
                  <p className="text-gray-500">
                    {testimonials[currentIndex].role}
                  </p>
                </div>
              </div>

              {/* Navigation Buttons */}
              <div className="flex items-center justify-between">
                <button
                  onClick={prevSlide}
                  className="p-3 bg-gray-300 hover:bg-gray-400 text-white rounded-full transition-all shadow-lg hover:shadow-xl"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>

                {/* Dots Indicator */}
                <div className="flex gap-2">
                  {testimonials.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentIndex(idx)}
                      className={`w-3 h-3 rounded-full transition-all ${
                        idx === currentIndex ? "bg-blue-600 w-8" : "bg-gray-300"
                      }`}
                      aria-label={`Go to testimonial ${idx + 1}`}
                    />
                  ))}
                </div>

                <button
                  onClick={nextSlide}
                  className="p-3 bg-gray-300 hover:bg-gray-400 text-white rounded-full transition-all shadow-lg hover:shadow-xl"
                  aria-label="Next testimonial"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= INTERACTIVE LEARNING ================= */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl text-center md:text-left sm:text-4xl lg:text-5xl font-bold mb-6">
                Interactive Learning Space Makes Education Engaging
              </h2>
              <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                Our lessons go beyond simple video calls. Every session takes
                place in our custom-built, interactive learning environment
                where concepts come alive.
              </p>
              <ul className="space-y-4">
                {[
                  "Real-time whiteboard and annotations",
                  "Interactive exercises and quizzes",
                  "Screen sharing and visual demonstrations",
                  "Recorded sessions for review",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    </div>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative">
              <div className="aspect-video bg-gradient-to-br from-blue-100 to-blue-50 rounded-2xl shadow-2xl flex items-center justify-center">
                <div className="text-center p-8">
                  <BookOpen className="w-20 h-20 text-blue-600 mx-auto mb-4" />
                  <p className="text-gray-600 font-medium">
                    Interactive Learning Interface
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= STATS ================= */}
      <section className="py-16 lg:py-24 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { value: "1,000+", label: "Active Students" },
              { value: "1,500+", label: "Expert Tutors" },
              { value: "96%", label: "Success Rate" },
              { value: "4.96/5", label: "Average Rating" },
            ].map((stat, idx) => (
              <div key={idx} className="text-center">
                <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-2">
                  {stat.value}
                </h3>
                <p className="text-blue-100 font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CTA SECTION ================= */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-gray-900 to-blue-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Ready to Start Your Learning Journey?
          </h2>
          <p className="text-lg md:text-xl text-blue-100 mb-8">
            Book a free trial lesson today and experience the difference quality
            tutoring makes
          </p>
          <NavLink
            to="/contact"
            className="inline-flex items-center bg-white text-blue-600 hover:bg-gray-100 text-sm py-2 px-4 md:px-8 md:py-4 rounded-lg font-semibold transition-all shadow-lg hover:shadow-xl md:text-lg"
          >
            Book Your Free Trial
            <ChevronRight className="ml-2 w-5 h-5" />
          </NavLink>
        </div>
      </section>
    </div>
  );
};

export default Home;
