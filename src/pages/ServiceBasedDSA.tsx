import React, { useState } from "react";
import { Search } from "lucide-react";

// --- Types ---
interface Problem {
  title: string;
}

interface Question {
  id: string;
  title: string;
  company: string;
  solved: boolean;
}

interface ServiceBasedDSAProps {
  darkMode?: boolean;
}

// --- Company Problems ---
const companyProblems: Record<string, Problem[]> = {
  TCS: [
    { title: "Two Sum" },
    { title: "Merge Intervals" },
    { title: "Valid Parentheses" },
    { title: "Reverse Linked List" },
    { title: "Valid Sudoku" },
    { title: "Surrounded Regions" },
    { title: "Graph Valid Tree" },
    { title: "Sliding Window Maximum" },
    { title: "Palindromic Substrings" },
    { title: "Dungeon Game" },
    { title: "Word Break" },
    { title: "Merge k Sorted Lists" },
    { title: "Trapping Rain Water II" },
    { title: "Evaluate Reverse Polish Notation" },
    { title: "Shortest Palindrome" },
    { title: "Minimum Genetic Mutation" },
    { title: "Detect Cycle in Graph" },
    { title: "Word Search II" },
    { title: "Pacific Atlantic Water Flow" },
    { title: "Word Ladder" },
    { title: "Minimum Number of Arrows to Burst Balloons" },
    { title: "Best Time to Buy and Sell Stock" },
    { title: "Decode Ways" },
    { title: "Minimum Path Sum" },
    { title: "Combination Sum II" },
    { title: "Find K Pairs with Smallest Sums" },
    { title: "Maximum Sum Circular Subarray" },
    { title: "Search in Rotated Sorted Array II" },
    { title: "Meeting Rooms II" },
    { title: "Range Module" },
    { title: "LFU Cache" },
    { title: "Kth Smallest Element in a BST" },
    { title: "Populating Next Right Pointers in Each Node" },
    { title: "Path Sum" },
    { title: "Max Area of Island" },
    { title: "Sliding Puzzle" },
    { title: "Alien Dictionary" },
    { title: "Redundant Connection II" },
  ],
  Accenture: [
    { title: "Search in Rotated Sorted Array" },
    { title: "Trapping Rain Water" },
    { title: "Linked List Cycle" },
    { title: "Min Stack" },
    { title: "Max Area of Island" },
    { title: "Number of Connected Components in an Undirected Graph" },
    { title: "K Closest Points to Origin" },
    { title: "Valid Anagram" },
    { title: "Minimum Path Sum" },
    { title: "Palindrome Partitioning" },
    { title: "Jump Game II" },
    { title: "Median of Two Sorted Arrays" },
    { title: "Basic Calculator II" },
    { title: "Remove Duplicate Letters" },
    { title: "Open the Lock" },
    { title: "Bellman-Ford Algorithm" },
    { title: "Word Search" },
    { title: "Course Schedule II" },
    { title: "Critical Connections in a Network" },
    { title: "Trapping Rain Water" },
    { title: "Top K Frequent Words" },
    { title: "Car Fleet" },
    { title: "Jump Game II " },
    { title: "Best Time to Buy and Sell Stock with Transaction Fee" },
    { title: "Word Break II" },
    { title: "Scramble String" },
    { title: "Unique Paths II" },
    { title: "Combination Sum" },
    { title: "Minimum Cost to Merge Stones" },
    { title: "Continuous Subarray Sum" },
    { title: "Search in Rotated Sorted Array" },
    { title: "Meeting Rooms" },
    { title: "My Calendar III" },
    { title: "LRU Cache" },
    { title: "Lowest Common Ancestor of a BST" },
    { title: "Populating Next Right Pointers in Each Node" },
    { title: "Minimum Depth of Binary Tree" },
    { title: "Number of Islands" },
    { title: "Word Search II" },
    { title: "Validate Binary Tree Nodes" },
    { title: "Redundant Connection" },
  ],
  Capgemini: [
    { title: "Product of Array Except Self" },
    { title: "Meeting Rooms II" },
    { title: "Add Two Numbers" },
    { title: "Copy List with Random Pointer" },
    { title: "Word Search II" },
    { title: "Course Schedule" },
    { title: "Alien Dictionary" },
    { title: "Longest Repeating Character Replacement" },
    { title: "Unique Paths" },
    { title: "Combination Sum" },
    { title: "Russian Doll Envelopes" },
    { title: "Kth Largest Element in an Array" },
    { title: "Decode String" },
    { title: "Largest Number" },
    { title: "Word Ladder II" },
    { title: "Cheapest Flights Within K Stops" },
    { title: "Reconstruct Itinerary" },
    { title: "Max Area of Island" },
    { title: "Graph Valid Tree" },
    { title: "Redundant Connection" },
    { title: "Largest Rectangle in Histogram" },
    { title: "Kth Largest Element in a Stream" },
    { title: "Meeting Rooms" },
    { title: "Candy" },
    { title: "Best Time to Buy and Sell Stock IV" },
    { title: "Palindrome Partitioning II" },
    { title: "Interleaving String" },
    { title: "Burst Balloons" },
    { title: "Coin Change" },
    { title: "Last Stone Weight" },
    { title: "Maximum Product Subarray" },
    { title: "Find Minimum in Rotated Sorted Array" },
    { title: "Top K Frequent Elements" },
    { title: "My Calendar I" },
    { title: "Add and Search Word - Data structure design" },
    { title: "Binary Tree Maximum Path Sum" },
    { title: "Construct Binary Tree from Inorder and Postorder Traversal" },
    { title: "Binary Tree Zigzag Level Order Traversal" },
    { title: "Binary Tree Paths" },
    { title: "Pacific Atlantic Water Flow" },
    { title: "Serialize and Deserialize BST" },
    { title: "Course Schedule II" },

  ],
  Cognizant: [
    { title: "Find Minimum in Rotated Sorted Array" },
    { title: "Container With Most Water" },
    { title: "Remove Nth Node From End of List" },
    { title: "LRU Cache" },
    { title: "Number of Islands" },
    { title: "Course Schedule II" },
    { title: "Top K Frequent Elements" },
    { title: "Group Anagrams" },
    { title: "Unique Paths II" },
    { title: "Combination Sum II" },
    { title: "Jump Game" },
    { title: "Top K Frequent Words" },
    { title: "Basic Calculator" },
    { title: "Add Bold Tag in String" },
    { title: "Sliding Puzzle" },
    { title: "Dijkstra's Algorithm Practice" },
    { title: "Surrounded Regions" },
    { title: "Course Schedule" },
    { title: "Redundant Connection II" },
    { title: "Maximal Rectangle" },
    { title: "Meeting Rooms II" },
    { title: "Jump Game" },
    { title: "Best Time to Buy and Sell Stock" },
    { title: "Word Break" },
    { title: "Distinct Subsequences" },
    { title: "Unique Paths" },
    { title: "Coin Change II" },
    { title: "Last Stone Weight II" },
    { title: "Subarray Sum Equals K" },
    { title: "Find Minimum in Rotated Sorted Array II" },
    { title: "Sort Colors" },
    { title: "My Calendar II" },
    { title: "Design Twitter" },
    { title: "Lowest Common Ancestor of a Binary Tree" },
    { title: "Flatten Binary Tree to Linked List" },
    { title: "Maximum Depth of Binary Tree" },
    { title: "Construct Quad Tree" },
    { title: "Word Search" },
    { title: "Count Complete Tree Nodes" },
    { title: "Minimum Height Trees" },
  ],
  Infosys: [
    { title: "Best Time to Buy and Sell Stock" },
    { title: "Insert Interval" },
    { title: "Generate Parentheses" },
    { title: "Palindrome Linked List" },
    { title: "Sudoku Solver" },
    { title: "Flood Fill" },
    { title: "Find Eventual Safe States" },
    { title: "Minimum Window Substring" },
    { title: "Longest Palindromic Substring" },
    { title: "Coin Change" },
    { title: "Word Break II" },
    { title: "Find Median from Data Stream" },
    { title: "Maximal Rectangle" },
    { title: "Simplify Path" },
    { title: "Palindrome Pairs" },
    { title: "Reorder Routes to Make All Paths Lead to the City Zero" },
    { title: "Course Schedule III" },
    { title: "Number of Distinct Islands" },
    { title: "Number of Connected Components in an Undirected Graph" },
    { title: "Sliding Window Maximum" },
    { title: "Queue Reconstruction by Height" },
    { title: "Best Time to Buy and Sell Stock II" },
    { title: "Decode Ways II" },
    { title: "Regular Expression Matching" },
    { title: "Dungeon Game" },
    { title: "Target Sum" },
    { title: "Count of Range Sum" },
    { title: "Find Peak Element" },
    { title: "Employee Free Time" },
    { title: "Design Search Autocomplete System" },
    { title: "Design Hit Counter" },
    { title: "Validate Binary Search Tree" },
    { title: "Binary Tree Right Side View" },
    { title: "Path Sum II" },
    { title: "Surrounded Regions" },
    { title: "Minimum Moves to Equal Array Elements" },
    { title: "Reconstruct Itinerary" },
  ],
  Wipro: [
    { title: "Maximum Subarray" },
    { title: "Meeting Rooms" },
    { title: "Merge Two Sorted Lists" },
    { title: "Intersection of Two Linked Lists" },
    { title: "Word Search" },
    { title: "Clone Graph" },
    { title: "Reconstruct Itinerary" },
    { title: "Longest Substring Without Repeating Characters" },
    { title: "Decode Ways" },
    { title: "Coin Change II" },
    { title: "Longest Increasing Subsequence" },
    { title: "Sliding Window Median" },
    { title: "Largest Rectangle in Histogram" },
    { title: "Minimum Remove to Make Valid Parentheses" },
    { title: "Word Ladder" },
    { title: "Network Delay Time" },
    { title: "Alien Dictionary" },
    { title: "Number of Islands" },
    { title: "Clone Graph" },
    { title: "Minimum Height Trees" },
    { title: "Max Sliding Window" },
    { title: "Sliding Window Median" },
    { title: "Non-overlapping Intervals" },
    { title: "Russian Doll Envelopes" },
    { title: "Best Time to Buy and Sell Stock III" },
    { title: "Palindrome Partitioning" },
    { title: "Longest Palindromic Subsequence" },
    { title: "Wildcard Matching" },
    { title: "Triangle" },
    { title: "Partition Equal Subset Sum" },
    { title: "Longest Consecutive Sequence" },
    { title: "Maximum Gap" },
    { title: "Kth Largest Element in Array" },
    { title: "Car Pooling" },
    { title: "Implement Trie (Prefix Tree)" },
    { title: "Serialize and Deserialize Binary Tree" },
    { title: "Construct Binary Tree from Preorder and Inorder Traversal" },
    { title: "Binary Tree Level Order Traversal" },
    { title: "Sum Root to Leaf Numbers" },
    { title: "Walls and Gates" },
    { title: "Minimum Moves to Equal Array Elements" },
    { title: "Course Schedule" },
  ],
};

