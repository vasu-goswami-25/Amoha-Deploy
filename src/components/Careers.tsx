
// // ====================================================================================================
 import {useState,  type FC, type FormEvent } from "react";

// Types for company data
interface Company {
  company: string;
  image: string;
  link: string; // 🔹 New property for the Apply Now URL
}

interface AppProps {
  darkMode: boolean; // 🔹 Dark mode prop
}

// --- Service-Based Companies Data ---
const serviceBasedCompanies: Company[] = [
  { company: "Tata Consultancy Services (TCS)",  image: "tcs.png",link:"https://ibegin.tcsapps.com/candidate/" },
  { company: "Accenture",  image: "accenture.png",link:"https://www.accenture.com/us-en/careers/jobsearch" },
  { company: "Cognizant",  image: "cognizant.png",link:"https://careers.cognizant.com/global-en/" },
  { company: "Infosys", image: "infosys.png",link:"https://www.infosys.com/careers" },
  { company: "Wipro",  image: "wipro.png",link:"https://careers.wipro.com/" },
  { company: "IBM", image: "IBM.png",link:"https://www.ibm.com/employment/" },
  { company: "Capgemini",  image: "capgemini.png",link:"https://www.capgemini.com/careers/" },
  { company: "HCL Technologies",  image: "HCL.png",link:"https://www.hcltech.com/careers" },
  { company: "DXC Technology",  image: "dxc.png",link:"https://careers.dxc.com/global/en/home" },
  { company: "Tech Mahindra",  image: "techmahindra.png",link:"https://careers.techmahindra.com/Currentopportunity.aspx#Advance" },
  { company: "Oracle",  image: "Oracle.png",link:"https://careers.oracle.com/en/sites/jobsearch/jobs?location=United%20States&locationId=300000000149325" },
  { company: "Atos",  image: "Atos.png",link:"https://atos.net/en/careers" },
];

// // --- Product-Based Companies Data ---
const productBasedCompanies: Company[] = [
  { company: "Google",  image: "Gooogle.png",link:"https://careers.google.com/" },
  { company: "Apple",  image: "Apple.png",link:"https://www.apple.com/careers/" },
  { company: "Microsoft",  image: "Microsoftt.png",link:"https://careers.microsoft.com/" },
  { company: "Amazon",  image: "Amazonn.png",link:"https://www.amazon.jobs/" },
  { company: "Facebook(Meta)",  image: "Facebook.png",link:"https://www.metacareers.com/" },
  { company: "Tesla",  image: "Tesla.png",link:"https://www.tesla.com/careers" },
  { company: "Netflix",  image: "Netflix.png",link:"https://jobs.netflix.com/" },
  { company: "Adobe",  image: "Adobe.png",link:"(https://www.adobe.com/careers.html" },
  { company: "Salesforce",  image: "Salesforce.png",link:"https://www.salesforce.com/company/careers/" },
  { company: "Snap Inc",  image: "Snap.png",link:"https://www.snap.com/en-US/jobs/" },
  { company: "Spotify",  image: "Spotify.png",link:"https://www.spotifyjobs.com/" },
  { company: "Uber",  image: "Uber.png",link:"https://www.uber.com/global/en/careers/" },
];

// // --- Reusable Company Card Component ---
interface CompanyCardProps {
  company: Company;
  darkMode: boolean;
}

