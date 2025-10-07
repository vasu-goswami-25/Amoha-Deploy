import { useState, useMemo } from "react";
import { Search } from "lucide-react";

// --- Data Structure (Backend Logic) ---
const allProblemsData = {
  Array: [
    { title: "Score of a String", difficulty: "Easy" },
    { title: "Concatenation of Array", difficulty: "Easy" },
    { title: "Contains Duplicate", difficulty: "Easy" },
    { title: "Valid Anagram", difficulty: "Easy" },
    { title: "Replace Elements With Greatest Element On Right Side", difficulty: "Easy" },
    { title: "Is Subsequence", difficulty: "Easy" },
    { title: "Append Characters to String to Make Subsequence", difficulty: "Medium" },
    { title: "Length of Last Word", difficulty: "Easy" },
    { title: "Number of Senior Citizens", difficulty: "Easy" },
    { title: "Two Sum", difficulty: "Easy" },
    { title: "Max Consecutive Ones", difficulty: "Easy" },
    { title: "Longest Common Prefix", difficulty: "Easy" },
    { title: "String Matching in an Array", difficulty: "Easy" },
    { title: "Group Anagrams", difficulty: "Easy" },
    { title: "Pascal's Triangle", difficulty: "Easy" },
    { title: "Remove Element", difficulty: "Easy" },
    { title: "Unique Email Addresses", difficulty: "Easy" },
    { title: "Isomorphic Strings", difficulty: "Easy" },
    { title: "Can Place Flowers", difficulty: "Easy" },
    { title: "Majority Element", difficulty: "Easy" },
    { title: "Maximum Difference Between Even and Odd Frequency I", difficulty: "Easy" },
    { title: "Next Greater Element I", difficulty: "Easy" },
    { title: "Longest Strictly Increasing or Strictly Decreasing Subarray", difficulty: "Medium" },
    { title: "Maximum Ascending Subarray Sum", difficulty: "Medium" },
    { title: "Find Pivot Index", difficulty: "Easy" },
    { title: "Kth Distinct String in an Array", difficulty: "Medium" },
    { title: "Range Sum Query - Immutable", difficulty: "Medium" },
    { title: "Find All Numbers Disappeared in an Array", difficulty: "Easy" },
    { title: "Find Missing and Repeated Values", difficulty: "Easy" },
    { title: "Maximum Number of Balloons", difficulty: "Easy" },
    { title: "Word Pattern", difficulty: "Easy" },
    { title: "Design HashSet", difficulty: "Medium" },
    { title: "Design HashMap", difficulty: "Medium" },
    { title: "Height Checker", difficulty: "Easy" },
    { title: "Find Lucky Integer in an Array", difficulty: "Easy" },
    { title: "Special Array I", difficulty: "Easy" },
    { title: "Check if Array Is Sorted and Rotated", difficulty: "Medium" },
    { title: "Monotonic Array", difficulty: "Easy" },
    { title: "Divide Array Into Equal Pairs", difficulty: "Easy" },
    { title: "Number of Good Pairs", difficulty: "Easy" },
    { title: "Pascal's Triangle II", difficulty: "Easy" },
    { title: "Find Words That Can Be Formed by Characters", difficulty: "Easy" },
    { title: "Count the Number of Consistent Strings", difficulty: "Easy" },
    { title: "Ransom Note", difficulty: "Easy" },
    { title: "Largest 3-Same-Digit Number in String", difficulty: "Easy" },
    { title: "Destination City", difficulty: "Easy" },
    { title: "Maximum Product Difference Between Two", difficulty: "Easy" },
    { title: "Circular Sentence", difficulty: "Easy" },
    { title: "Maximum Score After Splitting a String", difficulty: "Medium" },
    { title: "Path Crossing", difficulty: "Medium" },
    { title: "Minimum Changes To Make Alternating Binary String", difficulty: "Easy" },
    { title: "Redistribute Characters to Make All Strings Equal", difficulty: "Easy" },
    { title: "Longest Palindrome", difficulty: "Medium" },
    { title: "Largest Substring Between Two Equal Characters", difficulty: "Medium" },
    { title: "Set Mismatch", difficulty: "Easy" },
    { title: "First Unique Character in a String", difficulty: "Easy" },
    { title: "Intersection of Two Arrays", difficulty: "Easy" },
    { title: "Find Common Characters", difficulty: "Easy" },
    { title: "Number of Students Unable to Eat Lunch", difficulty: "Easy" },
    { title: "Time Needed to Buy Tickets", difficulty: "Medium" },
    { title: "Special Array with X Elements Greater than or Equal X", difficulty: "Easy" },
    { title: "Count Vowel Strings in Ranges", difficulty: "Easy" },
    { title: "Average Waiting Time", difficulty: "Medium" },
    { title: "Sort an Array", difficulty: "Easy" },
    { title: "Sort Colors", difficulty: "Medium" },
    { title: "Relative Sort Array", difficulty: "Easy" },
    { title: "Sort the People", difficulty: "Medium" },
    { title: "Sort Array by Increasing Frequency", difficulty: "Medium" },
    { title: "Custom Sort String", difficulty: "Medium" },
    { title: "Top K Frequent Elements", difficulty: "Medium" },
    { title: "Encode and Decode Strings", difficulty: "Medium" },
    { title: "Range Sum Query 2D Immutable", difficulty: "Medium" },
    { title: "Analyze User Website Visit Pattern", difficulty: "Medium" },
    { title: "Product of Array Except Self", difficulty: "Medium" },
    { title: "Minimum Number of Operations to Move All Balls to Each Box", difficulty: "Medium" },
    { title: "Valid Sudoku", difficulty: "Medium" },
    { title: "Longest Consecutive Sequence", difficulty: "Medium" },
    { title: "Encode and Decode TinyURL", difficulty: "Medium" },
    { title: "Brick Wall", difficulty: "Medium" },
    { title: "Best Time to Buy", difficulty: "Medium" },
    { title: "Push Dominoes", difficulty: "Medium" },
    { title: "Repeated DNA Sequences", difficulty: "Medium" },
    { title: "Insert Delete Get Random O(1)", difficulty: "Medium" },
    { title: "Check if a String Contains all Binary Codes of Size K", difficulty: "Medium" },
    { title: "Non Decreasing Array", difficulty: "Medium" },
    { title: "Number of Ways to Split Array", difficulty: "Medium" },
    { title: "Sign of An Array", difficulty: "Easy" },
    { title: "Find the Difference of Two Arrays", difficulty: "Easy" },
    { title: "Uncommon Words from Two Sentences", difficulty: "Easy" },
    { title: "Design Parking System", difficulty: "Easy" },
    { title: "Shifting Letters II", difficulty: "Medium" },
    { title: "Number of Zero-Filled Subarrays", difficulty: "Medium" },
    { title: "Word Subsets", difficulty: "Medium" },
    { title: "Optimal Partition of String", difficulty: "Medium" },
    { title: "Design Underground System", difficulty: "Medium" },
    { title: "Minimum Penalty for a Shop", difficulty: "Medium" },
    { title: "Champagne Tower", difficulty: "Medium" },
    { title: "Sum of Absolute Differences in a Sorted Array", difficulty: "Medium" },
    { title: "Design a Food Rating System", difficulty: "Hard" },
    { title: "Convert an Array Into a 2D Array With Conditions", difficulty: "Medium" },
    { title: "Minimum Numbers of Operations to Make Array Empty", difficulty: "Hard" },
    { title: "Divide Array Into Arrays With Max Difference", difficulty: "Medium" },
    { title: "Sequential Digits", difficulty: "Medium" },
    { title: "Sort Characters By Frequency", difficulty: "Medium" },
    { title: "Sort the Jumbled Numbers", difficulty: "Medium" },
    { title: "Find Polygon with the Largest Perimeter", difficulty: "Easy" },
    { title: "Minimum Remove to Make Valid Parentheses", difficulty: "Medium" },
    { title: "Contiguous Array", difficulty: "Medium" },
    { title: "Count Number of Bad Pairs", difficulty: "Easy" },
    { title: "Find All Duplicates in an Array", difficulty: "Easy" },
    { title: "Find the Length of the Longest Common Prefix", difficulty: "Easy" },
    { title: "Count Unguarded Cells in the Grid", difficulty: "Medium" },
    { title: "Text Justification", difficulty: "Hard" },
    { title: "Naming a Company", difficulty: "Hard" },
    { title: "Number of Submatrices that Sum to Target", difficulty: "Hard" },
    { title: "First Missing Positive", difficulty: "Hard" },
    { title: "Shortest Palindrome", difficulty: "Hard" },
    { title: "Best Time to Buy and Sell Stock II", difficulty: "Medium" },
    { title: "Majority Element II", difficulty: "Medium" },
    { title: "Minimum Index of a Valid Split", difficulty: "Medium" },
    { title: "Subarray Sum Equals K", difficulty: "Medium" },
    { title: "Subarray Sums Divisible by K", difficulty: "Medium" },
    { title: "Make Sum Divisible by P", difficulty: "Medium" },
    { title: "Unique Length 3 Palindromic Subsequences", difficulty: "Medium" },
    { title: "Number of Sub-arrays With Odd Sum", difficulty: "Medium" },
    { title: "Minimum Number of Swaps to Make The String Balanced", difficulty: "Medium" },
    { title: "Number of Pairs of Interchangeable Rectangles", difficulty: "Medium" },
    { title: "Maximum Product of The Length of Two Palindromic Subsequences", difficulty: "Hard" },
    { title: "Grid Game", difficulty: "Medium" },
    { title: "Find All Anagrams in a String", difficulty: "Medium" },
    { title: "Find The Index of The First Occurrence in a String", difficulty: "Medium" },
    { title: "Wiggle Sort", difficulty: "Medium" },
    { title: "Largest Number", difficulty: "Medium" },
    { title: "Continuous Subarray Sum", difficulty: "Medium" },
    { title: "Maximal Rectangle", difficulty: "Hard" },
    { title: "Count Negative Numbers in a Sorted Matrix", difficulty: "Easy" },
    { title: "Add Two Numbers", difficulty: "Medium" },
    { title: "Max Chunks To Make Sorted", difficulty: "Medium" },
    { title: "Find the Smallest Divisor Given a Threshold", difficulty: "Medium" },
    { title: "Find Subsequence of Length K With the Largest Sum", difficulty: "Medium" },
    { title: "Find the Distance Value Between Two Arrays", difficulty: "Easy" },
    { title: "Best Time to Buy and Sell Stock IV", difficulty: "Hard" },
    { title: "Container With Most Water", difficulty: "Medium" },
    { title: "Intersection of Two Arrays II", difficulty: "Easy" },
    { title: "Trapping Rain Water", difficulty: "Hard" },
    { title: "Game of Life", difficulty: "Medium" },
    { title: "Pascals Triangle", difficulty: "Easy" },
    { title: "Set Matrix Zeroes", difficulty: "Medium" },
    { title: "Rotate Image", difficulty: "Medium" },
    { title: "Spiral Matrix", difficulty: "Medium" },
    { title: "Merge Sorted Array", difficulty: "Easy" },
    { title: "Remove Duplicates from Sorted Array", difficulty: "Easy" },
    { title: "Remove Element", difficulty: "Easy" },
    { title: "Search in Rotated Sorted Array", difficulty: "Medium" },
    { title: "Find First and Last Position of Element in Sorted Array", difficulty: "Medium" },
    { title: "Find Minimum in Rotated Sorted Array", difficulty: "Medium" },
    { title: "Product of Array Except Self", difficulty: "Medium" },
    { title: "Subarray Product Less Than K", difficulty: "Medium" },
    { title: "Maximum Product Subarray", difficulty: "Medium" },
    { title: "Jump Game", difficulty: "Medium" },
    { title: "Jump Game II", difficulty: "Medium" },
  ],
  "Two Pointer": [
    { title: "Reverse String", difficulty: "Easy" },
    { title: "Valid Palindrome", difficulty: "Easy" },
    { title: "Valid Palindrome II", difficulty: "Easy" },
    { title: "Valid Word Abbreviation", difficulty: "Easy" },
    { title: "Merge Strings Alternately", difficulty: "Easy" },
    { title: "Merge Two 2D Arrays by Summing Values", difficulty: "Easy" },
    { title: "Move Zeroes", difficulty: "Easy" },
    { title: "Remove Duplicates From Sorted Array", difficulty: "Easy" },
    { title: "Squares of a Sorted Array", difficulty: "Easy" },
    { title: "Assign Cookies", difficulty: "Easy" },
    { title: "Find First Palindromic String in the Array", difficulty: "Easy" },
    { title: "Sot Array by Parity", difficulty: "Easy" }, // Assuming this problem title from the image
    { title: "Reverse Words in a String III", difficulty: "Easy" },
    { title: "Backspace String Compare", difficulty: "Easy" },
    { title: "Check If Two String Arrays are Equivalent", difficulty: "Easy" },
    { title: "Apply Operations to an Array", difficulty: "Easy" },
    { title: "Adding Spaces to a String", difficulty: "Easy" },
    { title: "String Compression", difficulty: "Easy" },
    { title: "Remove Duplicates From Sorted Array II", difficulty: "Medium" },
    { title: "Partition Array According to Given Pivot", difficulty: "Medium" },
    { title: "Two Sum II Input Array Is Sorted", difficulty: "Easy" },
    { title: "3Sum", difficulty: "Medium" },
    { title: "4Sum", difficulty: "Medium" },
    { title: "Rotate Array", difficulty: "Medium" },
    { title: "Container With Most Water", difficulty: "Medium" },
    { title: "Number of Subsequences That Satisfy The Given Sum Condition", difficulty: "Medium" },
    { title: "Array With Elements Not Equal to Average of Neighbors", difficulty: "Medium" },
    { title: "Divide Players Into Teams of Equal Skill", difficulty: "Medium" },
    { title: "Boats to Save People", difficulty: "Medium" },
    { title: "K-th Symbol in Grammar", difficulty: "Medium" },
    { title: "Minimum Time To Make Rope Colorful", difficulty: "Medium" },
    { title: "Rearrange Array Elements by Sign", difficulty: "Medium" },
    { title: "Bag of Tokens", difficulty: "Medium" },
    { title: "Minimum Length of String after Deleting Similar Ends", difficulty: "Medium" },
    { title: "Sentence Similarity II", difficulty: "Medium" },
    { title: "Trapping Rain Water", difficulty: "Hard" },
  ],
  "Sliding Window": [
    { title: "Contains Duplicate II", difficulty: "Easy" },
    { title: "Best Time to Buy and Sell Stock", difficulty: "Easy" },
    { title: "Minimum Recolor to Get K Consecutive Black Blocks", difficulty: "Easy" },
    { title: "Minimum Difference between Highest And Lowest of K Scores", difficulty: "Easy" },
    { title: "Number of Sub Arrays of Size K and Avg Greater than or Equal to Threshold", difficulty: "Easy" },
    { title: "Grumpy Bookstore Owner", difficulty: "Medium" },
    { title: "Alternating Groups II", difficulty: "Medium" },
    { title: "Longest Substring Without Repeating Characters", difficulty: "Medium" },
    { title: "Longest Repeating Character Replacement", difficulty: "Medium" },
    { title: "Permutation in String", difficulty: "Medium" },
    { title: "Frequency of The Most Frequent Element", difficulty: "Medium" },
    { title: "Fruits into Basket", difficulty: "Medium" },
    { title: "Maximum Number of Vowels in a Substring of Given Length", difficulty: "Medium" },
    { title: "Minimum Number of Flips To Make The Binary String Alternating", difficulty: "Medium" },
    { title: "Defuse the Bomb", difficulty: "Medium" },
    { title: "Minimum Subarray Sum", difficulty: "Medium" },
    { title: "Find K Closest Elements", difficulty: "Medium" },
    { title: "Minimum Operations to Reduce X to Zero", difficulty: "Medium" },
    { title: "Get Equal Substrings Within Budget", difficulty: "Medium" },
    { title: "Number of Substrings Containing All Three Characters", difficulty: "Medium" },
    { title: "Binary Subarrays With Sum", difficulty: "Medium" },
    { title: "Count Number of Nice Subarrays", difficulty: "Medium" },
    { title: "Subarray Product Less Than K", difficulty: "Medium" },
    { title: "Maximum Sum of Distinct Subarrays With Length K", difficulty: "Medium" },
    { title: "Length of Longest Subarray With at Most K Frequency", difficulty: "Medium" },
    { title: "Count Subarrays Where Max Element Appears at Least K Times", difficulty: "Medium" },
    { title: "Maximum Beauty of an Array After Applying Operation", difficulty: "Medium" },
    { title: "Take K of each Character From Left and Right", difficulty: "Medium" },
    { title: "Count of Substrings Containing Every Vowel and K Consonant", difficulty: "Medium" },
    { title: "Minimum Window Substring", difficulty: "Hard" },
    { title: "Sliding Window Maximum", difficulty: "Hard" },
    { title: "Subarrays With K Different Integers", difficulty: "Hard" },
    { title: "Minimum Number of Operations to Make Array Continuous", difficulty: "Hard" },
    { title: "Longest Continuous Subarray With Absolute Diff Less Than or Equal to Limit", difficulty: "Hard" },
    { title: "Smallest Range Covering Elements from K Lists", difficulty: "Hard" },
  ],

  "Stack": [
    { title: "Crawler Log Folder", difficulty: "Easy" },
    { title: "Baseball Game", difficulty: "Easy" },
    { title: "Valid Parentheses", difficulty: "Easy" },
    { title: "Implement Stack using Queues", difficulty: "Easy" },
    { title: "Implement Queue using Stacks", difficulty: "Easy" },
    { title: "Final Prices With a Special Discount in a Shop", difficulty: "Easy" },
    { title: "Make The String Great", difficulty: "Easy" },
    { title: "Min Stack", difficulty: "Easy" },
    { title: "Evaluate Reverse Polish Notation", difficulty: "Medium" },
    { title: "Removing Stars From a String", difficulty: "Medium" },
    { title: "Validate Stack Sequences", difficulty: "Medium" },
    { title: "Generate Parentheses", difficulty: "Medium" },
    { title: "Asteroid Collision", difficulty: "Medium" },
    { title: "Daily Temperatures", difficulty: "Medium" },
    { title: "Online Stock Span", difficulty: "Medium" },
    { title: "Car Fleet", difficulty: "Medium" },
    { title: "Simplify Path", difficulty: "Medium" },
    { title: "Decode String", difficulty: "Medium" },
    { title: "Remove K Digits", difficulty: "Medium" },
    { title: "Remove All Adjacent Duplicates In String II", difficulty: "Medium" },
    { title: "Reverse Substrings Between Each Pair of Parentheses", difficulty: "Medium" },
    { title: "Minimum String Length After Removing Substrings", difficulty: "Medium" },
    { title: "Clear Digits", difficulty: "Medium" },
    { title: "Minimum Add to Make Parentheses Valid", difficulty: "Medium" },
    { title: "Maximum Width Ramp", difficulty: "Medium" },
    { title: "Basic Calculator II", difficulty: "Medium" },
    { title: "132 Pattern", difficulty: "Medium" },
    { title: "Flatten Nested List Iterator", difficulty: "Medium" },
    { title: "Sum of Subarray Minimums", difficulty: "Medium" },
    { title: "Maximum Frequency Stack", difficulty: "Hard" },
    { title: "Robot Collisions", difficulty: "Hard" },
    { title: "Number of Visible People in a Queue", difficulty: "Hard" },
    { title: "Largest Rectangle in Histogram", difficulty: "Hard" },
    { title: "Shortest Subarray with Sum at Least K", difficulty: "Hard" },
    { title: "Parsing A Boolean Expression", difficulty: "Hard" },
    { title: "Number of Atoms", difficulty: "Hard" },
  ],
  "Binary Search": [
    { title: "Binary Search", difficulty: "Easy" },
    { title: "Search Insert Position", difficulty: "Easy" },
    { title: "Guess Number Higher Or Lower", difficulty: "Easy" },
    { title: "Arranging Coins", difficulty: "Easy" },
    { title: "Valid Perfect Square", difficulty: "Easy" },
    { title: "Sqrt(x)", difficulty: "Easy" },
    { title: "Single Element in a Sorted Array", difficulty: "Medium" },
    { title: "Find Peak Element", difficulty: "Medium" },
    { title: "Successful Pairs of Spells and Potions", difficulty: "Medium" },
    { title: "Search a 2D Matrix", difficulty: "Medium" },
    { title: "Koko Eating Bananas", difficulty: "Medium" },
    { title: "Capacity to Ship Packages Within D Days", difficulty: "Medium" },
    { title: "Maximum Candies Allocated to K Children", difficulty: "Medium" },
    { title: "House Robber IV", difficulty: "Medium" },
    { title: "Minimize the Maximum Difference of Pairs", difficulty: "Medium" },
    { title: "Minimized Maximum of Products Distributed to Any Store", difficulty: "Medium" },
    { title: "Minimum Limit of Balls in a Bag", difficulty: "Medium" },
    { title: "Minimum Time to Repair Cars", difficulty: "Medium" },
    { title: "Find Minimum in Rotated Sorted Array", difficulty: "Medium" },
    { title: "Search In Rotated Sorted Array", difficulty: "Medium" },
    { title: "Search in Rotated Sorted Array II", difficulty: "Medium" },
    { title: "Time Based Key-Value Store", difficulty: "Medium" },
    { title: "Find First and Last Position of Element in Sorted Array", difficulty: "Medium" },
    { title: "Maximum Number of Removable Characters", difficulty: "Medium" },
    { title: "Populating Next Right Pointers in Each Node", difficulty: "Medium" },
    { title: "Most Beautiful Item for Each Query", difficulty: "Medium" },
    { title: "Pick from Random with Weight", difficulty: "Medium" },
    { title: "Search Suggestions System", difficulty: "Medium" },
    { title: "Count the Number of Fair Pairs", difficulty: "Medium" },
    { title: "Split Array Largest Sum", difficulty: "Hard" },
    { title: "Find K-th Smallest Pair Distance", difficulty: "Hard" },
    { title: "Median of Two Sorted Arrays", difficulty: "Hard" },
    { title: "Find in Mountain Array", difficulty: "Hard" },
    { title: "Kth Smallest Product of Two Sorted Arrays", difficulty: "Hard" },
  ],
  "Linked List": [
    { title: "Reverse Linked List", difficulty: "Easy" },
    { title: "Merge Two Sorted Lists", difficulty: "Easy" },
    { title: "Linked List Cycle", difficulty: "Easy" },
    { title: "Palindrome Linked List", difficulty: "Easy" },
    { title: "Remove Linked List Elements", difficulty: "Easy" },
    { title: "Remove Duplicates From Sorted List", difficulty: "Easy" },
    { title: "Middle of the Linked List", difficulty: "Easy" },
    { title: "Intersection of Two Linked Lists", difficulty: "Easy" },
    { title: "Merge in Between Linked Lists", difficulty: "Medium" },
    { title: "Merge Nodes in Between Zeros", difficulty: "Medium" },
    { title: "Find the Minimum and Maximum Number of Nodes between Critical Points", difficulty: "Medium" },
    { title: "Remove Nodes From Linked List", difficulty: "Medium" },
    { title: "Reorder List", difficulty: "Medium" },
    { title: "Maximum Twin Sum of A Linked List", difficulty: "Medium" },
    { title: "Remove Nth Node From End of List", difficulty: "Medium" },
    { title: "Delete Nodes From Linked List Present in Array", difficulty: "Medium" },
    { title: "Swapping Nodes in a Linked List", difficulty: "Medium" },
    { title: "Copy List With Random Pointer", difficulty: "Medium" },
    { title: "Design Linked List", difficulty: "Medium" },
    { title: "Design Browser History", difficulty: "Medium" },
    { title: "Add Two Numbers", difficulty: "Medium" },
    { title: "Add Two Numbers II", difficulty: "Medium" },
    { title: "Find The Duplicate Number", difficulty: "Medium" },
    { title: "Swap Nodes in Pairs", difficulty: "Medium" },
    { title: "Sort List", difficulty: "Medium" },
    { title: "Partition List", difficulty: "Medium" },
    { title: "Rotate List", difficulty: "Medium" },
    { title: "Reverse Linked List II", difficulty: "Medium" },
    { title: "Design Circular Queue", difficulty: "Medium" },
    { title: "Insertion Sort List", difficulty: "Medium" },
    { title: "Split Linked List in Parts", difficulty: "Medium" },
    { title: "LRU Cache", difficulty: "Hard" },
    { title: "Merge k Sorted Lists", difficulty: "Hard" },
    { title: "Reverse Nodes in k Group", difficulty: "Hard" },
    { title: "Design Browser History", difficulty: "Medium" },
  ],
  "Binary and Binary Search Tree": [

    { title: "Binary Tree Inorder Traversal", difficulty: "Easy" },
    { title: "Binary Tree Preorder Traversal", difficulty: "Easy" },
    { title: "Binary Tree Postorder Traversal", difficulty: "Easy" },
    { title: "N-ary Tree Postorder Traversal", difficulty: "Easy" },
    { title: "Invert Binary Tree", difficulty: "Easy" },
    { title: "Maximum Depth of Binary Tree", difficulty: "Easy" },
    { title: "Diameter of Binary Tree", difficulty: "Easy" },
    { title: "Balanced Binary Tree", difficulty: "Easy" },
    { title: "Same Tree", difficulty: "Easy" },
    { title: "Subtree of Another Tree", difficulty: "Easy" },
    { title: "Convert Sorted Array to Binary Search Tree", difficulty: "Easy" },
    { title: "Merge Two Binary Trees", difficulty: "Easy" },
    { title: "Path Sum", difficulty: "Easy" },
    { title: "Range Sum of BST", difficulty: "Easy" },
    { title: "Leaf-Similar Trees", difficulty: "Easy" },
    { title: "Evaluate Boolean Binary Tree", difficulty: "Medium" },
    { title: "Create Binary Tree From Descriptions", difficulty: "Medium" },
    { title: "Binary Tree Vertical Order Traversal", difficulty: "Medium" },
    { title: "Construct String From Binary Tree", difficulty: "Medium" },
    { title: "Lowest Common Ancestor of a Binary Tree", difficulty: "Medium" },
    { title: "Lowest Common Ancestor of a Binary Tree III", difficulty: "Medium" },
    { title: "Lowest Common Ancestor of a Binary Search Tree", difficulty: "Easy" },
    { title: "Insert into a Binary Search Tree", difficulty: "Medium" },
    { title: "Delete Node in a BST", difficulty: "Medium" },
    { title: "Binary Tree Level Order Traversal", difficulty: "Medium" },
    { title: "Binary Tree Right Side View", difficulty: "Medium" },
    { title: "Reverse Odd Levels of Binary Tree", difficulty: "Medium" },
    { title: "Minimum Number of Operations to Sort a Binary Tree by Level", difficulty: "Medium" },
    { title: "Kth Largest Sum in a Binary Tree", difficulty: "Medium" },
    { title: "Cousins in Binary Tree II", difficulty: "Medium" },
    { title: "Minimum Distance between BST Nodes", difficulty: "Easy" },
    { title: "Symmetric Tree", difficulty: "Easy" },
    { title: "Linked List in Binary Tree", difficulty: "Medium" },
    { title: "Minimum Time to Collect All Apples in a Tree", difficulty: "Medium" },
    { title: "Binary Tree Zigzag Level Order Traversal", difficulty: "Medium" },
    { title: "Construct Quad Tree", difficulty: "Medium" },
    { title: "Find Duplicate Subtrees", difficulty: "Medium" },
    { title: "Check Completeness of a Binary Tree", difficulty: "Medium" },
    { title: "Construct Binary Tree from Inorder and Postorder Traversal", difficulty: "Medium" },
    { title: "Maximum Width of Binary Tree", difficulty: "Medium" },
    { title: "Time Needed to Inform All Employees", difficulty: "Medium" },
    { title: "Count Good Nodes In Binary Tree", difficulty: "Medium" },
    { title: "Validate Binary Search Tree", difficulty: "Medium" },
    { title: "Kth Smallest Element In a BST", difficulty: "Medium" },
    { title: "Recover Binary Search Tree", difficulty: "Medium" },
    { title: "Construct Binary Tree From Preorder And Inorder Traversal", difficulty: "Medium" },
    { title: "Construct Binary Tree from Preorder and Postorder Traversal", difficulty: "Medium" },
    { title: "Unique Binary Search Trees", difficulty: "Medium" },
    { title: "Unique Binary Search Trees II", difficulty: "Medium" },
    { title: "Number of Good Leaf Nodes Pairs", difficulty: "Medium" },
    { title: "Sum Root to Leaf Numbers", difficulty: "Medium" },
    { title: "House Robber III", difficulty: "Medium" },
    { title: "Flip Equivalent Binary Trees", difficulty: "Medium" },
    { title: "Operations On Tree", difficulty: "Medium" },
    { title: "All Possible Full Binary Trees", difficulty: "Medium" },
    { title: "Find Bottom Left Tree Value", difficulty: "Medium" },
    { title: "Trim a Binary Search Tree", difficulty: "Medium" },
    { title: "Binary Search Tree Iterator", difficulty: "Medium" },
    { title: "Validate Binary Tree Nodes", difficulty: "Medium" },
    { title: "Find Largest Value in Tree Row", difficulty: "Medium" },
    { title: "Pseudo-Palindromic Paths in a Binary Tree", difficulty: "Medium" },
    { title: "Even Odd Tree", difficulty: "Medium" },
    { title: "Smallest String Starting From Leaf", difficulty: "Medium" },
    { title: "Delete Leaves With a Given Value", difficulty: "Medium" },
    { title: "Delete Nodes And Return Forest", difficulty: "Medium" },
    { title: "Distribute Coins in Binary Tree", difficulty: "Medium" },
    { title: "Convert Bst to Greater Tree", difficulty: "Medium" },
    { title: "Step-By-Step Directions From a Binary Tree Node to Another", difficulty: "Medium" },
    { title: "Recover a Tree From Preorder Traversal", difficulty: "Medium" },
    { title: "Binary Tree Maximum Path Sum", difficulty: "Hard" },
    { title: "Serialize And Deserialize Binary Tree", difficulty: "Hard" }
  ],
  "Heap / Priority Queue": [
    { title: "Kth Largest Element In a Stream", difficulty: "Easy" },
    { title: "Last Stone Weight", difficulty: "Easy" },
    { title: "Take Gifts From the Richest Pile", difficulty: "Medium" },
    { title: "Final Array State After K Multiplication Operations I", difficulty: "Medium" },
    { title: "K Closest Points to Origin", difficulty: "Medium" },
    { title: "Kth Largest Element In An Array", difficulty: "Medium" },
    { title: "Task Scheduler", difficulty: "Medium" },
    { title: "Design Twitter", difficulty: "Medium" },
    { title: "Least Number of Unique Integers after K Removal", difficulty: "Medium" },
    { title: "Furthest Building You Can Reach", difficulty: "Medium" },
    { title: "Minimize Deviation in Array", difficulty: "Hard" },
    { title: "Maximum Subsequence Score", difficulty: "Medium" },
    { title: "Single Threaded CPU", difficulty: "Medium" },
    { title: "Seat Reservation Manager", difficulty: "Medium" },
    { title: "Process Tasks Using Servers", difficulty: "Medium" },
    { title: "Find The Kth Largest Integer In The Array", difficulty: "Medium" },
    { title: "Reorganize String", difficulty: "Medium" },
    { title: "Longest Happy String", difficulty: "Medium" },
    { title: "Car Pooling", difficulty: "Medium" },
    { title: "Range Sum of Sorted Subarray Sums", difficulty: "Medium" },
    { title: "Find Median From Data Stream", difficulty: "Hard" },
    { title: "Maximum Performance of a Team", difficulty: "Hard" },
    { title: "IPO", difficulty: "Hard" },
    { title: "Minimum Cost to Hire K Workers", difficulty: "Hard" },
    { title: "Number of Flowers in Full Bloom", difficulty: "Hard" },
    { title: "Constrained Subsequence Sum", difficulty: "Medium" },
    { title: "Find Building Where Alice and Bob Can Meet", difficulty: "Medium" },
  ],
  "Backtracking": [
    { title: "Sum of All Subsets XOR Total", difficulty: "Medium" },
    { title: "Subsets", difficulty: "Medium" },
    { title: "Combination Sum", difficulty: "Medium" },
    { title: "Combination Sum II", difficulty: "Medium" },
    { title: "Combinations", difficulty: "Medium" },
    { title: "Permutations", difficulty: "Medium" },
    { title: "Subsets II", difficulty: "Medium" },
    { title: "Permutations II", difficulty: "Medium" },
    { title: "Letter Tile Possibilities", difficulty: "Medium" },
    { title: "Word Search", difficulty: "Medium" },
    { title: "Palindrome Partitioning", difficulty: "Medium" },
    { title: "Restore IP Addresses", difficulty: "Medium" },
    { title: "Letter Combinations of a Phone Number", difficulty: "Medium" },
    { title: "The k-th Lexicographical String of All Happy Strings of Length n", difficulty: "Medium" },
    { title: "Matchsticks to Square", difficulty: "Medium" },
    { title: "Splitting a String Into Descending Consecutive Values", difficulty: "Medium" },
    { title: "Construct Smallest Number From DI String", difficulty: "Medium" },
    { title: "Find Unique Binary String", difficulty: "Medium" },
    { title: "Split a String Into the Max Number of Unique Substrings", difficulty: "Medium" },
    { title: "Maximum Length of a Concatenated String With Unique Characters", difficulty: "Medium" },
    { title: "Partition to K Equal Sum Subsets", difficulty: "Medium" },
    { title: "The Number of Beautiful Subsets", difficulty: "Medium" },
    { title: "Different Ways to Add Parentheses", difficulty: "Medium" },
    { title: "Construct the Lexicographically Largest Valid Sequence", difficulty: "Medium" },
    { title: "Count Number of Maximum Bitwise-OR Subsets", difficulty: "Medium" },
    { title: "N Queens", difficulty: "Hard" },
    { title: "N Queens II", difficulty: "Hard" },
    { title: "Maximum Score Words Formed By Letters", difficulty: "Hard" },
    { title: "Word Break II", difficulty: "Hard" },
  ],
  "Tree": [
    { title: "Count Prefix and Suffix Pairs I", difficulty: "Medium" },
    { title: "Implement Trie Prefix Tree", difficulty: "Medium" },
    { title: "Design Add And Search Words Data Structure", difficulty: "Medium" },
    { title: "Counting Words With a Given Prefix", difficulty: "Medium" },
    { title: "Remove Sub-Folders from the Filesystem", difficulty: "Medium" },
    { title: "Extra Characters in a String", difficulty: "Medium" },
    { title: "Word Search II", difficulty: "Hard" },
    { title: "Sum of Prefix Scores of Strings", difficulty: "Medium" },
    { title: "Count Prefix and Suffix Pairs II", difficulty: "Hard" }
  ],
  'Dynamic Programming': [
    { title: "Climbing Stairs", difficulty: "Easy" },
    { title: "Min Cost Climbing Stairs", difficulty: "Easy" },
    { title: "N-th Tribonacci Number", difficulty: "Easy" },
    { title: "House Robber", difficulty: "Medium" },
    { title: "House Robber II", difficulty: "Medium" },
    { title: "Longest Palindromic Substring", difficulty: "Medium" },
    { title: "Palindromic Substrings", difficulty: "Medium" },
    { title: "Decode Ways", difficulty: "Medium" },
    { title: "Coin Change", difficulty: "Medium" },
    { title: "Maximum Product Subarray", difficulty: "Medium" },
    { title: "Word Break", difficulty: "Medium" },
    { title: "Longest Increasing Subsequence", difficulty: "Medium" },
    { title: "Partition Equal Subset Sum", difficulty: "Medium" },
    { title: "Triangle", difficulty: "Medium" },
    { title: "Delete And Earn", difficulty: "Medium" },
    { title: "Paint House", difficulty: "Medium" },
    { title: "Filling Bookcase Shelves", difficulty: "Medium" },
    { title: "Combination Sum IV", difficulty: "Medium" },
    { title: "Perfect Squares", difficulty: "Medium" },
    { title: "Check if There is a Valid Partition For The Array", difficulty: "Medium" },
    { title: "Maximum Subarray Min Product", difficulty: "Medium" },
    { title: "Minimum Cost For Tickets", difficulty: "Medium" },
    { title: "Integer Break", difficulty: "Medium" },
    { title: "Number of Longest Increasing Subsequence", difficulty: "Medium" },
    { title: "Russian Doll Envelopes", difficulty: "Hard" },
    { title: "Stickers to Spell Word", difficulty: "Hard" },
    { title: "Uncrossed Lines", difficulty: "Medium" },
    { title: "Solving Questions With Brainpower", difficulty: "Medium" },
    { title: "Count Ways to Build Good Strings", difficulty: "Medium" },
    { title: "Ugly Number II", difficulty: "Medium" },
    { title: "New 21 Game", difficulty: "Medium" },
    { title: "Best Team with no Conflicts", difficulty: "Medium" },
    { title: "Longest String Chain", difficulty: "Medium" },
    { title: "Knight Dialer", difficulty: "Medium" },
    { title: "Partition Array for Maximum Sum", difficulty: "Medium" },
    { title: "Largest Divisible Subset", difficulty: "Medium" },
    { title: "Stone Game III", difficulty: "Medium" },
    { title: "Concatenated Words", difficulty: "Hard" },
    { title: "Maximize Score after N Operations", difficulty: "Hard" },
    { title: "Find the Longest Valid Obstacle Course at Each Position", difficulty: "Hard" },
    { title: "Minimum Number of Removals to Make Mountain Array", difficulty: "Hard" },
    { title: "Count all Valid Pickup and Delivery Options", difficulty: "Hard" },
    { title: "Number of Ways to Divide a Long Corridor", difficulty: "Hard" },
    { title: "Maximum Sum of 3 Non-Overlapping Subarrays", difficulty: "Medium" },
    { title: "Maximum Profit in Job Scheduling", difficulty: "Medium" },
    { title: "Student Attendance Record II", difficulty: "Medium" },
  ],
  "Advanced Dynamic Programming": [
    { title: "Unique Paths", difficulty: "Medium" },
    { title: "Unique Paths II", difficulty: "Medium" },
    { title: "Minimum Path Sum", difficulty: "Medium" },
    { title: "Maximum Number of Points with Cost", difficulty: "Hard" },
    { title: "Longest Common Subsequence", difficulty: "Medium" },
    { title: "Longest Palindromic Subsequence", difficulty: "Medium" },
    { title: "Length of Longest Fibonacci Subsequence", difficulty: "Medium" },
    { title: "Last Stone Weight II", difficulty: "Medium" },
    { title: "Best Time to Buy And Sell Stock With Cooldown", difficulty: "Medium" },
    { title: "Coin Change II", difficulty: "Medium" },
    { title: "Target Sum", difficulty: "Medium" },
    { title: "Interleaving String", difficulty: "Medium" },
    { title: "Stone Game", difficulty: "Medium" },
    { title: "Stone Game II", difficulty: "Medium" },
    { title: "Longest Increasing Path In a Matrix", difficulty: "Hard" },
    { title: "Maximal Square", difficulty: "Medium" },
    { title: "Count Square Submatrices with All Ones", difficulty: "Medium" },
    { title: "Ones and Zeroes", difficulty: "Medium" },
    { title: "2 Keys Keyboard", difficulty: "Medium" },
    { title: "Maximum Alternating Subsequence Sum", difficulty: "Medium" },
    { title: "Distinct Subsequences", difficulty: "Hard" },
    { title: "Edit Distance", difficulty: "Hard" },
    { title: "Number of Dice Rolls with Target Sum", difficulty: "Medium" },
    { title: "Minimum Falling Path Sum", difficulty: "Medium" },
    { title: "Out of Boundary Paths", difficulty: "Medium" },
    { title: "Longest Ideal Subsequence", difficulty: "Medium" },
    { title: "Count Number of Teams", difficulty: "Medium" },
    { title: "Shortest Common Supersequence", difficulty: "Hard" },
    { title: "Count Vowels Permutation", difficulty: "Hard" },
    { title: "Burst Balloons", difficulty: "Hard" },
    { title: "Number of Ways to Rearrange Sticks With K Sticks Visible", difficulty: "Hard" },
    { title: "Regular Expression Matching", difficulty: "Hard" },
    { title: "Flip String to Monotone Increasing", difficulty: "Medium" },
    { title: "Maximum Value of K Coins from Piles", difficulty: "Hard" },
    { title: "Number of Music Playlists", difficulty: "Hard" },
    { title: "Number of Ways to Form a Target String Given a Dictionary", difficulty: "Hard" },
    { title: "Profitable Schemes", difficulty: "Hard" },
    { title: "Minimum Cost to Cut a Stick", difficulty: "Hard" },
    { title: "Painting the Walls", difficulty: "Hard" },
    { title: "Number of Ways to Stay in the Same Place After Some Steps", difficulty: "Hard" },
    { title: "String Compression II", difficulty: "Hard" },
    { title: "Minimum Difficulty of a Job Schedule", difficulty: "Hard" },
    { title: "Arithmetic Slices II", difficulty: "Hard" },
    { title: "K Inverse Pairs Array", difficulty: "Hard" },
    { title: "Cherry Pickup II", difficulty: "Hard" },
    { title: "Minimum Falling Path Sum II", difficulty: "Hard" },
    { title: "Freedom Trail", difficulty: "Hard" },
    { title: "Split Array With Same Average", difficulty: "Hard" },
  ],
  'Greedy Algorithm': [
    { title: "Buy Two Chocolates", difficulty: "Easy" },
    { title: "Lemonade Change", difficulty: "Easy" },
    { title: "Minimum Number of Moves to Seat Everyone", difficulty: "Easy" },
    { title: "Maximum Odd Binary Number", difficulty: "Easy" },
    { title: "Maximum Nesting Depth of the Parentheses", difficulty: "Easy" },
    { title: "Check if One String Swap Can Make Strings Equal", difficulty: "Easy" },
    { title: "Minimum Operations to Make Binary Array Elements Equal to One I", difficulty: "Medium" },
    { title: "Buildings With an Ocean View", difficulty: "Medium" },
    { title: "Minimum Length of String After Operations", difficulty: "Medium" },
    { title: "Construct K Palindrome Strings", difficulty: "Medium" },
    { title: "Separate Black and White Balls", difficulty: "Medium" },
    { title: "Minimum Increment to Make Array Unique", difficulty: "Medium" },
    { title: "Maximum Subarray", difficulty: "Easy" },
    { title: "Maximum Absolute Sum of Any Subarray", difficulty: "Medium" },
    { title: "Maximum Sum Circular Subarray", difficulty: "Medium" },
    { title: "Minimum Swaps to Group All 1's Together II", difficulty: "Medium" },
    { title: "Longest Turbulent Subarray", difficulty: "Medium" },
    { title: "Jump Game", difficulty: "Medium" },
    { title: "Jump Game II", difficulty: "Medium" },
    { title: "Jump Game VII", difficulty: "Medium" },
    { title: "Gas Station", difficulty: "Medium" },
    { title: "Hand of Straights", difficulty: "Medium" },
    { title: "Minimum Number of Changes to Make Binary String Beautiful", difficulty: "Medium" },
    { title: "Minimize Maximum of Array", difficulty: "Medium" },
    { title: "Maximize Y-Sum by Picking a Triplet of Distinct X-Values", difficulty: "Medium" },
    { title: "Minimum Difference Between Largest and Smallest Value in Three Moves", difficulty: "Medium" },
    { title: "Maximum Total Importance of Roads", difficulty: "Medium" },
    { title: "Minimum Number of Pushes to Type Word II", difficulty: "Medium" },
    { title: "Dota2 Senate", difficulty: "Medium" },
    { title: "Maximum Points You Can Obtain From Cards", difficulty: "Medium" },
    { title: "Merge Triplets to Form Target Triplet", difficulty: "Medium" },
    { title: "Partition Labels", difficulty: "Medium" },
    { title: "Valid Parenthesis String", difficulty: "Medium" },
    { title: "Check if a Parentheses String Can Be Valid", difficulty: "Medium" },
    { title: "Eliminate Maximum Number of Monsters", difficulty: "Medium" },
    { title: "Two City Scheduling", difficulty: "Easy" },
    { title: "Maximum Length of Pair Chain", difficulty: "Medium" },
    { title: "Best Sightseeing Pair", difficulty: "Medium" },
    { title: "Make Lexicographically Smallest Array by Swapping Elements", difficulty: "Medium" },
    { title: "Minimum Deletions to Make Character Frequencies Unique", difficulty: "Medium" },
    { title: "Minimum Deletions to Make String Balanced", difficulty: "Medium" },
    { title: "Candy", difficulty: "Medium" },
    { title: "Remove Colored Pieces if Both Neighbors are the Same Color", difficulty: "Medium" },
    { title: "Maximum Score From Removing Substrings", difficulty: "Medium" },
    { title: "Maximum Element After Decreasing and Rearranging", difficulty: "Medium" },
    { title: "Number of Laser Beams in a Bank", difficulty: "Medium" },
    { title: "Maximum Distance in Arrays", difficulty: "Medium" },
    { title: "Reveal Cards In Increasing Order", difficulty: "Medium" },
    { title: "Construct String With Repeat Limit", difficulty: "Medium" },
    { title: "Find Valid Matrix Given Row and Column Sums", difficulty: "Medium" },
    { title: "Score After Flipping Matrix", difficulty: "Medium" },
    { title: "Flip Columns For Maximum Number of Equal Rows", difficulty: "Medium" },
    { title: "Maximum Matrix Sum", difficulty: "Medium" },
    { title: "Make Two Arrays Equal by Reversing Subarrays", difficulty: "Easy" },
    { title: "Shortest Subarray to be Removed to Make Array Sorted", difficulty: "Medium" },
    { title: "Max Chunks To Make Sorted", difficulty: "Medium" },
    { title: "Next Permutation", difficulty: "Medium" },
    { title: "Maximum Swap", difficulty: "Medium" },
    { title: "Maximal Score After Applying K Operations", difficulty: "Hard" },
    { title: "Maximum Frequency After Subarray Operation", difficulty: "Medium" },
    { title: "Put Marbles in Bags", difficulty: "Medium" },
    { title: "Minimum Number of K Consecutive Bit Flips", difficulty: "Medium" },
    { title: "Maximum Score of a Good Subarray", difficulty: "Medium" },
    { title: "Find the Maximum Sum of Node Values", difficulty: "Medium" },
    { title: "Minimum Number of Increments on Subarrays to Form a Target Array", difficulty: "Medium" },
    { title: "Apply Operations to Maximize Score", difficulty: "Medium" },
  ],
  "Interval": [
    { title: "Insert Interval", difficulty: "Medium" },
    { title: "Merge Intervals", difficulty: "Medium" },
    { title: "Non Overlapping Intervals", difficulty: "Medium" },
    { title: "Interval List Intersections", difficulty: "Medium" },
    { title: "Meeting Rooms", difficulty: "Easy" },
    { title: "Meeting Rooms II", difficulty: "Medium" },
    { title: "Meeting Rooms III", difficulty: "Hard" },
    { title: "Divide Intervals Into Minimum Number of Groups", difficulty: "Medium" },
    { title: "Remove Covered Intervals", difficulty: "Medium" },
    { title: "Minimum Number of Arrows to Burst Balloons", difficulty: "Medium" },
    { title: "The Number of the Smallest Unoccupied Chair", difficulty: "Medium" },
    { title: "Check if Grid can be Cut into Sections", difficulty: "Medium" },
    { title: "My Calendar I", difficulty: "Medium" },
    { title: "My Calendar II", difficulty: "Medium" },
    { title: "Count Days Without Meetings", difficulty: "Medium" },
    { title: "Minimum Interval to Include Each Query", difficulty: "Hard" },
    { title: "Data Stream as Disjoint Intervals", difficulty: "Hard" },
  ],
  "Math and Geometry": [
    { title: "Excel Sheet Column Title", difficulty: "Easy" },
    { title: "Greatest Common Divisor of Strings", difficulty: "Easy" },
    { title: "Insert Greatest Common Divisors in Linked List", difficulty: "Medium" },
    { title: "Count Odd Numbers in an Interval Range", difficulty: "Easy" },
    { title: "Matrix Diagonal Sum", difficulty: "Easy" },
    { title: "Calculate Money in Leetcode Bank", difficulty: "Easy" },
    { title: "Largest Odd Number in String", difficulty: "Easy" },
    { title: "Transpose Matrix", difficulty: "Easy" },
    { title: "Image Smoother", difficulty: "Easy" },
    { title: "Count of Matches in Tournament", difficulty: "Easy" },
    { title: "Water Bottles", difficulty: "Easy" },
    { title: "Largest Local Values in a Matrix", difficulty: "Easy" },
    { title: "Power of Four", difficulty: "Easy" },
    { title: "Lucky Numbers in a Matrix", difficulty: "Easy" },
    { title: "Maximum Points on a Line", difficulty: "Hard" },
    { title: "Magic Squares In Grid", difficulty: "Medium" },
    { title: "Rotate Image", difficulty: "Medium" },
    { title: "Spiral Matrix", difficulty: "Medium" },
    { title: "Spiral Matrix II", difficulty: "Medium" },
    { title: "Spiral Matrix III", difficulty: "Medium" },
    { title: "Spiral Matrix IV", difficulty: "Medium" },
    { title: "Set Matrix Zeroes", difficulty: "Medium" },
    { title: "Happy Number", difficulty: "Easy" },
    { title: "Plus One", difficulty: "Easy" },
    { title: "Palindrome Number", difficulty: "Easy" },
    { title: "Ugly Number", difficulty: "Easy" },
    { title: "Convert 1D Array Into 2D Array", difficulty: "Easy" },
    { title: "Shift 2D Grid", difficulty: "Easy" },
    { title: "Roman to Integer", difficulty: "Easy" },
    { title: "Integer to Roman", difficulty: "Medium" },
    { title: "Pow(x, n)", difficulty: "Medium" },
    { title: "Find the Punishment Number of an Integer", difficulty: "Medium" },
    { title: "Check if Number is a Sum of Powers of Three", difficulty: "Medium" },
    { title: "Multiply Strings", difficulty: "Medium" },
    { title: "Detect Squares", difficulty: "Medium" },
    { title: "Robot Bounded In Circle", difficulty: "Medium" },
    { title: "Walking Robot Simulation", difficulty: "Easy" },
    { title: "Zigzag Conversion", difficulty: "Medium" },
    { title: "Rotating the Box", difficulty: "Medium" },
    { title: "Sum of Square Numbers", difficulty: "Medium" },
    { title: "Find Missing Observations", difficulty: "Medium" },
    { title: "Minimum Time Difference", difficulty: "Medium" },
    { title: "Minimum Operations to Make a Uni-Value Grid", difficulty: "Medium" },
    { title: "Largest Submatrix With Rearrangements", difficulty: "Medium" },
    { title: "Wildest Vertical Area Between Two Points Containing No Points", difficulty: "Medium" },
    { title: "Tuple with Same Product", difficulty: "Medium" },
    { title: "Lexicographical Numbers", difficulty: "Medium" },
    { title: "Find the Winner of the Circular Game", difficulty: "Medium" },
    { title: "Count Total Number of Colored Cells", difficulty: "Medium" },
    { title: "Prime Subtraction Operation", difficulty: "Medium" },
    { title: "Closest Prime Numbers in Range", difficulty: "Medium" },
    { title: "Distribute Candies Among Children II", difficulty: "Medium" },
    { title: "Minimum Number of One Bit Operations to Make Integers Zero", difficulty: "Medium" },
    { title: "K-th Smallest in Lexicographical Order", difficulty: "Hard" },
    { title: "Integer to English Words", difficulty: "Hard" }
  ],
  'Bit Manipulation': [
    { title: "Single Number", difficulty: "Easy" },
    { title: "Single Number III", difficulty: "Medium" },
    { title: "Number of 1 Bits", difficulty: "Easy" },
    { title: "Counting Bits", difficulty: "Medium" },
    { title: "Add Binary", difficulty: "Easy" },
    { title: "Minimum Bit Flips to Convert Number", difficulty: "Medium" },
    { title: "Reverse Bits", difficulty: "Easy" },
    { title: "Missing Number", difficulty: "Easy" },
    { title: "Shuffle the Array", difficulty: "Easy" },
    { title: "Add to Array-Form of Integer", difficulty: "Easy" },
    { title: "Find the Difference", difficulty: "Easy" },
    { title: "Power of Two", difficulty: "Easy" },
    { title: "Sum of Two Integers", difficulty: "Medium" },
    { title: "Reverse Integer", difficulty: "Easy" },
    { title: "Bitwise XOR of All Pairings", difficulty: "Medium" },
    { title: "Largest Combination With Bitwise AND Greater Than Zero", difficulty: "Medium" },
    { title: "XOR Queries of a Subarray", difficulty: "Medium" },
    { title: "Maximum XOR for Each Query", difficulty: "Medium" },
    { title: "Neighboring Bitwise XOR", difficulty: "Medium" },
    { title: "Shortest Subarray With OR at Least K II", difficulty: "Hard" },
    { title: "Bitwise AND of Numbers Range", difficulty: "Medium" },
    { title: "Find Kth Bit in Nth Binary String", difficulty: "Medium" },
    { title: "Count Triplets That Can Form Two Arrays of Equal XOR", difficulty: "Medium" },
    { title: "Minimum Array End", difficulty: "Medium" },
    { title: "Find if Array Can Be Sorted", difficulty: "Medium" },
    { title: "Longest Subarray With Maximum Bitwise AND", difficulty: "Medium" },
    { title: "Longest Nice Subarray", difficulty: "Medium" },
    { title: "Find the Longest Substring Containing Vowels in Even Counts", difficulty: "Medium" },
    { title: "Minimize XOR", difficulty: "Medium" },
  ],
  "Other Problems": [
    { title: "Find All Duplicates in an Array", difficulty: "Medium" },
    { title: "Longest Consecutive Sequence", difficulty: "Hard" },
    { title: "Serialize and Deserialize Binary Tree", difficulty: "Hard" },
    { title: "Merge K Sorted Lists", difficulty: "Hard" },
    { title: "Word Break II", difficulty: "Hard" },
    { title: "Minimum Window Substring", difficulty: "Hard" },
    { title: "Sliding Window Maximum", difficulty: "Hard" },
    { title: "Trapping Rain Water", difficulty: "Hard" },
    { title: "Longest Substring Without Repeating Characters", difficulty: "Medium" },
    { title: "Number of Islands", difficulty: "Medium" },
    { title: "Course Schedule III", difficulty: "Hard" },
    { title: "Reorganize String", difficulty: "Medium" },
    { title: "Kth Largest Element in an Array", difficulty: "Medium" }
  ]
};