// --- Initial Questions ---
const initialQuestions: Question[] = Object.entries(companyProblems).flatMap(
  ([company, problems], index) =>
    problems.map((problem, problemIndex) => ({
      id: `${company}-${index}-${problemIndex}`,
      title: problem.title,
      company: company,
      solved: false,
    }))
);

const allCompanies: string[] = Object.keys(companyProblems);

// --- LeetCode Link Generator ---
const createLeetCodeLink = (title: string): string => {
  const formattedTitle = title
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, "")
    .replace(/\s+/g, "-");
  return `https://leetcode.com/problems/${formattedTitle}/`;
};

// --- Main Component ---
const ServiceBasedDSA: React.FC<ServiceBasedDSAProps> = ({ darkMode = false }) => {
  const [questionsList, setQuestionsList] = useState<Question[]>(initialQuestions);
  const [selectedCompany, setSelectedCompany] = useState<string | null>(null);
  const [problemSearchTerm, setProblemSearchTerm] = useState<string>("");

  const handleCheckboxChange = (id: string) => {
    setQuestionsList((prev) =>
      prev.map((q) => (q.id === id ? { ...q, solved: !q.solved } : q))
    );
  };

  const handleCompanyClick = (company: string) => {
    setSelectedCompany(selectedCompany === company ? null : company);
  };

  const filteredQuestions = questionsList.filter((q) => {
    const matchesCompany = !selectedCompany || q.company === selectedCompany;
    const matchesSearchTerm =
      !problemSearchTerm || q.title.toLowerCase().includes(problemSearchTerm.toLowerCase());
    return matchesCompany && matchesSearchTerm;
  });

  const totalQuestions = questionsList.length;
  const solvedQuestions = questionsList.filter((q) => q.solved).length;
  const completionPercentage = totalQuestions > 0 ? Math.round((solvedQuestions / totalQuestions) * 100) : 0;

  const companyStats = allCompanies.reduce<Record<string, { total: number; solved: number }>>(
    (stats, company) => {
      const companyProblemsCount = questionsList.filter((q) => q.company === company).length;
      const solvedCount = questionsList.filter((q) => q.company === company && q.solved).length;
      stats[company] = { total: companyProblemsCount, solved: solvedCount };
      return stats;
    },
    {}
  );

  const getCompanyProgress = (company: string): string => {
    const stats = companyStats[company];
    return `(${stats.solved}/${stats.total})`;
  };

  return (
    <div
      className={`flex flex-col lg:flex-row min-h-screen transition-colors duration-500 pt-20 ${darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"
        }`}
    >
      {/* Sidebar */}
      <div
        className={`w-full lg:w-72 border-b lg:border-b-0 lg:border-r p-4 transition-colors duration-500 mt-6 ${darkMode ? "bg-gray-800 border-gray-700" : "bg-white border-gray-200"
          }`}
      >
        <h1 className="text-lg font-bold mb-4">Filters</h1>
        <div className="relative mb-6">
          <Search
            className={`absolute left-3 top-2.5 w-4 h-4 ${darkMode ? "text-purple-300" : "text-purple-500"
              }`}
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
        <h2 className="font-semibold text-base mb-3">Companies</h2>
        <ul className="space-y-3 max-h-[60vh] overflow-y-auto">
          {allCompanies.map((company) => (
            <li key={company}>
              <div
                className={`flex items-center justify-between space-x-2 cursor-pointer p-2 rounded-md ${selectedCompany === company
                    ? darkMode
                      ? "bg-gray-700"
                      : "bg-gray-100"
                    : darkMode
                      ? "hover:bg-gray-700"
                      : "hover:bg-gray-100"
                  }`}
                onClick={() => handleCompanyClick(company)}
              >
                <span
                  className={`font-medium ${selectedCompany === company
                      ? "text-purple-800"
                      : darkMode
                        ? "text-gray-200"
                        : "text-gray-800"
                    }`}
                >
                  {company}
                </span>
                <span className={`text-xs font-medium ${darkMode ? "text-gray-400" : "text-gray-600"}`}>
                  {getCompanyProgress(company)}
                </span>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* Right Content */}
      <div className="flex-1 p-4 lg:p-6 overflow-x-auto">
        {/* Progress Section */}
        <div
          className={`p-4 lg:p-6 rounded-lg mb-6 shadow-md transition-colors duration-500 ${darkMode ? "bg-gray-800 text-white" : "bg-gray-100 text-gray-900"
            }`}
        >
          <div className="flex flex-row justify-between items-center flex-wrap gap-4">
            <div className="flex flex-col">
              <h2 className="text-xl font-bold mb-2">Progress</h2>
              <div className="flex items-center gap-6">
                {/* Total Progress */}
                <div className="flex flex-col items-start min-w-[100px]">
                  <span className="text-2xl font-bold">{solvedQuestions} / {totalQuestions}</span>
                  <p className={`text-sm ${darkMode ? "text-gray-400" : "text-gray-800"}`}>Total Progress</p>
                </div>

                {/* Circle */}
                <div className="w-20 h-20 relative flex-shrink-0">
                  <svg viewBox="0 0 80 80" className="w-full h-full transform -rotate-90">
                    <circle
                      className={`stroke-current ${darkMode ? "text-gray-700" : "text-gray-300"}`}
                      strokeWidth="6"
                      fill="transparent"
                      r="30"
                      cx="40"
                      cy="40"
                    />
                    <circle
                      className="stroke-current text-[#6334B9]"
                      strokeWidth="6"
                      strokeDasharray={30 * 2 * Math.PI}
                      strokeDashoffset={30 * 2 * Math.PI - (completionPercentage / 100) * (30 * 2 * Math.PI)}
                      strokeLinecap="round"
                      fill="transparent"
                      r="30"
                      cx="40"
                      cy="40"
                    />
                  </svg>
                  <span
                    className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-bold text-lg ${darkMode ? "text-white" : "text-gray-900"
                      }`}
                  >
                    {completionPercentage}%
                  </span>
                </div>

              </div>
            </div>
          </div>
        </div>

        {/* Questions Table */}
        <h2 className="text-2xl font-bold mb-4">Practice Problems</h2>
        {filteredQuestions.length === 0 ? (
          <p className={`text-gray-500 ${darkMode ? "dark:text-gray-400" : ""}`}>
            No problems found for the selected company or search term.
          </p>
        ) : (
          <div className="overflow-x-auto">
            <table
              className={`w-full min-w-[600px] border rounded-lg transition-colors duration-500 ${darkMode ? "border-gray-700" : "border-gray-200"
                }`}
            >
              <thead className={darkMode ? "bg-gray-700" : "bg-gray-100"}>
                <tr>
                  <th className="p-3 text-left">Status</th>
                  <th className="p-3 text-left">Problem Title</th>
                  <th className="p-3 text-left">Company</th>
                </tr>
              </thead>
              <tbody>
                {filteredQuestions.map((q) => (
                  <tr
                    key={q.id}
                    className={`border-t ${darkMode ? "border-gray-700 hover:bg-gray-800" : "border-gray-200 hover:bg-gray-50"
                      }`}
                  >
                    <td className="p-3">
                      <input
                        type="checkbox"
                        checked={q.solved}
                        onChange={() => handleCheckboxChange(q.id)}
                        className="w-4 h-4 text-purple-600 bg-gray-100 border-gray-300 rounded focus:ring-purple-500"
                      />
                    </td>
                    <td className="p-3">
                      <a
                        href={createLeetCodeLink(q.title)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`font-medium ${darkMode ? "text-gray-200 hover:text-[#6334B9]" : "text-gray-900 hover:text-[#6334B9]"
                          }`}
                      >
                        {q.title}
                      </a>
                    </td>
                    <td className="p-3">
                      <span
                        className={`px-2 py-1 text-sm rounded-full ${darkMode ? "bg-gray-700 text-gray-200" : "bg-gray-100 text-gray-700"
                          }`}
                      >
                        {q.company}
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
};

export default ServiceBasedDSA;
