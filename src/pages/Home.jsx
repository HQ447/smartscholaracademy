import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <div className="w-full font-sans text-gray-800">
      {/* ================= HEADER SECTION ================= */}
      <section
        className="relative bg-cover bg-center h-[90vh] flex flex-col justify-center items-center text-center text-white"
        style={{
          backgroundImage:
            "url('https://img.freepik.com/free-photo/virtual-classroom-study-space_23-2149178644.jpg?semt=ais_hybrid&w=740&q=80')",
        }}
      >
        {/* ✅ Soft gradient overlay for better readability */}
        <div className="absolute inset-0 bg-gradient-to-b  from-black/50 via-black/40 to-black/20"></div>

        <div className="relative z-10 px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Online tutoring that releases potential
          </h1>
          <p className="max-w-2xl mx-auto mb-8 text-lg md:text-xl">
            We can’t stop you worrying about your child. But our expert tutors
            can help their grades and confidence soar – and help you worry a
            little less.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <NavLink
              to={"/courses"}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition"
            >
              View Courses
            </NavLink>
            <NavLink
              to={"/contact"}
              className="bg-white text-blue-600 hover:bg-gray-100 px-6 py-3 rounded-lg font-medium transition"
            >
              Book Free Trial
            </NavLink>
          </div>
        </div>
      </section>

      {/* ================= OUR SUBJECTS ================= */}
      <section className="py-16 bg-gray-50 text-center">
        <h2 className="text-3xl md:text-4xl font-semibold mb-10">
          Our Subjects
        </h2>
        <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto mb-8">
          {[
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
          ].map((subject, idx) => (
            <span
              key={idx}
              className="px-5 py-2 bg-white shadow rounded-full text-gray-700 hover:bg-blue-600 hover:text-white transition"
            >
              {subject}
            </span>
          ))}
        </div>
        <NavLink
          to={"courses"}
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition"
        >
          All Subjects
        </NavLink>
      </section>

      {/* ================= WHY CHOOSE US ================= */}
      <section className="py-16 bg-white text-center">
        <h2 className="text-3xl md:text-4xl font-semibold mb-4">
          Why Choose Us To Gain Knowledge !
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-12">
          At Smart Scholar Online Academy, we combine expert instruction,
          flexible learning, and personalized support — so every student learns
          with confidence and clarity. Your goals are our priority, and your
          success is our mission.
        </p>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto px-4">
          <div className="bg-blue-50 p-8 rounded-2xl shadow hover:shadow-lg transition">
            <h3 className="text-2xl font-semibold mb-4">
              Experienced Teachers
            </h3>
            <p className="text-gray-700">
              Our teachers are highly qualified with years of real classroom and
              online teaching experience. They simplify complex topics and guide
              each student with care and clarity.
            </p>
          </div>
          <div className="bg-blue-50 p-8 rounded-2xl shadow hover:shadow-lg transition">
            <h3 className="text-2xl font-semibold mb-4">30+ Online Courses</h3>
            <p className="text-gray-700">
              We offer 30+ structured online courses designed for students of
              all levels. Learn at your own pace with expert guidance and
              interactive content.
            </p>
          </div>
        </div>
      </section>

      {/* ================= 3 STEPS ================= */}
      <section className="py-16 bg-gray-50 text-center">
        <h2 className="text-3xl md:text-4xl font-semibold mb-10">
          Start Learning in Three Steps
        </h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">
          {[
            {
              title: "1. Choose Your Subject",
              desc: "Select from a wide range of subjects that suit your academic needs.",
            },
            {
              title: "2. Book Your Tutor",
              desc: "Pick an expert tutor who fits your schedule and learning style.",
            },
            {
              title: "3. Start Learning",
              desc: "Begin your personalized learning journey with interactive lessons.",
            },
          ].map((step, i) => (
            <div
              key={i}
              className="bg-white p-8 rounded-2xl shadow hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
              <p className="text-gray-600">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= TRUSTED BY ================= */}
      <section className="py-16 bg-blue-600 text-white text-center px-4">
        <h2 className="text-3xl md:text-4xl font-semibold mb-6">
          Trusted By Parents & Teachers
        </h2>
        <p className="max-w-3xl mx-auto text-lg text-blue-100">
          Trusted by Parents and Teachers Worldwide! Our tutoring services have
          earned the confidence of parents and educators alike, with a stellar
          rating of 4.96/5. With a proven track record of improving grades,
          boosting confidence, and fostering academic success, our expert tutors
          have helped countless students reach their full potential.
        </p>
      </section>

      {/* ================= INTERACTIVE LEARNING ================= */}
      <section className="py-16 bg-white text-center px-4">
        <h2 className="text-3xl md:text-4xl font-semibold mb-6">
          Our Interactive Learning Space Makes Lessons Engaging
        </h2>
        <p className="max-w-3xl mx-auto text-gray-700">
          Lessons are much more than a video call. They all happen in our
          tailor-made, interactive lesson space. Tutors can bring tricky
          concepts to life with exercises, diagrams, and annotated homework.
          Learning has never been more engaging — or more fun.
        </p>
      </section>

      {/* ================= STATS ================= */}
      <section className="py-16 bg-gray-50 text-center">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
          {[
            { value: "1,000+", label: "Enrolled Learners" },
            { value: "1,500+", label: "Online Instructors" },
            { value: "200+", label: "Satisfaction Rate" },
            { value: "100%", label: "Success Guarantee" },
          ].map((stat, idx) => (
            <div key={idx} className="p-6 bg-white rounded-2xl shadow">
              <h3 className="text-3xl font-bold text-blue-600 mb-2">
                {stat.value}
              </h3>
              <p className="text-gray-700 font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