// Function to generate LeetCode link from problem title
const createLeetCodeLink = (title: string) => {
  const formattedTitle = title
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[()]/g, "")
    .replace(/[[\]]/g, "")
    .replace(/--/g, "-")
    .replace(/^-|-$/g, "");
  return `https://leetcode.com/problems/${formattedTitle}/`;
};

// Constants
const PROBLEMS_PER_PAGE = 50;
const allTopics = Object.keys(allProblemsData);
const allDifficulties = ["Easy", "Medium", "Hard"];
const allStatuses = ["Solved", "Unsolved"];

// Create a flat array of all problems with unique IDs and initial 'solved' status
let problemId = 0;
const allProblems = Object.entries(allProblemsData).flatMap(([topic, problems]) =>
  problems.map((problem) => ({
    ...problem,
    id: problemId++,
    topic: topic,
    solved: false,
  }))
);

// Define Problem type for clarity
type Problem = (typeof allProblems)[number];

// Main Component
function ALLINONEDSA({ darkMode = false }) {
  const [questionsList, setQuestionsList] = useState<Problem[]>(allProblems);
  const [selectedTopic, setSelectedTopic] = useState<string | null>(null);
  const [selectedDifficulty, setSelectedDifficulty] = useState<string | null>(null);
  const [selectedStatus, setSelectedStatus] = useState<string | null>(null);

  const [problemSearchTerm, setProblemSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  // --- Handlers ---

  const handleCheckboxChange = (id: number) => {
    setQuestionsList((prevList) =>
      prevList.map((q) => (q.id === id ? { ...q, solved: !q.solved } : q))
    );
  };

  const handleTopicChange = (topic: string) => {
    setSelectedTopic(selectedTopic === topic ? null : topic);
    setCurrentPage(1);
  };

  const handleDifficultyChange = (difficulty: string) => {
    setSelectedDifficulty(selectedDifficulty === difficulty ? null : difficulty);
    setCurrentPage(1);
  };

  const handleStatusChange = (status: string) => {
    setSelectedStatus(selectedStatus === status ? null : status);
    setCurrentPage(1);
  };

  // --- Filtered Problems Logic (Memoized for performance) ---
  const filteredProblems = useMemo(() => {
    return questionsList.filter((q) => {
      const matchesTopic = !selectedTopic || q.topic === selectedTopic;
      const matchesDifficulty = !selectedDifficulty || q.difficulty === selectedDifficulty;
      const matchesStatus = !selectedStatus || (selectedStatus === "Solved" ? q.solved : !q.solved);
      const matchesSearchTerm = !problemSearchTerm || q.title.toLowerCase().includes(problemSearchTerm.toLowerCase());
      return matchesTopic && matchesDifficulty && matchesStatus && matchesSearchTerm;
    });
  }, [questionsList, selectedTopic, selectedDifficulty, selectedStatus, problemSearchTerm]);

  // --- Pagination Logic ---
  const totalPages = Math.ceil(filteredProblems.length / PROBLEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * PROBLEMS_PER_PAGE;
  const endIndex = Math.min(startIndex + PROBLEMS_PER_PAGE, filteredProblems.length);
  const currentProblems = filteredProblems.slice(startIndex, endIndex);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  // --- Utility Functions ---
  const getFilterProgress = (filter: string, type: string) => {
    let filteredList: Problem[] = [];

    if (type === "topic") {
      filteredList = questionsList.filter(q => q.topic === filter);
    } else if (type === "difficulty") {
      filteredList = questionsList.filter(q => q.difficulty === filter);
    } else if (type === "status") {
      filteredList = questionsList.filter(q => (filter === "Solved" ? q.solved : !q.solved));
    } else {
      // Default case if needed, though arguments should match types
      return "(0/0)";
    }

    const solvedCount = filteredList.filter(q => q.solved).length;
    return `(${solvedCount}/${filteredList.length})`;
  };


  const getDifficultyColorClass = (difficulty: string) => {
    switch (difficulty) {
      case "Easy": return "text-green-500";
      case "Medium": return "text-yellow-500";
      case "Hard": return "text-red-500";
      default: return "text-gray-500";
    }
  };

  const getDifficultyBgColorClass = (difficulty: string) => {
    switch (difficulty) {
      case "Easy": return "bg-green-100 dark:bg-green-900/50";
      case "Medium": return "bg-yellow-100 dark:bg-yellow-900/50";
      case "Hard": return "bg-red-100 dark:bg-red-900/50";
      default: return "bg-gray-100 dark:bg-gray-700/50";
    }
  };

  // Progress calculations for the filtered list
  const progressSolvedCount = filteredProblems.filter(q => q.solved).length;
  const progressTotalCount = filteredProblems.length;
  const progressPercentageForFiltered = progressTotalCount > 0 ? (progressSolvedCount / progressTotalCount) * 100 : 0;

  return (
    <div className={`flex min-h-screen transition-colors duration-500 ${darkMode ? "bg-gray-900 text-white" : "bg-gray-50 text-gray-900"}`}>
      {/* Sidebar */}
      <aside className={`w-72 border-r p-6 overflow-y-auto transition-colors duration-500 mt-20 ${darkMode ? "bg-gray-800 border-gray-700" : "bg-white border-gray-200"}`}>


        {/* Topics Filter */}
        <section className="mb-6">
          <h2 className="text-lg font-semibold mb-2">TOPICS</h2>
          <div className="space-y-2">
            {allTopics.map(topic => (
              <label key={topic} className="flex items-center justify-between space-x-2 cursor-pointer">
                <div className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    checked={selectedTopic === topic}
                    onChange={() => handleTopicChange(topic)}
                    className="rounded text-purple-600 focus:ring-purple-500 bg-gray-200 dark:bg-gray-700 border-gray-300 dark:border-gray-600"
                  />
                  <span className="text-sm">{topic}</span>
                </div>
                <span className={`text-xs text-gray-500 ${darkMode ? "text-gray-400" : ""}`}>
                  {getFilterProgress(topic, "topic")}
                </span>
              </label>
            ))}
          </div>
        </section>

        {/* Difficulty Filter */}
        <section className="mb-6">
          <h2 className="text-lg font-semibold mb-2">DIFFICULTY</h2>
          <div className="space-y-2">
            {allDifficulties.map(difficulty => (
              <label key={difficulty} className="flex items-center justify-between space-x-2 cursor-pointer">
                <div className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    checked={selectedDifficulty === difficulty}
                    onChange={() => handleDifficultyChange(difficulty)}
                    className="rounded text-purple-600 focus:ring-purple-500 bg-gray-200 dark:bg-gray-700 border-gray-300 dark:border-gray-600"
                  />
                  <span className="text-sm">{difficulty}</span>
                </div>
                <span className={`text-xs text-gray-500 ${darkMode ? "text-gray-400" : ""}`}>
                  {getFilterProgress(difficulty, "difficulty")}
                </span>
              </label>
            ))}
          </div>
        </section>

        {/* Status Filter */}
        <section>
          <h2 className="text-lg font-semibold mb-2">STATUS</h2>
          <div className="space-y-2">
            {allStatuses.map(status => (
              <label key={status} className="flex items-center justify-between space-x-2 cursor-pointer">
                <div className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    checked={selectedStatus === status}
                    onChange={() => handleStatusChange(status)}
                    className="rounded text-purple-600 focus:ring-purple-500 bg-gray-200 dark:bg-gray-700 border-gray-300 dark:border-gray-600"
                  />
                  <span className="text-sm">{status}</span>
                </div>
                <span className={`text-xs text-gray-500 ${darkMode ? "text-gray-400" : ""}`}>
                  {getFilterProgress(status, "status")}
                </span>
              </label>
            ))}
          </div>
        </section>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 mt-20">

        {/* Header/Title moved here */}
        <h1 className="text-2xl font-bold mb-6">Problem Progress</h1>

        {/* Progress Bar (Remains in the same spot, under the title) */}
        <div className={`p-4 rounded-lg transition-colors duration-500 ${darkMode ? "bg-gray-800" : "bg-white"} mb-6`}>
          <div className="flex items-center justify-between text-sm mb-2">
            <span>{progressSolvedCount} of {progressTotalCount} Problems Solved</span>
            <span>{Math.round(progressPercentageForFiltered) || 0}%</span>
          </div>
          <div className="w-full h-2 rounded-full overflow-hidden bg-gray-200 dark:bg-gray-700">
            <div
              className="h-full bg-purple-500"
              style={{ width: `${progressPercentageForFiltered}%` }}
            ></div>
          </div>
        </div>

        {/* Problem List Header and Search Bar (Moved/combined here) */}
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-bold">
            Problem List
          </h2>
          {/* Search Bar */}
          <div className="relative">
            <Search className={`absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 ${darkMode ? "text-gray-400" : "text-gray-500"}`} />
            <input
              type="text"
              placeholder="Search problems..."
              className={`w-64 pl-10 pr-3 py-2 rounded-md text-sm outline-none transition-colors duration-300 ${darkMode ? "bg-gray-700 text-white border border-gray-600 focus:border-purple-500" : "bg-white text-gray-900 border border-gray-300 focus:border-purple-500"
                }`}
              value={problemSearchTerm}
              onChange={(e) => {
                setProblemSearchTerm(e.target.value);
                setCurrentPage(1);
              }}
            />
          </div>
        </div>


        {/* Main Problem List Table */}
        {filteredProblems.length === 0 ? (
          <p className={`text-center py-10 text-gray-500 ${darkMode ? "text-gray-400" : ""}`}>
            No problems found for the selected filters.
          </p>
        ) : (
          <>
            <div className="overflow-x-auto shadow-md rounded-lg">
              <table className={`w-full transition-colors duration-500 ${darkMode ? "text-gray-300" : "text-gray-500"}`}>
                <thead className={`text-sm uppercase ${darkMode ? "bg-gray-700 text-gray-400" : "bg-gray-100 text-gray-700"}`}>
                  <tr>
                    <th className="p-3 text-left w-1/12">Status</th>
                    <th className="p-3 text-left w-9/12">Problem Title</th>
                    <th className="p-3 text-left w-2/12">Difficulty</th>
                  </tr>
                </thead>
                <tbody>
                  {currentProblems.map((q) => (
                    <tr
                      key={q.id}
                      className={`border-t ${darkMode ? "border-gray-700 hover:bg-gray-800" : "border-gray-200 hover:bg-gray-50"}`}
                    >
                      <td className="p-3">
                        <input
                          type="checkbox"
                          checked={q.solved}
                          onChange={() => handleCheckboxChange(q.id)}
                          className="w-4 h-4 text-purple-600 bg-gray-200 dark:bg-gray-700 border-gray-300 dark:border-gray-600 rounded focus:ring-purple-500"
                        />
                      </td>
                      <td className="p-3">
                        <a
                          href={createLeetCodeLink(q.title)}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`font-medium ${darkMode ? "text-gray-200 hover:text-purple-400" : "text-gray-900 hover:text-purple-600"}`}
                        >
                          {q.title}
                        </a>
                      </td>
                      <td className="p-3">
                        <span className={`px-2 py-1 text-xs font-semibold rounded-full ${getDifficultyBgColorClass(q.difficulty)} ${getDifficultyColorClass(q.difficulty)}`}>
                          {q.difficulty}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Pagination Controls */}
            <div className="flex justify-between items-center mt-6">
              <button
                onClick={handlePreviousPage}
                disabled={currentPage === 1}
                className={`px-4 py-2 text-sm font-medium rounded-md transition-colors duration-300 ${currentPage === 1 ? "bg-gray-300 text-gray-500 cursor-not-allowed" : darkMode ? "bg-purple-600 hover:bg-purple-700 text-white" : "bg-purple-500 hover:bg-purple-600 text-white"
                  }`}
              >
                Previous
              </button>
              <span className={`text-sm font-medium ${darkMode ? "text-gray-400" : "text-gray-600"}`}>
                Page {currentPage} of {totalPages}
              </span>
              <button
                onClick={handleNextPage}
                disabled={currentPage === totalPages}
                className={`px-4 py-2 text-sm font-medium rounded-md transition-colors duration-300 ${currentPage === totalPages ? "bg-gray-300 text-gray-500 cursor-not-allowed" : darkMode ? "bg-purple-600 hover:bg-purple-700 text-white" : "bg-purple-500 hover:bg-purple-600 text-white"
                  }`}
              >
                Next
              </button>
            </div>
          </>
        )}
      </main>
    </div>
  );
}

export default ALLINONEDSA;
