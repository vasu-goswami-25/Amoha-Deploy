import React, { useState, useMemo } from "react";
import { Search, ChevronDown, ChevronRight } from "lucide-react";

// --- Types ---
export type Difficulty = "Easy" | "Medium" | "Hard";

export interface Question {
    id: number;
    title: string;
    category: string;
    difficulty: Difficulty;
    solved: boolean;
    link: string;
}

// --- CONFIG ---
const TARGET_QUESTION_COUNT = 455;
const PRIMARY_COLOR = "#6334B9"; // Custom color

// --- Data Generation Helpers (Ensures exactly 455 problems and unique IDs) ---
let currentId = 1;

const createQuestion = (title: string, category: string, difficulty: Difficulty, link: string): Question => ({
    id: currentId++,
    title,
    category,
    difficulty,
    solved: false,
    link,
});

// Original Questions (used to start the list)
const baseQuestions: Question[] = [
    // --- Arrays ---
    createQuestion("Largest Element in an Array", "Arrays", "Easy", "https://www.geeksforgeeks.org/problems/largest-element-in-array4009/1"),
    createQuestion("Second Largest Element in an Array without sorting", "Arrays", "Easy", "https://www.geeksforgeeks.org/problems/second-largest3735/1"),
    createQuestion("Check if the array is sorted", "Arrays", "Easy", "https://leetcode.com/problems/check-if-array-is-sorted-and-rotated/"),
    createQuestion("Remove duplicates from Sorted array", "Arrays", "Easy", "https://leetcode.com/problems/remove-duplicates-from-sorted-array/"),
    createQuestion("Left Rotate an array by one place", "Arrays", "Easy", "https://leetcode.com/problems/rotate-array/description/"),
    createQuestion("Move Zeros to end", "Arrays", "Easy", "https://leetcode.com/problems/move-zeroes/"),
    createQuestion("Linear Search", "Arrays", "Easy", "https://www.geeksforgeeks.org/problems/search-an-element-in-an-array-1587115621/1"),
    createQuestion("Find missing number in an array", "Arrays", "Easy", "https://leetcode.com/problems/missing-number/"),
    createQuestion("Maximum Consecutive Ones", "Arrays", "Easy", "https://leetcode.com/problems/max-consecutive-ones/"),
    createQuestion("Leaders in an Array problem", "Arrays", "Easy", "https://www.geeksforgeeks.org/problems/leaders-in-an-array-1587115620/1"),
    createQuestion("Longest Consecutive Sequence in an Array", "Arrays", "Easy", "https://leetcode.com/problems/longest-consecutive-sequence/"),
    createQuestion("Kadane's Algorithm, maximum subarray sum", "Arrays", "Easy", "https://leetcode.com/problems/maximum-subarray/"),
    createQuestion("Majority Element (>n/2 times)", "Arrays", "Easy", "https://leetcode.com/problems/majority-element/"),
    createQuestion("Stock Buy and Sell", "Arrays", "Easy", "https://leetcode.com/problems/best-time-to-buy-and-sell-stock/"),
    createQuestion("Maximum Product Subarray", "Arrays", "Easy", "https://leetcode.com/problems/maximum-product-subarray/"),
    createQuestion("Left rotate an array by D places", "Arrays", "Medium", "https://leetcode.com/problems/rotate-array/description/"),
    createQuestion("Find the Union", "Arrays", "Medium", "https://www.geeksforgeeks.org/union-and-intersection-of-two-sorted-arrays-2/"),
    createQuestion("Find the number that appears once, and others twice", "Arrays", "Medium", "https://leetcode.com/problems/single-number/"),
    createQuestion("Longest subarray with given sum K (positives)", "Arrays", "Medium", "https://www.geeksforgeeks.org/problems/longest-sub-array-with-sum-k0809/1"),
    createQuestion("Longest subarray with sum K (Positives + Negatives)", "Arrays", "Medium", "https://www.geeksforgeeks.org/longest-subarray-with-sum-k-2/"),
    createQuestion("Set Matrix Zeros", "Arrays", "Medium", "https://leetcode.com/problems/set-matrix-zeroes/"),
    createQuestion("Rotate Matrix by 90 degrees", "Arrays", "Medium", "https://leetcode.com/problems/rotate-image/"),
    createQuestion("Rearrange array in alternating positive and negative items", "Arrays", "Medium", "https://leetcode.com/problems/rearrange-array-elements-by-sign/"),
    createQuestion("Pascal's Triangle", "Arrays", "Medium", "https://leetcode.com/problems/pascals-triangle/"),
    createQuestion("Majority Element (n/3 times)", "Arrays", "Medium", "https://leetcode.com/problems/majority-element-ii/"),
    createQuestion("Largest Subarray with 0 Sum", "Arrays", "Medium", "https://www.geeksforgeeks.org/problems/largest-subarray-with-0-sum/1"),
    createQuestion("Merge Overlapping Subintervals", "Arrays", "Medium", "https://leetcode.com/problems/merge-intervals/"),
    createQuestion("Merge two sorted arrays without extra space", "Arrays", "Medium", "https://leetcode.com/problems/merge-sorted-array/"),
    createQuestion("Print the matrix in spiral manner", "Arrays", "Medium", "https://leetcode.com/problems/spiral-matrix/"),
    createQuestion("4-Sum Problem", "Arrays", "Hard", "https://leetcode.com/problems/4sum/"),
    createQuestion("Count number of subarrays with given xor K", "Arrays", "Hard", "https://www.geeksforgeeks.org/problems/count-subarray-with-given-xor/1"),
    createQuestion("Find the repeating and missing number", "Arrays", "Hard", "https://www.geeksforgeeks.org/problems/find-missing-and-repeating2512/1"),
    createQuestion("Count Inversions", "Arrays", "Hard", "https://www.geeksforgeeks.org/problems/inversion-of-array-1587115620/1"),
    createQuestion("Reverse Pairs", "Arrays", "Hard", "https://leetcode.com/problems/reverse-pairs/"),
    createQuestion("Next Permutation", "Arrays", "Hard", "https://leetcode.com/problems/next-permutation/"),
    createQuestion("Count subarrays with given sum", "Arrays", "Hard", "https://leetcode.com/problems/subarray-sum-equals-k/description/"),

    // --- Binary Search ---
    createQuestion("Binary Search to find X in sorted array", "Binary Search", "Easy", "https://leetcode.com/problems/binary-search/"),
    createQuestion("Implement Lower Bound", "Binary Search", "Easy", "https://www.geeksforgeeks.org/problems/implement-lower-bound/1"),
    createQuestion("Implement Upper Bound", "Binary Search", "Easy", "https://www.geeksforgeeks.org/problems/implement-upper-bound/1"),
    createQuestion("Search Insert Position", "Binary Search", "Easy", "https://leetcode.com/problems/search-insert-position/"),
    createQuestion("Find the first or last occurrence of a given number in a sorted array", "Binary Search", "Easy", "https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/"),
    createQuestion("Count occurrences of a number in a sorted array with duplicates", "Binary Search", "Easy", "https://www.geeksforgeeks.org/problems/number-of-occurrence2259/1"),
    createQuestion("Find out how many times has an array been rotated", "Binary Search", "Easy", "https://www.geeksforgeeks.org/problems/rotation4723/1"),
    createQuestion("Single element in a sorted Array", "Binary Search", "Easy", "https://leetcode.com/problems/single-element-in-a-sorted-array/"),
    createQuestion("Find the smallest Divisor", "Binary Search", "Easy", "https://leetcode.com/problems/find-the-smallest-divisor-given-a-threshold/"),
    createQuestion("Kth Missing Positive Number", "Binary Search", "Easy", "https://leetcode.com/problems/kth-missing-positive-number/"),
    createQuestion("Floor/Ceil in Sorted Array", "Binary Search", "Medium", "https://www.geeksforgeeks.org/problems/ceil-in-a-sorted-array/1"),
    createQuestion("Search in Rotated Sorted Array I", "Binary Search", "Medium", "https://leetcode.com/problems/search-in-rotated-sorted-array/"),
    createQuestion("Search in Rotated Sorted Array II", "Binary Search", "Medium", "https://leetcode.com/problems/search-in-rotated-sorted-array-ii/"),
    createQuestion("Find minimum in Rotated Sorted Array", "Binary Search", "Medium", "https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/"),
    createQuestion("Find square root of a number in log n", "Binary Search", "Medium", "https://leetcode.com/problems/sqrtx/"),
    createQuestion("Find the Nth root of a number using binary search", "Binary Search", "Medium", "https://www.geeksforgeeks.org/problems/find-nth-root-of-m5843/1"),
    createQuestion("Kth element of 2 sorted arrays", "Binary Search", "Medium", "https://www.geeksforgeeks.org/problems/find-nth-root-of-m5843/1"),
    createQuestion("Find peak element", "Binary Search", "Hard", "https://leetcode.com/problems/find-peak-element/"),
    createQuestion("Koko Eating Bananas", "Binary Search", "Hard", "https://leetcode.com/problems/koko-eating-bananas/"),
    createQuestion("Minimum days to make M bouquets", "Binary Search", "Hard", "https://leetcode.com/problems/minimum-number-of-days-to-make-m-bouquets/"),
    createQuestion("Capacity to Ship Packages within D Days", "Binary Search", "Hard", "https://leetcode.com/problems/capacity-to-ship-packages-within-d-days/"),
    createQuestion("Aggressive Cows", "Binary Search", "Hard", "https://www.geeksforgeeks.org/problems/aggressive-cows/1"),
    createQuestion("Book Allocation Problem", "Binary Search", "Hard", "https://www.geeksforgeeks.org/problems/allocate-minimum-number-of-pages0937/1"),
    createQuestion("Split array - Largest Sum", "Binary Search", "Hard", "https://leetcode.com/problems/split-array-largest-sum/"),
    createQuestion("Painter's partition", "Binary Search", "Hard", "https://www.geeksforgeeks.org/problems/the-painters-partition-problem1535/1"),
    createQuestion("Minimize Max Distance to Gas Station", "Binary Search", "Hard", "https://leetcode.com/problems/minimize-max-distance-to-gas-station/"),
    createQuestion("Median of 2 sorted arrays", "Binary Search", "Hard", "https://leetcode.com/problems/median-of-two-sorted-arrays/"),

    // --- Binary Search on 2D Arrays ---
    createQuestion("Find the row with maximum number of 1's", "Binary Search on 2D Arrays", "Easy", "https://leetcode.com/problems/find-the-row-with-maximum-number-of-ones/"),
    createQuestion("Search in a 2D matrix", "Binary Search on 2D Arrays", "Medium", "https://leetcode.com/problems/search-a-2d-matrix/"),
    createQuestion("Search in a row and column wise sorted matrix", "Binary Search on 2D Arrays", "Medium", "https://leetcode.com/problems/search-a-2d-matrix-ii/"),
    createQuestion("Find Peak Element (2D Matrix)", "Binary Search on 2D Arrays", "Hard", "https://leetcode.com/problems/find-a-peak-element-in-a-2d-matrix/"),
    createQuestion("Matrix Median", "Binary Search on 2D Arrays", "Hard", "https://leetcode.com/problems/matrix-median/"),

    // --- Strings ---
    createQuestion("Sort Characters by frequency", "Strings", "Easy", "https://leetcode.com/problems/sort-characters-by-frequency/"),
    createQuestion("Maximum Nesting Depth of Parenthesis", "Strings", "Easy", "https://leetcode.com/problems/maximum-nesting-depth-of-the-parentheses/"),
    createQuestion("Roman Number to Integer", "Strings", "Easy", "https://leetcode.com/problems/roman-to-integer/"),
    createQuestion("Integer to Roman", "Strings", "Easy", "https://leetcode.com/problems/integer-to-roman/"),
    createQuestion("Reverse Every Word in A String", "Strings", "Easy", "https://leetcode.com/problems/reverse-words-in-a-string/"),
    createQuestion("Remove outermost Paranthesis", "Strings", "Easy", "https://leetcode.com/problems/remove-outermost-parentheses/"),
    createQuestion("Valid Palindrome", "Strings", "Easy", "https://leetcode.com/problems/valid-palindrome/"),
    createQuestion("Largest odd number in a string", "Strings", "Easy", "https://leetcode.com/problems/largest-odd-number-in-string/"),
    createQuestion("Longest Common Prefix", "Strings", "Easy", "https://leetcode.com/problems/longest-common-prefix/"),
    createQuestion("Isomorphic String", "Strings", "Easy", "https://leetcode.com/problems/isomorphic-strings/"),
    createQuestion("Z-Function", "Strings", "Easy", "https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/description/"),
    createQuestion("Implement Atoi", "Strings", "Medium", "https://leetcode.com/problems/string-to-integer-atoi/"),
    createQuestion("Count Number of Substrings", "Strings", "Medium", "https://www.geeksforgeeks.org/problems/count-substring/1"),
    createQuestion("Check whether one string is a rotation of another", "Strings", "Medium", "https://leetcode.com/problems/rotate-string/"),
    createQuestion("Check if two strings are anagram of each other", "Strings", "Medium", "https://leetcode.com/problems/valid-anagram/"),
    createQuestion("Sum of Beauty of all substring", "Strings", "Medium", "https://leetcode.com/problems/sum-of-beauty-of-all-substrings/"),
    createQuestion("Minimum number of bracket reversals needed to make an expression balanced", "Strings", "Medium", "https://leetcode.com/problems/minimum-cost-to-make-a-string-valid/"),
    createQuestion("Count and say", "Strings", "Medium", "https://leetcode.com/problems/count-and-say/"),
    createQuestion("Hashing In Strings | Theory", "Strings", "Medium", "https://leetcode.com/problems/longest-duplicate-substring/"),
    createQuestion("Longest Palindromic Substring", "Strings", "Hard", "https://leetcode.com/problems/longest-palindromic-substring/"),
    createQuestion("Rabin Karp", "Strings", "Hard", "https://leetcode.com/problems/repeated-string-match/"),
    createQuestion("KMP algo / LPS(pi) array", "Strings", "Hard", "https://leetcode.com/problems/implement-strstr/"),
    createQuestion("Shortest Palindrome", "Strings", "Hard", "https://leetcode.com/problems/shortest-palindrome/"),
    createQuestion("Longest happy prefix", "Strings", "Hard", "https://leetcode.com/problems/longest-happy-prefix/"),
    createQuestion("Count palindromic subsequence in given string", "Strings", "Hard", "https://leetcode.com/problems/count-palindromic-subsequences/"),

    // --- Linked Lists ---
    createQuestion("Find the length of the linkedlist", "Linked List", "Easy", "https://www.geeksforgeeks.org/problems/count-nodes-of-linked-list/1"),
    createQuestion("Search an element in the LL", "Linked List", "Easy", "https://www.geeksforgeeks.org/problems/search-in-linked-list-1664434326/1"),
    createQuestion("Middle of a LinkedList", "Linked List", "Easy", "https://leetcode.com/problems/middle-of-the-linked-list/"),
    createQuestion("Reverse a LinkedList (Iterative/Recursive)", "Linked List", "Easy", "https://leetcode.com/problems/reverse-linked-list/"),
    createQuestion("Length of Loop in LL", "Linked List", "Easy", "https://www.geeksforgeeks.org/problems/find-length-of-loop/1"),
    createQuestion("Inserting a node in LinkedList", "Linked List", "Easy", "https://www.geeksforgeeks.org/problems/linked-list-insertion-1587115620/1"),
    createQuestion("Insert a node in DLL", "Linked List", "Easy", "https://www.geeksforgeeks.org/problems/display-doubly-linked-list--154650/1"),
    createQuestion("Deleting a node in LinkedList", "Linked List", "Medium", "https://leetcode.com/problems/delete-node-in-a-linked-list/description/"),
    createQuestion("Delete a node in DLL", "Linked List", "Medium", "https://www.geeksforgeeks.org/problems/delete-node-in-doubly-linked-list/1"),
    createQuestion("Reverse a DLL", "Linked List", "Medium", "https://www.geeksforgeeks.org/problems/reverse-a-doubly-linked-list/1"),
    createQuestion("Detect a loop in LL", "Linked List", "Medium", "https://leetcode.com/problems/linked-list-cycle/"),
    createQuestion("Find the starting point in LL", "Linked List", "Medium", "https://leetcode.com/problems/linked-list-cycle-ii/"),
    createQuestion("Check if LL is palindrome or not", "Linked List", "Medium", "https://leetcode.com/problems/palindrome-linked-list/"),
    createQuestion("Segregate odd and even nodes in LL", "Linked List", "Medium", "https://www.geeksforgeeks.org/problems/segregate-even-and-odd-nodes-in-a-linked-list5035/1"),
    createQuestion("Remove Nth node from the back of the LL", "Linked List", "Medium", "https://leetcode.com/problems/remove-nth-node-from-end-of-list/"),
    createQuestion("Delete the middle node of LL", "Linked List", "Medium", "https://leetcode.com/problems/delete-the-middle-node-of-a-linked-list/"),
    createQuestion("Sort LL", "Linked List", "Medium", "https://leetcode.com/problems/sort-list/"),
    createQuestion("Sort a LL of 0's 1's and 2's", "Linked List", "Medium", "https://www.geeksforgeeks.org/problems/given-a-linked-list-of-0s-1s-and-2s-sort-it/1"),
    createQuestion("Find the intersection point of Y LL", "Linked List", "Medium", "https://leetcode.com/problems/intersection-of-two-linked-lists/"),
    createQuestion("Add 1 to a number represented by LL", "Linked List", "Medium", "https://leetcode.com/problems/plus-one-linked-list/"),
    createQuestion("Rotate a LL", "Linked List", "Medium", "https://leetcode.com/problems/rotate-list/"),
    createQuestion("Reverse LL in group of given size K", "Linked List", "Hard", "https://leetcode.com/problems/reverse-nodes-in-k-group/"),
    createQuestion("Flattening of LL", "Linked List", "Hard", "https://www.geeksforgeeks.org/problems/flattening-a-linked-list/1"),

    // --- Recursion ---
    createQuestion("Count Good numbers", "Recursion", "Easy", "https://leetcode.com/problems/count-good-numbers/"),
    createQuestion("Reverse a stack using recursion", "Recursion", "Easy", "https://www.geeksforgeeks.org/reverse-a-stack-using-recursion/"),
    createQuestion("Pow(x, n)", "Recursion", "Medium", "https://leetcode.com/problems/powx-n/"),
    createQuestion("Sort a stack using recursion", "Recursion", "Medium", "https://www.geeksforgeeks.org/sort-a-stack-using-recursion/"),
    createQuestion("Generate all binary strings", "Recursion", "Medium", "https://www.geeksforgeeks.org/recursive-program-to-generate-all-binary-strings-of-length-n/"),
    createQuestion("Generate Paranthesis", "Recursion", "Medium", "https://leetcode.com/problems/generate-parentheses/"),
    createQuestion("Print all subsequences/Power Set", "Recursion", "Medium", "https://www.geeksforgeeks.org/print-all-subsequences-of-a-string/"),
    createQuestion("Check if there exists a subsequence with sum K", "Recursion", "Medium", "https://www.geeksforgeeks.org/print-subsequences-with-given-sum-in-an-array/"),
    createQuestion("Combination Sum", "Recursion", "Medium", "https://leetcode.com/problems/combination-sum/"),
    createQuestion("Combination Sum-II", "Recursion", "Medium", "https://leetcode.com/problems/combination-sum-ii/"),
    createQuestion("Subset Sum-I", "Recursion", "Medium", "https://www.geeksforgeeks.org/subset-sum-problem-dp-25/"),
    createQuestion("Subset Sum-II", "Recursion", "Medium", "https://leetcode.com/problems/subsets-ii/"),
    createQuestion("Letter Combinations of a Phone number", "Recursion", "Medium", "https://leetcode.com/problems/letter-combinations-of-a-phone-number/"),
    createQuestion("Palindrome Partitioning", "Recursion", "Medium", "https://leetcode.com/problems/palindrome-partitioning/"),
    createQuestion("Word Search", "Recursion", "Medium", "https://leetcode.com/problems/word-search/"),
    createQuestion("Recursive Implementation of atoi()", "Recursion", "Hard", "https://leetcode.com/problems/string-to-integer-atoi/"),
    createQuestion("Count all subsequences with sum K", "Recursion", "Hard", "https://www.geeksforgeeks.org/count-subsequences-sum-equals-k/"),
    createQuestion("Combination Sum - III", "Recursion", "Hard", "https://leetcode.com/problems/combination-sum-iii/"),
    createQuestion("N Queen", "Recursion", "Hard", "https://leetcode.com/problems/n-queens/"),
    createQuestion("Rat in a Maze", "Recursion", "Hard", "https://www.geeksforgeeks.org/rat-in-a-maze-backtracking-2/"),
    createQuestion("Word Break", "Recursion", "Hard", "https://leetcode.com/problems/word-break/"),
    createQuestion("M Coloring Problem", "Recursion", "Hard", "https://www.geeksforgeeks.org/m-coloring-problem-backtracking-5/"),
    createQuestion("Sudoku Solver", "Recursion", "Hard", "https://leetcode.com/problems/sudoku-solver/"),
    createQuestion("Expression Add Operators", "Recursion", "Hard", "https://leetcode.com/problems/expression-add-operators/"),

    // --- Stack and Queue ---
    createQuestion("Implement Stack using Arrays", "Stack and Queue", "Easy", "https://www.geeksforgeeks.org/stack-data-structure-introduction-and-implementation/"),
    createQuestion("Implement Queue using Arrays", "Stack and Queue", "Easy", "https://www.geeksforgeeks.org/queue-set-1-introduction-and-array-implementation/"),
    createQuestion("Implement stack using Linkedlist", "Stack and Queue", "Easy", "https://www.geeksforgeeks.org/stack-data-structure-introduction-and-implementation/"),
    createQuestion("Next Greater Element", "Stack and Queue", "Easy", "https://leetcode.com/problems/next-greater-element-i/"),
    createQuestion("Next Smaller Element", "Stack and Queue", "Easy", "https://www.geeksforgeeks.org/next-smaller-element/"),
    createQuestion("Number of NGEs to the right", "Stack and Queue", "Easy", "https://www.geeksforgeeks.org/next-greater-element/"),
    createQuestion("Implement Stack using Queue", "Stack and Queue", "Medium", "https://leetcode.com/problems/implement-stack-using-queues/"),
    createQuestion("Implement Queue using Stack", "Stack and Queue", "Medium", "https://leetcode.com/problems/implement-queue-using-stacks/"),
    createQuestion("Implement queue using Linkedlist", "Stack and Queue", "Medium", "https://www.geeksforgeeks.org/queue-linked-list-implementation/"),
    createQuestion("Check for balanced paranthesis", "Stack and Queue", "Medium", "https://leetcode.com/problems/valid-parentheses/"),
    createQuestion("Implement Min Stack", "Stack and Queue", "Medium", "https://leetcode.com/problems/min-stack/"),
    createQuestion("Next Greater Element 2", "Stack and Queue", "Medium", "https://leetcode.com/problems/next-greater-element-ii/"),
    createQuestion("Sum of subarray minimum", "Stack and Queue", "Medium", "https://leetcode.com/problems/sum-of-subarray-minimums/"),
    createQuestion("Asteroid Collision", "Stack and Queue", "Medium", "https://leetcode.com/problems/asteroid-collision/"),
    createQuestion("Sum of subarray ranges", "Stack and Queue", "Medium", "https://leetcode.com/problems/sum-of-subarray-ranges/"),
    createQuestion("Remove k Digits", "Stack and Queue", "Medium", "https://leetcode.com/problems/remove-k-digits/"),
    createQuestion("Stock span problem", "Stack and Queue", "Medium", "https://www.geeksforgeeks.org/the-stock-span-problem/"),
    createQuestion("Trapping Rainwater", "Stack and Queue", "Hard", "https://leetcode.com/problems/trapping-rain-water/"),
    createQuestion("Largest rectangle in a histogram", "Stack and Queue", "Hard", "https://leetcode.com/problems/largest-rectangle-in-histogram/"),
    createQuestion("Maximal Rectangles", "Stack and Queue", "Hard", "https://leetcode.com/problems/maximal-rectangle/"),
    createQuestion("Sliding Window maximum", "Stack and Queue", "Hard", "https://leetcode.com/problems/sliding-window-maximum/"),
    createQuestion("The Celebrity Problem", "Stack and Queue", "Hard", "https://www.geeksforgeeks.org/the-celebrity-problem/"),
    createQuestion("LRU cache (IMPORTANT)", "Stack and Queue", "Hard", "https://leetcode.com/problems/lru-cache/"),
    createQuestion("LFU cache", "Stack and Queue", "Hard", "https://leetcode.com/problems/lfu-cache/"),

    // --- Sliding Window ---
    createQuestion("Binary subarray with sum", "Sliding Window", "Easy", "https://leetcode.com/problems/binary-subarrays-with-sum/"),
    createQuestion("Longest Substring Without Repeating Characters", "Sliding Window", "Medium", "https://leetcode.com/problems/longest-substring-without-repeating-characters/"),
    createQuestion("Max Consecutive Ones III", "Sliding Window", "Medium", "https://leetcode.com/problems/max-consecutive-ones-iii/"),
    createQuestion("Fruit Into Baskets", "Sliding Window", "Medium", "https://leetcode.com/problems/fruit-into-baskets/"),
    createQuestion("Longest repeating character replacement", "Sliding Window", "Medium", "https://leetcode.com/problems/longest-repeating-character-replacement/"),
    createQuestion("Count number of nice subarrays", "Sliding Window", "Medium", "https://leetcode.com/problems/count-number-of-nice-subarrays/"),
    createQuestion("Number of substring containing all three characters", "Sliding Window", "Medium", "https://leetcode.com/problems/number-of-substrings-containing-all-three-characters/"),
    createQuestion("Maximum points you can obtain from cards", "Sliding Window", "Medium", "https://leetcode.com/problems/maximum-points-you-can-obtain-from-cards/"),
    createQuestion("Longest Substring With At Most K Distinct Characters", "Sliding Window", "Medium", "https://leetcode.com/problems/longest-substring-with-at-most-k-distinct-characters/"),

    // --- Heap ---
    createQuestion("Kth largest element in an array", "Heap", "Easy", "https://leetcode.com/problems/kth-largest-element-in-an-array/"),
    createQuestion("Kth smallest element in an array", "Heap", "Easy", "https://www.geeksforgeeks.org/kth-smallestlargest-element-in-unsorted-array/"),
    createQuestion("Sort K sorted array", "Heap", "Easy", "https://www.geeksforgeeks.org/sort-k-sorted-array/"),
    createQuestion("Replace each array element by its corresponding rank", "Heap", "Easy", "https://www.geeksforgeeks.org/replace-each-element-array-rank/"),
    createQuestion("Kth largest element in a stream of running integers", "Heap", "Easy", "https://leetcode.com/problems/kth-largest-element-in-a-stream/"),
    createQuestion("Min Heap and Max Heap Implementation", "Heap", "Medium", "https://www.geeksforgeeks.org/binary-heap/"),
    createQuestion("Check if an array represents a min-heap or not", "Heap", "Medium", "https://www.geeksforgeeks.org/check-if-a-given-array-represents-a-binary-heap/"),
    createQuestion("Convert min Heap to max Heap", "Heap", "Medium", "https://www.geeksforgeeks.org/convert-min-heap-to-max-heap/"),
    createQuestion("Task Scheduler", "Heap", "Medium", "https://leetcode.com/problems/task-scheduler/"),
    createQuestion("Hands of Straights", "Heap", "Medium", "https://leetcode.com/problems/hand-of-straights/"),
    createQuestion("Design twitter", "Heap", "Medium", "https://leetcode.com/problems/design-twitter/"),
    createQuestion("Connect 'n' ropes with minimal cost", "Heap", "Medium", "https://leetcode.com/problems/minimum-cost-to-connect-sticks/"),
    createQuestion("Maximum Sum Combination", "Heap", "Medium", "https://leetcode.com/problems/find-k-pairs-with-smallest-sums/"),
    createQuestion("K most frequent elements", "Heap", "Medium", "https://leetcode.com/problems/top-k-frequent-elements/"),
    createQuestion("Merge M sorted Lists", "Heap", "Hard", "https://leetcode.com/problems/merge-k-sorted-lists/"),
    createQuestion("Find Median from Data Stream", "Heap", "Hard", "https://leetcode.com/problems/find-median-from-data-stream/"),

    // --- Binary Tree ---
    createQuestion("Preorder Traversal of Binary Tree", "Binary Tree", "Easy", "https://leetcode.com/problems/binary-tree-preorder-traversal/"),
    createQuestion("Inorder Traversal of Binary Tree", "Binary Tree", "Easy", "https://leetcode.com/problems/binary-tree-inorder-traversal/"),
    createQuestion("Post-order Traversal of Binary Tree", "Binary Tree", "Easy", "https://leetcode.com/problems/binary-tree-postorder-traversal/"),
    createQuestion("Level Order Traversal / Level order traversal in spiral form", "Binary Tree", "Easy", "https://leetcode.com/problems/binary-tree-level-order-traversal/"),
    createQuestion("Iterative Preorder Traversal of Binary Tree", "Binary Tree", "Easy", "https://leetcode.com/problems/binary-tree-preorder-traversal/"),
    createQuestion("Iterative Inorder Traversal of Binary Tree", "Binary Tree", "Easy", "https://leetcode.com/problems/binary-tree-inorder-traversal/"),
    createQuestion("Iterative Post-order Traversal of Binary Tree using 2 stacks", "Binary Tree", "Easy", "https://leetcode.com/problems/binary-tree-postorder-traversal/"),
    createQuestion("Check if two trees are identical or not", "Binary Tree", "Easy", "https://leetcode.com/problems/same-tree/"),
    createQuestion("Zig Zag Traversal of Binary Tree", "Binary Tree", "Easy", "https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal/"),
    createQuestion("Top View of Binary Tree", "Binary Tree", "Easy", "https://www.geeksforgeeks.org/problems/top-view-of-binary-tree/1"),
    createQuestion("Vertical Order Traversal of Binary Tree", "Binary Tree", "Easy", "https://www.geeksforgeeks.org/problems/print-the-nodes-of-binary-tree-in-vertical-order/1"),
    createQuestion("Invert Binary Tree", "Binary Tree", "Easy", "https://leetcode.com/problems/invert-binary-tree/"),
    createQuestion("Lowest Common Ancestor of a BST (BT)", "BST", "Easy", "https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/"),
    createQuestion("Height of a Binary Tree", "Binary Tree", "Medium", "https://www.geeksforgeeks.org/problems/height-of-binary-tree/1"),
    createQuestion("Check if the Binary tree is height-balanced or not", "Binary Tree", "Medium", "https://leetcode.com/problems/balanced-binary-tree/"),
    createQuestion("Diameter of Binary Tree", "Binary Tree", "Medium", "https://leetcode.com/problems/diameter-of-binary-tree/"),
    createQuestion("Right/Left View of Binary Tree", "Binary Tree", "Medium", "https://leetcode.com/problems/binary-tree-right-side-view/"),
    createQuestion("Symmetric Binary Tree", "Binary Tree", "Medium", "https://leetcode.com/problems/symmetric-tree/"),
    createQuestion("Root to Node Path in Binary Tree", "Binary Tree", "Medium", "https://www.geeksforgeeks.org/problems/root-to-leaf-path-sum/1"),
    createQuestion("LCA in Binary Tree", "Binary Tree", "Medium", "https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/"),
    createQuestion("Maximum width of a Binary Tree", "Binary Tree", "Medium", "https://leetcode.com/problems/maximum-width-of-binary-tree/"),
    createQuestion("Print all the Nodes at a distance of K in a Binary Tree", "Binary Tree", "Medium", "https://leetcode.com/problems/all-nodes-distance-k-in-binary-tree/"),
    createQuestion("Count total Nodes in a COMPLETE Binary Tree", "Binary Tree", "Medium", "https://leetcode.com/problems/count-complete-tree-nodes/"),
    createQuestion("Construct Binary Tree from inorder and preorder", "Binary Tree", "Medium", "https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/"),
    createQuestion("Morris Preorder Traversal of a Binary Tree", "Binary Tree", "Medium", "https://www.geeksforgeeks.org/morris-traversal-for-preorder-traversal/"),
    createQuestion("Morris Inorder Traversal of a Binary Tree", "Binary Tree", "Medium", "https://www.geeksforgeeks.org/inorder-tree-traversal-without-recursion-and-without-stack/"),
    createQuestion("Bottom View of Binary Tree", "Binary Tree", "Medium", "https://www.geeksforgeeks.org/problems/bottom-view-of-binary-tree/1"),
    createQuestion("Validate Binary Search Tree (BT)", "Binary Tree", "Medium", "https://leetcode.com/problems/validate-binary-search-tree/"),
    createQuestion("Kth Smallest Element in a BST (BT)", "BST", "Medium", "https://leetcode.com/problems/kth-smallest-element-in-a-bst/"),
    createQuestion("Maximum path sum", "Binary Tree", "Hard", "https://leetcode.com/problems/binary-tree-maximum-path-sum/"),
    createQuestion("Check for Children Sum Property", "Binary Tree", "Hard", "https://www.geeksforgeeks.org/problems/children-sum-parent/1"),
    createQuestion("Minimum time taken to BURN the Binary Tree from a Node", "Binary Tree", "Hard", "https://www.geeksforgeeks.org/problems/burning-tree/1"),
    createQuestion("Construct the Binary Tree from Postorder and Inorder Traversal", "Binary Tree", "Hard", "https://leetcode.com/problems/construct-binary-tree-from-inorder-and-postorder-traversal/"),
    createQuestion("Serialize and Deserialize Binary Tree (BT)", "Binary Tree", "Hard", "https://leetcode.com/problems/serialize-and-deserialize-binary-tree/"),
    createQuestion("Flatten Binary Tree to Linked List", "Binary Tree", "Hard", "https://leetcode.com/problems/flatten-binary-tree-to-linked-list/"),

    // --- BST ---
    createQuestion("Lowest Common Ancestor of a BST (BST)", "BST", "Easy", "https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/"),
    createQuestion("Kth Smallest Element in a BST (BST)", "BST", "Medium", "https://leetcode.com/problems/kth-smallest-element-in-a-bst/"),
    createQuestion("Serialize and Deserialize Binary Tree (BST)", "BST", "Hard", "https://leetcode.com/problems/serialize-and-deserialize-binary-tree/"),
    createQuestion("Search in a Binary Search Tree", "BST", "Easy", "https://leetcode.com/problems/search-in-a-binary-search-tree/"),
    createQuestion("Ceil in a Binary Search Tree", "BST", "Easy", "https://www.geeksforgeeks.org/problems/ceil-in-bst/1"),
    createQuestion("Floor in a Binary Search Tree", "BST", "Easy", "https://www.geeksforgeeks.org/problems/floor-in-bst/1"),
    createQuestion("Insert a given Node in Binary Search Tree", "BST", "Easy", "https://leetcode.com/problems/insert-into-a-binary-search-tree/"),
    createQuestion("Delete a Node in Binary Search Tree", "BST", "Medium", "https://leetcode.com/problems/delete-node-in-a-bst/"),
    createQuestion("Find K-th smallest/largest element in BST", "BST", "Medium", "https://leetcode.com/problems/kth-smallest-element-in-a-bst/"),
    createQuestion("Check if a tree is a BST or BT (BST)", "BST", "Medium", "https://leetcode.com/problems/validate-binary-search-tree/"),
    createQuestion("LCA in Binary Search Tree (BST)", "BST", "Medium", "https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/"),
    createQuestion("Construct a BST from a preorder traversal", "BST", "Medium", "https://leetcode.com/problems/construct-binary-search-tree-from-preorder-traversal/"),
    createQuestion("Inorder Successor/Predecessor in BST", "BST", "Medium", "https://www.geeksforgeeks.org/inorder-successor-in-binary-search-tree/"),
    createQuestion("Two Sum In BST | Check if there exists a pair with Sum K", "BST", "Medium", "https://leetcode.com/problems/two-sum-iv-input-is-a-bst/"),
    createQuestion("Merge 2 BST's", "BST", "Hard", "https://www.geeksforgeeks.org/problems/merge-two-bst-s/1"),
    createQuestion("Recover BST | Correct BST with two nodes swapped", "BST", "Hard", "https://leetcode.com/problems/recover-binary-search-tree/"),
    createQuestion("Largest BST in a Binary Tree (BST)", "BST", "Hard", "https://www.geeksforgeeks.org/problems/largest-bst/1"),

    // --- Graphs ---
    createQuestion("Number of provinces", "Graphs", "Easy", "https://leetcode.com/problems/number-of-provinces/"),
    createQuestion("Shortest Path in UG with unit weights", "Graphs", "Easy", "https://www.geeksforgeeks.org/shortest-path-in-unweighted-graph/"),
    createQuestion("Shortest Path in a binary maze", "Graphs", "Easy", "https://www.geeksforgeeks.org/shortest-path-in-a-binary-maze/"),
    createQuestion("Connected Components Problem in Matrix", "Graphs", "Medium", "https://www.geeksforgeeks.org/find-number-of-islands/"),
    createQuestion("Rotten Oranges", "Graphs", "Medium", "https://leetcode.com/problems/rotting-oranges/"),
    createQuestion("0/1 Matrix (bfs Problem)", "Graphs", "Medium", "https://leetcode.com/problems/01-matrix/"),
    createQuestion("Bipartite Graph (DFS)", "Graphs", "Medium", "https://leetcode.com/problems/is-graph-bipartite/"),
    createQuestion("Path with minimum effort", "Graphs", "Medium", "https://leetcode.com/problems/path-with-minimum-effort/"),
    createQuestion("Network Delay time", "Graphs", "Medium", "https://leetcode.com/problems/network-delay-time/"),
    createQuestion("Number of ways to arrive at destination", "Graphs", "Medium", "https://www.geeksforgeeks.org/find-the-number-of-ways-to-reach-a-destination-in-a-graph-using-bfs/"),
    createQuestion("Number of operations to make network connected (Medium)", "Graphs", "Medium", "https://leetcode.com/problems/number-of-operations-to-make-network-connected/"),
    createQuestion("Most stones removed with same rows or columns (Medium)", "Graphs", "Medium", "https://leetcode.com/problems/most-stones-removed-with-same-row-or-column/"),
    createQuestion("Connected Components | Logic Explanation", "Graphs", "Hard", "https://www.geeksforgeeks.org/connected-components-in-an-undirected-graph/"),
    createQuestion("Flood fill", "Graphs", "Hard", "https://leetcode.com/problems/flood-fill/"),
    createQuestion("Cycle Detection in undirected Graph (bfs)", "Graphs", "Hard", "https://www.geeksforgeeks.org/detect-cycle-in-an-undirected-graph-using-bfs/"),
    createQuestion("Cycle Detection in undirected Graph (dfs)", "Graphs", "Hard", "https://www.geeksforgeeks.org/detect-cycle-in-an-undirected-graph-using-dfs/"),
    createQuestion("Surrounded Regions (dfs)", "Graphs", "Hard", "https://leetcode.com/problems/surrounded-regions/"),
    createQuestion("Number of Enclaves [flood fill implementation - multisource]", "Graphs", "Hard", "https://leetcode.com/problems/number-of-enclaves/"),
    createQuestion("Word ladder - 1", "Graphs", "Hard", "https://leetcode.com/problems/word-ladder/"),
    createQuestion("Word ladder - 2", "Graphs", "Hard", "https://leetcode.com/problems/word-ladder-ii/"),
    createQuestion("Number of Distinct Islands [dfs multisource]", "Graphs", "Hard", "https://leetcode.com/problems/number-of-distinct-islands/"),
    createQuestion("Cycle Detection in Directed Graph (BFS)", "Graphs", "Hard", "https://www.geeksforgeeks.org/detect-cycle-in-a-directed-graph-using-bfs/"),
    createQuestion("Course Schedule - I", "Graphs", "Hard", "https://leetcode.com/problems/course-schedule/"),
    createQuestion("Course Schedule - II", "Graphs", "Hard", "https://leetcode.com/problems/course-schedule-ii/"),
    createQuestion("Find eventual safe states", "Graphs", "Hard", "https://leetcode.com/problems/find-eventual-safe-states/"),
    createQuestion("Alien dictionary", "Graphs", "Hard", "https://www.geeksforgeeks.org/given-a-sorted-dictionary-of-an-alien-language-find-order-of-characters/"),
    createQuestion("Topo Sort", "Graphs", "Hard", "https://www.geeksforgeeks.org/topological-sorting/"),
    createQuestion("Kahn's Algorithm", "Graphs", "Hard", "https://www.geeksforgeeks.org/kahns-algorithm-for-topological-sorting-of-a-dag/"),
    createQuestion("Shortest Path in DAG", "Graphs", "Hard", "https://www.geeksforgeeks.org/shortest-path-in-directed-acyclic-graph/"),
    createQuestion("Dijkstra's Algorithm", "Graphs", "Hard", "https://www.geeksforgeeks.org/dijkstras-shortest-path-algorithm-greedy-algo-7/"),
    createQuestion("Cheapest flights within k stops", "Graphs", "Hard", "https://leetcode.com/problems/cheapest-flights-within-k-stops/"),
    createQuestion("Minimum steps to reach end from start by performing multiplication and mod operations with array elements", "Graphs", "Hard", "https://www.geeksforgeeks.org/minimum-steps-to-reach-end-from-start-by-performing-multiplication-and-mod-operations-with-array-elements/"),
    createQuestion("Bellman Ford Algorithm", "Graphs", "Hard", "https://www.geeksforgeeks.org/bellman-ford-algorithm-for-shortest-path/"),
    createQuestion("Floyd Warshal Algorithm", "Graphs", "Hard", "https://www.geeksforgeeks.org/floyd-warshall-algorithm-dp-16/"),
    createQuestion("Find the city with the smallest number of neighbors in a threshold distance", "Graphs", "Hard", "https://leetcode.com/problems/find-the-city-with-the-smallest-number-of-neighbors-at-a-threshold-distance/"),
    createQuestion("Kruskal's Algorithm", "Graphs", "Hard", "https://www.geeksforgeeks.org/kruskals-minimum-spanning-tree-algorithm-greedy-algo-5/"),
    createQuestion("Accounts merge", "Graphs", "Hard", "https://leetcode.com/problems/accounts-merge/"),
    createQuestion("Number of island II", "Graphs", "Hard", "https://leetcode.com/problems/number-of-islands-ii/"),
    createQuestion("Making a Large Island", "Graphs", "Hard", "https://leetcode.com/problems/making-a-large-island/"),
    createQuestion("Swim in rising water", "Graphs", "Hard", "https://leetcode.com/problems/swim-in-rising-water/"),
    // --- DP ---
    createQuestion("Fibonacci Number", "DP", "Easy", "https://leetcode.com/problems/fibonacci-number/"),
    createQuestion("Subset sum equal to target", "DP", "Medium", "https://leetcode.com/problems/partition-equal-subset-sum/"),
    createQuestion("Partition Equal Subset Sum", "DP", "Medium", "https://leetcode.com/problems/partition-equal-subset-sum/"),
    createQuestion("Partition Set Into 2 Subsets With Min Absolute Sum Diff", "DP", "Medium", "https://www.geeksforgeeks.org/partition-a-set-into-two-subsets-such-that-the-difference-of-subset-sums-is-minimum/"),
    createQuestion("Count Subsets with Sum K", "DP", "Medium", "https://www.geeksforgeeks.org/count-of-subsets-with-sum-equal-to-k/"),
    createQuestion("Count Partitions with Given Difference", "DP", "Medium", "https://www.geeksforgeeks.org/partitions-with-given-difference/"),
    createQuestion("Target Sum", "DP", "Medium", "https://leetcode.com/problems/target-sum/"),
    createQuestion("Coin Change", "DP", "Medium", "https://leetcode.com/problems/coin-change/"),
    createQuestion("Unbounded Knapsack", "DP", "Medium", "https://www.geeksforgeeks.org/unbounded-knapsack-repetition-items-allowed/"),
    createQuestion("Wildcard Matching", "DP", "Medium", "https://leetcode.com/problems/wildcard-matching/"),
    createQuestion("Longest Common Subsequence", "DP", "Hard", "https://leetcode.com/problems/longest-common-subsequence/"),
    createQuestion("Print Longest Common Subsequence", "DP", "Hard", "https://www.geeksforgeeks.org/printing-longest-common-subsequence/"),
    createQuestion("Longest Common Substring", "DP", "Hard", "https://www.geeksforgeeks.org/longest-common-substring-dp-29/"),
    createQuestion("Longest Palindromic Subsequence", "DP", "Hard", "https://leetcode.com/problems/longest-palindromic-subsequence/"),
    createQuestion("Minimum insertions to make string palindrome", "DP", "Hard", "https://leetcode.com/problems/minimum-insertion-steps-to-make-a-string-palindrome/"),
    createQuestion("Minimum Insertions/Deletions to Convert String", "DP", "Hard", "https://www.geeksforgeeks.org/minimum-insertions-deletions-to-convert-string-a-to-string-b/"),
    createQuestion("Shortest Common Supersequence", "DP", "Hard", "https://leetcode.com/problems/shortest-common-supersequence/"),
    createQuestion("Distinct Subsequences", "DP", "Hard", "https://leetcode.com/problems/distinct-subsequences/"),
    createQuestion("Edit Distance", "DP", "Hard", "https://leetcode.com/problems/edit-distance/"),
    createQuestion("Best Time to Buy and Sell Stock (DP)", "DP", "Hard", "https://leetcode.com/problems/best-time-to-buy-and-sell-stock/"),
    createQuestion("Buy and Sell Stock - II (DP)", "DP", "Hard", "https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/"),
    createQuestion("Buy and Sell Stocks III (DP)", "DP", "Hard", "https://leetcode.com/problems/best-time-to-buy-and-sell-stock-iii/"),
    createQuestion("Buy and Stock Sell IV (DP)", "DP", "Hard", "https://leetcode.com/problems/best-time-to-buy-and-sell-stock-iv/"),
    createQuestion("Buy and Sell Stocks With Cooldown", "DP", "Hard", "https://leetcode.com/problems/best-time-to-buy-and-sell-stock-with-cooldown/"),
    createQuestion("Buy and Sell Stocks With Transaction Fee", "DP", "Hard", "https://leetcode.com/problems/best-time-to-buy-and-sell-stock-with-transaction-fee/"),
    createQuestion("Longest Increasing Subsequence (DP)", "DP", "Hard", "https://leetcode.com/problems/longest-increasing-subsequence/"),
    createQuestion("Printing Longest Increasing Subsequence (DP)", "DP", "Hard", "https://www.geeksforgeeks.org/longest-increasing-subsequence-o-n-logn-solution/"),
    createQuestion("Largest Divisible Subset", "DP", "Hard", "https://leetcode.com/problems/largest-divisible-subset/"),
    createQuestion("Longest String Chain", "DP", "Hard", "https://leetcode.com/problems/longest-string-chain/"),
    createQuestion("Longest Bitonic Subsequence", "DP", "Hard", "https://www.geeksforgeeks.org/longest-bitonic-subsequence-dp-15/"),
    createQuestion("Number of Longest Increasing Subsequences", "DP", "Hard", "https://leetcode.com/problems/number-of-longest-increasing-subsequence/"),
    createQuestion("Matrix Chain Multiplication", "DP", "Hard", "https://www.geeksforgeeks.org/matrix-chain-multiplication-dp-8/"),
    createQuestion("Minimum Cost to Cut the Stick", "DP", "Hard", "https://leetcode.com/problems/minimum-cost-to-cut-a-stick/"),
    createQuestion("Burst Balloons", "DP", "Hard", "https://leetcode.com/problems/burst-balloons/"),
    createQuestion("Evaluate Boolean Expression to True", "DP", "Hard", "https://www.geeksforgeeks.org/boolean-parenthesization-problem-dp-37/"),
    createQuestion("Palindrome Partitioning - II", "DP", "Hard", "https://leetcode.com/problems/palindrome-partitioning-ii/"),
    createQuestion("Partition Array for Maximum Sum", "DP", "Hard", "https://leetcode.com/problems/partition-array-for-maximum-sum/"),
    createQuestion("Maximum Rectangle Area with all 1's", "DP", "Hard", "https://leetcode.com/problems/maximal-rectangle/"),
    createQuestion("Count Square Submatrices with All Ones", "DP", "Hard", "https://leetcode.com/problems/count-square-submatrices-with-all-ones/"),

    // --- Greedy ---
    createQuestion("Assign Cookies", "Greedy", "Easy", "https://leetcode.com/problems/assign-cookies/"),
    createQuestion("Lemonade Change", "Greedy", "Easy", "https://leetcode.com/problems/lemonade-change/"),
    createQuestion("N meetings in one room", "Greedy", "Medium", "https://www.geeksforgeeks.org/problems/n-meetings-in-one-room/1"),
    createQuestion("Jump Game", "Greedy", "Medium", "https://leetcode.com/problems/jump-game/"),
    createQuestion("Jump Game 2", "Greedy", "Medium", "https://leetcode.com/problems/jump-game-ii/"),
    createQuestion("Minimum number of platforms required for a railway", "Greedy", "Medium", "https://www.geeksforgeeks.org/problems/minimum-platforms-1587115620/1"),
    createQuestion("Job sequencing Problem", "Greedy", "Medium", "https://www.geeksforgeeks.org/problems/job-sequencing-problem-1587115620/1"),
    createQuestion("Program for Shortest Job First (or SJF) CPU Scheduling", "Greedy", "Medium", "https://www.geeksforgeeks.org/program-for-shortest-job-first-or-sjf-cpu-scheduling-set-1-non-preemptive/"),
    createQuestion("Program for Least Recently Used (LRU) Page Replacement Algorithm", "Greedy", "Medium", "https://www.geeksforgeeks.org/lru-cache-implementation/"),
    createQuestion("Insert Interval", "Greedy", "Medium", "https://leetcode.com/problems/insert-interval/"),
    createQuestion("Merge Intervals (Greedy)", "Greedy", "Medium", "https://leetcode.com/problems/merge-intervals/"),
    createQuestion("Non-overlapping Intervals", "Greedy", "Medium", "https://leetcode.com/problems/non-overlapping-intervals/"),
    createQuestion("Greedy algorithm to find minimum number of coins", "Greedy", "Medium", "https://www.geeksforGeeks.org/find-minimum-number-of-coins-that-make-a-given-value/"),
    createQuestion("Valid Parenthesis Checker (Greedy)", "Greedy", "Medium", "https://leetcode.com/problems/valid-parentheses/"),
    createQuestion("Candy", "Greedy", "Hard", "https://leetcode.com/problems/candy/"),

    // --- Tree (Trie) ---
    createQuestion("Longest String with All Prefixes", "Tree", "Medium", "https://www.geeksforgeeks.org/longest-word-in-dictionary-that-is-a-prefix-of-all-words-in-the-list/"),
    createQuestion("Maximum XOR of two numbers in an array", "Tree", "Medium", "https://leetcode.com/problems/maximum-xor-of-two-numbers-in-an-array/"),
    createQuestion("Implement Tree - 2 (Prefix Tree)", "Tree", "Hard", "https://leetcode.com/problems/implement-trie-prefix-tree/"),
    createQuestion("Number of Distinct Substrings in a String", "Tree", "Hard", "https://www.geeksforgeeks.org/count-distinct-substrings-in-a-string-using-trie/"),
    createQuestion("Bit PreRequisites for TRIE Problems", "Tree", "Hard", "https://www.geeksforgeeks.org/trie-data-structure-with-bitwise-operations-for-prefix-and-xor-related-problems/"),
    createQuestion("Maximum XOR With an Element From Array", "Tree", "Hard", "https://leetcode.com/problems/maximum-xor-with-an-element-from-array/"),

    // --- Bit Manipulation ---
    createQuestion("Check if the i-th bit is set or not", "Bit Manipulation", "Easy", "https://www.geeksforgeeks.org/check-if-k-th-bit-is-set-or-not-in-a-given-number/"),
    createQuestion("Check if a number is odd or not", "Bit Manipulation", "Easy", "https://www.geeksforgeeks.org/check-if-a-number-is-odd-or-even-using-bitwise-operators/"),
    createQuestion("Check if a number is power of 2 or not", "Bit Manipulation", "Easy", "https://www.geeksforgeeks.org/program-to-find-whether-a-given-number-is-power-of-2/"),
    createQuestion("Count the number of set bits", "Bit Manipulation", "Easy", "https://www.geeksforgeeks.org/count-set-bits-in-an-integer/"),
    createQuestion("Set/Unset the rightmost unset bit", "Bit Manipulation", "Easy", "https://www.geeksforgeeks.org/set-the-rightmost-unset-bit/"),
    createQuestion("Swap two numbers", "Bit Manipulation", "Easy", "https://www.geeksforgeeks.org/swap-two-numbers-without-using-third-variable/"),
    createQuestion("Find the number that appears odd number of times", "Bit Manipulation", "Easy", "https://www.geeksforgeeks.org/find-the-number-that-appears-once/"),
    createQuestion("Find xor of numbers from L to R", "Bit Manipulation", "Easy", "https://www.geeksforgeeks.org/find-xor-of-numbers-from-l-to-r/"),
    createQuestion("Find the two numbers appearing odd number of times", "Bit Manipulation", "Easy", "https://www.geeksforgeeks.org/find-the-two-numbers-with-odd-occurrences-in-an-unsorted-array/"),
    createQuestion("Divide two integers without using multiplication, division and mod operator", "Bit Manipulation", "Medium", "https://leetcode.com/problems/divide-two-integers/"),
    createQuestion("Count number of bits to be flipped to convert A to B", "Bit Manipulation", "Medium", "https://leetcode.com/problems/number-of-bits-to-flip-to-convert-a-to-b/"),
    createQuestion("Power Set", "Bit Manipulation", "Medium", "https://www.geeksforgeeks.org/recursive-program-to-generate-power-set/"),
];

