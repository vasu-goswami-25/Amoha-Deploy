import { useState, type ChangeEvent } from "react";
import { Search } from "lucide-react";
import React from "react"; // Explicitly importing React

interface Question {
    id: number;
    title: string;
    category: string;
    difficulty: "Easy" | "Medium" | "Hard";
    solved: boolean;
    link: string;
}

interface NumbersProps {
    darkMode: boolean;
}

const initialQuestions: Question[] = [
    { id: 1, title: "Palindrome Check", category: "Math & Geometry", difficulty: "Easy", solved: false, link: "https://leetcode.com/problems/palindrome-number/" },
    { id: 2, title: "Palindrome Numbers in Range", category: "Math & Geometry", difficulty: "Easy", solved: false, link: "https://www.geeksforgeeks.org/dsa/program-print-palindromes-given-range/" },
    { id: 3, title: "Prime Check", category: "Math & Geometry", difficulty: "Easy", solved: false, link: "https://www.geeksforgeeks.org/problems/prime-number2314/1" },
    { id: 4, title: "Prime Numbers in Range", category: "Math & Geometry", difficulty: "Medium", solved: false, link: "https://www.geeksforgeeks.org/problems/find-prime-numbers-in-a-range4718/1" },
    { id: 5, title: "Armstrong Number Check", category: "Math & Geometry", difficulty: "Medium", solved: false, link: "https://www.geeksforgeeks.org/dsa/program-for-armstrong-numbers/" },
    { id: 6, title: "Perfect Number Check", category: "Math & Geometry", difficulty: "Medium", solved: false, link: "https://leetcode.com/problems/perfect-number/" },
    { id: 7, title: "Even or Odd", category: "Math & Geometry", difficulty: "Easy", solved: false, link: "https://www.geeksforgeeks.org/dsa/check-whether-given-number-even-odd/" },
    { id: 8, title: "Positive, Negative, or Zero", category: "Math & Geometry", difficulty: "Easy", solved: false, link: "https://www.programiz.com/c-programming/examples/negative-positive-zero" },
    { id: 9, title: "Sum of First N Natural Numbers", category: "Math & Geometry", difficulty: "Easy", solved: false, link: "https://www.geeksforgeeks.org/sum-first-n-natural-numbers/" },
    { id: 10, title: "Sum of AP Series", category: "Math & Geometry", difficulty: "Medium", solved: false, link: "https://www.geeksforgeeks.org/sum-of-arithmetic-progression/" },
    { id: 11, title: "Sum of GP Series", category: "Math & Geometry", difficulty: "Medium", solved: false, link: "https://www.geeksforgeeks.org/sum-of-geometric-progression/" },
    { id: 12, title: "Greatest of Two Numbers", category: "Math & Geometry", difficulty: "Easy", solved: false, link: "https://www.geeksforgeeks.org/maximum-of-two-numbers/" },
    { id: 13, title: "Greatest of Three Numbers", category: "Math & Geometry", difficulty: "Easy", solved: false, link: "https://www.geeksforgeeks.org/maximum-of-three-numbers/" },
    { id: 14, title: "Leap Year Check", category: "Math & Geometry", difficulty: "Easy", solved: false, link: "https://www.geeksforgeeks.org/leap-year-program/" },
    { id: 15, title: "Reverse Digits of a Number", category: "Math & Geometry", difficulty: "Medium", solved: false, link: "https://www.geeksforgeeks.org/reverse-an-array-in-c/" },
    { id: 16, title: "Maximum and Minimum Digit in a Number", category: "Math & Geometry", difficulty: "Medium", solved: false, link: "https://www.geeksforgeeks.org/find-the-largest-and-smallest-digit-in-an-integer/" },
    { id: 17, title: "Print Fibonacci up to Nth Term", category: "Math & Geometry", difficulty: "Medium", solved: false, link: "https://www.geeksforgeeks.org/program-for-nth-fibonacci-number/" },
    { id: 18, title: "Factorial of a Number", category: "Math & Geometry", difficulty: "Medium", solved: false, link: "https://www.geeksforgeeks.org/program-for-factorial-of-a-number/" },
    { id: 19, title: "Power of a Number", category: "Math & Geometry", difficulty: "Medium", solved: false, link: "https://www.geeksforgeeks.org/power-in-c/" },
    { id: 20, title: "Factors of a Given Number", category: "Math & Geometry", difficulty: "Medium", solved: false, link: "https://www.geeksforgeeks.org/print-all-divisors-of-a-given-number/" },
    { id: 21, title: "Prime Factors of a Given Number", category: "Math & Geometry", difficulty: "Medium", solved: false, link: "https://www.geeksforgeeks.org/print-all-prime-factors-of-a-given-number/" },
    { id: 22, title: "Strong Number Check", category: "Math & Geometry", difficulty: "Hard", solved: false, link: "https://www.geeksforgeeks.org/strong-number/" },
    { id: 23, title: "Automorphic Number Check", category: "Math & Geometry", difficulty: "Hard", solved: false, link: "https://www.geeksforgeeks.org/automorphic-number/" },
    { id: 24, title: "GCD of Two Numbers", category: "Math & Geometry", difficulty: "Medium", solved: false, link: "https://www.geeksforgeeks.org/gcd-of-two-numbers/" },
    { id: 25, title: "LCM of Two Numbers", category: "Math & Geometry", difficulty: "Medium", solved: false, link: "https://www.geeksforgeeks.org/lcm-of-two-numbers/" },
    { id: 26, title: "Harshad Number Check", category: "Math & Geometry", difficulty: "Medium", solved: false, link: "https://www.geeksforgeeks.org/harshad-number/" },
    { id: 27, title: "Abundant Number Check", category: "Math & Geometry", difficulty: "Hard", solved: false, link: "https://www.geeksforgeeks.org/abundant-number/" },
    { id: 28, title: "Sum of Digits of a Number", category: "Math & Geometry", difficulty: "Easy", solved: false, link: "https://www.geeksforgeeks.org/sum-of-digits-of-a-number/" },
    { id: 29, title: "Sum of Numbers in a Range", category: "Math & Geometry", difficulty: "Easy", solved: false, link: "https://www.geeksforgeeks.org/sum-of-numbers-in-a-given-range/" },
    { id: 30, title: "Permutations of N People in R Seats", category: "Math & Geometry", difficulty: "Hard", solved: false, link: "https://www.geeksforgeeks.org/permutations-and-combinations/" },
    { id: 31, title: "Add Two Fractions", category: "Math & Geometry", difficulty: "Hard", solved: false, link: "https://www.geeksforgeeks.org/add-two-fractions/" },
    { id: 32, title: "Replace All 0s with 1s in an Integer", category: "Math & Geometry", difficulty: "Medium", solved: false, link: "https://www.geeksforgeeks.org/replace-all-0-with-5-in-an-input-integer/" },
    { id: 33, title: "Express Number as Sum of Two Primes", category: "Math & Geometry", difficulty: "Hard", solved: false, link: "https://www.geeksforgeeks.org/goldbachs-conjecture/" },
    { id: 34, title: "Area of a Circle", category: "Math & Geometry", difficulty: "Easy", solved: false, link: "https://www.geeksforgeeks.org/area-of-circle/" },
    { id: 35, title: "Roots of a Quadratic Equation", category: "Math & Geometry", difficulty: "Hard", solved: false, link: "https://www.geeksforgeeks.org/roots-of-a-quadratic-equation/" },
    { id: 36, title: "Maximum and Minimum Digit in a Number (Alt)", category: "Math & Geometry", difficulty: "Medium", solved: false, link: "https://www.geeksforgeeks.org/find-the-largest-and-smallest-digit-in-an-integer/" },
];

