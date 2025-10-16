import { type FC, useState } from "react";

// Type for Icon Props
interface IconProps {
  color: string;
}
interface WhyChooseAmohaProps {
  darkMode: boolean;
};

// Inline SVG Icons
const BinocularsIcon: FC<IconProps> = ({ color }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-8 h-8"
  >
    <path d="M7 12c-2.22 0-4-1.78-4-4S4.78 4 7 4s4 1.78 4 4c0 1.25-.57 2.36-1.46 3.12l-1.47 1.47a1 1 0 01-1.42 0L7 12z"></path>
    <path d="M17 12c-2.22 0-4-1.78-4-4s1.78-4 4-4 4 1.78 4 4c0 1.25-.57 2.36-1.46 3.12l-1.47 1.47a1 1 0 01-1.42 0L17 12z"></path>
    <path d="M12 2v20"></path>
  </svg>
);

const BoxSeamIcon: FC<IconProps> = ({ color }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-8 h-8"
  >
    <path d="M12.58 2.01l-10 4.5v12.5l10-4.5V14l4 2.5v-6.5l-4-2.5V2.01z"></path>
    <path d="M12.58 2.01l10 4.5v12.5l-10-4.5V14l-4 2.5v-6.5l4-2.5z"></path>
  </svg>
);

const BrightnessHighIcon: FC<IconProps> = ({ color }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    fill="none"
    stroke={color}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-8 h-8"
  >
    <circle cx="12" cy="12" r="5"></circle>
    <line x1="12" y1="1" x2="12" y2="3"></line>
    <line x1="12" y1="21" x2="12" y2="23"></line>
    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
    <line x1="1" y1="12" x2="3" y2="12"></line>
    <line x1="21" y1="12" x2="23" y2="12"></line>
    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
  </svg>
);

const CommandIcon: FC<IconProps> = ({ color }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    fill="none"
    stroke={color}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-8 h-8"
  >
    <path d="M18 3a3 3 0 00-3 3v12a3 3 0 003 3a3 3 0 003-3V6a3 3 0 00-3-3zM6 3a3 3 0 00-3 3v12a3 3 0 003 3a3 3 0 003-3V6a3 3 0 00-3-3z"></path>
    <path d="M12 21V3"></path>
  </svg>
);

const EaselIcon: FC<IconProps> = ({ color }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    fill="none"
    stroke={color}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-8 h-8"
  >
    <path d="M3.75 6.75l8.25-4.5 8.25 4.5v11.5l-8.25 4.5-8.25-4.5V6.75z"></path>
    <path d="M3.75 6.75L12 11.25l8.25-4.5"></path>
  </svg>
);

const MapIcon: FC<IconProps> = ({ color }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    fill="none"
    stroke={color}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-8 h-8"
  >
    <path d="M1 6L9 2l8 4-8 4L1 6z"></path>
    <path d="M1 18l8-4 8 4-8 4L1 18z"></path>
    <path d="M9 2v16"></path>
    <path d="M17 6v16"></path>
  </svg>
);

// Type for features
interface Feature {
  id: string;
  title: string;
  icon: FC<IconProps>;
  iconColor: string;
  description: string[];
}

