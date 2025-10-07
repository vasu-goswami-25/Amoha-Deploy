import { useState, type ChangeEvent } from "react";
import { Search } from "lucide-react";

interface Question {
  id: number;
  title: string;
  category: string;
  difficulty: "Easy" | "Medium" | "Hard";
  solved: boolean;
  link: string;
}

interface Blind75Props {
  darkMode: boolean;
}

const initialQuestions: Question[] = [
  // Example entries, make sure all IDs are unique
  {
    id: 1,
    title: "Contains Duplicate",
    category: "Arrays & Hashing",
    difficulty: "Easy",
    solved: false,
    link: "https://leetcode.com/problems/contains-duplicate/",
  },
  {
    id: 2,
    title: "Valid Anagram",
    category: "Arrays & Hashing",
    difficulty: "Easy",
    solved: false,
    link: "https://leetcode.com/problems/valid-anagram/",
  },
  // ... add the rest of your questions, ensure unique IDs
];

const allCategories: string[] = [
  "Arrays & Hashing",
  "Two Pointers",
  "Sliding Window",
  "Stack",
  "Binary Search",
  "Linked List",
  "Trees",
  "Heap / Priority Queue",
  "Backtracking",
  "Tries",
  "Graphs",
  "1-D Dynamic Programming",
  "2-D Dynamic Programming",
  "Greedy",
  "Intervals",
  "Math & Geometry",
  "Bit Manipulation",
];

const Blind75: React.FC<Blind75Props> = ({ darkMode }) => {
  const [questionsList, setQuestionsList] = useState<Question[]>(() =>
    initialQuestions.map((q) => ({ ...q, solved: false }))
  );
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);
  const [selectedDifficulty] = useState<string | null>(null);
  const [categorySearchTerm, setCategorySearchTerm] = useState("");
  const [problemSearchTerm, setProblemSearchTerm] = useState("");

  const handleCheckboxChange = (id: number) => {
    setQuestionsList((prevList) =>
      prevList.map((q) => (q.id === id ? { ...q, solved: !q.solved } : q))
    );
  };

  const filteredCategories = allCategories.filter((cat) =>
    cat.toLowerCase().includes(categorySearchTerm.toLowerCase())
  );

  const filteredQuestions = questionsList.filter((q) => {
    const matchesCategory = !expandedCategory || q.category === expandedCategory;
    const matchesDifficulty = !selectedDifficulty || q.difficulty === selectedDifficulty;
    const matchesSearchTerm =
      !problemSearchTerm || q.title.toLowerCase().includes(problemSearchTerm.toLowerCase());

    return matchesCategory && matchesDifficulty && matchesSearchTerm;
  });

  const totalQuestions = questionsList.length;
  const solvedQuestions = questionsList.filter((q) => q.solved).length;
  const completionPercentage =
    totalQuestions > 0 ? Math.round((solvedQuestions / totalQuestions) * 100) : 0;

//yaha se comment kiya hai............................

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  // const difficultyStats = {
  //   Easy: {
  //     total: questionsList.filter((q) => q.difficulty === "Easy").length,
  //     solved: questionsList.filter((q) => q.difficulty === "Easy" && q.solved).length,
  //   },
  //   Medium: {
  //     total: questionsList.filter((q) => q.difficulty === "Medium").length,
  //     solved: questionsList.filter((q) => q.difficulty === "Medium" && q.solved).length,
  //   },
  //   Hard: {
  //     total: questionsList.filter((q) => q.difficulty === "Hard").length,
  //     solved: questionsList.filter((q) => q.difficulty === "Hard" && q.solved).length,
  //   },
  // };

  

// yaha tak se comment kiya hai........................ first vala code

///yaha se maine kiya hai changes second comment kiya hai neeche tak......

//   // eslint-disable-next-line @typescript-eslint/no-unused-vars
//   const difficultyColors: Record<string, string> = {
//     Easy: "#22C55E",
//     Medium: "#F97316",
//     Hard: "#EF4444",
//   };

