
import React, { useState } from "react";
import { FaFacebook } from "react-icons/fa";
import signupImage from "../assets/signuplogo.png";

interface LoginSignupProps {
  onClose: () => void;
}

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

const LoginSignup: React.FC<LoginSignupProps> = ({ onClose }) => {
  const [isLogin, setIsLogin] = useState<boolean>(false);
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(isLogin ? "Login Data:" : "Signup Data:", formData);
    setFormData({ firstName: "", lastName: "", email: "", password: "" });
  };

  const toggleForm = () => {
    setIsLogin(!isLogin);
    setFormData({ firstName: "", lastName: "", email: "", password: "" });
  };

  return (
    <div className="bg-white dark:bg-gray-100 rounded-2xl shadow-lg overflow-hidden p-6 relative max-w-5xl mx-auto">
      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 cursor-pointer transition"
      >
        X
      </button>

      <div className="flex flex-col md:flex-row gap-6">
        {/* Left Image / Info */}
        <div
          className="hidden md:flex md:w-1/2 flex-col justify-center items-center text-white p-6 rounded-lg transition-all duration-300"
          style={{
            backgroundImage: "linear-gradient(to bottom right, #6d28d9, #5b21b6)",
          }}
        >
          <h2 className="text-3xl font-bold mb-4 text-center">
            {isLogin ? "Welcome Back!" : "Stay on top of time tracking"}
          </h2>
          <p className="mb-4 text-center">
            {isLogin
              ? "Login with your credentials to continue."
              : "Create a new account to get started."}
          </p>
          <img src={signupImage} alt="Illustration" className="max-h-48 mb-4" />
          <button
            onClick={toggleForm}
            className="mt-4 px-6 py-2 border-2 border-white rounded-full hover:bg-white hover:text-purple-700 transition transform hover:scale-105 cursor-pointer"
          >
            {isLogin ? "Create Account" : "Login"}
          </button>
        </div>

        {/* Right Form */}
        <div className="w-full md:w-1/2 flex flex-col justify-center p-4">
          <h2 className="text-2xl font-bold mb-6 text-center">
            {isLogin ? "Login to your Account" : "Create Account"}
          </h2>

          <form onSubmit={handleFormSubmit} className="flex flex-col gap-4">
            {!isLogin && (
              <>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="First Name"
                  autoComplete="off"
                  className="p-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder="Last Name"
                  autoComplete="off"
                  className="p-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </>
            )}

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              autoComplete="off"
              className="p-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Password"
              autoComplete="new-password"
              className="p-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-purple-500"
            />

            <button
              type="submit"
              className="bg-black text-white py-2 rounded-lg hover:bg-gray-800 transition transform hover:scale-105 cursor-pointer"
            >
              {isLogin ? "Login" : "Create Account"}
            </button>
          </form>

          {/* Or divider */}
          <div className="flex items-center justify-center my-6 relative">
            <span className="absolute left-0 w-full border-t border-gray-300"></span>
            <span className="relative px-4 text-gray-500 bg-white">or</span>
          </div>

          {/* Social buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="flex items-center gap-2 px-4 py-2 border rounded-lg hover:bg-gray-100 transform hover:scale-105 cursor-pointer transition">
              <svg className="w-5 h-5" viewBox="0 0 533.5 544.3">
                <path
                  fill="#4285F4"
                  d="M533.5 278.4c0-17.5-1.6-34.5-4.6-51H272v96.9h146.9c-6.3 34-25.3 62.8-54 82.1v68.1h87.2c50.9-46.9 80.4-115.9 80.4-196.1z"
                />
                <path
                  fill="#34A853"
                  d="M272 544.3c73.4 0 134.9-24.3 179.9-65.8l-87.2-68.1c-24.2 16.2-55.3 25.8-92.7 25.8-71 0-131.1-47.9-152.6-112.5H31.1v70.9C75.5 477.8 167.4 544.3 272 544.3z"
                />
                <path
                  fill="#FBBC05"
                  d="M119.4 319.7c-5.4-16.1-8.5-33.2-8.5-50.7s3.1-34.6 8.5-50.7V147.4H31.1c-18.6 37.3-29.1 79.1-29.1 123s10.5 85.7 29.1 123l88.3-73.7z"
                />
                <path
                  fill="#EA4335"
                  d="M272 107.3c39.9 0 75.7 13.7 104 40.7l78.1-78.1C406.7 24.3 345.2 0 272 0 167.4 0 75.5 66.5 31.1 162.3l88.3 70.9c21.5-64.6 81.6-112.5 152.6-112.5z"
                />
              </svg>
              Google
            </button>
            <button className="flex items-center gap-2 px-4 py-2 border rounded-lg hover:bg-gray-100 transform hover:scale-105 cursor-pointer transition">
              <FaFacebook className="text-blue-600" /> Facebook
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;
