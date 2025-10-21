import React from "react";
import { NavLink } from "react-router-dom";

const Courses = () => {
  const subjects = [
    {
      title: "Maths & Sciences",
      items: [
        "Biology tutor, GCSE, A Level, IB, Scottish Highers",
        "Chemistry tutor, GCSE, A Level, IB, Scottish Highers",
        "Environmental Studies tutor, GCSE, A Level",
        "Further Mathematics tutor, GCSE, A Level, IB",
        "Geology tutor, GCSE, A Level",
        "Human Biology tutor, GCSE, A Level, Scottish Highers",
        "Maths tutor, 11 Plus, 13 Plus, GCSE, A Level, IB, Scottish Highers",
        "Physical Education tutor, GCSE, A Level, IB",
        "Physics tutor, GCSE, A Level, IB, Scottish Highers",
        "Science tutor, 13 Plus, GCSE, IB",
        "Zoology tutor, GCSE, A Level",
      ],
    },
    {
      title: "Humanities",
      items: [
        "Classical Civilisation tutor, GCSE, A Level",
        "Extended Project Qualification tutor, GCSE, A Level",
        "Geography tutor, 13 Plus, GCSE, A Level, IB, Scottish Highers",
        "Government and Politics tutor, GCSE, A Level, IB",
        "History tutor, 13 Plus, GCSE, A Level, IB, Scottish Highers",
        "History of Art tutor, GCSE, A Level",
        "Media Studies tutor, GCSE, A Level",
        "Philosophy tutor, GCSE, A Level, IB",
        "Philosophy and Ethics tutor, GCSE, A Level",
        "Politics tutor, GCSE, A Level, IB",
        "Psychology tutor, GCSE, A Level, IB, Scottish Highers",
        "Religious Studies tutor, 13 Plus, GCSE, A Level, IB, Scottish Highers",
        "Sociology tutor, GCSE, A Level, IB",
      ],
    },
    {
      title: "Computing & Electronics",
      items: [
        "Computing tutor, GCSE, A Level, IB",
        "Electronics tutor, GCSE, A Level",
        "ICT tutor, A Level, IB",
      ],
    },
    {
      title: "Business & Management",
      items: [
        "Accounting tutor, GCSE, A Level",
        "Business Studies tutor, GCSE, A Level, IB",
        "Economics tutor, GCSE, A Level, IB, Scottish Highers",
        "Law tutor, GCSE, A Level",
      ],
    },
    {
      title: "Arts",
      items: [
        "Art tutor, GCSE, A Level",
        "Design & Technology tutor, GCSE, A Level, IB",
        "Drama tutor, GCSE, A Level, IB",
        "Graphic Design tutor, GCSE, A Level",
      ],
    },
    {
      title: "Languages",
      items: [
        "Arabic tutor, GCSE, A Level, IB",
        "English tutor, 11 Plus, 13 Plus, GCSE, A Level, IB, Scottish Highers",
        "English Language tutor, GCSE, A Level, IB",
        "English Literature tutor, GCSE, A Level, IB",
        "English and World Literature tutor, GCSE, A Level, IB",
      ],
    },
    {
      title: "Uni Admissions",
      items: [
        "BMAT tutor, University",
        "ELAT tutor, University",
        "GAMSAT tutor, University",
        "HAT tutor, University",
        "LNAT tutor, University",
        "MAT tutor, University",
        "Medical School Preparation tutor, Mentoring",
        "MLAT (Modern Languages) tutor, University",
        "Oxbridge Preparation tutor, Mentoring",
        "PAT tutor, University",
        "Personal Statements tutor, Mentoring",
        "STEP tutor, University",
        "TSA Oxford tutor, University",
        "UKCAT tutor, University",
      ],
    },
  ];

  return (
    <div className="w-full font-sans text-gray-800 py-20">
      {/* ============== HEADER ============== */}
      <section className="relative bg-[#191982] text-white text-center py-20 px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Courses</h1>
        <p className="max-w-2xl mx-auto text-lg md:text-xl">
          Our tutors cover a wide range of subjects
        </p>
        <div className="mt-8">
          <NavLink
            to={"/contact"}
            className="bg-white text-blue-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition"
          >
            Book a Free Trial Now
          </NavLink>
        </div>
      </section>

      {/* ============== OUR SUBJECTS ============== */}
      <section className="py-16 bg-gray-50 text-center">
        <h2 className="text-3xl md:text-4xl font-semibold mb-12">
          Our Subjects
        </h2>

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto px-6">
          {subjects.map((subject, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl shadow hover:shadow-lg transition p-6 text-left"
            >
              <h3 className="text-2xl font-semibold text-blue-600 mb-4 border-b pb-2">
                {subject.title}
              </h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                {subject.items.map((item, idx) => (
                  <li key={idx} className="leading-relaxed">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Courses;
