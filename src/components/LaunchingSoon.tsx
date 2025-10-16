import  {type FC } from "react";

interface LaunchingSoonProps {
  darkMode: boolean;
}

export const LaunchingSoon: FC<LaunchingSoonProps> = ({ darkMode }) => {
  return (
   
    // DARK MODE ADDED
    <div
      className={`min-h-screen flex flex-col font-sans transition-colors duration-500 ${
        darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-800"
      }`}
    >
      <main className="flex-grow max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8 mt-20">
        <div
          className={`rounded-lg p-6 lg:p-12 transition-colors duration-500 ${
            darkMode ? "bg-gray-800" : "bg-white"
          }`}
        >

      <div className="max-w-2xl mx-auto text-center">
        {/* 🚀 Rocket Icon */}
        <div className="mb-8">
          <svg
            className={`w-24 h-24 mx-auto animate-bounce ${
              darkMode ? "text-[#6334B9]" : "text-[#6334B9]"
            }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M13 10V3L4 14h7v7l9-11h-7z"
            />
          </svg>
        </div>

        {/* 🧠 Main Content */}
        <h1
          className={`text-5xl font-bold mb-6 ${
            darkMode ? "text-white" : "text-gray-800"
          }`}
        >
          Launching Soon
        </h1>

        <p
          className={`text-xl mb-8 leading-relaxed ${
            darkMode ? "text-gray-300" : "text-gray-600"
          }`}
        >
          We're working hard to bring you an amazing tutorials experience.
          Get ready to dive deep into C++ programming with interactive examples,
          real-world projects, and comprehensive learning paths.
        </p>

        {/* ⏰ Info Card */}
        <div
          className={`rounded-2xl shadow-lg p-8 mb-8 border transition-colors duration-500 ${
            darkMode
              ? "bg-gray-800 border-gray-700"
              : "bg-white border-[#6334B9]"
          }`}
        >
          <h2
            className={`text-2xl font-semibold mb-4 ${
              darkMode ? "text-white" : "text-gray-800"
            }`}
          >
            Stay Tuned!
          </h2>
          <p
            className={`mb-6 ${
              darkMode ? "text-gray-300" : "text-gray-600"
            }`}
          >
            Our tutorials section will be live soon. We're putting the finishing
            touches to ensure the best learning experience for you.
          </p>

          {/* ✅ Feature List */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
            {[
              "Interactive Code Examples",
              "Step-by-Step Guides",
              "Real World Projects",
              "Progress Tracking",
            ].map((feature, idx) => (
              <div key={idx} className="flex items-center space-x-3">
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center ${
                    darkMode ? "bg-green-900" : "bg-green-100"
                  }`}
                >
                  <span className="text-green-500 font-bold">✓</span>
                </div>
                <span
                  className={`${
                    darkMode ? "text-gray-200" : "text-gray-700"
                  }`}
                >
                  {feature}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* 🔔 Notify Me Button */}
        <div className="space-y-4">
          <button className="bg-[#6334B9] hover:bg-[#6334B9] text-white font-semibold py-3 px-8 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105">
            Notify Me When It's Ready
          </button>
          <p
            className={`text-sm ${
              darkMode ? "text-gray-400" : "text-gray-500"
            }`}
          >
            We'll let you know as soon as the tutorials are live!
          </p>
        </div>
      </div>
    </div>
    </main>
    </div>
  );
};