// /**
//  * Returns a Tailwind CSS class string representing the background and text color
//  * for a given difficulty.
//  *
//  * If darkMode is true, the returned class string will represent a dark theme.
//  * If darkMode is false, the returned class string will represent a light theme.
//  *
//  * @param {string} difficulty - One of "Easy", "Medium", or "Hard".
//  * @returns {string} A Tailwind CSS class string representing the background and text color.
//  */
//   const getDifficultyColorClass = (difficulty: string) => {
//     switch (difficulty) {
//       case "Easy":
//         return darkMode ? "bg-green-900 text-green-300" : "bg-green-100 text-green-700";
//       case "Medium":
//         return darkMode ? "bg-pink-900 text-pink-300" : "bg-pink-100 text-pink-700";
//       case "Hard":
//         return darkMode ? "bg-red-900 text-red-300" : "bg-red-100 text-red-700";
//       default:
//         return darkMode ? "bg-gray-700 text-gray-300" : "bg-gray-200 text-gray-800";
//     }
//   };
//ye maine kiya hai changes 


const difficultyColors: Record<string, string> = {
  Easy: "#22C55E",
  Medium: "#F97316",
  Hard: "#EF4444",
};

const getDifficultyColorClass = (difficulty: string) => {
  return difficultyColors[difficulty] || (darkMode ? "bg-gray-700 text-gray-300" : "bg-gray-200 text-gray-800");
};

