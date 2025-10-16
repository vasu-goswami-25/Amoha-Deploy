import React from "react";
import { Link } from "react-router-dom";
import { BookOpen, Code, Layers, GitBranch, ListChecks, SquareStack } from "lucide-react";

// Type for each practice section
interface PracticeSection {
  title: string;
  description: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  url: string;
}

// Array of 9 practice sections
const practiceSections: PracticeSection[] = [
  // 1.
  {
    title: "Practice Programing Language",
    description: "Understand common DSA patterns asked in service-based companies.",
    icon: Code,
    url: "/practice/ProgramingLang",
  },
  // 2.
  {
    title: "Basic Standard Problem Solving",
    description:
      "Perfect for beginners, this section offers fundamental problem-solving exercises that lay the foundation for more advanced topics.",
    icon: BookOpen,
    url: "/practice/NumbersProblems",
  },
  // 3.
  {
    title: "DSA Pattern & Algorithm for Service-Based Companies",
    description:
      "Focused on key patterns and algorithms commonly tested by service-based companies. Master the essential skills for interviews in this space.",
    icon: BookOpen,
    url: "/practice/service-based-pattern-dsa",
  },
  // 4.
  {
    title: "DSA Sheet for Service-Based Companies",
    description:
      "A curated list of problems designed specifically for service-based company interviews. This sheet covers the most frequently asked questions to help you prepare effectively.",
    icon: Code,
    url: "/practice/service-based-dsa",
  },
  // 5.
  {
    title: "DSA Pattern & Algorithm for Product Based Companies",
    description:
      "Dive deep into the patterns and algorithms that top product-based companies look for in candidates. Enhance your problem-solving skills with challenges that test your coding expertise.",
    icon: GitBranch,
    url: "/practice/algorithm",
  },
  // 6.
  {
    title: "DSA sheet for Product-Based Companies",
    description:
      "Tackle a handpicked set of problems aimed at interviews with product-based companies. Each problem is designed to sharpen your ability to think critically and solve complex coding challenges.",
    icon: ListChecks,
    url: "/practice/dsa-problems",
  },
  // 7.
  {
    title: "All-in-One DSA Master Sheet",
    description:
      "The ultimate collection of problems across all difficulty levels and company types. Perfect for a comprehensive review and to refine your coding acumen.",
    icon: SquareStack,
    url: "/practice/all-in-one-dsa",
  },
  // 8.
  {
    title: "Blind 75",
    description:
      "A rigorous set of 75 problems that every programmer should solve. This list includes problems from all major topics and prepares you for top-tier technical interviews.",
    icon: Layers,
    url: "/practice/blind-75",
  },
  // 9.
  {
    title: "Competitive Programming Sheet",
    description:
      "Push your coding abilities to the limit with challenging problems designed for competitive programming. Perfect for those looking to excel in coding competitions and hackathons.",
    icon: BookOpen,
    url: "/practice/CP",
  },
];

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
        {/* Header Section */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-start my-12">
          Master Your Programming Skills with Structured Practice
        </h2>

        <p className="text-base md:text-lg mb-12 leading-relaxed">
          Unlock your full potential with our expertly curated practice sets, designed to help 
          you excel in coding, algorithmic problem-solving, and data structures. Whether you're 
          targeting interviews at service-based companies or aiming for top-tier product-based
          companies, we offer a comprehensive range of resources to guide you through each stage
          of your learning journey.
          </p>
          <p>
          Our platform provides a systematic approach to help you hone your technical skills,
          build problem-solving efficiency, and master key data structures and algorithms that
          are vital for cracking coding interviews and competitive programming challenges.
         </p>

        <h3 className="text-xl sm:text-3xl md:text-3xl font-bold text-start my-12">
          Sections to Explore:
        </h3>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {practiceSections.map((section, index) => {
            const Icon = section.icon;
            return (
              <Link
                to={section.url}
                key={index}
                className={`rounded-lg shadow-xl min-h-[14rem] md:min-h-[16rem]
                            transform hover:-translate-y-2 transition-all duration-300 ease-in-out
                            p-6 flex flex-col justify-center items-center text-center
                            ${
                              darkMode
                                ? "bg-purple-800 hover:bg-purple-700 text-white"
                                : "bg-purple-100 hover:bg-purple-300 text-purple-800"
                            }`}
              >
                <div className="flex-shrink-0 mb-4">
                  <Icon className={`w-16 h-16 ${darkMode ? "text-white" : "text-purple-700"}`} />
                </div>

                <div className="flex-grow">
                  <h3 className="text-2xl font-bold mb-2 leading-tight">{section.title}</h3>
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

        {/* Why Practice Here section BELOW the cards */}
        <div className="mt-20">
          <h3 className="text-xl sm:text-3xl md:text-3xl font-bold text-start mb-6">
            Why Practice Here?
          </h3>
          <ul className="space-y-4">
            <li>
              <strong>Structured Learning Path</strong><br />
              Our carefully crafted sections cater to all levels, whether you're just starting or preparing for high-stakes interviews. Each section progressively builds your skills.
            </li>
            <li>
              <strong>Real-World Interview Preparation</strong><br />
              Whether you're targeting service or product-based companies, the problems and algorithms you'll encounter here are reflective of real-world interview scenarios.
            </li>
            <li>
              <strong>In-Depth Problem Analysis</strong><br />
              Every problem comes with detailed explanations and insights, ensuring that you not only solve the problem but truly understand the underlying concepts.
            </li>
          </ul>

          <p className="mt-4">
            <strong>Start Practicing Now</strong> and take your coding skills to the next level. With consistent practice and targeted learning,
            you'll be well-prepared for your next coding interview.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MainPracticePage;
