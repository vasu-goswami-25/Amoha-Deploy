// src/components/LearnersStats.tsx
import type { FC } from "react";

interface LearnersStatsProps {
  darkMode: boolean;
}

const LearnersStats: FC<LearnersStatsProps> = ({ darkMode }) => {
  return (
    <div className="max-w-6xl mx-auto mb-12 ">
    <div className="flex flex-wrap grid grid-cols-1 sm:grid-cols-2 gap-2 ">
      <div
        className={`border-[1px] border-[#6334B9] hover:border-[#c1ade3] hover:shadow-lg rounded-lg px-6 py-4 shadow text-center ${
          darkMode ? "bg-gray-700" : "bg-gray-50"
        }`}
      >
        <h3
          className={`text-2xl font-bold ${
            darkMode ? "text-purple-400" : "text-purple-700"
          }`}
        >
          10,000+
        </h3>
        <p className={darkMode ? "text-gray-300" : "text-gray-600"}>Learners</p>
      </div>

      <div
        className={`border-[1px] border-[#6334B9] hover:border-[#c1ade3] hover:shadow-xl rounded-lg px-6 py-4 shadow text-center ${
          darkMode ? "bg-gray-700" : "bg-gray-50"
        }`}
      >
        <h3
          className={`text-2xl font-bold ${
            darkMode ? "text-purple-400" : "text-purple-700"
          }`}
        >
          1,000+
        </h3>
        <p className={darkMode ? "text-gray-300" : "text-gray-600"}>Mentors</p>
      </div>
    </div>
    </div>
  );
};

export default LearnersStats;
