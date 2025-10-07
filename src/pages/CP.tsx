import React, { useState, useEffect } from 'react';

// --- Types ---
interface Problem {
  id: string;
  title: string;
  link: string;
  status: boolean;
  category?: string;   // optional, as not all objects have this
  difficulty?: string; // optional
}

// --- Mock Data ---
const allProblemsByRating: Record<number, Problem[]> = {
  800: [
    { id: '1', title: 'Halloumi Boxes', link: 'https://codeforces.com/contest/1800/problem/A', status: false },
    { id: '2', title: 'Line Trip', link:'https://codeforces.com/problemset/problem/1901/A', status: false },
    // ... rest of the problems
  ],
  900: [
    { id: '61', title: 'Forked!', link:'https://codeforces.com/problemset/problem/1904/A', status: false },
    // ... rest of the problems
  ],
  1000: [
    { id: '174', title: 'Swap and Delete', category: 'General', difficulty: 'Hard', link:'https://codeforces.com/problemset/problem/1913/B', status: false },
    // ... rest of the problems
  ],
  // ... rest of the ratings
};

// --- Example Component ---
const ProblemList: React.FC = () => {
  const [rating, setRating] = useState<number>(800);
  const [problems, setProblems] = useState<Problem[]>([]);

  useEffect(() => {
    setProblems(allProblemsByRating[rating] || []);
  }, [rating]);

  return (
    <div>
      <h1>Problems of Rating {rating}</h1>
      <ul>
        {problems.map((problem) => (
          <li key={problem.id}>
            <a href={problem.link} target="_blank" rel="noopener noreferrer">
              {problem.title} {problem.status ? '(Solved)' : ''}
            </a>
          </li>
        ))}
      </ul>
      <div>
        <button onClick={() => setRating(800)}>800</button>
        <button onClick={() => setRating(900)}>900</button>
        <button onClick={() => setRating(1000)}>1000</button>
        {/* Add more buttons for other ratings */}
      </div>
    </div>
  );
};

export default ProblemList;
