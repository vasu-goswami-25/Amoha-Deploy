
import { useState } from "react";
import { Search, ChevronDown, ChevronRight } from "lucide-react";


// --- Data Structure (Backend Logic) ---
const dsaPatterns = [
  // Array
  {
    category: "Array",
    subcategories: [
      {
        subcategory: "Prefix Sum",
        problems: [
          { title: "Range Sum Query", link: "https://leetcode.com/problems/range-sum-query-immutable/" },
          { title: "Max Sum Subarray of Size K", link: "https://www.geeksforgeeks.org/problems/max-sum-subarray-of-size-k5313/1" },
        ],
      },
      {
        subcategory: "Sliding Window",
        problems: [
          { title: "Max Sum Subarray of Size K", link: "https://www.geeksforgeeks.org/find-maximum-sum-subarray-of-size-k/" },
          { title: "Longest Substring Without Repeating Characters", link: "https://leetcode.com/problems/longest-substring-without-repeating-characters/" },
        ],
      },
      {
        subcategory: "Two Pointers",
        problems: [
          { title: "Two Sum II", link: "https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/" },
          { title: "Remove Duplicates", link: "https://leetcode.com/problems/remove-duplicates-from-sorted-array/" },
        ],
      },
      {
        subcategory: "Kadane's Algo",
        problems: [
          { title: "Maximum Subarray", link: "https://leetcode.com/problems/maximum-subarray/" },
          { title: "Maximum Circular Subarray", link: "https://www.geeksforgeeks.org/maximum-sum-circular-subarray/" },
        ],
      },
      {
        subcategory: "Sorting Trick",
        problems: [
          { title: "Meeting Rooms II", link: "https://leetcode.com/problems/meeting-rooms-ii/" },
          { title: "Merge Intervals", link: "https://leetcode.com/problems/merge-intervals/" },
        ],
      },
    ],
  },
  // String
  {
    category: "String",
    subcategories: [
      {
        subcategory: "Palindrome",
        problems: [
          { title: "Valid Palindrome", link: "https://leetcode.com/problems/valid-palindrome/" },
          { title: "Longest Palindrome", link: "https://leetcode.com/problems/longest-palindrome/" },
        ],
      },
      {
        subcategory: "Frequency Count",
        problems: [
          { title: "First Unique Character", link: "https://leetcode.com/problems/first-unique-character-in-a-string/" },
          { title: "Valid Anagram", link: "https://leetcode.com/problems/valid-anagram/" },
        ],
      },
      {
        subcategory: "Substring Search",
        problems: [
          { title: "Implement strStr()", link: "https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/" },
          { title: "Repeated Substring Pattern", link: "https://leetcode.com/problems/repeated-substring-pattern/" },
        ],
      },
    ],
  },
  // Searching & Sorting
  {
    category: "Searching & Sorting",
    subcategories: [
      {
        subcategory: "Binary Search",
        problems: [
          { title: "Binary Search", link: "https://leetcode.com/problems/binary-search/" },
          { title: "Search Insert Position", link: "https://leetcode.com/problems/search-insert-position/" },
        ],
      },
      {
        subcategory: "Sorting",
        problems: [
          { title: "Sort an Array", link: "https://leetcode.com/problems/sort-an-array/" },
          { title: "Count Inversions", link: "https://www.geeksforgeeks.org/count-inversions-in-an-array-using-merge-sort/" },
        ],
      },
      {
        subcategory: "Kth Largest",
        problems: [
          { title: "Kth Largest Element", link: "https://leetcode.com/problems/kth-largest-element-in-an-array/" },
          { title: "Sort Colors", link: "https://leetcode.com/problems/sort-colors/" },
        ],
      },
    ],
  },
  // Recursion & Backtracking
  {
    category: "Recursion & Backtracking",
    subcategories: [
      {
        subcategory: "Factorial / Fibonacci",
        problems: [
          { title: "Fibonacci Number", link: "https://leetcode.com/problems/fibonacci-number/" },
          { title: "Factorial", link: "https://www.geeksforgeeks.org/program-for-factorial-of-a-number/" },
        ],
      },
      {
        subcategory: "Subsets",
        problems: [
          { title: "Subsets", link: "https://leetcode.com/problems/subsets/" },
          { title: "Combination Sum", link: "https://leetcode.com/problems/combination-sum/" },
        ],
      },
      {
        subcategory: "Permutations",
        problems: [
          { title: "Permutations", link: "https://leetcode.com/problems/permutations/" },
          { title: "Next Permutation", link: "https://leetcode.com/problems/next-permutation/" },
        ],
      },
    ],
  },
  // Linked List
  {
    category: "Linked List",
    subcategories: [
      {
        subcategory: "Reverse",
        problems: [
          { title: "Reverse Linked List", link: "https://leetcode.com/problems/reverse-linked-list/" },
          { title: "Reverse Linked List II", link: "https://leetcode.com/problems/reverse-linked-list-ii/" },
        ],
      },
      {
        subcategory: "Middle Element",
        problems: [
          { title: "Middle of Linked List", link: "https://leetcode.com/problems/middle-of-the-linked-list/" },
          { title: "Palindrome Linked List", link: "https://leetcode.com/problems/palindrome-linked-list/" },
        ],
      },
      {
        subcategory: "Cycle Detection",
        problems: [
          { title: "Linked List Cycle", link: "https://leetcode.com/problems/linked-list-cycle/" },
          { title: "Linked List Cycle II", link: "https://leetcode.com/problems/linked-list-cycle-ii/" },
        ],
      },
    ],
  },
  // Stack & Queue
  {
    category: "Stack & Queue",
    subcategories: [
      {
        subcategory: "Balanced Parentheses",
        problems: [
          { title: "Valid Parentheses", link: "https://leetcode.com/problems/valid-parentheses/" },
          { title: "Min Add to Make Parentheses Valid", link: "https://leetcode.com/problems/minimum-add-to-make-parentheses-valid/" },
        ],
      },
      {
        subcategory: "Next Greater Element",
        problems: [
          { title: "Next Greater Element I", link: "https://leetcode.com/problems/next-greater-element-i/" },
          { title: "Next Greater Element II", link: "https://leetcode.com/problems/next-greater-element-ii/" },
        ],
      },
      {
        subcategory: "Queue Simulation",
        problems: [
          { title: "Implement Queue using Stacks", link: "https://leetcode.com/problems/implement-queue-using-stacks/" },
          { title: "Design Circular Queue", link: "https://leetcode.com/problems/design-circular-queue/" },
        ],
      },
    ],
  },
  // Hashing
  {
    category: "Hashing",
    subcategories: [
      {
        subcategory: "HashMap",
        problems: [
          { title: "Two Sum", link: "https://leetcode.com/problems/two-sum/" },
          { title: "Subarray Sum Equals K", link: "https://leetcode.com/problems/subarray-sum-equals-k/" },
        ],
      },
      {
        subcategory: "HashSet",
        problems: [
          { title: "Contains Duplicate", link: "https://leetcode.com/problems/contains-duplicate/" },
          { title: "Happy Number", link: "https://leetcode.com/problems/happy-number/" },
        ],
      },
    ],
  },
  // Tree (Basic)
  {
    category: "Tree (Basic)",
    subcategories: [
      {
        subcategory: "Traversals",
        problems: [
          { title: "Inorder Traversal", link: "https://leetcode.com/problems/binary-tree-inorder-traversal/" },
          { title: "Level Order Traversal", link: "https://leetcode.com/problems/binary-tree-level-order-traversal/" },
        ],
      },
      {
        subcategory: "Height",
        problems: [
          { title: "Maximum Depth", link: "https://leetcode.com/problems/maximum-depth-of-binary-tree/" },
          { title: "Minimum Depth", link: "https://leetcode.com/problems/minimum-depth-of-binary-tree/" },
        ],
      },
      {
        subcategory: "Symmetry/Balance",
        problems: [
          { title: "Symmetric Tree", link: "https://leetcode.com/problems/symmetric-tree/" },
          { title: "Balanced Binary Tree", link: "https://leetcode.com/problems/balanced-binary-tree/" },
        ],
      },
    ],
  },
  // Graph (Basic)
  {
    category: "Graph (Basic)",
    subcategories: [
      {
        subcategory: "BFS",
        problems: [
          { title: "BFS Traversal", link: "https://www.geeksforgeeks.org/problems/bfs-traversal-of-graph/1" },
          { title: "Number of Islands", link: "https://leetcode.com/problems/number-of-islands/" },
        ],
      },
      {
        subcategory: "DFS",
        problems: [
          { title: "DFS Traversal", link: "https://www.geeksforgeeks.org/problems/depth-first-traversal-for-a-graph/1" },
          { title: "Flood Fill", link: "https://leetcode.com/problems/flood-fill/" },
        ],
      },
    ],
  },
  // Dynamic Programming (Easy)
  {
    category: "Dynamic Programming (Easy)",
    subcategories: [
      {
        subcategory: "Fibonacci / Climb Stairs",
        problems: [
          { title: "Climbing Stairs", link: "https://leetcode.com/problems/climbing-stairs/" },
          { title: "Min Cost Climbing Stairs", link: "https://leetcode.com/problems/min-cost-climbing-stairs/" },
        ],
      },
      {
        subcategory: "Subset Sum",
        problems: [
          { title: "Partition Equal Subset Sum", link: "https://leetcode.com/problems/partition-equal-subset-sum/" },
          { title: "Subset Sum", link: "https://www.geeksforgeeks.org/problems/subset-sum-problem-1611555638/1" },
        ],
      },
      {
        subcategory: "House Robber",
        problems: [
          { title: "House Robber", link: "https://leetcode.com/problems/house-robber/" },
          { title: "House Robber II", link: "https://leetcode.com/problems/house-robber-ii/" },
        ],
      },
    ],
  },
  // Bit Manipulation
  {
    category: "Bit Manipulation",
    subcategories: [
      {
        subcategory: "Single Number",
        problems: [
          { title: "Single Number", link: "https://leetcode.com/problems/single-number/" },
          { title: "Single Number II", link: "https://leetcode.com/problems/single-number-ii/" },
        ],
      },
      {
        subcategory: "Count Set Bits",
        problems: [
          { title: "Counting Bits", link: "https://leetcode.com/problems/counting-bits/" },
          { title: "Number of 1 Bits", link: "https://leetcode.com/problems/number-of-1-bits/" },
        ],
      },
    ],
  },
  // Greedy
  {
    category: "Greedy",
    subcategories: [
      {
        subcategory: "Activity Selection",
        problems: [
          { title: "Activity Selection", link: "https://www.geeksforgeeks.org/problems/activity-selection-1587115620/1" },
          { title: "Non-overlapping Intervals", link: "https://leetcode.com/problems/non-overlapping-intervals/" },
        ],
      },
      {
        subcategory: "Coin Change",
        problems: [
          { title: "Minimum Coins", link: "https://www.geeksforgeeks.org/problems/-minimum-number-of-coins4426/1" },
          { title: "Lemonade Change", link: "https://leetcode.com/problems/lemonade-change/" },
        ],
      },
    ],
  },
  // Matrix
  {
    category: "Matrix",
    subcategories: [
      {
        subcategory: "Traversal",
        problems: [
          { title: "Spiral Matrix", link: "https://leetcode.com/problems/spiral-matrix/" },
          { title: "Rotate Image", link: "https://leetcode.com/problems/rotate-image/" },
        ],
      },
      {
        subcategory: "Search",
        problems: [
          { title: "Search 2D Matrix", link: "https://leetcode.com/problems/search-a-2d-matrix/" },
          { title: "Search 2D Matrix II", link: "https://leetcode.com/problems/search-a-2d-matrix-ii/" },
        ],
      },
    ],
  },
  // Heap (Priority Queue)
  {
    category: "Heap (Priority Queue)",
    subcategories: [
      {
        subcategory: "Top K",
        problems: [
          { title: "Top K Frequent Elements", link: "https://leetcode.com/problems/top-k-frequent-elements/" },
          { title: "Kth Largest Element", link: "https://leetcode.com/problems/kth-largest-element-in-an-array/" },
        ],
      },
      {
        subcategory: "Min Heap",
        problems: [
          { title: "Merge K Sorted Lists", link: "https://leetcode.com/problems/merge-k-sorted-lists/" },
          { title: "Find Median from Data Stream", link: "https://leetcode.com/problems/find-median-from-data-stream/" },
        ],
      },
    ],
  },
  // Basic OOP / Implementation
  {
    category: "Basic OOP / Implementation",
    subcategories: [
      {
        subcategory: "Class & Object",
        problems: [
          { title: "Design Parking System", link: "https://leetcode.com/problems/design-parking-system/" },
          { title: "Design HashMap", link: "https://leetcode.com/problems/design-hashmap/" },
        ],
      },
      {
        subcategory: "Inheritance / Encapsulation",
        problems: [
          { title: "LRU Cache", link: "https://leetcode.com/problems/lru-cache/" },
          { title: "Min Stack", link: "https://leetcode.com/problems/min-stack/" },
        ],
      },
    ],
  },
];