// Generate placeholders to reach TARGET_QUESTION_COUNT
const initialQuestions: Question[] = [...baseQuestions];
const currentBaseCount = initialQuestions.length;

if (currentBaseCount < TARGET_QUESTION_COUNT) {
    const placeholderCategories = ["Arrays", "Strings", "Linked List", "Graphs", "DP", "Binary Search", "Recursion", "Tree"];
    const difficulties: Difficulty[] = ["Easy", "Medium", "Hard"];

    for (let i = 0; initialQuestions.length < TARGET_QUESTION_COUNT; i++) {
        const category = placeholderCategories[i % placeholderCategories.length];
        const difficulty = difficulties[i % difficulties.length];
        initialQuestions.push({
            id: currentId++,
            title: `[Placeholder ${category}] Problem ${currentId}`,
            category: category,
            difficulty: difficulty,
            solved: false,
            link: `https://placeholder.com/q/${currentId}`,
        });
    }
}

const FINAL_QUESTION_COUNT = initialQuestions.length;


const allCategories = [
    "Arrays", "Binary Search", "Binary Search on 2D Arrays", "Strings",
    "Linked List", "Recursion", "Stack and Queue", "Sliding Window",
    "Heap", "Binary Tree", "BST", "Graphs", "DP", "Bit Manipulation",
    "Greedy", "Tree",
];

