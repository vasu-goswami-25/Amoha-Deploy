import { useState } from "react";
import { Search, ChevronDown, ChevronRight, Menu, X } from "lucide-react";

// --- Type Definitions (Unchanged) ---
interface Problem {
  title: string;
  leetcode?: string;
  platform?: string;
  link: string;
  id: number; // Added in createInitialState
  solved: boolean; // Added in createInitialState
}

interface RawSubcategory {
  subcategory: string;
  problems: Omit<Problem, 'id' | 'solved'>[];
}

interface Pattern {
  category: string;
  subcategories: RawSubcategory[];
}

interface InitializedProblem extends Problem {
  category: string;
  subcategory: string;
}

// --- Data Structure (Unchanged) ---
const dsaPatterns: Pattern[] = [
  // Array
  {
    category: "Array",
    subcategories: [
      {
        subcategory: "Prefix Sum / Difference Array",
        problems: [
          {
            title: "Range Sum Query – Immutable",
            leetcode: "303",
            link: "https://leetcode.com/problems/range-sum-query-immutable/",
          },
          {
            title: "Corporate Flight Bookings",
            leetcode: "1109",
            link: "https://leetcode.com/problems/corporate-flight-bookings/",
          },
        ] as Omit<Problem, 'id' | 'solved'>[],
      },
      {
        subcategory: "Sliding Window",
        problems: [
          {
            title: "Maximum Sum Subarray of Size K",
            leetcode: "643",
            link: "https://leetcode.com/problems/maximum-average-subarray-i/",
          },
          {
            title: "Longest Substring Without Repeating Characters",
            leetcode: "3",
            link: "https://leetcode.com/problems/longest-substring-without-repeating-characters/",
          },
        ] as Omit<Problem, 'id' | 'solved'>[],
      },
      {
        subcategory: "Two Pointers",
        problems: [
          {
            title: "Two Sum II – Input Array is Sorted",
            leetcode: "167",
            link: "https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/",
          },
          { title: "3Sum", leetcode: "15", link: "https://leetcode.com/problems/3sum/" },
        ] as Omit<Problem, 'id' | 'solved'>[],
      },
      {
        subcategory: "Sorting Based Tricks",
        problems: [
          {
            title: "Merge Intervals",
            leetcode: "56",
            link: "https://leetcode.com/problems/merge-intervals/",
          },
          {
            title: "Meeting Rooms II",
            leetcode: "253",
            link: "https://leetcode.com/problems/meeting-rooms-ii/",
          },
        ] as Omit<Problem, 'id' | 'solved'>[],
      },
      {
        subcategory: "Binary Search on Answer",
        problems: [
          {
            title: "Koko Eating Bananas",
            leetcode: "875",
            link: "https://leetcode.com/problems/koko-eating-bananas/",
          },
          {
            title: "Aggressive Cows",
            platform: "SPOJ",
            link: "https://www.spoj.com/problems/AGGRCOW/",
          },
        ] as Omit<Problem, 'id' | 'solved'>[],
      },
      {
        subcategory: "Kadane’s Algorithm",
        problems: [
          {
            title: "Maximum Subarray",
            leetcode: "53",
            link: "https://leetcode.com/problems/maximum-subarray/",
          },
          {
            title: "Maximum Sum Circular Subarray",
            leetcode: "918",
            link: "https://leetcode.com/problems/maximum-sum-circular-subarray/",
          },
        ] as Omit<Problem, 'id' | 'solved'>[],
      },
      {
        subcategory: "Dutch National Flag (3-way partition)",
        problems: [
          {
            title: "Sort Colors",
            leetcode: "75",
            link: "https://leetcode.com/problems/sort-colors/",
          },
          {
            title: "Wiggle Sort",
            leetcode: "280",
            link: "https://leetcode.com/problems/wiggle-sort/",
          },
        ] as Omit<Problem, 'id' | 'solved'>[],
      },
      {
        subcategory: "Cyclic Sort",
        problems: [
          {
            title: "Find All Numbers Disappeared in an Array",
            leetcode: "448",
            link: "https://leetcode.com/problems/find-all-numbers-disappeared-in-an-array/",
          },
          {
            title: "First Missing Positive",
            leetcode: "41",
            link: "https://leetcode.com/problems/first-missing-positive/",
          },
        ] as Omit<Problem, 'id' | 'solved'>[],
      },
    ],
  },
  // String
  {
    category: "String",
    subcategories: [
      {
        subcategory: "Sliding Window on Strings",
        problems: [
          {
            title: "Minimum Window Substring",
            leetcode: "76",
            link: "https://leetcode.com/problems/minimum-window-substring/",
          },
          {
            title: "Longest Repeating Character Replacement",
            leetcode: "424",
            link: "https://leetcode.com/problems/longest-repeating-character-replacement/",
          },
        ] as Omit<Problem, 'id' | 'solved'>[],
      },
      {
        subcategory: "Two Pointers",
        problems: [
          {
            title: "Valid Palindrome II",
            leetcode: "680",
            link: "https://leetcode.com/problems/valid-palindrome-ii/",
          },
          {
            title: "Longest Palindromic Substring",
            leetcode: "5",
            link: "https://leetcode.com/problems/longest-palindromic-substring/",
          },
        ] as Omit<Problem, 'id' | 'solved'>[],
      },
      {
        subcategory: "Hashing / Rolling Hash",
        problems: [
          {
            title: "Repeated String Match",
            leetcode: "686",
            link: "https://leetcode.com/problems/repeated-string-match/",
          },
          {
            title: "Distinct Substrings",
            platform: "SPOJ",
            link: "https://www.spoj.com/problems/SUBSTR1/",
          },
        ] as Omit<Problem, 'id' | 'solved'>[],
      },
      {
        subcategory: "KMP Algorithm",
        problems: [
          {
            title: "Implement strStr()",
            leetcode: "28",
            link: "https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/",
          },
          {
            title: "Pattern Search using KMP",
            platform: "GFG",
            link: "https://www.geeksforgeeks.org/kmp-algorithm-for-pattern-searching/",
          },
        ] as Omit<Problem, 'id' | 'solved'>[],
      },
      {
        subcategory: "Z Algorithm",
        problems: [
          {
            title: "Pattern Searching",
            platform: "Codeforces EDU",
            link: "https://codeforces.com/edu/course/2/lesson/3",
          },
          {
            title: "Number of Distinct Substrings (Z + Hash)",
            platform: "SPOJ",
            link: "https://www.spoj.com/problems/SUBSTR1/",
          },
        ] as Omit<Problem, 'id' | 'solved'>[],
      },
      {
        subcategory: "Trie-based Prefix Matching",
        problems: [
          {
            title: "Implement Trie (Prefix Tree)",
            leetcode: "208",
            link: "https://leetcode.com/problems/implement-trie-prefix-tree/",
          },
          {
            title: "Word Search II",
            leetcode: "212",
            link: "https://leetcode.com/problems/word-search-ii/",
          },
        ] as Omit<Problem, 'id' | 'solved'>[],
      },
      {
        subcategory: "Manacher’s Algorithm",
        problems: [
          {
            title: "Longest Palindromic Substring",
            leetcode: "5",
            link: "https://leetcode.com/problems/longest-palindromic-substring/",
          },
          {
            title: "Count Palindromic Substrings",
            leetcode: "647",
            link: "https://leetcode.com/problems/palindromic-substrings/",
          },
        ] as Omit<Problem, 'id' | 'solved'>[],
      },
      {
        subcategory: "Suffix Array / Automaton",
        problems: [
          {
            title: "Longest Duplicate Substring",
            leetcode: "1044",
            link: "https://leetcode.com/problems/longest-duplicate-substring/",
          },
          {
            title: "Distinct Substrings",
            platform: "SPOJ",
            link: "https://www.spoj.com/problems/SUBSTR1/",
          },
        ] as Omit<Problem, 'id' | 'solved'>[],
      },
    ],
  },
  // Linked List
  {
    category: "Linked List",
    subcategories: [
      {
        subcategory: "Fast & Slow Pointers",
        problems: [
          {
            title: "Linked List Cycle",
            leetcode: "141",
            link: "https://leetcode.com/problems/linked-list-cycle/",
          },
          {
            title: "Linked List Cycle II",
            leetcode: "142",
            link: "https://leetcode.com/problems/linked-list-cycle-ii/",
          },
        ] as Omit<Problem, 'id' | 'solved'>[],
      },
      {
        subcategory: "Reversal",
        problems: [
          {
            title: "Reverse Linked List",
            leetcode: "206",
            link: "https://leetcode.com/problems/reverse-linked-list/",
          },
          {
            title: "Reverse Nodes in k-Group",
            leetcode: "25",
            link: "https://leetcode.com/problems/reverse-nodes-in-k-group/",
          },
        ] as Omit<Problem, 'id' | 'solved'>[],
      },
      {
        subcategory: "Merge Two Sorted Lists",
        problems: [
          {
            title: "Merge Two Sorted Lists",
            leetcode: "21",
            link: "https://leetcode.com/problems/merge-two-sorted-lists/",
          },
          {
            title: "Merge k Sorted Lists",
            leetcode: "23",
            link: "https://leetcode.com/problems/merge-k-sorted-lists/",
          },
        ] as Omit<Problem, 'id' | 'solved'>[],
      },
      {
        subcategory: "Detect Intersection",
        problems: [
          {
            title: "Intersection of Two Linked Lists",
            leetcode: "160",
            link: "https://leetcode.com/problems/intersection-of-two-linked-lists/",
          },
          {
            title: "Merge in Between Linked Lists",
            leetcode: "1669",
            link: "https://leetcode.com/problems/merge-in-between-linked-lists/",
          },
        ] as Omit<Problem, 'id' | 'solved'>[],
      },
      {
        subcategory: "Copy List with Random Pointer",
        problems: [
          {
            title: "Copy List with Random Pointer",
            leetcode: "138",
            link: "https://leetcode.com/problems/copy-list-with-random-pointer/",
          },
          {
            title: "Clone a Linked List with Random Pointers",
            platform: "GFG",
            link: "https://www.geeksforgeeks.org/clone-linked-list-random-pointer/",
          },
        ] as Omit<Problem, 'id' | 'solved'>[],
      },
      {
        subcategory: "Flatten Linked List",
        problems: [
          {
            title: "Flatten a Multilevel Doubly Linked List",
            leetcode: "430",
            link: "https://leetcode.com/problems/flatten-a-multilevel-doubly-linked-list/",
          },
          {
            title: "Flatten Binary Tree to Linked List",
            leetcode: "114",
            link: "https://leetcode.com/problems/flatten-binary-tree-to-linked-list/",
          },
        ] as Omit<Problem, 'id' | 'solved'>[],
      },
    ],
  },
  // Recursion / Backtracking
  {
    category: "Recursion / Backtracking",
    subcategories: [
      {
        subcategory: "Pick / Not Pick Pattern",
        problems: [
          {
            title: "Subsets",
            leetcode: "78",
            link: "https://leetcode.com/problems/subsets/",
          },
          {
            title: "Combination Sum",
            leetcode: "39",
            link: "https://leetcode.com/problems/combination-sum/",
          },
        ] as Omit<Problem, 'id' | 'solved'>[],
      },
      {
        subcategory: "Subsets / Subsequences",
        problems: [
          {
            title: "Subsets II",
            leetcode: "90",
            link: "https://leetcode.com/problems/subsets-ii/",
          },
          {
            title: "Letter Combinations of a Phone Number",
            leetcode: "17",
            link: "https://leetcode.com/problems/letter-combinations-of-a-phone-number/",
          },
        ] as Omit<Problem, 'id' | 'solved'>[],
      },
      {
        subcategory: "Permutations",
        problems: [
          {
            title: "Permutations",
            leetcode: "46",
            link: "https://leetcode.com/problems/permutations/",
          },
          {
            title: "Permutations II",
            leetcode: "47",
            link: "https://leetcode.com/problems/permutations-ii/",
          },
        ] as Omit<Problem, 'id' | 'solved'>[],
      },
      {
        subcategory: "Partitioning",
        problems: [
          {
            title: "Palindrome Partitioning",
            leetcode: "131",
            link: "https://leetcode.com/problems/palindrome-partitioning/",
          },
          {
            title: "Matrix Chain Multiplication",
            platform: "GFG",
            link: "https://www.geeksforgeeks.org/matrix-chain-multiplication-dp-8/",
          },
        ] as Omit<Problem, 'id' | 'solved'>[],
      },
      {
        subcategory: "Grid DFS",
        problems: [
          {
            title: "Rat in a Maze",
            platform: "GFG",
            link: "https://www.geeksforgeeks.org/rat-in-a-maze-backtracking-2/",
          },
          {
            title: "N-Queens",
            leetcode: "51",
            link: "https://leetcode.com/problems/n-queens/",
          },
        ] as Omit<Problem, 'id' | 'solved'>[],
      },
      {
        subcategory: "Multiple Recursion Calls",
        problems: [
          {
            title: "Word Search",
            leetcode: "79",
            link: "https://leetcode.com/problems/word-search/",
          },
          {
            title: "Generate Parentheses",
            leetcode: "22",
            link: "https://leetcode.com/problems/generate-parentheses/",
          },
        ] as Omit<Problem, 'id' | 'solved'>[],
      },
    ],
  },
  // Bit Manipulation
  {
    category: "Bit Manipulation",
    subcategories: [
      {
        subcategory: "Check / Set / Unset / Toggle Bit",
        problems: [
          {
            title: "Power of Two",
            leetcode: "231",
            link: "https://leetcode.com/problems/power-of-two/",
          },
          {
            title: "Single Number",
            leetcode: "136",
            link: "https://leetcode.com/problems/single-number/",
          },
        ] as Omit<Problem, 'id' | 'solved'>[],
      },
      {
        subcategory: "Subset Generation (Bitmasking)",
        problems: [
          {
            title: "Subsets (bitmask version)",
            leetcode: "78",
            link: "https://leetcode.com/problems/subsets/",
          },
          {
            title: "Count Number of Maximum Bitwise-OR Subsets",
            leetcode: "2044",
            link: "https://leetcode.com/problems/count-number-of-maximum-bitwise-or-subsets/",
          },
        ] as Omit<Problem, 'id' | 'solved'>[],
      },
      {
        subcategory: "XOR Tricks",
        problems: [
          {
            title: "Single Number III",
            leetcode: "260",
            link: "https://leetcode.com/problems/single-number-iii/",
          },
          {
            title: "Missing Number",
            leetcode: "268",
            link: "https://leetcode.com/problems/missing-number/",
          },
        ] as Omit<Problem, 'id' | 'solved'>[],
      },
      {
        subcategory: "Count Set Bits",
        problems: [
          {
            title: "Counting Bits",
            leetcode: "338",
            link: "https://leetcode.com/problems/counting-bits/",
          },
          {
            title: "Number of 1 Bits",
            leetcode: "191",
            link: "https://leetcode.com/problems/number-of-1-bits/",
          },
        ] as Omit<Problem, 'id' | 'solved'>[],
      },
      {
        subcategory: "Power of 2 Check",
        problems: [
          {
            title: "Power of Four",
            leetcode: "342",
            link: "https://leetcode.com/problems/power-of-four/",
          },
          {
            title: "Power of Two",
            leetcode: "231",
            link: "https://leetcode.com/problems/power-of-two/",
          },
        ] as Omit<Problem, 'id' | 'solved'>[],
      },
      {
        subcategory: "Fast Exponentiation",
        problems: [
          {
            title: "Pow(x, n)",
            leetcode: "50",
            link: "https://leetcode.com/problems/powx-n/",
          },
          {
            title: "Modular Exponentiation",
            platform: "GFG",
            link: "https://www.geeksforgeeks.org/modular-exponentiation-power-in-modular-arithmetic/",
          },
        ] as Omit<Problem, 'id' | 'solved'>[],
      },
    ],
  },
  // Stack & Queue
  {
    category: "Stack & Queue",
    subcategories: [
      {
        subcategory: "Monotonic Stack",
        problems: [
          {
            title: "Next Greater Element I",
            leetcode: "496",
            link: "https://leetcode.com/problems/next-greater-element-i/",
          },
          {
            title: "Largest Rectangle in Histogram",
            leetcode: "84",
            link: "https://leetcode.com/problems/largest-rectangle-in-histogram/",
          },
        ] as Omit<Problem, 'id' | 'solved'>[],
      },
      {
        subcategory: "Monotonic Queue",
        problems: [
          {
            title: "Sliding Window Maximum",
            leetcode: "239",
            link: "https://leetcode.com/problems/sliding-window-maximum/",
          },
          {
            title: "Shortest Subarray with Sum at Least K",
            leetcode: "862",
            link: "https://leetcode.com/problems/shortest-subarray-with-sum-at-least-k/",
          },
        ] as Omit<Problem, 'id' | 'solved'>[],
      },
      {
        subcategory: "Balanced Parentheses",
        problems: [
          {
            title: "Valid Parentheses",
            leetcode: "20",
            link: "https://leetcode.com/problems/valid-parentheses/",
          },
          {
            title: "Minimum Add to Make Parentheses Valid",
            leetcode: "921",
            link: "https://leetcode.com/problems/minimum-add-to-make-parentheses-valid/",
          },
        ] as Omit<Problem, 'id' | 'solved'>[],
      },
      {
        subcategory: "Min/Max Stack",
        problems: [
          {
            title: "Min Stack",
            leetcode: "155",
            link: "https://leetcode.com/problems/min-stack/",
          },
          {
            title: "Max Stack",
            leetcode: "716",
            link: "https://leetcode.com/problems/max-stack/",
          },
        ] as Omit<Problem, 'id' | 'solved'>[],
      },
      {
        subcategory: "Queue using Stacks / Stack using Queues",
        problems: [
          {
            title: "Implement Queue using Stacks",
            leetcode: "232",
            link: "https://leetcode.com/problems/implement-queue-using-stacks/",
          },
          {
            title: "Implement Stack using Queues",
            leetcode: "225",
            link: "https://leetcode.com/problems/implement-stack-using-queues/",
          },
        ] as Omit<Problem, 'id' | 'solved'>[],
      },
      {
        subcategory: "LRU / LFU Cache",
        problems: [
          {
            title: "LRU Cache",
            leetcode: "146",
            link: "https://leetcode.com/problems/lru-cache/",
          },
          {
            title: "LFU Cache",
            leetcode: "460",
            link: "https://leetcode.com/problems/lfu-cache/",
          },
        ] as Omit<Problem, 'id' | 'solved'>[],
      },
    ],
  },
  // Sliding Window & Two Pointers
  {
    category: "Sliding Window & Two Pointers",
    subcategories: [
      {
        subcategory: "Fixed Window Size",
        problems: [
          {
            title: "Maximum Average Subarray I",
            leetcode: "643",
            link: "https://leetcode.com/problems/maximum-average-subarray-i/",
          },
          {
            title: "Max Consecutive Ones III",
            leetcode: "1004",
            link: "https://leetcode.com/problems/max-consecutive-ones-iii/",
          },
        ] as Omit<Problem, 'id' | 'solved'>[],
      },
      {
        subcategory: "Variable Window Size",
        problems: [
          {
            title: "Longest Substring with At Most K Distinct Characters",
            leetcode: "340",
            link: "https://leetcode.com/problems/longest-substring-with-at-most-k-distinct-characters/",
          },
          {
            title: "Fruit Into Baskets",
            leetcode: "904",
            link: "https://leetcode.com/problems/fruit-into-baskets/",
          },
        ] as Omit<Problem, 'id' | 'solved'>[],
      },
      {
        subcategory: "Two Sum / Three Sum / Four Sum",
        problems: [
          {
            title: "Two Sum II",
            leetcode: "167",
            link: "https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/",
          },
          { title: "4Sum", leetcode: "18", link: "https://leetcode.com/problems/4sum/" },
        ] as Omit<Problem, 'id' | 'solved'>[],
      },
      {
        subcategory: "Trapping Rainwater",
        problems: [
          {
            title: "Trapping Rain Water",
            leetcode: "42",
            link: "https://leetcode.com/problems/trapping-rain-water/",
          },
          {
            title: "Container With Most Water",
            leetcode: "11",
            link: "https://leetcode.com/problems/container-with-most-water/",
          },
        ] as Omit<Problem, 'id' | 'solved'>[],
      },
      {
        subcategory: "Minimum Window Substring",
        problems: [
          {
            title: "Minimum Window Substring",
            leetcode: "76",
            link: "https://leetcode.com/problems/minimum-window-substring/",
          },
          {
            title: "Smallest Subsequence of Distinct Characters",
            leetcode: "1081",
            link: "https://leetcode.com/problems/smallest-subsequence-of-distinct-characters/",
          },
        ] as Omit<Problem, 'id' | 'solved'>[],
      },
    ],
  },
  // Heap / Priority Queue
  {
    category: "Heap / Priority Queue",
    subcategories: [
      {
        subcategory: "Top K Elements",
        problems: [
          {
            title: "Top K Frequent Elements",
            leetcode: "347",
            link: "https://leetcode.com/problems/top-k-frequent-elements/",
          },
          {
            title: "K Closest Points to Origin",
            leetcode: "973",
            link: "https://leetcode.com/problems/k-closest-points-to-origin/",
          },
        ] as Omit<Problem, 'id' | 'solved'>[],
      },
      {
        subcategory: "Kth Largest / Smallest",
        problems: [
          {
            title: "Kth Largest Element in an Array",
            leetcode: "215",
            link: "https://leetcode.com/problems/kth-largest-element-in-an-array/",
          },
          {
            title: "Kth Smallest Element in a Sorted Matrix",
            leetcode: "378",
            link: "https://leetcode.com/problems/kth-smallest-element-in-a-sorted-matrix/",
          },
        ] as Omit<Problem, 'id' | 'solved'>[],
      },
      {
        subcategory: "Merge K Sorted Lists / Arrays",
        problems: [
          {
            title: "Merge k Sorted Lists",
            leetcode: "23",
            link: "https://leetcode.com/problems/merge-k-sorted-lists/",
          },
          {
            title: "Smallest Range Covering Elements from K Lists",
            leetcode: "632",
            link: "https://leetcode.com/problems/smallest-range-covering-elements-from-k-lists/",
          },
        ] as Omit<Problem, 'id' | 'solved'>[],
      },
      {
        subcategory: "Median of Data Stream",
        problems: [
          {
            title: "Find Median from Data Stream",
            leetcode: "295",
            link: "https://leetcode.com/problems/find-median-from-data-stream/",
          },
          {
            title: "Sliding Window Median",
            leetcode: "480",
            link: "https://leetcode.com/problems/sliding-window-median/",
          },
        ] as Omit<Problem, 'id' | 'solved'>[],
      },
      {
        subcategory: "Huffman Encoding",
        problems: [
          {
            title: "Huffman Coding",
            platform: "GFG",
            link: "https://www.geeksforgeeks.org/huffman-coding-greedy-algo-3/",
          },
          {
            title: "Minimum Cost of Connecting Ropes",
            leetcode: "1167",
            link: "https://leetcode.com/problems/minimum-cost-to-connect-sticks/",
          },
        ] as Omit<Problem, 'id' | 'solved'>[],
      },
    ],
  },
  // Greedy
  {
    category: "Greedy",
    subcategories: [
      {
        subcategory: "Interval Scheduling",
        problems: [
          {
            title: "Non-overlapping Intervals",
            leetcode: "435",
            link: "https://leetcode.com/problems/non-overlapping-intervals/",
          },
          {
            title: "Maximum Number of Events That Can Be Attended",
            leetcode: "1353",
            link: "https://leetcode.com/problems/maximum-number-of-events-that-can-be-attended/",
          },
        ] as Omit<Problem, 'id' | 'solved'>[],
      },
      {
        subcategory: "Interval Merging",
        problems: [
          {
            title: "Merge Intervals",
            leetcode: "56",
            link: "https://leetcode.com/problems/merge-intervals/",
          },
          {
            title: "Insert Interval",
            leetcode: "57",
            link: "https://leetcode.com/problems/insert-interval/",
          },
        ] as Omit<Problem, 'id' | 'solved'>[],
      },
      {
        subcategory: "Minimum Platforms / Meeting Rooms",
        problems: [
          {
            title: "Meeting Rooms II",
            leetcode: "253",
            link: "https://leetcode.com/problems/meeting-rooms-ii/",
          },
          {
            title: "Minimum Number of Platforms",
            platform: "GFG",
            link: "https://www.geeksforgeeks.org/minimum-number-platforms-required-railwaybus-station/",
          },
        ] as Omit<Problem, 'id' | 'solved'>[],
      },
      {
        subcategory: "Fractional Knapsack",
        problems: [
          {
            title: "Fractional Knapsack",
            platform: "GFG",
            link: "https://www.geeksforgeeks.org/fractional-knapsack-problem/",
          },
          {
            title: "IPO (Maximize Capital)",
            leetcode: "502",
            link: "https://leetcode.com/problems/ipo/",
          },
        ] as Omit<Problem, 'id' | 'solved'>[],
      },
      {
        subcategory: "Job Sequencing with Deadlines",
        problems: [
          {
            title: "Job Sequencing Problem",
            platform: "GFG",
            link: "https://www.geeksforgeeks.org/job-sequencing-problem-set-1-greedy-algorithm/",
          },
          {
            title: "Maximum Profit in Job Scheduling",
            leetcode: "1235",
            link: "https://leetcode.com/problems/maximum-profit-in-job-scheduling/",
          },
        ] as Omit<Problem, 'id' | 'solved'>[],
      },
      {
        subcategory: "Jump Game / Gas Station",
        problems: [
          {
            title: "Jump Game II",
            leetcode: "45",
            link: "https://leetcode.com/problems/jump-game-ii/",
          },
          {
            title: "Gas Station",
            leetcode: "134",
            link: "https://leetcode.com/problems/gas-station/",
          },
        ] as Omit<Problem, 'id' | 'solved'>[],
      },
    ],
  },
  // Binary Tree
  {
    category: "Binary Tree",
    subcategories: [
      {
        subcategory: "Traversals",
        problems: [
          {
            title: "Binary Tree Level Order Traversal",
            leetcode: "102",
            link: "https://leetcode.com/problems/binary-tree-level-order-traversal/",
          },
          {
            title: "Binary Tree Inorder Traversal",
            leetcode: "94",
            link: "https://leetcode.com/problems/binary-tree-inorder-traversal/",
          },
        ] as Omit<Problem, 'id' | 'solved'>[],
      },
      {
        subcategory: "Height / Diameter / Balance Check",
        problems: [
          {
            title: "Diameter of Binary Tree",
            leetcode: "543",
            link: "https://leetcode.com/problems/diameter-of-binary-tree/",
          },
          {
            title: "Balanced Binary Tree",
            leetcode: "110",
            link: "https://leetcode.com/problems/balanced-binary-tree/",
          },
        ] as Omit<Problem, 'id' | 'solved'>[],
      },
      {
        subcategory: "Path Problems",
        problems: [
          {
            title: "Path Sum II",
            leetcode: "113",
            link: "https://leetcode.com/problems/path-sum-ii/",
          },
          {
            title: "Binary Tree Maximum Path Sum",
            leetcode: "124",
            link: "https://leetcode.com/problems/binary-tree-maximum-path-sum/",
          },
        ] as Omit<Problem, 'id' | 'solved'>[],
      },
      {
        subcategory: "Views",
        problems: [
          {
            title: "Binary Tree Right Side View",
            leetcode: "199",
            link: "https://leetcode.com/problems/binary-tree-right-side-view/",
          },
          {
            title: "Top View of Binary Tree",
            platform: "GFG",
            link: "https://www.geeksforgeeks.org/print-nodes-top-view-binary-tree/",
          },
        ] as Omit<Problem, 'id' | 'solved'>[],
      },
      {
        subcategory: "Symmetry / Identical / Subtree",
        problems: [
          {
            title: "Symmetric Tree",
            leetcode: "101",
            link: "https://leetcode.com/problems/symmetric-tree/",
          },
          {
            title: "Subtree of Another Tree",
            leetcode: "572",
            link: "https://leetcode.com/problems/subtree-of-another-tree/",
          },
        ] as Omit<Problem, 'id' | 'solved'>[],
      },
      {
        subcategory: "Build Tree from Traversals",
        problems: [
          {
            title: "Construct Binary Tree from Preorder & Inorder Traversal",
            leetcode: "105",
            link: "https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/",
          },
          {
            title: "Construct Binary Tree from Inorder & Postorder Traversal",
            leetcode: "106",
            link: "https://leetcode.com/problems/construct-binary-tree-from-inorder-and-postorder-traversal/",
          },
        ] as Omit<Problem, 'id' | 'solved'>[],
      },
      {
        subcategory: "Flatten Binary Tree",
        problems: [
          {
            title: "Flatten Binary Tree to Linked List",
            leetcode: "114",
            link: "https://leetcode.com/problems/flatten-binary-tree-to-linked-list/",
          },
          {
            title: "Convert Sorted List to Binary Search Tree",
            leetcode: "109",
            link: "https://leetcode.com/problems/convert-sorted-list-to-binary-search-tree/",
          },
        ] as Omit<Problem, 'id' | 'solved'>[],
      },
      {
        subcategory: "BST Operations",
        problems: [
          {
            title: "Validate Binary Search Tree",
            leetcode: "98",
            link: "https://leetcode.com/problems/validate-binary-search-tree/",
          },
          {
            title: "Insert into a BST",
            leetcode: "701",
            link: "https://leetcode.com/problems/insert-into-a-binary-search-tree/",
          },
        ] as Omit<Problem, 'id' | 'solved'>[],
      },
    ],
  },
  // Graph
  {
    category: "Graph",
    subcategories: [
      {
        subcategory: "Traversal",
        problems: [
          {
            title: "Number of Islands",
            leetcode: "200",
            link: "https://leetcode.com/problems/number-of-islands/",
          },
          {
            title: "Course Schedule",
            leetcode: "207",
            link: "https://leetcode.com/problems/course-schedule/",
          },
        ] as Omit<Problem, 'id' | 'solved'>[],
      },
      {
        subcategory: "Shortest Path",
        problems: [
          {
            title: "Network Delay Time",
            leetcode: "743",
            link: "https://leetcode.com/problems/network-delay-time/",
          },
          {
            title: "Minimum Knight Moves",
            leetcode: "1197",
            link: "https://leetcode.com/problems/minimum-knight-moves/",
          },
        ] as Omit<Problem, 'id' | 'solved'>[],
      },
      {
        subcategory: "MST",
        problems: [
          {
            title: "Connecting Cities With Minimum Cost",
            leetcode: "1135",
            link: "https://leetcode.com/problems/connecting-cities-with-minimum-cost/",
          },
          {
            title: "Minimum Cost to Connect All Points",
            leetcode: "1584",
            link: "https://leetcode.com/problems/min-cost-to-connect-all-points/",
          },
        ] as Omit<Problem, 'id' | 'solved'>[],
      },
      {
        subcategory: "Advanced",
        problems: [
          {
            title: "Critical Connections in a Network",
            leetcode: "1192",
            link: "https://leetcode.com/problems/critical-connections-in-a-network/",
          },
          {
            title: "Redundant Connection II",
            leetcode: "685",
            link: "https://leetcode.com/problems/redundant-connection-ii/",
          },
        ] as Omit<Problem, 'id' | 'solved'>[],
      },
    ],
  },
  // Dynamic Programming (DP)
  {
    category: "Dynamic Programming (DP)",
    subcategories: [
      {
        subcategory: "Classic",
        problems: [
          {
            title: "Climbing Stairs",
            leetcode: "70",
            link: "https://leetcode.com/problems/climbing-stairs/",
          },
          {
            title: "Unique Paths II",
            leetcode: "63",
            link: "https://leetcode.com/problems/unique-paths-ii/",
          },
        ] as Omit<Problem, 'id' | 'solved'>[],
      },
      {
        subcategory: "Subsequences",
        problems: [
          {
            title: "Partition Equal Subset Sum",
            leetcode: "416",
            link: "https://leetcode.com/problems/partition-equal-subset-sum/",
          },
          {
            title: "Longest Increasing Subsequence",
            leetcode: "300",
            link: "https://leetcode.com/problems/longest-increasing-subsequence/",
          },
        ] as Omit<Problem, 'id' | 'solved'>[],
      },
      {
        subcategory: "String DP",
        problems: [
          {
            title: "Longest Common Subsequence",
            leetcode: "1143",
            link: "https://leetcode.com/problems/longest-common-subsequence/",
          },
          {
            title: "Edit Distance",
            leetcode: "72",
            link: "https://leetcode.com/problems/edit-distance/",
          },
        ] as Omit<Problem, 'id' | 'solved'>[],
      },
      {
        subcategory: "Advanced",
        problems: [
          {
            title: "Travelling Salesman Problem (TSP – Bitmask DP)",
            platform: "GFG",
            link: "https://www.geeksforgeeks.org/travelling-salesman-problem-using-dynamic-programming/",
          },
          {
            title: "Digit DP – Numbers with Unique Digits",
            leetcode: "1012",
            link: "https://leetcode.com/problems/numbers-with-unique-digits/",
          },
        ] as Omit<Problem, 'id' | 'solved'>[],
      },
    ],
  },
  // Trie
  {
    category: "Trie",
    subcategories: [
      {
        subcategory: "Basic",
        problems: [
          {
            title: "Implement Trie (Prefix Tree)",
            leetcode: "208",
            link: "https://leetcode.com/problems/implement-trie-prefix-tree/",
          },
          {
            title: "Maximum XOR of Two Numbers in an Array",
            leetcode: "421",
            link: "https://leetcode.com/problems/maximum-xor-of-two-numbers-in-an-array/",
          },
        ] as Omit<Problem, 'id' | 'solved'>[],
      },
      {
        subcategory: "Advanced Trie",
        problems: [
          {
            title: "Word Search II",
            leetcode: "212",
            link: "https://leetcode.com/problems/word-search-ii/",
          },
          {
            title: "Stream of Characters",
            leetcode: "1032",
            link: "https://leetcode.com/problems/stream-of-characters/",
          },
        ] as Omit<Problem, 'id' | 'solved'>[],
      },
    ],
  },
  // Advanced String Algorithms
  {
    category: "Advanced String Algorithms",
    subcategories: [
      {
        subcategory: "Hashing / KMP / Z",
        problems: [
          {
            title: "Find the Index of the First Occurrence",
            leetcode: "28",
            link: "https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/",
          },
          {
            title: "Z-Function – Find all occurrences of a pattern",
            platform: "CP Algo",
            link: "https://cp-algorithms.com/string/z-function.html",
          },
        ] as Omit<Problem, 'id' | 'solved'>[],
      },
      {
        subcategory: "Palindrome / Manacher",
        problems: [
          {
            title: "Longest Palindromic Substring",
            leetcode: "5",
            link: "https://leetcode.com/problems/longest-palindromic-substring/",
          },
          {
            title: "Palindrome Partitioning II",
            leetcode: "132",
            link: "https://leetcode.com/problems/palindrome-partitioning-ii/",
          },
        ] as Omit<Problem, 'id' | 'solved'>[],
      },
      {
        subcategory: "Suffix Structures",
        problems: [
          {
            title: "Longest Duplicate Substring",
            leetcode: "1044",
            link: "https://leetcode.com/problems/longest-duplicate-substring/",
          },
          {
            title: "Count Distinct Substrings (Suffix Automaton)",
            platform: "GFG",
            link: "https://www.geeksforgeeks.org/count-distinct-substrings-of-a-string-using-suffix-automaton/",
          },
        ] as Omit<Problem, 'id' | 'solved'>[],
      },
      {
        subcategory: "Advanced Algorithms",
        problems: [
          {
            title: "Lexicographically Smallest Rotation – Booth’s Algorithm",
            platform: "CP Algo",
            link: "https://cp-algorithms.com/string/smallest-cyclic-shift.html",
          },
          {
            title: "Aho–Corasick Algorithm – Multi Pattern Matching",
            platform: "CP Algo",
            link: "https://cp-algorithms.com/string/aho_corasick.html",
          },
        ] as Omit<Problem, 'id' | 'solved'>[],
      },
    ],
  },
  // Advanced DS & Algorithms
  {
    category: "Advanced DS & Algorithms",
    subcategories: [
      {
        subcategory: "Divide & Conquer",
        problems: [
          {
            title: "Maximum Subarray",
            leetcode: "53",
            link: "https://leetcode.com/problems/maximum-subarray/",
          },
          {
            title: "Median of Two Sorted Arrays",
            leetcode: "4",
            link: "https://leetcode.com/problems/median-of-two-sorted-arrays/",
          },
        ] as Omit<Problem, 'id' | 'solved'>[],
      },
      {
        subcategory: "Segment Tree / Fenwick Tree",
        problems: [
          {
            title: "Range Sum Query – Mutable",
            leetcode: "307",
            link: "https://leetcode.com/problems/range-sum-query-mutable/",
          },
          {
            title: "Inversion Count using BIT",
            platform: "GFG",
            link: "https://www.geeksforgeeks.org/count-inversions-using-fenwick-tree/",
          },
        ] as Omit<Problem, 'id' | 'solved'>[],
      },
      {
        subcategory: "Disjoint Set Union (DSU)",
        problems: [
          {
            title: "Redundant Connection",
            leetcode: "684",
            link: "https://leetcode.com/problems/redundant-connection/",
          },
          {
            title: "Number of Connected Components in an Undirected Graph",
            leetcode: "323",
            link: "https://leetcode.com/problems/number-of-connected-components-in-an-undirected-graph/",
          },
        ] as Omit<Problem, 'id' | 'solved'>[],
      },
      {
        subcategory: "Math / Number Theory",
        problems: [
          {
            title: "Greatest Common Divisor of Strings",
            leetcode: "1071",
            link: "https://leetcode.com/problems/greatest-common-divisor-of-strings/",
          },
          {
            title: "Modular Exponentiation",
            platform: "GFG",
            link: "https://www.geeksforgeeks.org/modular-exponentiation-power-in-modular-arithmetic/",
          },
        ] as Omit<Problem, 'id' | 'solved'>[],
      },
      {
        subcategory: "Geometry",
        problems: [
          {
            title: "Convex Hull",
            platform: "GFG",
            link: "https://www.geeksforgeeks.org/convex-hull-set-1-jarviss-algorithm-or-wrapping/",
          },
          {
            title: "Erect the Fence",
            leetcode: "587",
            link: "https://leetcode.com/problems/erect-the-fence/",
          },
        ] as Omit<Problem, 'id' | 'solved'>[],
      },
    ],
  },
];