const CompanyCard: FC<CompanyCardProps> = ({ company, darkMode }) => (
  <div
    className={`w-full sm:w-80 rounded-xl shadow-md p-6 border transform transition duration-200 hover:scale-105 hover:shadow-3xl flex flex-col items-center ${
      darkMode
        ? "bg-gray-800 border-[#6334B9] text-white hover:shadow-[0_4px_6px_#6334B980]"
        : "bg-white border-[#6334B9] text-gray-900"
    }`}
  >
    <img
      src={company.image}
      alt={company.company}
      className={`w-full h-48 object-contain mb-4 rounded-xl border ${
        darkMode
          ? "border-gray-600 hover:scale-105 hover:shadow-3xl hover:shadow-[0_4px_6px_#6334B980]"
          : "border-[#6334B9] hover:scale-105 hover:shadow-3xl hover:shadow-[0_4px_6px_#6334B980]"
      }`}
    />
    <h3
      className={`${
        darkMode ? "text-white" : "text-gray-900"
      } text-lg font-semibold text-center`}
    >
      {company.company}
    </h3>

    <a
      href={company.link}
      target="_blank"
      rel="noopener noreferrer"
      className={`w-full text-center font-bold py-2 px-4 rounded-lg transition duration-300 cursor-pointer mt-10 ${
        darkMode
          ? "bg-[#6334B9] text-white hover:bg-[#6334B9]"
          : "bg-[#6334B9] text-white hover:bg-[#6334B9]"
      }`}
    >
      Apply Now
    </a>
  </div>
);

