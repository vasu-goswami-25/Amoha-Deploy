import React from "react";
import { FaLinkedin, FaFacebook, FaInstagram } from "react-icons/fa";

interface FooterProps {
  darkMode: boolean;
}

const Footer: React.FC<FooterProps> = ({ darkMode }) => {
  return (
    <footer
      className={`py-10 px-6 transition-colors duration-500 ${
        darkMode ? "bg-gray-700 text-gray-200" : "bg-[#6334B9] text-white"
      }`}
    >
      <div className="max-w-7xl mx-auto">
        {/* Top 3 Sections */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 ml-22">
          {/* Contact Info Section */}
          <div className="space-y-3">
            <h3 className="text-xl font-bold">Amoha Codes</h3>
            <p>Delhi Road</p>
            <p>Moradabad, 244001</p>
            <p>Phone: +91 9760564433</p>
            <p>Email: amohacodes@gmail.com</p>
          </div>

          {/* Useful Links Section */}
          <div className="space-y-3 ml-22">
            <h3 className="text-xl font-bold">Useful Links</h3>
            <ul className="space-y-2">
              {["Home", "About us", "Careers", "Terms of service", "Privacy policy"].map(
                (link, idx) => (
                  <li key={idx}>
                    <a
                      href="#"
                      className={`hover:underline ${
                        darkMode ? "hover:text-purple-500" : "hover:text-gray-200"
                      }`}
                    >
                      {link}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Our Services Section */}
          <div className="space-y-3 ml-22">
            <h3 className="text-xl font-bold">Our Services</h3>
            <ul className="space-y-2">
              {[
                "Programming Languages",
                "Data Structure and Algorithm",
                "Competitive Programming",
                "System Design",
                "Career Counseling",
              ].map((service, idx) => (
                <li key={idx}>
                  <a
                    href="#"
                    className={`hover:underline ${
                      darkMode ? "hover:text-purple-500" : "hover:text-gray-200"
                    }`}
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Copyright and Social Icons */}
        <div
          className={`flex justify-between items-center mt-8 pt-4 border-t  ${
            darkMode ? "border-gray-500" : "border-white/20"
          }`}
        >
          <div className="text-sm ml-22">
            © Copyright <strong>Amoha Codes</strong>. All Rights Reserved
          </div>
          <div className="flex space-x-4 mr-22">
            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/company/amoha-codes/posts/?feedView=all"
              aria-label="LinkedIn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin
                size={22}
                className={`transition-colors duration-200 ${
                  darkMode ? "hover:text-purple-500" : "hover:text-gray-200"
                }`}
              />
            </a>
            {/* Facebook */}
            <a
              href="https://www.facebook.com/share/p/1MFzyWTwpJ/"
              aria-label="Facebook"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook
                size={22}
                className={`transition-colors duration-200 ${
                  darkMode ? "hover:text-purple-500" : "hover:text-gray-200"
                }`}
              />
            </a>
            {/* Instagram */}
            <a
              href="https://www.instagram.com/amoha_codes_/"
              aria-label="Instagram"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram
                size={22}
                className={`transition-colors duration-200 ${
                  darkMode ? "hover:text-purple-500" : "hover:text-gray-200"
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