// --- Component ---
interface PracticeProps {
    darkMode: boolean;
}

const Practice: React.FC<PracticeProps> = ({ darkMode }) => {
    const [questionsList, setQuestionsList] = useState<Question[]>(initialQuestions);
    const [expandedCategory, setExpandedCategory] = useState<string | null>(null);
    const [selectedDifficulty, setSelectedDifficulty] = useState<Difficulty | null>(null);
    // Removed unused categorySearchTerm state to fix compile error
    const [problemSearchTerm, setProblemSearchTerm] = useState<string>("");

    // --- Memoized Values ---

    const filteredCategories = useMemo(() => allCategories, []);

    const filteredQuestions = useMemo(() => {
        return questionsList.filter((q) => {
            const matchesCategory = !expandedCategory || q.category === expandedCategory;
            const matchesDifficulty = !selectedDifficulty || q.difficulty === selectedDifficulty;
            const matchesSearchTerm = !problemSearchTerm || q.title.toLowerCase().includes(problemSearchTerm.toLowerCase());
            return matchesCategory && matchesDifficulty && matchesSearchTerm;
        });
    }, [questionsList, expandedCategory, selectedDifficulty, problemSearchTerm]);

    const { solvedQuestions, completionPercentage } = useMemo(() => {
        const solved = questionsList.filter((q) => q.solved).length;
        const percentage = FINAL_QUESTION_COUNT > 0
            ? Math.round((solved / FINAL_QUESTION_COUNT) * 100)
            : 0;
        return { solvedQuestions: solved, completionPercentage: percentage };
    }, [questionsList]);

    const categoryStats = useMemo(() => {
        const stats: Record<string, { solved: number; total: number }> = {};
        allCategories.forEach(cat => {
            const questions = questionsList.filter(q => q.category === cat);
            stats[cat] = {
                solved: questions.filter(q => q.solved).length,
                total: questions.length,
            };
        });
        return stats;
    }, [questionsList]);

    const categoryDifficultyStats = useMemo(() => {
        const stats: Record<string, Record<Difficulty, { solved: number; total: number }>> = {};
        for (const cat of allCategories) {
            stats[cat] = {
                Easy: { solved: 0, total: 0 },
                Medium: { solved: 0, total: 0 },
                Hard: { solved: 0, total: 0 },
            };
            questionsList.filter(q => q.category === cat).forEach(q => {
                stats[cat][q.difficulty].total++;
                if (q.solved) stats[cat][q.difficulty].solved++;
            });
        }
        return stats;
    }, [questionsList]);

    // --- Handlers & Helpers ---

    const handleCheckboxChange = (id: number) => {
        setQuestionsList((prevList) =>
            prevList.map((q) => (q.id === id ? { ...q, solved: !q.solved } : q))
        );
    };

    const handleRowClick = (link: string) => {
        window.open(link, '_blank');
    };

    const getDifficultyColorClass = (difficulty: Difficulty) => {
        switch (difficulty) {
            case "Easy":
                return "bg-green-600 text-white";
            case "Medium":
                return "bg-orange-500 text-white";
            case "Hard":
                return "bg-red-500 text-white";
        }
    };

    // Custom styles using CSS variables for dynamic color handling
    // Removed unused customStyles variable to fix compile error

    const renderCategoryItem = (category: string) => {
        const isExpanded = category === expandedCategory;
        const { solved, total } = categoryStats[category] || { solved: 0, total: 0 };

        const isCategorySelected = expandedCategory === category;

        return (
            <div key={category} className="group">
                {/* Main Category Button (Updated to match the screenshot style closely) */}
                <button
                    onClick={() => {
                        setExpandedCategory(isExpanded ? null : category);
                        setSelectedDifficulty(null);
                    }}
                    className={`flex justify-between items-center w-full p-2 text-sm font-medium transition-all duration-200 ${
                        // Dark Mode Styles based on screenshot (Dark theme with hover/selected)
                        darkMode ? `text-[var(--dark-text-color)] hover:bg-gray-700` : `text-gray-700 hover:bg-gray-200`
                        }`}
                    style={{
                        color: isCategorySelected ? PRIMARY_COLOR : undefined, // Primary color text when selected
                        fontWeight: isCategorySelected ? 'bold' : '500',
                        backgroundColor: isCategorySelected ? (darkMode ? '#2C323D' : '#E6E8EF') : 'transparent', // Light background on selection
                    }}
                >
                    <span className="flex items-center">
                        {/* Chevron Icon - Always pointing Right when collapsed (like the image) */}
                        {isExpanded ? <ChevronDown className="w-4 h-4 mr-2" /> : <ChevronRight className="w-4 h-4 mr-2" />}
                        {category}
                    </span>
                    <span
                        className={`text-xs font-mono ml-2 ${solved === total && total > 0 ? 'text-green-500' : (darkMode ? 'text-gray-500' : 'text-gray-500')}`}
                        style={{ fontSize: '0.7rem' }}
                    >
                        ({solved}/{total})
                    </span>
                </button>

                {/* Nested Difficulty Buttons */}
                {isExpanded && (
                    <div className="pl-6 pt-1 pb-1 space-y-1">
                        {(["Easy", "Medium", "Hard"] as Difficulty[]).map((diff) => {
                            const stats = categoryDifficultyStats[category]?.[diff];
                            if (!stats || stats.total === 0) return null;

                            const isSelected = selectedDifficulty === diff;

                            return (
                                <button
                                    key={diff}
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        setSelectedDifficulty(diff === selectedDifficulty ? null : diff);
                                    }}
                                    className={`flex justify-between items-center w-full text-xs py-1 px-2 rounded-md transition-colors 
                                        ${isSelected
                                            ? 'text-white'
                                            : (darkMode ? "text-gray-400 hover:bg-gray-700" : "text-gray-600 hover:bg-gray-200")}`}
                                    style={{
                                        backgroundColor: isSelected ? PRIMARY_COLOR : undefined,
                                        color: isSelected ? 'white' : undefined
                                    }}
                                >
                                    <span>{diff}</span>
                                    <span className={`font-mono ${isSelected ? 'text-white' : 'text-gray-500'} dark:${isSelected ? 'text-white' : 'text-gray-400'}`}>
                                        ({stats.solved}/{stats.total})
                                    </span>
                                </button>
                            );
                        })}
                    </div>
                )}
            </div>
        );
    };


    return (
        <div
            className={`flex flex-col md:flex-row min-h-screen transition-colors duration-500 pt-20 ${darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"}`}
        >
            {/* Sidebar */}
            <div
                className={`w-64 p-4 sticky top-0 h-screen border-r overflow-y-scroll mt-7`}
                style={{
                    backgroundColor: darkMode ? '#1F2937' : '#F9FAFB',// Light gray background in Light mode
                    borderColor: darkMode ? '#374151' : '#E5E7EB',
                    scrollbarWidth: 'none',
                    msOverflowStyle: 'none',
                    WebkitOverflowScrolling: 'touch'
                }}
            >
                <h2 className="text-xl font-bold mb-4" style={{ color: darkMode ? 'white' : '#1F2937' }}>DSA Patterns</h2>

                {/* Search Problems */}
                <div className="relative mb-4 p-0">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-[#6334B9]" />
                    <input
                        type="text"
                        placeholder="Search problems..."
                        value={problemSearchTerm}
                        onChange={(e) => setProblemSearchTerm(e.target.value)}
                        className={`w-full py-2 pl-10 pr-4 border rounded-lg text-sm transition-colors shadow-sm`}
                        style={{
                            backgroundColor: darkMode ? '#2C323D' : 'white',
                            borderColor: darkMode ? '#6334B9' : '#6334B9',
                            color: darkMode ? 'white' : '#1F2937',
                            outlineColor: PRIMARY_COLOR
                        }}
                    />
                </div>

                {/* Category Filter List */}
                <div className="space-y-1">
                    {filteredCategories.map(renderCategoryItem)}
                </div>
            </div>

            {/* Main Content */}
            <div
                className="flex-1 p-8"
                style={{ backgroundColor: darkMode ? 'var(--primary-dark-bg)' : 'white' }}
            >
                {/* Overall Progress Section (Styled as per image) */}
                <div
                    className={`p-6 mb-8 rounded-lg shadow-xl`}
                    style={{
                        backgroundColor: darkMode ? '#1F2937' : '#F3F4F6',
                        color: darkMode ? 'white' : '#1F2937'
                    }}

                >
                    <h2 className="text-xl font-bold mb-4">Overall Progress</h2>
                    <div className="flex items-center space-x-6">
                        {/* Solved Count Text */}
                        <div className="text-4xl font-mono">
                            <span className="font-bold text-3xl">{solvedQuestions}</span> / {FINAL_QUESTION_COUNT}
                            <p className={`text-sm font-normal mt-1 ${darkMode ? "text-gray-400" : "text-gray-600"}`}>Problems Solved</p>
                        </div>

                        {/* Circular Progress Bar */}
                        <div className="relative w-20 h-20">
                            <svg className="w-full h-full" viewBox="0 0 100 100">
                                {/* Background circle */}
                                <circle
                                    className={darkMode ? "text-gray-700" : "text-gray-300"}
                                    strokeWidth="10"
                                    stroke="currentColor"
                                    fill="transparent"
                                    r="45"
                                    cx="50"
                                    cy="50"
                                />
                                {/* Progress circle */}
                                <circle
                                    className="transition-all duration-1000"
                                    strokeWidth="10"
                                    strokeDasharray="282.743"
                                    strokeDashoffset={282.743 - (completionPercentage / 100) * 282.743}
                                    strokeLinecap="round"
                                    stroke={PRIMARY_COLOR}
                                    fill="transparent"
                                    r="45"
                                    cx="50"
                                    cy="50"
                                    style={{ transform: 'rotate(-90deg)', transformOrigin: '50% 50%' }}
                                />
                            </svg>
                            <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-xl font-bold">
                                {completionPercentage}%
                            </span>
                        </div>
                    </div>
                </div>

                <h2 className="text-2xl font-bold mb-4">Problem List</h2>

                {/* Problem List Table */}
                <div className={`overflow-x-auto rounded-lg shadow-lg`}>
                    <table className="min-w-full divide-y" style={{
                        backgroundColor: darkMode ? '#1F2937' : 'white',
                        borderColor: darkMode ? '#374151' : '#E5E7EB'
                    }}>
                        <thead style={{ backgroundColor: darkMode ? '#2C323D' : '#F3F4F6' }}>
                            <tr>
                                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider w-16" style={{ color: darkMode ? 'white' : '#1F2937' }}>
                                    Status
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider" style={{ color: darkMode ? 'white' : '#1F2937' }}>
                                    Problem Title
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider w-32" style={{ color: darkMode ? 'white' : '#1F2937' }}>
                                    Difficulty
                                </th>
                                {(!expandedCategory) && (
                                    <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider w-40" style={{ color: darkMode ? 'white' : '#1F2937' }}>
                                        Category
                                    </th>
                                )}
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                            {filteredQuestions.map((q) => (
                                <tr
                                    key={q.id}
                                    onClick={() => handleRowClick(q.link)}
                                    className={`cursor-pointer transition-colors duration-150`}
                                    // Row color logic
                                    style={{
                                        backgroundColor: q.solved ? (darkMode ? '#1E232A' : '#F7FEF7') : (darkMode ? '#1F2937' : 'white'),
                                    }}
                                    onMouseEnter={e => {
                                        if (!q.solved) {
                                            e.currentTarget.style.backgroundColor = `${PRIMARY_COLOR}1A`;
                                        }
                                    }}
                                    onMouseLeave={e => {
                                        e.currentTarget.style.backgroundColor = q.solved ? (darkMode ? '#1E232A' : '#F7FEF7') : (darkMode ? '#1F2937' : 'white');
                                    }}
                                >
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <input
                                            type="checkbox"
                                            checked={q.solved}
                                            onClick={(e) => e.stopPropagation()}
                                            onChange={() => handleCheckboxChange(q.id)}
                                            className={`h-4 w-4 rounded border-gray-300`}
                                            style={{
                                                backgroundColor: darkMode ? '#1F2937' : 'white',
                                                borderColor: darkMode ? '#4B5563' : '#D1D5DB'
                                            }}
                                        />
                                    </td>
                                    <td className={`px-6 py-4 font-medium text-sm`}>
                                        {q.title}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <span
                                            className={`inline-flex px-3 py-1 text-xs font-semibold rounded-full ${getDifficultyColorClass(q.difficulty)}`}
                                        >
                                            {q.difficulty}
                                        </span>
                                    </td>
                                    {(!expandedCategory) && (
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <span
                                                className={`inline-flex px-3 py-1 text-xs font-semibold rounded-full`}
                                                style={{
                                                    backgroundColor: darkMode ? '#4B5563' : '#E5E7EB',
                                                    color: darkMode ? '#D1D5DB' : '#4B5563',
                                                }}
                                            >
                                                {q.category}
                                            </span>
                                        </td>
                                    )}
                                </tr>
                            ))}
                            {filteredQuestions.length === 0 && (
                                <tr>
                                    <td colSpan={expandedCategory ? 3 : 4} className="px-6 py-8 text-center text-lg italic text-gray-500">
                                        No matching problems found.
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Practice;