const allCategories: string[] = ["Math & Geometry"];

const NumbersProblems: React.FC<NumbersProps> = ({ darkMode }) => {
    const [questionsList, setQuestionsList] = useState<Question[]>(() =>
        initialQuestions.map((q) => ({ ...q, solved: false }))
    );
    // Corrected state initialization
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

    const difficultyColors: Record<string, string> = {
        Easy: "#22C55E", // Green
        Medium: "#F97316", // Orange
        Hard: "#EF4444", // Red
    };

    const getDifficultyColorClass = (difficulty: string) => {
        const baseColor = difficultyColors[difficulty];
        if (!baseColor) return darkMode ? "bg-gray-700 text-gray-300" : "bg-gray-200 text-gray-800";
        
        // This function should return tailwind classes based on the difficulty for styling
        if (difficulty === "Easy") return darkMode ? "bg-green-900 text-green-300" : "bg-green-100 text-green-700";
        if (difficulty === "Medium") return darkMode ? "bg-orange-900 text-orange-300" : "bg-orange-100 text-orange-700";
        if (difficulty === "Hard") return darkMode ? "bg-red-900 text-red-300" : "bg-red-100 text-red-700";
        return darkMode ? "bg-gray-700 text-gray-300" : "bg-gray-200 text-gray-800";
    };

    const categoryColors: Record<string, string> = {
        "Math & Geometry": darkMode ? "bg-gray-700 text-gray-200" : "bg-gray-200 text-gray-800",
    };

    const getCategoryColorClass = (category: string) => {
        return categoryColors[category] || (darkMode ? "bg-gray-900 text-gray-200" : "bg-gray-100 text-gray-700");
    };

    const getCategoryProgress = (category: string) => {
        const categoryQuestions = questionsList.filter((q) => q.category === category);
        const solvedCount = categoryQuestions.filter((q) => q.solved).length;
        // FIX: Removed the unnecessary string literal wrap around the return value
        return `(${solvedCount}/${categoryQuestions.length})`;
    };

    return (
        // FIX: Wrapped dynamic class string in backticks and curly braces
        <div className={`flex min-h-screen transition-colors duration-500 pt-20 ${darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"}`}>
            {/* Sidebar */}
            <div className={`w-72 border-r p-4 transition-colors duration-500 ${darkMode ? "bg-gray-800 border-gray-700" : "bg-white border-gray-200"}`}>
                <h1 className="text-lg font-bold mb-4">Filters</h1>
                <div className="relative mb-6">
                    {/* FIX: Wrapped dynamic class string in backticks and curly braces */}
                    <Search className={`absolute left-3 top-2.5 w-4 h-4 ${darkMode ? "text-purple-300" : "text-purple-500"}`} />
                    <input
                        type="text"
                        placeholder="Search category..."
                        // FIX: Wrapped dynamic class string in backticks and curly braces
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
                                {/* FIX: Wrapped dynamic class string in backticks and curly braces */}
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
                    <h1 className="text-xl font-bold mb-2">Numbers Problems</h1>
                    <div className="relative">
                        {/* FIX: Wrapped dynamic class string in backticks and curly braces */}
                        <Search className={`absolute left-3 top-2.5 w-4 h-4 ${darkMode ? "text-purple-300" : "text-purple-500"}`} />
                        <input
                            type="text"
                            placeholder="Search problem..."
                            // FIX: Wrapped dynamic class string in backticks and curly braces
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
                        <div key={q.id} 
                             // FIX: Wrapped dynamic class string in backticks and curly braces
                             className={`flex items-center justify-between p-3 rounded-md transition-colors duration-300 ${darkMode ? "bg-gray-800 hover:bg-gray-700" : "bg-gray-50 hover:bg-purple-50"}`}>
                            <div className="flex items-center space-x-3">
                                <input type="checkbox" checked={q.solved} onChange={() => handleCheckboxChange(q.id)} />
                                <a href={q.link} target="_blank" rel="noopener noreferrer" className="text-sm font-medium hover:underline">
                                    {q.title}
                                </a>
                                {/* FIX: Wrapped dynamic class string in backticks and curly braces */}
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

export default NumbersProblems;
