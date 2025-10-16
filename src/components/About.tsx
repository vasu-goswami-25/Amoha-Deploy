import type { FC } from "react";

interface AboutProps {
  darkMode: boolean;
}

const About: FC<AboutProps> = ({ darkMode }) => {
  return (
    <section
      id="about"
      className={`pt-12 sm:pt-35  transition-colors duration-500 h-132 ${
        darkMode ? "bg-gray-900 text-white" : "bg-white text-black"
      }`}
    >
      <div
        className={`max-w-6xl mt-2 mx-auto px-4 sm:px-6 lg:px-8 rounded-2xl shadow-lg py-8 sm:py-12 transition-colors duration-500 ${
          darkMode ? "bg-gray-800" : "bg-white"
        }`}
      >
        {/* About Us */}
        <h2 className={`text-2xl sm:text-3xl md:text-4xl font-bold mb-0 sm:mb-6 text-left ${ darkMode ? "text-white" : "text-black" }`}>
          About Us
        </h2>

        <p
          className={`text-sm sm:text-base md:text-lg leading-relaxed text-left ${
            darkMode ? "text-gray-300" : "text-gray-700"
          }`}
        >
          At Amoha, we believe in the transformative power of education to
          inspire brighter futures. Guided by our motto,{" "}
          <span className="font-semibold">
            "Empowering Dreams Through Education".
          </span>{" "}
          We are dedicated to fostering a learning-rich and inspiring ecosystem
          that enables learners to unlock their full potential. At Amoha, our
          mission is shaping the future of technology-driven education by
          providing learners with opportunities to gain meaningful skills and
          professional experience.
        </p>
      </div>
    </section>
  );
};

export default About;
