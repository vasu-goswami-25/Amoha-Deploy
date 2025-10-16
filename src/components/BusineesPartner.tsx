
import {type FC } from "react";

interface BusinessPartnersProps {
  darkMode: boolean;
}

// Dummy logo URLs (replace with your actual imports)
 import  One from "../assets/One.png";
 import  Two from "../assets/Two.png";
 import  Three from "../assets/Three.png";
 import  Four from "../assets/Four.png";
//  import  Five from "../assets/Five.png";
 import  Six from "../assets/Six.png";
 
 


const BusinessPartners: FC<BusinessPartnersProps> = ({ darkMode }) => {
  const logos = [One,Two,Three,Four,Six];

  return (
    <section
      id="business-partners"
      className={`pt-12 pb-12 transition-colors duration-500 mb-0 sm:mb-16 ${
        darkMode ? "bg-gray-900 text-white" : "bg-white text-black"
      }`}
    >
      <div
        className={`max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 rounded-2xl shadow-lg py-8 sm:py-12 transition-colors duration-500 ${
          darkMode ? "bg-gray-800" : "bg-white"
        }`}
      >
        {/* Heading */}
        <h2
          className={`text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-left ${
            darkMode ? "text-white" : "text-black"
          }`}
        >
          Student Placed at
        </h2>

        {/* Scrolling logos */}
        <div className="relative w-full overflow-hidden">
          <div className="flex gap-8 animate-marquee-reverse w-max">
            {[...logos, ...logos].map((logo, i) => (
              <img
                key={i}
                src={logo}
                alt={`Partner ${i}`}
                className={`w-32 sm:w-40 md:w-48 p-4 sm:p-6 transition-transform transform hover:scale-105 hover:shadow-xl cursor-pointer ${
                  darkMode ? "filter brightness-90" : ""
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Tailwind animation */}
      <style>
        {`
          @keyframes marquee-reverse {
            0% { transform: translateX(-50%); }
            100% { transform: translateX(0); }
          }
          .animate-marquee-reverse {
            display: flex;
            gap: 2rem;
            animation: marquee-reverse 5s linear infinite;
          }
        `}
      </style>
    </section>
  );
};

export default BusinessPartners;


