import { useState, type FC } from "react";
import { faqData, type FAQ } from "../data/faqData";

// Props for FAQItem component
interface FAQItemProps {
  question: string;
  answer: string;
  darkMode: boolean;
}

const FAQItem: FC<FAQItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={`mb-4 rounded-lg border shadow-sm transition-colors ${
        isOpen ? "bg-gray-50 " : "bg-white "
      }`}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-full px-4 py-4 text-left transition-colors duration-200 cursor-pointer"
      >
        {/* Question text */}
        <span
          className={`${
            isOpen
              ? "text-[#6334B9] font-bold"
              : "text-gray-700 dark:text-gray-800 hover:text-[#6334B9] font-medium"
          }`}
        >
          {question}
        </span>

        {/* Expand/Collapse icon */}
        <span className="text-[#6334B9]">{isOpen ? "−" : "+"}</span>
      </button>

      {/* Answer */}
      {isOpen && (
        <div className="px-4 pb-4 text-gray-800 text-sm sm:text-base">
          {answer}
        </div>
      )}
    </div>
  );
};

interface FrequentlyAskedQuestionsProps {
  darkMode: boolean;
}

const FrequentlyAskedQuestions: FC<FrequentlyAskedQuestionsProps> = ({ darkMode }) => {
  return (
    <div className={`max-w-6xl mx-auto px-4 py-12`}>
      <h2 className={`text-2xl sm:text-3xl md:text-4xl font-bold mb-10 text-left ${darkMode ? "text-white" : "text-black" }`}>
        Frequently Asked Questions
      </h2>
      <div>
        {faqData.map((faq: FAQ) => (
          <FAQItem key={faq.id} question={faq.question} answer={faq.answer} darkMode={darkMode} />
        ))}
      </div>
    </div>
  );
};

export default FrequentlyAskedQuestions;
