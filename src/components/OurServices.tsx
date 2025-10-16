// src/components/Services.tsx
import type { FC } from "react";
import { BookOpen, Code, Briefcase } from "lucide-react";

interface ServicesProps {
  darkMode: boolean;
}

const Services: FC<ServicesProps> = ({ darkMode }) => {
  return (
    <div className="max-w-6xl mx-auto ">
      <h2
        className={`text-2xl sm:text-3xl md:text-4xl font-bold mb-0 sm:mb-6 text-left ${
          darkMode ? "text-white" : "text-black"
        }`}
      >
        Our Services
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Service 1 */}
        <div
          className={`p-6 border rounded-xl shadow transition-transform transform hover:scale-105 hover:shadow-xl cursor-pointer text-center ${
            darkMode ? "bg-gray-700" : "bg-purple-50"
          }`}
        >
          <BookOpen
            className={`w-10 h-10 mx-auto mb-3 ${
              darkMode ? "text-purple-400" : "text-[#6334B9]"
            }`}
          />
          <h4
            className={`text-xl font-bold mb-2 ${
              darkMode ? "text-purple-400" : "text-[#6334B9]"
            }`}
          >
            Curated Courses
          </h4>
          <p className={darkMode ? "text-gray-300" : "text-gray-600"}>
            High-quality curated courses to master new skills and grow your
            career.
          </p>
        </div>

        {/* Service 2 */}
        <div
          className={`p-6 border rounded-xl shadow transition-transform transform hover:scale-105 hover:shadow-xl cursor-pointer text-center ${
            darkMode ? "bg-gray-700" : "bg-purple-50"
          }`}
        >
          <Code
            className={`w-10 h-10 mx-auto mb-3 ${
              darkMode ? "text-purple-400" : "text-[#6334B9]"
            }`}
          />
          <h4
            className={`text-xl font-bold mb-2 ${
              darkMode ? "text-purple-400" : "text-[#6334B9]"
            }`}
          >
            Practice Challenges
          </h4>
          <p className={darkMode ? "text-gray-300" : "text-gray-600"}>
            Hands-on coding challenges designed to sharpen problem-solving
            abilities.
          </p>
        </div>

        {/* Service 3 */}
        <div
          className={`p-6 border rounded-xl shadow transition-transform transform hover:scale-105 hover:shadow-xl cursor-pointer text-center ${
            darkMode ? "bg-gray-700" : "bg-purple-50"
          }`}
        >
          <Briefcase
            className={`w-10 h-10 mx-auto mb-3 ${
              darkMode ? "text-purple-400" : "text-[#6334B9]"
            }`}
          />
          <h4
            className={`text-xl font-bold mb-2 ${
              darkMode ? "text-purple-400" : "text-[#6334B9]"
            }`}
          >
            Internship Opportunities
          </h4>
          <p className={darkMode ? "text-gray-300" : "text-gray-600"}>
            Real-world internships to gain practical experience & industry
            exposure.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;
