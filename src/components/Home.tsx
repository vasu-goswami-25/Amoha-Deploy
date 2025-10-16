import React from "react";
import { Link } from "react-router-dom";
import bigLogo from "../assets/big-logo.png";
import bgImage from "../assets/background.png"; // 🔹 add your background image here

interface HomeProps {
  darkMode: boolean;
}

const Home: React.FC<HomeProps> = ({ darkMode }) => {
  return (
    <div
      id="home"
      className="flex flex-col items-center justify-center text-center min-h-screen px-4 sm:px-6 md:px-10 py-10 transition-colors duration-500"
      style={{
        backgroundImage: darkMode ? "none" : `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundColor: darkMode ? "#101828" : "#ffffff", // black in dark mode, white fallback for light mode
      }}
    >
      {/* Logo */}
          <img
              src={bigLogo}
              alt="Big Logo"
              className="animate-slow-bounce -mt-2 sm:-mt-2 md:mt-8 w-4/5 sm:w-3/4 md:w-3/5 lg:w-2/5 max-w-[900px] h-auto mx-auto transition-all duration-300 -mb-12"
              style={{ filter: darkMode ? "invert(1)" : "invert(0)" }}
            />

            {/* 🔹 Custom animation defined inline */}
            <style>
              {`
                @keyframes slow-bounce {
                  0%, 100% { transform: translateY(0); }
                  50% { transform: translateY(-40px); } /* ⬆️ higher bounce */
                }
                .animate-slow-bounce {
                  animation: slow-bounce 2s ease-in-out infinite; /* ⏩ faster bounce */
                }
              `}
            </style>


      {/* Heading */}
      <h2 className="text-xl sm:text-3xl md:text-4xl lg:text-5xl mt-8 -mb-4 sm:mt-8 md:-mt-10 font-semibold">
       <span style={darkMode ? { color: "white" } : {color: "black"}}> Welcome to </span>
        <span style={{ color: "#6334B9" }}>Amoha Codes</span>
      </h2>

      {/* Subtitle */}
      <span className="font-ibarra text-sm sm:text-base md:text-lg lg:text-2xl text-gray-500 mt-4 -mb-4 sm:mt-4">
        "Empowering Dreams Through Education"
      </span>

      {/* CTA Button */}
      <Link
        to="/practice"
        className="px-5 sm:px-6 py-2 sm:py-3 text-sm sm:text-base md:text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition duration-300 mt-6 sm:mt-8 cursor-pointer"
        style={{
          backgroundColor: "#6334B9",
          color: "#fff",
        }}
      >
        Start Learning
      </Link>
    </div>
  );
};

export default Home;