const App: FC<AppProps> = ({ darkMode }) => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [stream, setStream] = useState("");
  const [resume, setResume] = useState<File | null>(null);
  const [errors, setErrors] = useState({
    fullName: "",
    email: "",
    stream: "",
    resume: "",
  });

   const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    const newErrors = {
      fullName: fullName ? "" : "Full Name is required",
      email: email ? "" : "Email is required",
      stream: stream && stream !== "Select Your Stream" ? "" : "Stream is required",
      resume: resume ? "" : "Resume is required",
    };

    setErrors(newErrors);

    const isValid = Object.values(newErrors).every((err) => err === "");
    if (isValid) {
      alert("Form submitted successfully ✅");
    }
  };
  return (
    <div
      className={`font-sans min-h-screen transition-colors duration-500 ${
        darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"
      }`}
    >
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Apply for an Internship */}
         <section className="my-8 md:my-16 mx-auto max-w-6xl">
      <h2
        className={`${
          darkMode ? "text-white" : "text-gray-900"
        } text-3xl font-bold mb-6 text-center md:text-left`}
      >
        Apply to Amoha Codes
      </h2>

      <form
        onSubmit={handleSubmit}
        className={`grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 p-6 md:p-12 rounded-2xl shadow-lg transition-colors duration-500 ${
          darkMode ? "bg-gray-800" : "bg-white"
        }`}
      >
        {/* Full Name */}
        <div>
          <label
            htmlFor="fullName"
            className={`block text-sm font-medium mb-1 ${
              darkMode ? "text-white" : "text-gray-700"
            }`}
          >
            Full Name
          </label>
          <input
            type="text"
            id="fullName"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            placeholder="Enter Your Full Name"
            className={`w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 transition-colors duration-500 ${
              darkMode
                ? "bg-gray-700 border-[#6334B9] text-white focus:ring-[#6334B9]"
                : "bg-purple-100 border-[#6334B9] text-gray-900 focus:ring-[#6334B9]"
            }`}
          />
          {errors.fullName && (
            <p className="text-red-500 text-sm mt-1">{errors.fullName}</p>
          )}
        </div>

        {/* Email */}
        <div>
          <label
            htmlFor="email"
            className={`block text-sm font-medium mb-1 ${
              darkMode ? "text-white" : "text-gray-700"
            }`}
          >
            Email Address
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter Your Email Address"
            className={`w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 transition-colors duration-500 ${
              darkMode
                ? "bg-gray-700 border-[#6334B9] text-white focus:ring-[#6334B9]"
                : "bg-purple-100 border-[#6334B9] text-gray-900 focus:ring-[#6334B9]"
            }`}
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email}</p>
          )}
        </div>

        {/* Stream */}
        <div>
          <label
            htmlFor="stream"
            className={`block text-sm font-medium mb-1 ${
              darkMode ? "text-white" : "text-gray-700"
            }`}
          >
            Stream
          </label>
          <select
            id="stream"
            value={stream}
            onChange={(e) => setStream(e.target.value)}
            className={`w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 transition-colors duration-500 ${
              darkMode
                ? "bg-gray-700 border-[#6334B9] text-gray-400 focus:ring-[#6334B9]"
                : "bg-purple-100 border-[#6334B9] text-gray-500 focus:ring-[#6334B9]"
            }`}
          >
            <option>Select Your Stream</option>
            <option>Engineering</option>
            <option>Marketing</option>
            <option>Design</option>
            <option>Finance</option>
            <option>Operations</option>
            <option>Sales</option>
          </select>
          {errors.stream && (
            <p className="text-red-500 text-sm mt-1">{errors.stream}</p>
          )}
        </div>

        {/* Resume */}
        <div>
          <label
            htmlFor="resume"
            className={`block text-sm font-medium mb-1 ${
              darkMode ? "text-white" : "text-gray-700"
            }`}
          >
            Resume
          </label>
          <div className="relative">
            <input
              type="file"
              id="resume"
              onChange={(e) => setResume(e.target.files?.[0] || null)}
              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
            />
            <div
              className={`flex items-center justify-between w-full px-4 py-3 rounded-lg border focus-within:ring-2 transition-colors duration-500 ${
                darkMode
                  ? "bg-gray-700 border-[#6334B9] text-white focus-within:ring-[#6334B9]"
                  : "bg-purple-100 border-[#6334B9] text-gray-900 focus-within:ring-[#6334B9]"
              }`}
            >
              <span
                className={`${
                  resume
                    ? darkMode
                      ? "text-white"
                      : "text-gray-900"
                    : darkMode
                    ? "text-gray-400"
                    : "text-gray-500"
                }`}
              >
                {resume ? resume.name : "Upload Your Resume"}
              </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`h-6 w-6 ${
                  darkMode ? "text-gray-300" : "text-[#6334B9]"
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"
                />
              </svg>
            </div>
          </div>
          {errors.resume && (
            <p className="text-red-500 text-sm mt-1">{errors.resume}</p>
          )}
        </div>

        {/* Submit */}
        <div className="md:col-span-2 text-center">
          <button
            type="submit"
            className={`px-8 py-3 font-bold rounded-lg shadow-lg cursor-pointer transition duration-300 ${
              darkMode
                ? "bg-[#6334B9] text-white hover:bg-[#6334B9]"
                : "bg-[#6334B9] text-white hover:bg-[#6334B9]"
            }`}
          >
            Submit
          </button>
        </div>
      </form>
    </section>

        {/* SERVICE-BASED COMPANIES */}
        <section className="my-8 md:my-16 mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 px-4 md:px-0">
            <h2
              className={`${
                darkMode ? "text-white" : "text-gray-900"
              } text-3xl font-bold mb-4 md:mb-0 text-center md:text-left`}
            >
              Service-Based Companies
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-20 gap-y-8 justify-items-center px-4 md:px-0">
            {serviceBasedCompanies.map((internship, index) => (
              <CompanyCard
                key={index}
                company={internship}
                darkMode={darkMode}
              />
            ))}
          </div>
        </section>

        {/* PRODUCT-BASED COMPANIES */}
        <section className="my-8 md:my-16 mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 px-4 md:px-0">
            <h2
              className={`${
                darkMode ? "text-white" : "text-gray-900"
              } text-3xl font-bold mb-4 md:mb-0 text-center md:text-left`}
            >
              Product-Based Companies
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-20 gap-y-8 justify-items-center px-4 md:px-0">
            {productBasedCompanies.map((internship, index) => (
              <CompanyCard
                key={index}
                company={internship}
                darkMode={darkMode}
              />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default App;


  // Form States
//   const [fullName, setFullName] = useState("");
//   const [email, setEmail] = useState("");
//   const [stream, setStream] = useState("");
//   const [resume, setResume] = useState<File | null>(null);

//   // Error States
//   const [errors, setErrors] = useState({
//     fullName: "",
//     email: "",
//     stream: "",
//     resume: "",
//   });

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();

//     // Validation checks
//     const newErrors = {
//       fullName: fullName.trim() ? "" : "Full Name is required",
//       email: email.trim() ? "" : "Email Address is required",
//       stream:
//         stream && stream !== "Select Your Stream"
//           ? ""
//           : "Please select your stream",
//       resume: resume ? "" : "Please upload your resume",
//     };

//     setErrors(newErrors);

//     const isValid = Object.values(newErrors).every((error) => error === "");
//     if (isValid) {
//       alert("Form submitted successfully ✅");
//     }
//   };

//   return (
//     <section className="my-8 md:my-16 mx-auto max-w-6xl">
//       <h2
//         className={`${
//           darkMode ? "text-white" : "text-gray-900"
//         } text-3xl font-bold mb-6 text-center md:text-left`}
//       >
//         Apply to Amoha Codes
//       </h2>

//       <form
//         onSubmit={handleSubmit}
//         className={`grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 p-6 md:p-12 rounded-2xl shadow-lg transition-colors duration-500 ${
//           darkMode ? "bg-gray-800" : "bg-white"
//         }`}
//       >
//         {/* Full Name */}
//         <div>
//           <label
//             htmlFor="fullName"
//             className={`block text-sm font-medium mb-1 ${
//               darkMode ? "text-white" : "text-gray-700"
//             }`}
//           >
//             Full Name
//           </label>
//           <input
//             type="text"
//             id="fullName"
//             value={fullName}
//             onChange={(e) => setFullName(e.target.value)}
//             placeholder="Enter Your Full Name"
//             className={`w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 transition-colors duration-500 ${
//               errors.fullName
//                 ? "border-red-500 focus:ring-red-400"
//                 : darkMode
//                 ? "bg-gray-700 border-[#6334B9] text-white focus:ring-[#6334B9]"
//                 : "bg-purple-100 border-[#6334B9] text-gray-900 focus:ring-[#6334B9]"
//             }`}
//           />
//           {errors.fullName && (
//             <p className="text-red-500 text-sm mt-1">{errors.fullName}</p>
//           )}
//         </div>

//         {/* Email */}
//         <div>
//           <label
//             htmlFor="email"
//             className={`block text-sm font-medium mb-1 ${
//               darkMode ? "text-white" : "text-gray-700"
//             }`}
//           >
//             Email Address
//           </label>
//           <input
//             type="email"
//             id="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             placeholder="Enter Your Email Address"
//             className={`w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 transition-colors duration-500 ${
//               errors.email
//                 ? "border-red-500 focus:ring-red-400"
//                 : darkMode
//                 ? "bg-gray-700 border-[#6334B9] text-white focus:ring-[#6334B9]"
//                 : "bg-purple-100 border-[#6334B9] text-gray-900 focus:ring-[#6334B9]"
//             }`}
//           />
//           {errors.email && (
//             <p className="text-red-500 text-sm mt-1">{errors.email}</p>
//           )}
//         </div>

//         {/* Stream */}
//         <div>
//           <label
//             htmlFor="stream"
//             className={`block text-sm font-medium mb-1 ${
//               darkMode ? "text-white" : "text-gray-700"
//             }`}
//           >
//             Stream
//           </label>
//           <select
//             id="stream"
//             value={stream}
//             onChange={(e) => setStream(e.target.value)}
//             className={`w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 transition-colors duration-500 ${
//               errors.stream
//                 ? "border-red-500 focus:ring-red-400"
//                 : darkMode
//                 ? "bg-gray-700 border-[#6334B9] text-gray-400 focus:ring-[#6334B9]"
//                 : "bg-purple-100 border-[#6334B9] text-gray-500 focus:ring-[#6334B9]"
//             }`}
//           >
//             <option>Select Your Stream</option>
//             <option>Engineering</option>
//             <option>Marketing</option>
//             <option>Design</option>
//             <option>Finance</option>
//             <option>Operations</option>
//             <option>Sales</option>
//           </select>
//           {errors.stream && (
//             <p className="text-red-500 text-sm mt-1">{errors.stream}</p>
//           )}
//         </div>

//         {/* Resume */}
//         <div>
//           <label
//             htmlFor="resume"
//             className={`block text-sm font-medium mb-1 ${
//               darkMode ? "text-white" : "text-gray-700"
//             }`}
//           >
//             Resume
//           </label>
//           <div className="relative">
//             <input
//               type="file"
//               id="resume"
//               onChange={(e) =>
//                 setResume(e.target.files ? e.target.files[0] : null)
//               }
//               className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
//             />
//             <div
//               className={`flex items-center justify-between w-full px-4 py-3 rounded-lg border focus-within:ring-2 transition-colors duration-500 ${
//                 errors.resume
//                   ? "border-red-500 focus-within:ring-red-400"
//                   : darkMode
//                   ? "bg-gray-700 border-[#6334B9] text-white focus-within:ring-[#6334B9]"
//                   : "bg-purple-100 border-[#6334B9] text-gray-900 focus-within:ring-[#6334B9]"
//               }`}
//             >
//               <span
//                 className={`${darkMode ? "text-gray-400" : "text-gray-500"}`}
//               >
//                 {resume ? resume.name : "Upload Your Resume"}
//               </span>
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 className={`h-6 w-6 ${
//                   darkMode ? "text-gray-300" : "text-[#6334B9]"
//                 }`}
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth={2}
//                   d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"
//                 />
//               </svg>
//             </div>
//           </div>
//           {errors.resume && (
//             <p className="text-red-500 text-sm mt-1">{errors.resume}</p>
//           )}
//         </div>

//         {/* Submit Button */}
//         <div className="md:col-span-2 text-center">
//           <button
//             type="submit"
//             className={`px-8 py-3 font-bold rounded-lg shadow-lg cursor-pointer transition duration-300 ${
//               darkMode
//                 ? "bg-[#6334B9] text-white hover:bg-[#7b4be1]"
//                 : "bg-[#6334B9] text-white hover:bg-[#7b4be1]"
//             }`}
//           >
//             Submit
//           </button>
//         </div>
//       </form>
//     </section>
  

//  {/* SERVICE-BASED COMPANIES */}
//         <section className="my-8 md:my-16 mx-auto max-w-6xl">
//           <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 px-4 md:px-0">
//              <h2
//               className={`${
//                 darkMode ? "text-white" : "text-gray-900"
//               } text-3xl font-bold mb-4 md:mb-0 text-center md:text-left`}
//             >
//               Service-Based Companies
//             </h2>
//           </div>

//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-20 gap-y-8 justify-items-center px-4 md:px-0">
//             {serviceBasedCompanies.map((internship, index) => (
//               <CompanyCard
//                 key={index}
//                 company={internship}
//                 darkMode={darkMode}
//               />
//             ))}
//           </div>
//         </section>

//         {/* PRODUCT-BASED COMPANIES */}
//         <section className="my-8 md:my-16 mx-auto max-w-6xl">
//           <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 px-4 md:px-0">
//             <h2
//               className={`${
//                 darkMode ? "text-white" : "text-gray-900"
//               } text-3xl font-bold mb-4 md:mb-0 text-center md:text-left`}
//             >
//               Product-Based Companies
//             </h2>
//           </div>

//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-20 gap-y-8 justify-items-center px-4 md:px-0">
//             {productBasedCompanies.map((internship, index) => (
//               <CompanyCard
//                 key={index}
//                 company={internship}
//                 darkMode={darkMode}
//               />
//             ))}
//           </div>
//         </section>
//       </main>
//     </div>
//   );
// };

// export default App;