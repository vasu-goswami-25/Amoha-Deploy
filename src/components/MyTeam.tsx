
import { type FC } from "react";

// Type for a team member
interface TeamMember {
  id: number;
  name: string;
  title: string;
  role: string;
  avatar: string;
}

// Props for MyTeam component
interface MyTeamProps {
  darkMode: boolean;
}

// 👥 Team Data
const teamData: TeamMember[] = [
  {
    id: 1,
    name: "Mohit",
    title: "TMU",
    role: "DSA Instructor",
    avatar:
      "Mohit.png",
  },
  {
    id: 2,
    name: "Mayank",
    title: "IGNOU",
    role: "CP Instructor",
    avatar:
      "MayankTyagi.png",
  },
  {
    id: 3,
    name: "Soma Samanta",
    title: "IIT Patna",
    role: "Data Science Instructor",
    avatar:
      "Soma.png",
  },
  {
    id: 4,
    name: "Brij Kishor",
    title: "IIT Patna",
    role: "AI & ML Instructor",
    avatar:
      "Brij.png",
  },
];

const MyTeam: FC<MyTeamProps> = ({ darkMode }) => {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      {/* Heading */}
      <h2
        className={`${
          darkMode ? "text-white" : "text-black"
        } text-2xl sm:text-3xl md:text-4xl font-bold mb-12 text-left`}
      >
        Our Team
      </h2>

      {/* Team Members Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
        {teamData.map((member) => (
          <div
            key={member.id}
            className={`flex flex-col items-center text-center rounded-2xl shadow-md p-6 transition-all duration-300 hover:scale-105 ${
              darkMode
                ? "bg-gray-800 text-gray-200 shadow-gray-700"
                : "bg-white text-gray-800 shadow-gray-300"
            }`}
          >
            {/* Profile Image */}
            <img
              src={member.avatar}
              alt={member.name}
              className="w-32 h-32 sm:w-36 sm:h-36 md:w-40 md:h-40 rounded-full object-cover mb-4 border-4 border-[#6334B9] "
            />

            {/* Name */}
            <h3
              className={`font-semibold text-lg sm:text-xl ${
                darkMode ? "text-white" : "text-gray-900"
              }`}
            >
              {member.name}
            </h3>

            {/* Title */}
            <p
              className={`text-sm sm:text-base mt-1 ${
                darkMode ? "text-gray-400" : "text-gray-600"
              }`}
            >
              {member.title}
            </p>

            {/* Instructor Tag */}
            <span
              className={`mt-3 px-3 py-1 rounded-full text-xs font-medium ${
                darkMode
                  ? "bg-[#6334B9]  text-white"
                  : "bg-purple-100 text-[#6334B9] "
              }`}
            >
              {member.role}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyTeam;
