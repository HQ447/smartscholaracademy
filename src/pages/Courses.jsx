import { NavLink } from "react-router-dom";
import { BookOpen } from "lucide-react";
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
    <div className="w-full font-sans text-gray-800 pt-17">
      {/* ============== HEADER ============== */}
      <section className="relative bg-[#191982] text-white text-center py-20 px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Courses</h1>

        <div className="mt-8">
          <NavLink
            to={"/contact"}
            className="bg-white text-blue-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition"
          >
            Book a Free Trial Now
          </NavLink>
        </div>
      </section>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto px-6 py-12">
        {subjects.map((subject, i) => (
          <div
            key={i}
            className="group relative bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 p-8 border-2 border-gray-100 hover:border-blue-500"
          >
            {/* Icon Container */}
            <div className="mb-6 inline-flex p-4 bg-blue-50 rounded-xl group-hover:bg-blue-600 transition-colors">
              <BookOpen className="w-8 h-8 text-blue-600 group-hover:text-white transition-colors" />
            </div>

            {/* Title */}
            <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
              {subject.title}
            </h3>

            {/* Divider */}
            <div className="w-16 h-1 bg-blue-600 rounded-full mb-6 group-hover:w-24 transition-all"></div>

            {/* List Items */}
            <ul className="space-y-3 mb-6">
              {subject.items.map((item, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-3 text-gray-600 text-sm"
                >
                  <svg
                    className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>

            {/* CTA Link */}
            <div className="flex items-center gap-2 text-blue-600 font-semibold group-hover:gap-3 transition-all cursor-pointer">
              <span>Explore Course</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Courses;
