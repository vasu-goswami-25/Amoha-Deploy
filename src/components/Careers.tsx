import { useState, type FC } from "react";

// Types for internship data
interface Internship {
  company: string;
  title: string;
  duration: string;
  image: string;
}

interface AppProps {
  darkMode: boolean; // 🔹 Dark mode prop
}

const internshipCategories: string[] = [
  "Engineering",
  "Marketing",
  "Design",
  "Finance",
  "Operations",
  "Sales",
];

const internships: Record<string, Internship[]> = {
  Engineering: [
    { company: "Google", title: "Software Engineer Intern", duration: "3 Months | Remote", image: "Googlepic.png" },
    { company: "Cognizant", title: "Data Analyst Intern", duration: "6 Months | Onsite", image: "cognizant.png" },
    { company: "Amazon", title: "UI/UX Designer Intern", duration: "3 Months | Hybrid", image: "Amazonpic.png" },
    { company: "DXC Technology", title: "User Experience Intern", duration: "6 Months | Onsite", image: "dxc.png" },
    { company: "TCS", title: "Product Design Intern", duration: "3 Months | Onsite", image: "tcs.png" },
    { company: "PWC", title: "Marketing Strategy Intern", duration: "6 Months | Hybrid", image: "pwc.png" },
  ],
  Marketing: [
    { company: "HubSpot", title: "Digital Marketing Intern", duration: "3 Months | Remote", image: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/hubspot.svg" },
    { company: "Salesforce", title: "Content Marketing Intern", duration: "6 Months | Hybrid", image: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/salesforce.svg" },
  ],
  Design: [
    { company: "Adobe", title: "Graphic Design Intern", duration: "3 Months | Remote", image: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/adobe.svg" },
    { company: "Apple", title: "Product Design Intern", duration: "6 Months | Onsite", image: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/apple.svg" },
  ],
  Finance: [
    { company: "Goldman Sachs", title: "Financial Analyst Intern", duration: "6 Months | Onsite", image: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/goldmansachs.svg" },
  ],
  Operations: [
    { company: "UPS", title: "Logistics Intern", duration: "3 Months | Onsite", image: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/ups.svg" },
  ],
  Sales: [
    { company: "Oracle", title: "Sales Intern", duration: "6 Months | Remote", image: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/oracle.svg" },
  ],
};

// Internship Card Component
interface InternshipCardProps {
  internship: Internship;
  darkMode: boolean;
}

const InternshipCard: FC<InternshipCardProps> = ({ internship, darkMode }) => (
  <div
    className={`w-full sm:w-80 rounded-xl shadow-md p-6 border transform transition duration-200 hover:scale-105 hover:shadow-3xl flex flex-col items-center ${
      darkMode
        ? "bg-gray-800 border-purple-400 text-white hover:shadow-lg hover:shadow-purple-500/30"
        : "bg-white border-purple-400 text-gray-900"
    }`}
  >
    <img
      src={internship.image}
      alt={internship.company}
      className={`w-full h-48 object-contain mb-4 rounded-xl border ${
        darkMode ? "border-gray-500" : "border-purple-700"
      }`}
    />
    <div className={`${darkMode ? "text-white" : "text-purple-700"} text-sm font-medium`}>
      {internship.company}
    </div>
    <h3 className={`${darkMode ? "text-white" : "text-gray-900"} text-lg font-semibold text-center`}>
      {internship.title}
    </h3>
    <div className={`${darkMode ? "text-purple-300" : "text-purple-700"} text-sm mb-4`}>
      {internship.duration}
    </div>
    <button
      className={`w-full font-bold py-2 px-4 rounded-lg transition duration-300 cursor-pointer ${
        darkMode
          ? "bg-purple-700 text-white hover:bg-purple-800"
          : "bg-purple-700 text-white hover:bg-purple-800"
      }`}
    >
      Apply Now
    </button>
  </div>
);

// Main App Component
const App: FC<AppProps> = ({ darkMode }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>("Engineering");

  return (
    <div className={`font-sans min-h-screen transition-colors duration-500 ${darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"}`}>
      <main className="container mx-auto p-4 md:p-8">
        {/* Featured Internship section */}
        <section className="my-8 md:my-16">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 ml-40">
            <h2 className={`${darkMode ? "text-white" : "text-gray-900"} text-3xl font-bold mb-4 md:mb-0`}>
              Featured Internship
            </h2>
            {/* <a href="#" className={`${darkMode ? "text-purple-400" : "text-purple-700"} font-medium hover:underline`}>
              View all
            </a> */}
          </div>
          <div className="flex space-x-4 overflow-x-auto mb-6 py-2 ml-40">
            {internshipCategories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition duration-300 whitespace-nowrap flex-shrink-0 ${
                  selectedCategory === category
                    ? darkMode
                      ? "bg-gray-700 text-white cursor-pointer"
                      : "bg-purple-100 text-gray-900 cursor-pointer"
                    : darkMode
                    ? "bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white cursor-pointer"
                    : "bg-purple-100 text-gray-800 hover:bg-purple-600 hover:text-white cursor-pointer"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center ml-30 mr-30">
            {internships[selectedCategory].map((internship, index) => (
              <InternshipCard key={index} internship={internship} darkMode={darkMode} />
            ))}
          </div>
        </section>

        {/* Apply for an Internship section */}
        <section className="my-8 md:my-16 ml-40 mr-40 ">
          <h2 className={`${darkMode ? "text-white" : "text-gray-900"} text-3xl font-bold mb-6 `}>
            Apply for an Internship
          </h2>
          <form
            className={`grid grid-cols-1 md:grid-cols-2 gap-8 p-6 md:p-12 rounded-2xl shadow-lg transition-colors duration-500 ${
              darkMode ? "bg-gray-800" : "bg-white"
            }`}
          >
            <div>
              <label htmlFor="fullName" className={`block text-sm font-medium mb-1 ${darkMode ? "text-white" : "text-gray-700"}`}>
                Full Name
              </label>
              <input
                type="text"
                id="fullName"
                placeholder="Enter Your Full Name"
                className={`w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 transition-colors duration-500 ${
                  darkMode
                    ? "bg-gray-700 border-purple-400 text-white focus:ring-purple-400"
                    : "bg-purple-100 border-purple-300 text-gray-900 focus:ring-purple-600"
                }`}
              />
            </div>
            <div>
              <label htmlFor="email" className={`block text-sm font-medium mb-1 ${darkMode ? "text-white" : "text-gray-700"}`}>
                Email Address
              </label>
              <input
                type="email"
                id="email"
                placeholder="Enter Your Email Address"
                className={`w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 transition-colors duration-500 ${
                  darkMode
                    ? "bg-gray-700 border-purple-400 text-white focus:ring-purple-400"
                    : "bg-purple-100 border-purple-300 text-gray-900 focus:ring-purple-600"
                }`}
              />
            </div>
            <div>
              <label htmlFor="stream" className={`block text-sm font-medium mb-1 ${darkMode ? "text-white" : "text-gray-700"}`}>
                Stream
              </label>
              <select
                id="stream"
                className={`w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 transition-colors duration-500 ${
                  darkMode
                    ? "bg-gray-700 border-purple-400 text-white focus:ring-purple-400"
                    : "bg-purple-100 border-purple-300 text-gray-900 focus:ring-purple-600"
                }`}
              >
                <option>Select Your Stream</option>
                {internshipCategories.map((category) => (
                  <option key={category}>{category}</option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="resume" className={`block text-sm font-medium mb-1 ${darkMode ? "text-white" : "text-gray-700"}`}>
                Resume
              </label>
              <div className="relative">
                <input type="file" id="resume" className="absolute inset-0 w-full h-full opacity-0 cursor-pointer" />
                <div
                  className={`flex items-center justify-between w-full px-4 py-3 rounded-lg border focus-within:ring-2 transition-colors duration-500 ${
                    darkMode
                      ? "bg-gray-700 border-purple-400 text-white focus-within:ring-purple-400"
                      : "bg-purple-100 border-purple-300 text-gray-900 focus-within:ring-purple-600"
                  }`}
                >
                  <span className={`${darkMode ? "text-white" : "text-purple-500"}`}>Upload Your Resume</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className={`h-6 w-6 ${darkMode ? "text-white" : "text-purple-600"}`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="md:col-span-2 text-center">
              <button
                type="submit"
                className={`px-8 py-3 font-bold rounded-lg shadow-lg cursor-pointer transition duration-300 ${
                  darkMode
                    ? "bg-purple-700 text-white hover:bg-purple-800"
                    : "bg-purple-700 text-white hover:bg-purple-800"
                }`}
              >
                Submit
              </button>
            </div>
          </form>
        </section>
      </main>
    </div>
  );
};

export default App;