const featuresData: Feature[] = [
  {
    id: "features-tab-1",
    title: "Expert-Led Learning",
    icon: BinocularsIcon,
    iconColor: "#0dcaf0",
    description: [
      "Tailored Teaching: Our instructors adapt their teaching methods to suit beginners and advanced learners alike, ensuring clarity and engagement.",
      "Mentorship Beyond Classes: Receive ongoing guidance, career advice, and support to help you achieve your goals beyond the course curriculum.",
      "Industry-Driven Insights: Learn cutting-edge techniques and technologies directly from professionals actively working in the field.",
    ],
  },
  {
    id: "features-tab-2",
    title: "Comprehensive Curriculum",
    icon: BoxSeamIcon,
    iconColor: "#6334B9",
    description: [
      "Beginner to Advanced: Our curriculum covers everything from foundational concepts to advanced topics, making it suitable for learners at all levels.",
      "Structured Modules: Courses are broken into easy-to-follow modules, ensuring a clear and progressive learning experience.",
      "Industry-Relevant Content: Stay ahead with a curriculum designed to meet the current demands of the tech and education sectors.",
    ],
  },
  {
    id: "features-tab-3",
    title: "Flexible Learning Modes",
    icon: BrightnessHighIcon,
    iconColor: "#20c997",
    description: [
      "Online or Offline Options: Choose between online classes for convenience or offline sessions for hands-on guidance.",
      "Self-Paced Learning: Access recorded sessions and course materials anytime, anywhere, to suit your schedule.",
      "Live Sessions: Interact with instructors during live classes to resolve queries in real-time.",
    ],
  },
  {
    id: "features-tab-4",
    title: "Practical, Hands-On Approach",
    icon: CommandIcon,
    iconColor: "#df1529",
    description: [
      "Real-World Projects: Work on industry-standard projects to gain practical experience and build an impressive portfolio.",
      "Interactive Exercises: Engage in coding challenges, case studies, and problem-solving sessions for a deeper understanding of concepts.",
      "Tools and Technologies: Gain proficiency with the latest tools and platforms used in professional environments.",
    ],
  },
  {
    id: "features-tab-5",
    title: "Personalized Support",
    icon: EaselIcon,
    iconColor: "#0d6efd",
    description: [
      "One-on-One Mentorship: Get individual attention to address your unique learning needs and challenges.",
      "Dedicated Q&A Support: Clear your doubts quickly with our responsive support team and discussion forums.",
      "Progress Tracking: Regular assessments and feedback help monitor your growth and focus on improvement areas.",
    ],
  },
  {
    id: "features-tab-6",
    title: "Career-Ready Skills",
    icon: MapIcon,
    iconColor: "#fd7e14",
    description: [
      "Job-Oriented Training: Acquire skills that align with industry requirements to boost your employability.",
      "Certification: Earn recognized certificates that add value to your resume and showcase your expertise.",
      "Interview Preparation: Enhance your job prospects with mock interviews, resume-building sessions, and career counseling.",
    ],
  },
];

const WhyChooseAmoha: FC<WhyChooseAmohaProps> = ({ darkMode }) => {
  const [activeTab, setActiveTab] = useState<string>("features-tab-1");

  const activeFeature = featuresData.find(
    (feature) => feature.id === activeTab
  );

  return (
    <div className={`${darkMode ? "bg-gray-900" : "bg-white"} py-12 px-6 font-sans mt-10 mb-10`}>
      <div className="max-w-7xl mx-auto text-center">
        <h2 className={`text-4xl md:text-5xl font-bold ${darkMode ? "text-white" : "text-gray-900"} mb-4`}>
          Why Choose Amoha?
        </h2>
        <p className="max-w-3xl mx-auto text-lg text-gray-500 mb-12">
          At Amoha, we are more than just an educational platform – we are your
          partners in growth and success. Here’s why thousands of learners trust
          us:
        </p>

        {/* Tabs */}
        <div className="max-w-6xl mx-auto ">
        <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-8">
          {featuresData.map((feature) => {
            const isActive = activeTab === feature.id;
            const IconComponent = feature.icon;
            return (
              <li key={feature.id} className="flex justify-center h-full">
                <button
                  onClick={() => setActiveTab(feature.id)}
                  className={`w-full flex flex-col items-center p-4 rounded-lg transition-all duration-300 transform cursor-pointer ${
                    isActive
                      ? "bg-[#6334B9] text-white shadow-lg scale-105"
                      : `${darkMode ? "bg-gray-800 border border-gray-600 text-gray-300" : "bg-white border border-gray-200 text-gray-600"} hover:bg-[#6334B9] hover:text-white`
                  }`}
                >
                  <div className="w-15 h-15 md:w-20 md:h-20 flex items-center justify-center rounded-full mb-2">
                    <IconComponent
                      color={isActive ? "#ffffff" : feature.iconColor}
                    />
                  </div>
                  <h4 className="text-sm md:text-base font-semibold text-center mt-2">
                    {feature.title}
                  </h4>
                </button>
              </li>
            );
          })}
        </ul>

        {/* Active Feature Content */}
        <div className={`${darkMode ? "bg-gray-800" : "bg-white"} rounded-lg shadow-inner p-6 text-left`}>
          {activeFeature && (
            <ul className="space-y-4">
              {activeFeature.description.map((item, index) => (
                <li key={index} className="flex items-start">
                  <svg
                    className="flex-shrink-0 w-6 h-6 text-[#6334B9] mt-1 mr-3"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <p className={`${darkMode ? "text-gray-300" : "text-gray-600"} leading-relaxed text-base`}>
                    {item}
                  </p>
                </li>
              ))}
            </ul>
          )}
        </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseAmoha;