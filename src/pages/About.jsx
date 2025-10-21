import React from "react";

const About = () => {
  return (
    <div className="bg-gray-50 text-gray-800 py-20">
      {/* Hero Section */}
      <section className="relative bg-[#191982] text-white text-center py-20 px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">About Us</h1>
        <p className="max-w-2xl mx-auto text-lg md:text-xl">
          Empowering Students One Lession at a time.
        </p>
      </section>

      {/* Introduction */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <p className="text-lg leading-relaxed text-center">
          At <strong>Smart Scholar Online Tutoring Academy</strong>, we are
          passionate about personalized education. Our academy brings together
          highly qualified, experienced, and inspiring tutors from across the
          UK, USA, Australia, Canada, and Pakistan to offer world-class tutoring
          in the comfort of your home.
        </p>
        <p className="text-lg leading-relaxed text-center mt-6">
          We provide one-on-one and small group online tutoring for students
          from Grade 1 to University level, covering Math, Science, English,
          Coding, and much more.
        </p>
      </section>

      {/* Mission */}
      <section className="bg-white py-12 shadow-inner">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4 text-blue-700">Our Mission</h2>
          <p className="text-lg leading-relaxed">
            To make quality education accessible, affordable, and effective for
            every learner—no matter where they are in the world. We aim to boost
            confidence, strengthen academic foundations, and unlock every
            student’s full potential.
          </p>
        </div>
      </section>

      {/* Who We Teach */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <h2 className="text-3xl font-bold text-center mb-8 text-blue-700">
          Who We Teach
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            "United Kingdom",
            "United States",
            "Australia",
            "Canada",
            "Europe",
            "Pakistan",
            "Middle East (UAE, Saudi Arabia, Qatar)",
          ].map((country) => (
            <div
              key={country}
              className="bg-blue-100 rounded-lg py-4 font-medium hover:bg-blue-200 transition"
            >
              {country}
            </div>
          ))}
        </div>
      </section>

      {/* How We Work */}
      <section className="bg-blue-50 py-12">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-10 text-blue-700">
            How We Work
          </h2>
          <ol className="space-y-4 text-lg list-decimal list-inside">
            <li>Book Free Trial Classes</li>
            <li>Get Matched with a Subject Expert Tutor</li>
            <li>Start Learning Online from Anywhere</li>
            <li>
              Lessons are recorded, so students can watch them later for
              revision
            </li>
            <li>
              Students and tutors see each other via live video – great for
              building rapport
            </li>
          </ol>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <h2 className="text-3xl font-bold text-center mb-10 text-blue-700">
          Why Choose Smart Scholar?
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {[
            {
              title: "Qualified & Verified Tutors",
              desc: "Our tutors are MSc, MS, MPhil, and PhD qualified, with experience from top institutions.",
            },
            {
              title: "Flexible Scheduling",
              desc: "We match you with tutors that fit your availability and timezone.",
            },
            {
              title: "Global Curriculum Support",
              desc: "Whether it’s GCSE, IGCSE, O/A Levels, IB, SATs, or National Curriculums — we’ve got you covered.",
            },
            {
              title: "Interactive Tools & Modern Methods",
              desc: "We use Zoom, digital whiteboards, assessments, and creative teaching strategies for engaging sessions.",
            },
            {
              title: "Affordable Learning",
              desc: "We believe education should be high-quality without breaking the bank.",
            },
            {
              title: "Progress Reports",
              desc: "Regular updates keep parents and students informed.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold mb-2 text-blue-600">
                ✅ {item.title}
              </h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;
