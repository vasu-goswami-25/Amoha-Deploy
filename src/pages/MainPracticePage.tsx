
// import React from "react";
// import { Link } from "react-router-dom";
// import { BookOpen, Code, Layers, GitBranch, ListChecks, SquareStack } from "lucide-react";

// // Define the type for each course
// interface Course {
//   title: string;
//   description: string;
//   icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
//   url: string;
// }

// const courses: Course[] = [
//   { 
//     title: "DSA Problem", 
//     description: "Boost your problem-solving skills with Data Structures & Algorithms.", 
//     icon: ListChecks, 
//     url: "/DSAProblems"
//   },
//   { 
//     title: "Service Based DSA", 
//     description: "Prepare for service-based company interviews with targeted DSA.", 
//     icon: Code, 
//     url: "/ServiceBasedDSA"
//   },
//   { 
//     title: "Blind 75", 
//     description: "Master the essential 75 LeetCode problems for interviews.", 
//     icon: Layers, 
//     url: "/Blind75"
//   },
//   { 
//     title: "All in One DSA", 
//     description: "A comprehensive guide covering all DSA topics from scratch.", 
//     icon: SquareStack, 
//     url: "/ALLINONEDSA"
//   },
//   { 
//     title: "Algorithm", 
//     description: "Deep dive into various algorithms and their applications.", 
//     icon: GitBranch, 
//     url: "/Algorithm"
//   },
//   { 
//     title: "Service Based Pattern DSA", 
//     description: "Understand common DSA patterns asked in service-based companies.", 
//     icon: BookOpen, 
//     url: "/ServiceBasedPatternDSA"
//   },
// ];

// // Props for the component
// interface MainPracticePageProps {
//   darkMode?: boolean;
// }

// const MainPracticePage: React.FC<MainPracticePageProps> = ({ darkMode = true }) => {
//   return (
//     <div
//       className={`py-16 px-4 md:px-8 ${
//         darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-900"
//       }`}
//     >
//       <div className="max-w-6xl mx-auto">
//         <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-12">
//           Our Courses
//         </h2>

//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//           {courses.map((course, index) => {
//             const Icon = course.icon;
//             return (
//               <Link
//                 to={course.url}
//                 key={index}
//                 className={`block rounded-lg shadow-xl min-h-[14rem] md:min-h-[16rem]
//                             transform hover:-translate-y-2 transition-all duration-300 ease-in-out
//                             p-6 flex flex-col justify-center items-center text-center
//                             ${
//                               darkMode
//                                 ? "bg-purple-800 hover:bg-purple-700 text-white"
//                                 : "bg-purple-100 hover:bg-purple-300 text-purple-800"
//                             }`}
//               >
//                 {/* Icon Section */}
//                 <div className="flex-shrink-0 mb-4">
//                   <Icon
//                     className={`w-16 h-16 ${
//                       darkMode ? "text-white" : "text-purple-700"
//                     }`}
//                   />
//                 </div>

//                 {/* Title and Description */}
//                 <div className="flex-grow">
//                   <h3 className="text-2xl font-bold mb-2 leading-tight">
//                     {course.title}
//                   </h3>
//                   <p
//                     className={`text-sm ${
//                       darkMode ? "text-gray-200" : "text-gray-600"
//                     }`}
//                   >
//                     {course.description}
//                   </p>
//                 </div>
//               </Link>
//             );
//           })}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default MainPracticePage;

import React from "react";
import { Link } from "react-router-dom";
import { BookOpen, Code, Layers, GitBranch, ListChecks, SquareStack } from "lucide-react";

// Type for each practice section
interface PracticeSection {
  title: string;
  description: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  url: string; // Route for individual section page
}

// Array of 6 practice sections
const practiceSections: PracticeSection[] = [
  { 
    title: "DSA Problem", 
    description: "Boost your problem-solving skills with Data Structures & Algorithms.", 
    icon: ListChecks, 
    url: "/practice/dsa-problems" //ye nahi chal raha
  },
  { 
    title: "Service Based DSA", 
    description: "Prepare for service-based company interviews with targeted DSA.", 
    icon: Code, 
    url: "/practice/service-based-dsa"
  },
  { 
    title: "Blind 75", 
    description: "Master the essential 75 LeetCode problems for interviews.", 
    icon: Layers, 
    url: "/practice/blind-75" //ye bhi nahi chal raha
  },
  { 
    title: "All in One DSA", 
    description: "A comprehensive guide covering all DSA topics from scratch.", 
    icon: SquareStack, 
    url: "/practice/all-in-one-dsa"
  },
  { 
    title: "Algorithm", 
    description: "Deep dive into various algorithms and their applications.", 
    icon: GitBranch, 
    url: "/practice/algorithm"
  },
  { 
    title: "Service Based Pattern DSA", 
    description: "Understand common DSA patterns asked in service-based companies.", 
    icon: BookOpen, 
    url: "/practice/service-based-pattern-dsa"
  },
];

// Props for the component
interface MainPracticePageProps {
  darkMode?: boolean;
}

const MainPracticePage: React.FC<MainPracticePageProps> = ({ darkMode = true }) => {
  return (
    <div
      className={`py-16 px-4 md:px-8 ${
        darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-900"
      }`}
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-start my-12">
          Practice Sections
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {practiceSections.map((section, index) => {
            const Icon = section.icon;
            return (
              <Link
                to={section.url}
                key={index}
                className={`block rounded-lg shadow-xl min-h-[14rem] md:min-h-[16rem]
                            transform hover:-translate-y-2 transition-all duration-300 ease-in-out
                            p-6 flex flex-col justify-center items-center text-center
                            ${
                              darkMode
                                ? "bg-purple-800 hover:bg-purple-700 text-white"
                                : "bg-purple-100 hover:bg-purple-300 text-purple-800"
                            }`}
              >
                {/* Icon Section */}
                <div className="flex-shrink-0 mb-4">
                  <Icon
                    className={`w-16 h-16 ${
                      darkMode ? "text-white" : "text-purple-700"
                    }`}
                  />
                </div>

                {/* Title and Description */}
                <div className="flex-grow">
                  <h3 className="text-2xl font-bold mb-2 leading-tight">
                    {section.title}
                  </h3>
                  <p
                    className={`text-sm ${
                      darkMode ? "text-gray-200" : "text-gray-600"
                    }`}
                  >
                    {section.description}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default MainPracticePage;
