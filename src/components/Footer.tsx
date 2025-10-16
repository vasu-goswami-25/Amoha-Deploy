import React from "react";
import { FaLinkedin, FaFacebook, FaInstagram } from "react-icons/fa";

interface FooterProps {
  darkMode: boolean;
}

const Footer: React.FC<FooterProps> = ({ darkMode }) => {
  return (
    <footer
      className={`py-10 px-3 sm:px-4 md:px-6 transition-colors duration-500 ${
        darkMode ? "bg-gray-700 text-gray-200" : "bg-[#6334B9] text-white"
      }`}
    >
      <div className="max-w-6xl mx-auto">
        {/* Top 3 Sections */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-10 md:gap-12">
          {/* Contact Info Section */}
          <div className="space-y-3 text-center sm:text-left">
            <h3 className="text-xl font-bold">Amoha Codes</h3>
            <p>Delhi Road</p>
            <p>India, 244001</p>
            <p>Phone: +91 9760564433</p>
            <p>Email: amohacodes@gmail.com</p>
          </div>

          {/* Useful Links Section */}
          <div className="space-y-3 text-center sm:text-left sm:pl-6 md:pl-25">
            <h3 className="text-xl font-bold">Useful Links</h3>
            <ul className="space-y-2">
              {[
                { name: "Home", href: "/" },
                { name: "About us", href: "/about" },
                { name: "Practice", href: "/practice" },
                { name: "Careers", href: "/careers" },
                { name: "Contact us", href: "/contact" },
              ].map((link, idx) => (
                <li key={idx}>
                  <a
                    href={link.href}
                    className={`text-white transition-colors duration-200 hover:underline ${
                      darkMode ? "hover:text-[#6334B9]" : "hover:text-gray-200"
                    }`}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Services Section */}
          <div className="space-y-3 text-center sm:text-left sm:pl-6 md:pl-28">
            <h3 className="text-xl font-bold">Our Services</h3>
            <ul className="space-y-2">
              {[
                {
                  name: "Practice Programing Language",
                  href: "http://localhost:5174/practice/ProgramingLang",
                },
                {
                  name: "Service-Based DSA Sheet",
                  href: "http://localhost:5174/practice/service-based-dsa",
                },
                {
                  name: "Prodcut Based DSA Sheet",
                  href: "http://localhost:5174/practice/dsa-problems",
                },
                {
                  name: "Competitive Programming",
                  href: "http://localhost:5174/practice/CP",
                },
                {
                  name: "Blind 75",
                  href: "http://localhost:5174/practice/blind-75",
                },
              ].map((service, idx) => (
                <li key={idx}>
                  <a
                    href={service.href}
                    className={`transition-colors duration-200 hover:underline ${
                      darkMode ? "hover:text-[#6334B9]" : "hover:text-gray-200"
                    }`}
                  >
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Copyright and Social Icons */}
        <div
          className={`flex flex-col sm:flex-row justify-between items-center gap-4 mt-8 pt-4 border-t ${
            darkMode ? "border-gray-500" : "border-white/20"
          }`}
        >
          <div className="text-sm text-center sm:text-left">
            © Copyright <strong>Amoha Codes</strong>. All Rights Reserved
          </div>

          <div className="text-sm sm:text-base text-center">
            <span className="text-white dark:text-gray-300">Developed by:- </span>
            <a
              href="https://www.linkedin.com/in/vasugoswami25/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-white hover:underline hover:text-[#6334B9] transition-colors"
            >
              Vasu Goswami
            </a>
            <span className="text-white"> & </span>
            <a
              href="https://www.linkedin.com/in/sakshi-sharma-87b247297/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-white hover:underline hover:text-[#6334B9] transition-colors"
            >
              Sakshi Sharma
            </a>
            <span className="text-gray-600 dark:text-gray-300">.</span>
          </div>

          {/* Social Icons */}
          <div className="flex justify-center space-x-4">
            <a
              href="https://www.linkedin.com/company/amoha-codes/posts/?feedView=all"
              aria-label="LinkedIn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin
                size={22}
                className={`transition-colors duration-200 ${
                  darkMode ? "hover:text-[#6334B9]" : "hover:text-gray-200"
                }`}
              />
            </a>
            <a
              href="https://www.facebook.com/share/p/1MFzyWTwpJ/"
              aria-label="Facebook"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook
                size={22}
                className={`transition-colors duration-200 ${
                  darkMode ? "hover:text-[#6334B9]" : "hover:text-gray-200"
                }`}
              />
            </a>
            <a
              href="https://www.instagram.com/amoha_codes_/"
              aria-label="Instagram"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram
                size={22}
                className={`transition-colors duration-200 ${
                  darkMode ? "hover:text-[#6334B9]" : "hover:text-gray-200"
                }`}
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
