// // src/components/Stats.tsx
// import type { FC } from "react";

// interface StatsProps {
//   darkMode: boolean;
// }

// const Stats: FC<StatsProps> = ({ darkMode }) => {
//   return (
//     <section
//       id="stats"
//       className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-16"
//     >
//       <h3 className="text-2xl font-bold mb-8 text-left">Our Impact</h3>

//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
//         {/* Learners */}
//         <div
//           className={`border rounded-xl p-6 shadow-md text-center transition-colors duration-300 ${
//             darkMode ? "bg-gray-700" : "bg-gray-50"
//           }`}
//         >
//           <h3
//             className={`text-3xl font-bold ${
//               darkMode ? "text-purple-400" : "text-purple-700"
//             }`}
//           >
//             10,000+
//           </h3>
//           <p className={darkMode ? "text-gray-300" : "text-gray-600"}>
//             Learners
//           </p>
//         </div>

//         {/* Mentors */}
//         <div
//           className={`border rounded-xl p-6 shadow-md text-center transition-colors duration-300 ${
//             darkMode ? "bg-gray-700" : "bg-gray-50"
//           }`}
//         >
//           <h3
//             className={`text-3xl font-bold ${
//               darkMode ? "text-purple-400" : "text-purple-700"
//             }`}
//           >
//             1,000+
//           </h3>
//           <p className={darkMode ? "text-gray-300" : "text-gray-600"}>
//             Mentors
//           </p>
//         </div>

//         {/* Projects */}
//         <div
//           className={`border rounded-xl p-6 shadow-md text-center transition-colors duration-300 ${
//             darkMode ? "bg-gray-700" : "bg-gray-50"
//           }`}
//         >
//           <h3
//             className={`text-3xl font-bold ${
//               darkMode ? "text-purple-400" : "text-purple-700"
//             }`}
//           >
//             500+
//           </h3>
//           <p className={darkMode ? "text-gray-300" : "text-gray-600"}>
//             Projects Completed
//           </p>
//         </div>

//         {/* Internships */}
//         <div
//           className={`border rounded-xl p-6 shadow-md text-center transition-colors duration-300 ${
//             darkMode ? "bg-gray-700" : "bg-gray-50"
//           }`}
//         >
//           <h3
//             className={`text-3xl font-bold ${
//               darkMode ? "text-purple-400" : "text-purple-700"
//             }`}
//           >
//             200+
//           </h3>
//           <p className={darkMode ? "text-gray-300" : "text-gray-600"}>
//             Internships Provided
//           </p>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Stats;
