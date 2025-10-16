

import { useState,useMemo, type FC } from "react";
import { Search } from "lucide-react";

// --- TYPE DEFINITIONS ---
// Define the structure for a single question object
interface Question {
  id: number;
  title: string;
  category: string;
  difficulty: "Easy" | "Medium" | "Hard"; // Strictly typed difficulty
  solved: boolean;
  link: string;
}

// Define the component's expected props (it takes `darkMode` as a boolean)
interface Blind75Props {
  darkMode: boolean;
}

const initialQuestions: Question[] = [
  // --- Arrays & Hashing ---
  { id: 9, title: "Contains Duplicate", category: "Arrays & Hashing", difficulty: "Easy", solved: false, link: "https://leetcode.com/problems/contains-duplicate/" },
  { id: 10, title: "Valid Anagram", category: "Arrays & Hashing", difficulty: "Easy", solved: false, link: "https://leetcode.com/problems/valid-anagram/" },
  { id: 11, title: "Two Sum", category: "Arrays & Hashing", difficulty: "Easy", solved: false, link: "https://leetcode.com/problems/two-sum/" },
  { id: 12, title: "Group Anagrams", category: "Arrays & Hashing", difficulty: "Medium", solved: false, link: "https://leetcode.com/problems/group-anagrams/" },
  { id: 13, title: "Top K Frequent Elements", category: "Arrays & Hashing", difficulty: "Medium", solved: false, link: "https://leetcode.com/problems/top-k-frequent-elements/" },
  { id: 14, title: "Encode and Decode Strings", category: "Arrays & Hashing", difficulty: "Medium", solved: false, link: "https://leetcode.com/problems/encode-and-decode-strings/" },
  { id: 15, title: "Product of Array Except Self", category: "Arrays & Hashing", difficulty: "Medium", solved: false, link: "https://leetcode.com/problems/product-of-array-except-self/" },
  { id: 16, title: "Longest Consecutive Sequence", category: "Arrays & Hashing", difficulty: "Medium", solved: false, link: "https://leetcode.com/problems/longest-consecutive-sequence/" },

  // --- Two Pointers ---
  { id: 17, title: "Valid Palindrome", category: "Two Pointers", difficulty: "Easy", solved: false, link: "https://leetcode.com/problems/valid-palindrome/" },
  { id: 18, title: "3sum", category: "Two Pointers", difficulty: "Medium", solved: false, link: "https://leetcode.com/problems/3sum/" },
  { id: 19, title: "Container With Most Water", category: "Two Pointers", difficulty: "Medium", solved: false, link: "https://leetcode.com/problems/container-with-most-water/" },

  // --- Sliding Window ---
  { id: 20, title: "Best Time To Buy And Sell Stock", category: "Sliding Window", difficulty: "Easy", solved: false, link: "https://leetcode.com/problems/best-time-to-buy-and-sell-stock/" },
  { id: 21, title: "Longest Substring Without Repeating Characters", category: "Sliding Window", difficulty: "Medium", solved: false, link: "https://leetcode.com/problems/longest-substring-without-repeating-characters/" },
  { id: 22, title: "Longest Repeating Character Replacement", category: "Sliding Window", difficulty: "Medium", solved: false, link: "https://leetcode.com/problems/longest-repeating-character-replacement/" },
  { id: 23, title: "Minimum Window Substring", category: "Sliding Window", difficulty: "Hard", solved: false, link: "https://leetcode.com/problems/minimum-window-substring/" },

  // --- Stack ---
  { id: 24, title: "Valid Parentheses", category: "Stack", difficulty: "Easy", solved: false, link: "https://leetcode.com/problems/valid-parentheses/" },

  // --- Binary Search ---
  { id: 25, title: "Find Minimum In Rotated Sorted Array", category: "Binary Search", difficulty: "Medium", solved: false, link: "https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/" },
  { id: 26, title: "Search In Rotated Sorted Array", category: "Binary Search", difficulty: "Medium", solved: false, link: "https://leetcode.com/problems/search-in-rotated-sorted-array/" },

  // --- Linked List ---
  { id: 27, title: "Reverse Linked List", category: "Linked List", difficulty: "Easy", solved: false, link: "https://leetcode.com/problems/reverse-linked-list/" },
  { id: 28, title: "Merge Two Sorted Lists", category: "Linked List", difficulty: "Easy", solved: false, link: "https://leetcode.com/problems/merge-two-sorted-lists/" },
  { id: 29, title: "Linked List Cycle", category: "Linked List", difficulty: "Easy", solved: false, link: "https://leetcode.com/problems/linked-list-cycle/" },
  { id: 31, title: "Reorder List", category: "Linked List", difficulty: "Medium", solved: false, link: "https://leetcode.com/problems/reorder-list/" },
  { id: 32, title: "Remove Nth Node From End of List", category: "Linked List", difficulty: "Medium", solved: false, link: "https://leetcode.com/problems/remove-nth-node-from-end-of-list/" },
  { id: 33, title: "Merge K Sorted Lists", category: "Linked List", difficulty: "Hard", solved: false, link: "https://leetcode.com/problems/merge-k-sorted-lists/" },

  // --- Trees ---
  { id: 34, title: "Invert Binary Tree", category: "Trees", difficulty: "Easy", solved: false, link: "https://leetcode.com/problems/invert-binary-tree/" },
  { id: 35, title: "Maximum Depth of Binary Tree", category: "Trees", difficulty: "Easy", solved: false, link: "https://leetcode.com/problems/maximum-depth-of-binary-tree/" },
  { id: 36, title: "Same Tree", category: "Trees", difficulty: "Easy", solved: false, link: "https://leetcode.com/problems/same-tree/" },
  { id: 37, title: "Subtree of Another Tree", category: "Trees", difficulty: "Easy", solved: false, link: "https://leetcode.com/problems/subtree-of-another-tree/" },
  { id: 38, title: "Lowest Common Ancestor of a Binary Search Tree", category: "Trees", difficulty: "Medium", solved: false, link: "https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/" },
  { id: 39, title: "Binary Tree Level Order Traversal", category: "Trees", difficulty: "Medium", solved: false, link: "https://leetcode.com/problems/binary-tree-level-order-traversal/" },
  { id: 40, title: "Validate Binary Search Tree", category: "Trees", difficulty: "Medium", solved: false, link: "https://leetcode.com/problems/validate-binary-search-tree/" },
  { id: 41, title: "Kth Smallest Element In a Bst", category: "Trees", difficulty: "Medium", solved: false, link: "https://leetcode.com/problems/kth-smallest-element-in-a-bst/" },
  { id: 42, title: "Construct Binary Tree From Preorder And Inorder Traversal", category: "Trees", difficulty: "Medium", solved: false, link: "https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/" },
  { id: 43, title: "Binary Tree Maximum Path Sum", category: "Trees", difficulty: "Hard", solved: false, link: "https://leetcode.com/problems/binary-tree-maximum-path-sum/" },
  { id: 44, title: "Serialize And Deserialize Binary Tree", category: "Trees", difficulty: "Hard", solved: false, link: "https://leetcode.com/problems/serialize-and-deserialize-binary-tree/" },

  // --- Heap / Priority Queue ---
  { id: 45, title: "Find Median from Data Stream", category: "Heap / Priority Queue", difficulty: "Hard", solved: false, link: "https://leetcode.com/problems/find-median-from-data-stream/" },

  // --- Backtracking ---
  { id: 46, title: "Combination Sum", category: "Backtracking", difficulty: "Medium", solved: false, link: "https://leetcode.com/problems/combination-sum/" },
  { id: 47, title: "Word Search", category: "Backtracking", difficulty: "Medium", solved: false, link: "https://leetcode.com/problems/word-search/" },

  // --- Tries ---
  { id: 48, title: "Implement Trie Prefix Tree", category: "Tries", difficulty: "Medium", solved: false, link: "https://leetcode.com/problems/implement-trie-prefix-tree/" },
  { id: 49, title: "Design Add And Search Words Data Structure", category: "Tries", difficulty: "Medium", solved: false, link: "https://leetcode.com/problems/design-add-and-search-words-data-structure/" },
  { id: 50, title: "Word Search II", category: "Tries", difficulty: "Hard", solved: false, link: "https://leetcode.com/problems/word-search-ii/" },

  // --- Graphs ---
  { id: 51, title: "Number of Islands", category: "Graphs", difficulty: "Medium", solved: false, link: "https://leetcode.com/problems/number-of-islands/" },
  { id: 52, title: "Clone Graph", category: "Graphs", difficulty: "Medium", solved: false, link: "https://leetcode.com/problems/clone-graph/" },
  { id: 53, title: "Pacific Atlantic Water Flow", category: "Graphs", difficulty: "Medium", solved: false, link: "https://leetcode.com/problems/pacific-atlantic-water-flow/" },
  { id: 54, title: "Course Schedule", category: "Graphs", difficulty: "Medium", solved: false, link: "https://leetcode.com/problems/course-schedule/" },
  { id: 55, title: "Graph Valid Tree", category: "Graphs", difficulty: "Medium", solved: false, link: "https://leetcode.com/problems/graph-valid-tree/" },
  { id: 56, title: "Number of Connected Components In An Undirected Graph", category: "Graphs", difficulty: "Medium", solved: false, link: "https://www.geeksforgeeks.org/problems/number-of-connected-components-in-an-undirected-graph/1", },
  { id: 57, title: "Alien Dictionary", category: "Graphs", difficulty: "Hard", solved: false, link: "https://www.geeksforgeeks.org/given-a-sorted-dictionary-of-an-alien-language-find-order-of-characters/", },

  // --- 1-D Dynamic Programming ---
  { id: 58, title: "Climbing Stairs", category: "1-D Dynamic Programming", difficulty: "Easy", solved: false, link: "https://leetcode.com/problems/climbing-stairs/" },
  { id: 59, title: "House Robber", category: "1-D Dynamic Programming", difficulty: "Medium", solved: false, link: "https://leetcode.com/problems/house-robber/" },
  { id: 60, title: "House Robber II", category: "1-D Dynamic Programming", difficulty: "Medium", solved: false, link: "https://leetcode.com/problems/house-robber-ii/", },
  { id: 61, title: "Longest Palindromic Substring", category: "1-D Dynamic Programming", difficulty: "Medium", solved: false, link: "https://leetcode.com/problems/longest-palindromic-substring/", },
  { id: 62, title: "Palindromic Substrings", category: "1-D Dynamic Programming", difficulty: "Medium", solved: false, link: "https://leetcode.com/problems/palindromic-substrings/", },
  { id: 63, title: "Decode Ways", category: "1-D Dynamic Programming", difficulty: "Medium", solved: false, link: "https://leetcode.com/problems/decode-ways/" },
  { id: 64, title: "Coin Change", category: "1-D Dynamic Programming", difficulty: "Medium", solved: false, link: "https://leetcode.com/problems/coin-change/" },
  { id: 65, title: "Maximum Product Subarray", category: "1-D Dynamic Programming", difficulty: "Medium", solved: false, link: "https://leetcode.com/problems/maximum-product-subarray/", },
  { id: 66, title: "Word Break", category: "1-D Dynamic Programming", difficulty: "Medium", solved: false, link: "https://leetcode.com/problems/word-break/" },
  { id: 67, title: "Longest Increasing Subsequence", category: "1-D Dynamic Programming", difficulty: "Medium", solved: false, link: "https://leetcode.com/problems/longest-increasing-subsequence/", },

  // --- 2-D Dynamic Programming ---
  { id: 68, title: "Unique Paths", category: "2-D Dynamic Programming", difficulty: "Medium", solved: false, link: "https://leetcode.com/problems/unique-paths/" },
  { id: 69, title: "Longest Common Subsequence", category: "2-D Dynamic Programming", difficulty: "Medium", solved: false, link: "https://leetcode.com/problems/longest-common-subsequence/", },

  // --- Greedy ---
  { id: 70, title: "Maximum Subarray", category: "Greedy", difficulty: "Medium", solved: false, link: "https://leetcode.com/problems/maximum-subarray/" },
  { id: 71, title: "Jump Game", category: "Greedy", difficulty: "Medium", solved: false, link: "https://leetcode.com/problems/jump-game/" },

  // --- Intervals ---
  { id: 80, title: "Merge Intervals", category: "Intervals", difficulty: "Medium", solved: false, link: "https://leetcode.com/problems/merge-intervals/" },
  { id: 81, title: "Insert Interval", category: "Intervals", difficulty: "Medium", solved: false, link: "https://leetcode.com/problems/insert-interval/" },
  { id: 82, title: "Non-overlapping Intervals", category: "Intervals", difficulty: "Medium", solved: false, link: "https://leetcode.com/problems/non-overlapping-intervals/", },
  { id: 83, title: "Meeting Rooms", category: "Intervals", difficulty: "Easy", solved: false, link: "https://leetcode.com/problems/meeting-rooms/" },
  { id: 84, title: "Meeting Rooms II", category: "Intervals", difficulty: "Medium", solved: false, link: "https://leetcode.com/problems/meeting-rooms-ii/" },

  // --- Math & Geometry ---
  { id: 85, title: "Rotate Image", category: "Math & Geometry", difficulty: "Medium", solved: false, link: "https://leetcode.com/problems/rotate-image/" },
  { id: 86, title: "Set Matrix Zeros", category: "Math & Geometry", difficulty: "Medium", solved: false, link: "https://leetcode.com/problems/set-matrix-zeroes/" },
  { id: 87, title: "Pascal's Triangle", category: "Math & Geometry", difficulty: "Easy", solved: false, link: "https://leetcode.com/problems/pascals-triangle/" },

  // --- Bit Manipulation ---
  { id: 89, title: "Number of 1 Bits", category: "Bit Manipulation", difficulty: "Easy", solved: false, link: "https://leetcode.com/problems/number-of-1-bits/" },
  { id: 1, title: "Counting Bits", category: "Bit Manipulation", difficulty: "Easy", solved: false, link: "https://leetcode.com/problems/counting-bits/" },
  { id: 2, title: "Reverse Bits", category: "Bit Manipulation", difficulty: "Easy", solved: false, link: "https://leetcode.com/problems/reverse-bits/" },
  { id: 3, title: "Missing Number", category: "Bit Manipulation", difficulty: "Easy", solved: false, link: "https://leetcode.com/problems/missing-number/" },
  { id: 7, title: "Sum of Two Integers", category: "Bit Manipulation", difficulty: "Medium", solved: false, link: "https://leetcode.com/problems/sum-of-two-integers/" },
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

const Blind75: FC<Blind75Props> = ({ darkMode }) => {
  const [questionsList, setQuestionsList] = useState<Question[]>(() =>
    initialQuestions.map((q) => ({ ...q, solved: false }))
  );
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);
  const [selectedDifficulty] = useState<string | null>(null);
  const [categorySearchTerm, setCategorySearchTerm] = useState<string>("");
  const [problemSearchTerm, setProblemSearchTerm] = useState<string>("");

  const handleCheckboxChange = (id: number): void => {
    setQuestionsList((prevList) =>
      prevList.map((q) => (q.id === id ? { ...q, solved: !q.solved } : q))
    );
  };

  const filteredCategories: string[] = allCategories.filter((cat: string) =>
    cat.toLowerCase().includes(categorySearchTerm.toLowerCase())
  );

  const filteredQuestions: Question[] = questionsList.filter((q: Question) => {
    const matchesCategory =
      !expandedCategory || q.category === expandedCategory;
    const matchesDifficulty =
      !selectedDifficulty || q.difficulty === selectedDifficulty;
    const matchesSearchTerm =
      !problemSearchTerm ||
      q.title.toLowerCase().includes(problemSearchTerm.toLowerCase());

    return matchesCategory && matchesDifficulty && matchesSearchTerm;
  });

  const totalQuestions: number = questionsList.length;
  const solvedQuestions: number = questionsList.filter((q) => q.solved).length;
  const completionPercentage: number = useMemo(() =>
    totalQuestions > 0
      ? Math.round((solvedQuestions / totalQuestions) * 100)
      : 0,
    [solvedQuestions, totalQuestions]
  );

  const difficultyStats: { [key: string]: { total: number; solved: number } } = useMemo(() => ({
    Easy: {
      total: questionsList.filter((q) => q.difficulty === "Easy").length,
      solved: questionsList.filter((q) => q.difficulty === "Easy" && q.solved).length,
    },
    Medium: {
      total: questionsList.filter((q) => q.difficulty === "Medium").length,
      solved: questionsList.filter((q) => q.difficulty === "Medium" && q.solved).length,
    },
    Hard: {
      total: questionsList.filter((q) => q.difficulty === "Hard").length,
      solved: questionsList.filter((q) => q.difficulty === "Hard" && q.solved).length,
    },
  }), [questionsList]);


  const difficultyColors: { [key: string]: string } = {
    Easy: "#22C55E", // Green
    Medium: "#FACC15",
    Hard: "#EF4444", // Red
  };

  const getDifficultyColorClass = (difficulty: string): string => {
    switch (difficulty) {
      case "Easy":
        return darkMode
          ? "bg-green-900 text-green-300"
          : "bg-green-100 text-green-700";
      case "Medium":
        // Fixed the class names to use orange for medium (matching the map)
        return darkMode
          ? "bg-yellow-100 text-yellow-700"
          : "bg-yellow-400 text-yellow-700";
      case "Hard":
        return darkMode ? "bg-red-900 text-red-300" : "bg-red-100 text-red-700";
      default:
        return darkMode
          ? "bg-gray-700 text-gray-300"
          : "bg-gray-200 text-gray-800";
    }
  };

  const getCategoryColorClass = (category: string): string => {
    // Corrected switch block: removed redundant 'break;' which is invalid after 'return'.
    switch (category) {
      case "Arrays & Hashing":
        return darkMode
          ? "bg-purple-900 text-purple-200"
          : "bg-purple-100 text-purple-700";
      case "Two Pointers":
        return darkMode
          ? "bg-blue-900 text-blue-200"
          : "bg-blue-100 text-blue-700";
      case "Sliding Window":
        return darkMode
          ? "bg-pink-900 text-pink-200"
          : "bg-pink-100 text-pink-700";
      case "Stack":
        return darkMode
          ? "bg-yellow-900 text-yellow-200"
          : "bg-yellow-100 text-yellow-700";
      case "Binary Search":
        return darkMode
          ? "bg-blue-900 text-blue-200"
          : "bg-blue-100 text-blue-700";
      case "Linked List":
        return darkMode
          ? "bg-purple-900 text-purple-200"
          : "bg-purple-100 text-purple-700";
      case "Trees":
        return darkMode
          ? "bg-yellow-900 text-yellow-200"
          : "bg-yellow-100 text-yellow-700";
      case "BST":
        return darkMode
          ? "bg-yellow-900 text-yellow-200"
          : "bg-yellow-100 text-yellow-700";
      case "Heap / Priority Queue":
        return darkMode
          ? "bg-pink-900 text-teal-200"
          : "bg-pink-100 text-pink-700";
      case "Backtracking":
        return darkMode ? "bg-red-900 text-red-200" : "bg-red-100 text-red-700";
      case "Tries":
        return darkMode
          ? "bg-pink-900 text-pink-200"
          : "bg-pink-100 text-pink-700";
      case "Graphs":
        return darkMode
          ? "bg-blue-900 text-blue-200"
          : "bg-blue-100 text-blue-700";
      case "Advanced Graphs":
        return darkMode ? "bg-red-900 text-red-200" : "bg-red-100 text-red-700";
      case "1-D Dynamic Programming":
        return darkMode
          ? "bg-purple-900 text-purple-200"
          : "bg-purple-100 text-purple-700";
      case "2-D Dynamic Programming":
        return darkMode
          ? "bg-purple-900 text-purple-200"
          : "bg-purple-100 text-purple-700";
      case "Greedy":
        return darkMode
          ? "bg-pink-900 text-pink-200"
          : "bg-pink-100 text-pink-700";
      case "Intervals":
        return darkMode ? "bg-red-900 text-red-200" : "bg-red-100 text-red-700";
      case "Math & Geometry":
        return darkMode
          ? "bg-gray-700 text-gray-200"
          : "bg-gray-200 text-gray-800";
      case "Bit Manipulation":
        return darkMode
          ? "bg-pink-900 text-pink-200"
          : "bg-pink-100 text-pink-700";
      default:
        return darkMode
          ? "bg-gray-900 text-gray-200"
          : "bg-gray-100 text-gray-700";
    }
  };

  const getCategoryProgress = (category: string): string => {
    const categoryQuestions = questionsList.filter(
      (q) => q.category === category
    );
    const solvedCount = categoryQuestions.filter((q) => q.solved).length;
    const totalCount = categoryQuestions.length;
    return `(${solvedCount}/${totalCount})`;
  };

  return (
    <div
      className={`flex flex-col md:flex-row min-h-screen transition-colors duration-500 pt-20 ${darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"}`}
    >
      {/* Sidebar */}
      <div
        className={`w-full md:w-72 border-b md:border-b-0 mt-6 md:border-r p-4 transition-colors duration-500${darkMode ? "bg-gray-800 border-gray-700" : "bg-white border-gray-200"}`}
      >
        <h1 className="text-lg font-bold mb-4">Filters</h1>
        <div className="relative mb-6">
          <Search
            className={`absolute left-3 top-2.5 w-4 h-4 ${darkMode ? "text-[#6334B9]" : "text-[#6334B9]"}`}
          />
          <input
            type="text"
            placeholder="Search category..."
            className={`w-full pl-9 pr-3 py-2 rounded-md text-sm outline-none transition-colors duration-300 ${darkMode
             ? "bg-gray-700 border border-[#6334B9] text-white focus:ring-2 focus:ring-[#6334B9]"
              : "bg-purple-50 border border-[#6334B9] text-black focus:ring-2 focus:ring-[#6334B9]"
              }`}
            value={categorySearchTerm}
            onChange={(e) => setCategorySearchTerm(e.target.value)}
          />
        </div>
        <h2 className="font-semibold text-base mb-3">Category</h2>
        <ul className="space-y-3">
          {filteredCategories.map((cat) => (
            <li key={cat}>
              <div
                className={`flex items-center justify-between space-x-2 cursor-pointer p-2 rounded-md ${expandedCategory === cat
                  ? darkMode
                    ? "bg-gray-700"
                    : "bg-gray-100"
                  : darkMode
                    ? "hover:bg-gray-700"
                    : "hover:bg-gray-100"
                  }`}
                onClick={() =>
                  setExpandedCategory(expandedCategory === cat ? null : cat)
                }
              >
                <span
                  className={`font-medium ${expandedCategory === cat
                    ? "text-purple-800"
                    : darkMode
                      ? "text-gray-200"
                      : "text-gray-800"
                    }`}
                >
                  {cat}
                </span>
                <span
                  className={`text-xs font-medium ${darkMode ? "text-gray-400" : "text-gray-600"
                    }`}
                >
                  {getCategoryProgress(cat)}
                </span>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* Right Content */}
      <div className="flex-1 p-4 sm:p-6">
        {/* Progress Section */}
        <div
          className={`p-4 sm:p-6 rounded-lg mb-6 shadow-md transition-colors duration-500 ${darkMode ? "bg-gray-800 text-white" : "bg-gray-100 text-gray-900"}`}
        >
          <div className="flex flex-col sm:flex-row items-center sm:justify-between mb-4 gap-4 sm:gap-0">
            <h2 className="text-xl font-bold">Progress</h2>
          </div>
          <div className="flex flex-col sm:flex-row items-center sm:items-start sm:space-x-6 gap-4">
            {/* Total Progress */}
            <div className="flex flex-col items-start min-w-[120px]">
              <span className="text-2xl font-bold">
                {solvedQuestions} / {totalQuestions}
              </span>
              <p className={`text-sm ${darkMode ? "text-gray-400" : "text-gray-800"}`}>
                Total Progress
              </p>
            </div>

            {/* Circle */}
            <div className="relative w-20 h-20 flex-shrink-0 -translate-y-2 -translate-x-12">
              <svg
                viewBox="0 0 80 80"
                className="w-full h-full transform -rotate-90"
              >
                <circle
                  className={`stroke-current ${darkMode ? "text-gray-700" : "text-gray-300"}`}
                  strokeWidth="6"
                  fill="transparent"
                  r="30"
                  cx="40"
                  cy="40"
                />

                {/* Progress Circle */}
                <circle
                  className="stroke-current text-[#6334B9]"
                  strokeWidth="6"
                  strokeDasharray={30 * 2 * Math.PI}
                  strokeDashoffset={
                    30 * 2 * Math.PI - (completionPercentage / 100) * (30 * 2 * Math.PI)
                  }
                  strokeLinecap="round"
                  fill="transparent"
                  r="30"
                  cx="40"
                  cy="40"
                />
              </svg>

              {/* Center Percentage Text */}
              <span
                className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-bold text-lg ${darkMode ? "text-white" : "text-gray-900"
                  }`}
              >
                {completionPercentage}%
              </span>
            </div>



            {/* Difficulty Bars */}
            <div className="flex flex-col sm:flex-row flex-wrap sm:space-x-6 w-full">
              {Object.keys(difficultyStats).map((diff: string) => (
                <div
                  key={diff}
                  className="flex-1 flex flex-col items-center px-2 sm:px-6 border-l border-gray-700 first:border-l-0 mb-3 sm:mb-0"
                >
                  <span className={`font-semibold ${darkMode ? "text-gray-300" : "text-gray-900"}`}>
                    {diff}
                  </span>
                  <p className={`text-sm ${darkMode ? "text-gray-400" : "text-gray-800"}`}>
                    {difficultyStats[diff].solved} / {difficultyStats[diff].total} completed
                  </p>
                  <div className={`w-full h-2 mt-1 rounded-full overflow-hidden ${darkMode ? "bg-gray-700" : "bg-gray-300"}`}>
                    <div
                      className={`h-full rounded-full`}
                      style={{
                        width: `${(difficultyStats[diff].solved / (difficultyStats[diff].total || 1)) * 100}%`,
                        backgroundColor: difficultyColors[diff],
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Practice Problems */}
        <h2 className="text-2xl font-bold mb-4">Practice Problems</h2>
        <div className="relative mb-4 w-full sm:w-1/2">
          <Search
            className={`absolute left-3 top-2.5 w-4 h-4 ${darkMode ? "text-[#6334B9]" : "text-[#6334B9]"}`}
          />
          <input
            type="text"
            placeholder="Search problems..."
            className={`w-full pl-9 pr-3 py-2 rounded-md text-sm outline-none transition-colors duration-300 ${darkMode
              ? "bg-gray-700 border border-[#6334B9] text-white focus:ring-2 focus:ring-[#6334B9]"
              : "bg-purple-50 border border-[#6334B9] text-black focus:ring-2 focus:ring-[#6334B9]"
              }`}
            value={problemSearchTerm}
            onChange={(e) => setProblemSearchTerm(e.target.value)}
          />
        </div>
        {filteredQuestions.length === 0 ? (
          <p className={`text-gray-500 ${darkMode ? "text-gray-400" : ""}`}>
            No problems found for the selected filters.
          </p>
        ) : (
          <div className="overflow-x-auto">
            <table className={`w-full border rounded-lg transition-colors duration-500 ${darkMode ? "border-gray-700" : "border-gray-200"}`}>
              <thead className={darkMode ? "bg-gray-700" : "bg-gray-100"}>
                <tr>
                  <th className="p-3 text-left">Status</th>
                  <th className="p-3 text-left">Problem Title</th>
                  <th className="p-3 text-left">Category</th>
                  <th className="p-3 text-left">Difficulty</th>
                </tr>
              </thead>
              <tbody>
                {filteredQuestions.map((q: Question) => (
                  <tr
                    key={q.id}
                    className={`border-t ${darkMode ? "border-gray-700 hover:bg-gray-800" : "border-gray-200 hover:bg-gray-50"}`}
                  >
                    <td className="p-3">
                      <input
                        type="checkbox"
                        checked={q.solved}
                        onChange={() => handleCheckboxChange(q.id)}
                        className="w-4 h-4 text-#6334B9 bg-gray-100 border-gray-300 rounded focus:ring-purple-500 dark:bg-gray-600 dark:border-gray-500 dark:checked:bg-purple-600 dark:focus:ring-purple-400"
                      />
                    </td>
                    <td className="p-3">
                      <a
                        href={q.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`font-medium ${darkMode ? "text-gray-200 hover:text-[#6334B9] " : "text-gray-900 hover:text-[#6334B9] "}`}
                      >
                        {q.title}
                      </a>
                    </td>
                    <td className="p-3">
                      <span className={`px-2 py-1 text-sm rounded-full ${getCategoryColorClass(q.category)}`}>
                        {q.category}
                      </span>
                    </td>
                    <td className="p-3">
                      <span className={`px-2 py-1 text-sm rounded-full ${getDifficultyColorClass(q.difficulty)}`}>
                        {q.difficulty}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>

  );
}

export default Blind75;