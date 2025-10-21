import React from "react";

const Tutors = () => {
  const tutors = [
    {
      name: "KAINAT FATIMA",
      subject: "Chemistry & Geography Tutor",
      qualification: "MS Biochemistry and Molecular Biology",
      experience:
        "An organized and detail-oriented biochemistry and molecular biology graduate with extensive experience in teaching and education settings. Proficient in creating a positive and inclusive learning environment that fosters student growth and engagement.",
      img: "https://smartscholaredu.com/wp-content/uploads/2025/07/WhatsApp-Image-2025-07-11-at-16.49.54_1fbcb00a.jpg",
    },
    {
      name: "SANIA ABID",
      subject: "Math's Tutor",
      qualification: "BSCS",
      experience:
        "Math tutor with 8+ years of experience teaching IB, SABIS, GCSE, and IGCSE worldwide. Passionate about building confidence in maths.",
      img: "https://smartscholaredu.com/wp-content/uploads/2025/07/WhatsApp-Image-2025-07-10-at-10.59.53-PM-1152x1536.jpeg",
    },
    {
      name: "NABIHA HAMEED",
      subject: "English Tutor",
      qualification: "Masters in English",
      experience:
        "Highly experienced English tutor with over 12 years of teaching expertise in reputed colleges and universities. Skilled in engaging online lessons catering to diverse student needs.",
      img: "https://smartscholaredu.com/wp-content/uploads/2025/08/WhatsApp-Image-2025-07-11-at-12.35.11-AM.jpeg",
    },
    {
      name: "RIDA HAMID",
      subject: "English Tutor",
      qualification: "BS Honors in English Literature",
      experience:
        "Over 6 years of teaching experience in English Literature and Language. Skilled in online instruction, curriculum development, and fostering engaging learning environments.",
      img: "https://smartscholaredu.com/wp-content/uploads/2025/08/WhatsApp-Image-2025-08-10-at-10.49.18-PM.jpeg",
    },
    {
      name: "NAFIA MALIK",
      subject: "English & Science Tutor",
      qualification: "BS English",
      experience:
        "Online tutor with 3+ years of experience teaching English and Science. Dedicated to delivering student-centric lessons that foster academic success.",
      img: "https://smartscholaredu.com/wp-content/uploads/2025/07/nafia-1.jpg",
    },
    {
      name: "MAMOONA SAEED",
      subject: "Science Tutor",
      qualification: "MS Biotechnology",
      experience:
        "Renowned educator with Army Public School background. Expert in delivering flexible, personalized online instruction globally.",
      img: "https://smartscholaredu.com/wp-content/uploads/2025/07/mamoona.jpg",
    },
    {
      name: "AIMEN SAEED",
      subject: "Chemistry Tutor",
      qualification: "MS Chemistry",
      experience:
        "Dedicated educator with 3+ years of experience delivering structured and student-centered lessons, fostering engaging learning environments.",
      img: "https://smartscholaredu.com/wp-content/uploads/2025/07/aimen.jpg",
    },
    {
      name: "SAMAN JAVAID",
      subject: "Maths & Python Tutor",
      qualification: "MS Mathematics + Python Certificate",
      experience:
        "Experienced educator with 5+ years of teaching math and Python. Skilled in simplifying complex concepts and using digital tools for interactive learning.",
      img: "https://smartscholaredu.com/wp-content/uploads/2025/07/saman.jpg",
    },
    {
      name: "ANEEQA BATOOL",
      subject: "Chemistry Tutor",
      qualification: "PhD Chemistry",
      experience:
        "Results-driven educator with a PhD in Chemistry and strong foundation in inorganic, organic, and physical chemistry. Promotes student growth and academic excellence.",
      img: "https://smartscholaredu.com/wp-content/uploads/2025/07/aneeqa.jpg",
    },
    {
      name: "IFRA JAVED",
      subject: "Islamic Studies & Quran Tutor",
      qualification:
        "MPhil Islamic Studies with Tajweed, Tafseer, and Hifz Degrees",
      experience:
        "Islamic Studies teacher with 5+ years of experience teaching Quran with focus on Tajweed, Tafseer, and memorization. Skilled in guiding students in understanding Islamic principles.",
      img: "https://smartscholaredu.com/wp-content/uploads/2025/07/WhatsApp-Image-2025-07-11-at-12.31.15-AM-1024x1018.jpeg",
    },
    {
      name: "MAHREEN AKHTAR",
      subject: "Maths Tutor",
      qualification: "MS Mathematics",
      experience:
        "Seasoned maths educator with 2+ years of experience in online and offline settings. Proven ability to adapt to diverse learning needs.",
      img: "https://smartscholaredu.com/wp-content/uploads/2025/07/mahreen-1024x873.jpg",
    },
    {
      name: "ADEEBA ALTAF",
      subject: "Mathematics Tutor",
      qualification: "BS Mathematics",
      experience:
        "Experienced maths educator with 3 years of online teaching expertise to UK students. Skilled in delivering engaging and adaptive lessons.",
      img: "https://smartscholaredu.com/wp-content/uploads/2025/07/adeeba.jpg",
    },
  ];

  return (
    <div className="w-full font-sans text-gray-800 py-20">
      {/* ======= HEADER ======= */}
      <section className="relative bg-[#191982] text-white text-center py-20 px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Our Tutors</h1>
        <p className="max-w-2xl mx-auto text-lg md:text-xl">
          Meet our highly qualified and passionate tutors who help students
          achieve academic success.
        </p>
      </section>

      {/* ======= TUTORS GRID ======= */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-semibold text-center mb-12">
            Meet Our Expert Tutors
          </h2>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {tutors.map((tutor, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-md hover:shadow-lg transition p-6 flex flex-col items-center text-center"
              >
                {/* Tutor Image */}
                <img
                  src={tutor.img}
                  alt={tutor.name}
                  className="w-28 h-28 rounded-full object-cover mb-4 border-4 border-blue-500"
                />

                {/* Tutor Details */}
                <h3 className="text-xl font-semibold text-blue-600 mb-1">
                  {tutor.name}
                </h3>
                <p className="text-sm text-gray-600 mb-2 italic">
                  {tutor.subject}
                </p>

                <p className="text-gray-700 mb-2">
                  <span className="font-semibold">Qualification:</span>{" "}
                  {tutor.qualification}
                </p>

                <p className="text-gray-600 text-sm leading-relaxed">
                  {tutor.experience}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Tutors;