//ye maine kiya hai changes yaha tak upar comment kiya hai code

  const categoryColors: Record<string, string> = {
    "Arrays & Hashing": darkMode ? "bg-purple-900 text-purple-200" : "bg-purple-100 text-purple-700",
    "Two Pointers": darkMode ? "bg-blue-900 text-blue-200" : "bg-blue-100 text-blue-700",
    "Sliding Window": darkMode ? "bg-pink-900 text-pink-200" : "bg-pink-100 text-pink-700",
    Stack: darkMode ? "bg-yellow-900 text-yellow-200" : "bg-yellow-100 text-yellow-700",
    "Binary Search": darkMode ? "bg-blue-900 text-blue-200" : "bg-blue-100 text-blue-700",
    "Linked List": darkMode ? "bg-purple-900 text-purple-200" : "bg-purple-100 text-purple-700",
    Trees: darkMode ? "bg-yellow-900 text-yellow-200" : "bg-yellow-100 text-yellow-700",
    BST: darkMode ? "bg-yellow-900 text-yellow-200" : "bg-yellow-100 text-yellow-700",
    "Heap / Priority Queue": darkMode ? "bg-pink-900 text-teal-200" : "bg-pink-100 text-pink-700",
    Backtracking: darkMode ? "bg-red-900 text-red-200" : "bg-red-100 text-red-700",
    Tries: darkMode ? "bg-pink-900 text-pink-200" : "bg-pink-100 text-pink-700",
    Graphs: darkMode ? "bg-blue-900 text-blue-200" : "bg-blue-100 text-blue-700",
    "Advanced Graphs": darkMode ? "bg-red-900 text-red-200" : "bg-red-100 text-red-700",
    "1-D Dynamic Programming": darkMode ? "bg-purple-900 text-purple-200" : "bg-purple-100 text-purple-700",
    "2-D Dynamic Programming": darkMode ? "bg-purple-900 text-purple-200" : "bg-purple-100 text-purple-700",
    Greedy: darkMode ? "bg-pink-900 text-pink-200" : "bg-pink-100 text-pink-700",
    Intervals: darkMode ? "bg-red-900 text-red-200" : "bg-red-100 text-red-700",
    "Math & Geometry": darkMode ? "bg-gray-700 text-gray-200" : "bg-gray-200 text-gray-800",
    "Bit Manipulation": darkMode ? "bg-pink-900 text-pink-200" : "bg-pink-100 text-pink-700",
  };

  const getCategoryColorClass = (category: string) => {
    return categoryColors[category] || (darkMode ? "bg-gray-900 text-gray-200" : "bg-gray-100 text-gray-700");
  };

  const getCategoryProgress = (category: string) => {
    const categoryQuestions = questionsList.filter((q) => q.category === category);
    const solvedCount = categoryQuestions.filter((q) => q.solved).length;
    return `(${solvedCount}/${categoryQuestions.length})`;
  };

  return (
    <div className={`flex min-h-screen transition-colors duration-500 pt-20 ${darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"}`}>
      {/* Sidebar */}
      <div className={`w-72 border-r p-4 transition-colors duration-500 ${darkMode ? "bg-gray-800 border-gray-700" : "bg-white border-gray-200"}`}>
        <h1 className="text-lg font-bold mb-4">Filters</h1>
        <div className="relative mb-6">
          <Search className={`absolute left-3 top-2.5 w-4 h-4 ${darkMode ? "text-purple-300" : "text-purple-500"}`} />
          <input
            type="text"
            placeholder="Search category..."
            className={`w-full pl-9 pr-3 py-2 rounded-md text-sm outline-none transition-colors duration-300 ${darkMode ? "bg-gray-700 border border-gray-600 text-white focus:ring-2 focus:ring-purple-400" : "bg-purple-50 border border-purple-200 text-black focus:ring-2 focus:ring-purple-500"}`}
            value={categorySearchTerm}
            onChange={(e: ChangeEvent<HTMLInputElement>) => setCategorySearchTerm(e.target.value)}
          />
        </div>
        <h2 className="font-semibold text-base mb-3">Category</h2>
        <ul className="space-y-3">
          {filteredCategories.map((cat) => (
            <li key={cat}>
              <div
                className={`flex items-center justify-between space-x-2 cursor-pointer p-2 rounded-md ${
                  expandedCategory === cat ? (darkMode ? "bg-gray-700" : "bg-purple-100") : ""
                }`}
                onClick={() => setExpandedCategory(expandedCategory === cat ? null : cat)}
              >
                <span className={`text-sm font-medium ${getCategoryColorClass(cat)}`}>{cat}</span>
                <span className="text-xs text-gray-400">{getCategoryProgress(cat)}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-4">
        <div className="mb-6">
          <h1 className="text-xl font-bold mb-2">Blind 75 Questions</h1>
          <div className="relative">
            <Search className={`absolute left-3 top-2.5 w-4 h-4 ${darkMode ? "text-purple-300" : "text-purple-500"}`} />
            <input
              type="text"
              placeholder="Search problem..."
              className={`w-full pl-9 pr-3 py-2 rounded-md text-sm outline-none transition-colors duration-300 ${darkMode ? "bg-gray-700 border border-gray-600 text-white focus:ring-2 focus:ring-purple-400" : "bg-purple-50 border border-purple-200 text-black focus:ring-2 focus:ring-purple-500"}`}
              value={problemSearchTerm}
              onChange={(e: ChangeEvent<HTMLInputElement>) => setProblemSearchTerm(e.target.value)}
            />
          </div>
        </div>

        {/* Progress Circle */}
        <div className="mb-6 flex items-center space-x-4">
          <svg className="w-20 h-20" viewBox="0 0 80 80">
            <circle cx="40" cy="40" r="30" stroke={darkMode ? "#374151" : "#E5E7EB"} strokeWidth="8" fill="none" />
            <circle
              cx="40"
              cy="40"
              r="30"
              stroke="#7C3AED"
              strokeWidth="8"
              fill="none"
              strokeDasharray={188.4}
              strokeDashoffset={188.4 - (188.4 * completionPercentage) / 100}
              strokeLinecap="round"
              transform="rotate(-90 40 40)"
            />
            <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" className="text-sm font-bold fill-current">
              {completionPercentage}%
            </text>
          </svg>
          <span>{solvedQuestions} / {totalQuestions} solved</span>
        </div>

        {/* Question List */}
        <div className="space-y-3">
          {filteredQuestions.map((q) => (
            <div key={q.id} className={`flex items-center justify-between p-3 rounded-md transition-colors duration-300 ${darkMode ? "bg-gray-800 hover:bg-gray-700" : "bg-gray-50 hover:bg-purple-50"}`}>
              <div className="flex items-center space-x-3">
                <input type="checkbox" checked={q.solved} onChange={() => handleCheckboxChange(q.id)} />
                <a href={q.link} target="_blank" rel="noopener noreferrer" className="text-sm font-medium hover:underline">
                  {q.title}
                </a>
                <span className={`px-2 py-0.5 text-xs font-semibold rounded ${getDifficultyColorClass(q.difficulty)}`}>
                  {q.difficulty}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blind75;