// Helper function to create a unique ID for each problem (Unchanged)
let problemId = 0;
const createInitialState = (): Pattern[] => {
  return dsaPatterns.map((pattern) => ({
    ...pattern,
    subcategories: pattern.subcategories.map((subcat) => ({
      ...subcat,
      problems: subcat.problems.map((problem) => ({
        ...problem,
        id: problemId++,
        solved: false,
      })) as Problem[],
    })),
  })) as Pattern[];
};

type InitializedPatternList = {
  category: string;
  subcategories: {
    subcategory: string;
    problems: Problem[];
  }[];
}[];


function Algorithm({ darkMode = false }: { darkMode?: boolean }) {
  // State (Unchanged except for adding isSidebarOpen)
  const [patternsList, setPatternsList] = useState<InitializedPatternList>(createInitialState as () => InitializedPatternList);
  const [problemSearchTerm, setProblemSearchTerm] = useState<string>("");

  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);
  const [expandedSubcategory, setExpandedSubcategory] = useState<string | null>(null);

  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false); // State for mobile sidebar visibility


  const handleCheckboxChange = (problemId: number, category: string, subcategory: string): void => {
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

  const flattenProblems: InitializedProblem[] = patternsList.flatMap((pattern) =>
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

  const totalProblems: number = flattenProblems.length;
  const solvedProblems: number = flattenProblems.filter((q) => q.solved).length;
  const completionPercentage: number =
    totalProblems > 0 ? Math.round((solvedProblems / totalProblems) * 100) : 0;

  const getCategoryProgress = (category: string): string => {
    const categoryProblems = flattenProblems.filter((q) => q.category === category);
    const solvedCount = categoryProblems.filter((q) => q.solved).length;
    const totalCount = categoryProblems.length;
    return `(${solvedCount}/${totalCount})`;
  };

  const getSubcategoryProgress = (category: string, subcategory: string): string => {
    const subcategoryProblems = flattenProblems.filter(
      (q) => q.category === category && q.subcategory === subcategory
    );
    const solvedCount = subcategoryProblems.filter((q) => q.solved).length;
    const totalCount = subcategoryProblems.length;
    return `(${solvedCount}/${totalCount})`;
  };

const getBackgroundColorClass = (): string =>
  darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900";

const getSidebarColorClass = (): string =>
  darkMode ? "bg-gray-800 border-gray-700" : "bg-white border-gray-200";

const getProgressSectionColorClass = (): string =>
  darkMode ? "bg-gray-800 text-white" : "bg-gray-100 text-gray-900";

const getProblemSearchColorClass = (): string =>
  darkMode
    ? "bg-gray-700 border border-[#6334B9] text-white focus:ring-2 focus:ring-[#6334B9]"
              : "bg-purple-50 border border-[#6334B9] text-black focus:ring-2 focus:ring-[#6334B9]";// bg slightly lighter shade

const getTableColorClass = (): string =>
  darkMode ? "border-gray-700" : "border-gray-200";

const getTableHeaderColorClass = (): string =>
  darkMode ? "bg-gray-700" : "bg-gray-100";

const getTableRowColorClass = (): string =>
  darkMode ? "border-gray-700 hover:bg-gray-800" : "border-gray-200 hover:bg-[#F2F0FF]"; // hover slightly lighter

const getProblemTitleColorClass = (): string =>
  darkMode
    ? "text-gray-200 hover:text-[#6334B9]"
    : "text-gray-900 hover:text-[#6334B9]";

const getPurpleButtonClass = (): string =>
  darkMode
    ? "bg-[#6334B9] hover:bg-[#4B27A0] text-white" // hover darker shade
    : "bg-[#6334B9] hover:bg-[#4B27A0] text-white";



  return (
    <div className={`flex flex-col lg:flex-row min-h-screen pt-20 transition-colors duration-500 ${getBackgroundColorClass()}`}>

      {/* Mobile Toggle Button (Fixed Position to appear over content and respect pt-20) */}
      <button
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        className={`
       fixed top-4 left-4 p-2 rounded-lg z-30 lg:hidden 
        ${getPurpleButtonClass()}
 `}
        style={{ top: '80px' }}
      >
        {isSidebarOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Sidebar - Modified to be positioned correctly and responsive */}
      <div
        className={`
    fixed top-0 left-0 w-80 border-r p-0 z-20 lg:z-10 
    transition-transform duration-300 ease-in-out lg:translate-x-0 
    lg:w-80 lg:relative lg:min-h-full
    ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}
    ${getSidebarColorClass()}
  `}
        style={{ top: '20px', height: 'calc(100vh - 40px)' }}
      >

        {/* Inner container now holds all padding to bring content up */}
        <div className="p-4">
          <h1 className="text-xl font-bold mb-4">DSA Patterns</h1>
          <div className="relative mb-6">
            <Search className={`absolute left-3 top-2.5 w-4 h-4 ${darkMode ? "text-[#6334B9]" : "text-[#6334B9]"}`} />
            <input
              type="text"
              placeholder="Search problems..."
              className={`w-full pl-9 pr-3 py-2 rounded-md text-sm outline-none transition-colors duration-300 ${getProblemSearchColorClass()}`}
              value={problemSearchTerm}
              onChange={(e) => setProblemSearchTerm(e.target.value)}
            />
          </div>
          <ul className="space-y-3">
            {patternsList.map((pattern) => (
              <li key={pattern.category}>
                <div
                  className={`flex items-center justify-between space-x-2 cursor-pointer p-2 rounded-md ${expandedCategory === pattern.category ? (darkMode ? "bg-gray-700" : "bg-gray-100") : (darkMode ? "hover:bg-gray-700" : "hover:bg-gray-100")
                    }`}
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
                          className={`flex items-center justify-between space-x-2 cursor-pointer p-2 rounded-md ${expandedSubcategory === subcat.subcategory ? (darkMode ? "bg-gray-700" : "bg-gray-100") : (darkMode ? "hover:bg-gray-700" : "hover:bg-gray-100")
                            }`}
                          onClick={() =>
                            setExpandedSubcategory(expandedSubcategory === subcat.subcategory ? null : subcat.subcategory)
                          }
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
      </div>

      {/* Overlay to close sidebar on mobile */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-10 lg:hidden"
          onClick={() => setIsSidebarOpen(false)}
        ></div>
      )}

      {/* Main Content Container */}
      <div className="flex-1 p-6 overflow-y-auto">

        {/* Overall Progress Section - Now part of the main flex content */}
        <div className={`p-6 rounded-lg mb-6 shadow-md transition-colors duration-500 ${getProgressSectionColorClass()}`}>
          <h2 className="text-xl font-bold mb-4">Overall Progress</h2>
          <div className="flex items-center space-x-6">
            <div className="flex flex-col items-start min-w-[120px]">
              <span className="text-2xl font-bold">
                {solvedProblems} / {totalProblems}
              </span>
              <p className={`text-sm ${darkMode ? "text-gray-400" : "text-gray-800"}`}>
                Problems Solved
              </p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-24 h-24 relative">
                <svg className="w-full h-full transform -rotate-90">
                  <circle
                    className={`stroke-current ${darkMode ? "text-gray-700" : "text-gray-300"}`}
                    strokeWidth="8"
                    fill="transparent"
                    r="40"
                    cx="48"
                    cy="48"
                  />
                  <circle
                    className="stroke-current text-[#6334B9]"
                    strokeWidth="8"
                    strokeDasharray={40 * 2 * Math.PI}
                    strokeDashoffset={
                      40 * 2 * Math.PI - (completionPercentage / 100) * (40 * 2 * Math.PI)
                    }
                    strokeLinecap="round"
                    fill="transparent"
                    r="40"
                    cx="48"
                    cy="48"
                  />
                </svg>
                <span className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-bold text-xl ${darkMode ? "text-white" : "text-gray-900"}`}>
                  {completionPercentage}%
                </span>
              </div>
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
                  <th className="p-3 text-left w-5/12 hidden sm:table-cell">Category</th>
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
                    <td className="p-3 hidden sm:table-cell">
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

export default Algorithm;