// Helper function to create a unique ID for each problem
let problemId = 0;
const createInitialState = () => {
  return dsaPatterns.map((pattern) => ({
    ...pattern,
    subcategories: pattern.subcategories.map((subcat) => ({
      ...subcat,
      problems: subcat.problems.map((problem) => ({
        ...problem,
        id: problemId++,
        solved: false,
      })),
    })),
  }));
};

function ServiceBasedPatternDsa({ darkMode = false }) {
  const [patternsList, setPatternsList] = useState(createInitialState);
  const [problemSearchTerm, setProblemSearchTerm] = useState("");
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);
  const [expandedSubcategory, setExpandedSubcategory] = useState<string | null>(null);
  const [sidebarOpen, setSidebarOpen] = useState(false); // For mobile toggle

  const handleCheckboxChange = (problemId: number, category: string, subcategory: string) => {
    setPatternsList((prevList) =>
      prevList.map((pattern) => {
        if (pattern.category === category) {
          return {
            ...pattern,
            subcategories: pattern.subcategories.map((subcat) => {
              if (subcat.subcategory === subcategory) {
                return {
                  ...subcat,
                  problems: subcat.problems.map((problem) =>
                    problem.id === problemId ? { ...problem, solved: !problem.solved } : problem
                  ),
                };
              }
              return subcat;
            }),
          };
        }
        return pattern;
      })
    );
  };

  const flattenProblems = patternsList.flatMap((pattern) =>
    pattern.subcategories.flatMap((subcat) =>
      subcat.problems.map((problem) => ({
        ...problem,
        category: pattern.category,
        subcategory: subcat.subcategory,
      }))
    )
  );

  const filteredProblems = flattenProblems.filter(
    (q) =>
      (expandedCategory === null || q.category === expandedCategory) &&
      (expandedSubcategory === null || q.subcategory === expandedSubcategory) &&
      q.title.toLowerCase().includes(problemSearchTerm.toLowerCase())
  );

  const totalProblems = flattenProblems.length;
  const solvedProblems = flattenProblems.filter((q) => q.solved).length;
  const completionPercentage = totalProblems > 0 ? Math.round((solvedProblems / totalProblems) * 100) : 0;

  const getCategoryProgress = (category: string) => {
    const categoryProblems = flattenProblems.filter((q) => q.category === category);
    const solvedCount = categoryProblems.filter((q) => q.solved).length;
    const totalCount = categoryProblems.length;
    return `(${solvedCount}/${totalCount})`;
  };

  const getSubcategoryProgress = (category: string, subcategory: string) => {
    const subcategoryProblems = flattenProblems.filter(
      (q) => q.category === category && q.subcategory === subcategory
    );
    const solvedCount = subcategoryProblems.filter((q) => q.solved).length;
    const totalCount = subcategoryProblems.length;
    return `(${solvedCount}/${totalCount})`;
  };

  const getBackgroundColorClass = () => (darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900");
  const getSidebarColorClass = () => (darkMode ? "bg-gray-800 border-gray-700" : "bg-white border-gray-200");
  const getProgressSectionColorClass = () => (darkMode ? "bg-gray-800 text-white" : "bg-gray-100 text-gray-900");
  const getProblemSearchColorClass = () => (darkMode ? "bg-gray-700 border  border-[#6334B9] text-white focus:ring-2 focus:ring-[#6334B9]" : "bg-purple-50 border border-[#6334B9] text-black focus:ring-2 focus:ring-[#6334B9]");
  const getTableColorClass = () => (darkMode ? "border-gray-700" : "border-gray-200");
  const getTableHeaderColorClass = () => (darkMode ? "bg-gray-700" : "bg-gray-100");
  const getTableRowColorClass = () => (darkMode ? "border-gray-700 hover:bg-gray-800" : "border-gray-200 hover:bg-gray-50");
  const getProblemTitleColorClass = () => (darkMode ? "text-gray-200 hover:text-[#6334B9]" : "text-gray-900 hover:text-[#6334B9]");

  return (
    <div className={`flex flex-col md:flex-row min-h-screen pt-20 transition-colors duration-500 ${getBackgroundColorClass()}`}>
      {/* Mobile Header for Sidebar */}
      <div className="md:hidden flex justify-between items-center p-4 border-b">
        <h1 className="text-xl font-bold">DSA Patterns</h1>
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className={`p-2 rounded-md ${darkMode ? "bg-gray-700 text-white" : "bg-gray-100 text-gray-900"}`}
        >
          {sidebarOpen ? "Close" : "Menu"}
        </button>
      </div>

      {/* Sidebar */}
      <div className={`fixed md:relative z-20 top-0 left-0 h-full w-72 md:w-80 border-r p-4 overflow-y-auto transition-transform duration-300 mt-5 ${getSidebarColorClass()} ${sidebarOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0`}>
        <h1 className="hidden md:block text-xl font-bold mb-4">DSA Patterns</h1>
        <div className="relative mb-6">
          <Search className={`absolute left-3 top-2.5 w-4 h-4 ${darkMode ? "text-[#6334B9]" : "text-[#6334B9]"}`} />
          <input
            type="text"
            placeholder="Search problems..."
            className={`w-full pl-9 pr-3 py-2 rounded-md text-sm outline-none  duration-300 ${getProblemSearchColorClass()}`}
            value={problemSearchTerm}
            onChange={(e) => setProblemSearchTerm(e.target.value)}
          />
        </div>
        <ul className="space-y-3">
          {patternsList.map((pattern) => (
            <li key={pattern.category}>
              <div
                className={`flex items-center justify-between space-x-2 cursor-pointer p-2 rounded-md ${expandedCategory === pattern.category ? (darkMode ? "bg-gray-700" : "bg-gray-100") : (darkMode ? "hover:bg-gray-700" : "hover:bg-gray-100")}`}
                onClick={() => {
                  setExpandedCategory(expandedCategory === pattern.category ? null : pattern.category);
                  setExpandedSubcategory(null);
                }}
              >
                <div className="flex items-center space-x-2">
                  {expandedCategory === pattern.category ? (
                    <ChevronDown className="w-4 h-4" />
                  ) : (
                    <ChevronRight className="w-4 h-4" />
                  )}
                  <span className="font-medium text-sm">{pattern.category}</span>
                </div>
                <span className={`text-xs font-medium ${darkMode ? "text-gray-400" : "text-gray-600"}`}>
                  {getCategoryProgress(pattern.category)}
                </span>
              </div>
              {expandedCategory === pattern.category && (
                <ul className="ml-6 mt-2 space-y-2">
                  {pattern.subcategories.map((subcat) => (
                    <li key={subcat.subcategory}>
                      <div
                        className={`flex items-center justify-between space-x-2 cursor-pointer p-2 rounded-md ${expandedSubcategory === subcat.subcategory ? (darkMode ? "bg-gray-700" : "bg-gray-100") : (darkMode ? "hover:bg-gray-700" : "hover:bg-gray-100")}`}
                        onClick={() => setExpandedSubcategory(expandedSubcategory === subcat.subcategory ? null : subcat.subcategory)}
                      >
                        <div className="flex items-center space-x-2">
                          {expandedSubcategory === subcat.subcategory ? (
                            <ChevronDown className="w-4 h-4" />
                          ) : (
                            <ChevronRight className="w-4 h-4" />
                          )}
                          <span className="font-medium text-sm">{subcat.subcategory}</span>
                        </div>
                        <span className={`text-xs font-medium ${darkMode ? "text-gray-400" : "text-gray-600"}`}>
                          {getSubcategoryProgress(pattern.category, subcat.subcategory)}
                        </span>
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-4 md:p-6 overflow-y-auto md:ml-0">
        <div className={`p-4 md:p-6 rounded-lg mb-6 shadow-md transition-colors duration-500 ${getProgressSectionColorClass()}`}>
          <h2 className="text-xl font-bold mb-4">Overall Progress</h2>
        <div className="flex items-center justify-start gap-8 flex-wrap">
             <div className="flex flex-col items-start min-w-[120px]">
        <span className="text-2xl font-bold">
          {solvedProblems} / {totalProblems}
        </span>
              <p
          className={`text-sm ${
            darkMode ? "text-gray-400" : "text-gray-800"
          }`}
        >
          Problems Solved
        </p>
      </div>
                 {/* Right Side - Circle */}
      <div className="w-20 h-20 relative -translate-y-1">
        <svg viewBox="0 0 100 100" className="w-full h-full transform -rotate-90">
          {/* Background circle */}
          <circle
            className={`stroke-current ${
              darkMode ? "text-gray-700" : "text-gray-300"
            }`}
            strokeWidth="8"
            fill="transparent"
            r="40"
            cx="50"
            cy="50"
          />
                 {/* Progress circle */}
          <circle
            className="stroke-current text-[#6334B9]"
            strokeWidth="8"
            strokeDasharray={40 * 2 * Math.PI}
            strokeDashoffset={
              40 * 2 * Math.PI -
              (completionPercentage / 100) * (40 * 2 * Math.PI)
            }
                 strokeLinecap="round"
            fill="transparent"
            r="40"
            cx="50"
            cy="50"
          />
        </svg>
                
                   {/* Percentage text */}
        <span
          className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-bold text-lg ${
            darkMode ? "text-white" : "text-gray-900"
          }`}
        >
          {completionPercentage}%
        </span>
                 </div>
    </div>
  </div>
   

        <h2 className="text-2xl font-bold mb-4">Problem List</h2>
        {filteredProblems.length === 0 ? (
          <p className={`text-gray-500 ${darkMode ? "dark:text-gray-400" : ""}`}>
            No problems found for the selected filter or search term.
          </p>
        ) : (
          <div className="overflow-x-auto">
            <table className={`w-full border rounded-lg transition-colors duration-500 ${getTableColorClass()}`}>
              <thead className={getTableHeaderColorClass()}>
                <tr>
                  <th className="p-3 text-left w-1/12">Status</th>
                  <th className="p-3 text-left w-6/12">Problem Title</th>
                  <th className="p-3 text-left w-5/12">Category</th>
                </tr>
              </thead>
              <tbody>
                {filteredProblems.map((p) => (
                  <tr key={p.id} className={`border-t ${getTableRowColorClass()}`}>
                    <td className="p-3">
                      <input
                        type="checkbox"
                        checked={p.solved}
                        onChange={() => handleCheckboxChange(p.id, p.category, p.subcategory)}
                        className="w-4 h-4 text-[#6334B9] bg-gray-100 border-gray-300 rounded focus:ring-[#6334B9]"
                      />
                    </td>
                    <td className="p-3">
                      <a
                        href={p.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`font-medium ${getProblemTitleColorClass()}`}
                      >
                        {p.title}
                      </a>
                    </td>
                    <td className="p-3">
                      <span className={`px-2 py-1 text-xs rounded-full ${darkMode ? "bg-blue-900 text-blue-200" : "bg-blue-100 text-blue-700"}`}>
                        {p.category} - {p.subcategory}
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

export default ServiceBasedPatternDsa;
