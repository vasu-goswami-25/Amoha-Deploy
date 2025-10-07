
import React, { useState, useRef, useEffect, useCallback } from "react";

// --- Type and Dummy Data ---
interface Level {
  id: number;
  title: string;
  hackerRankLink: string;
}

const DUMMY_LEVELS: Level[] = Array.from({ length: 24 }, (_, i) => {
  const levelId = i + 1;
  return {
    id: levelId,
    title: `Level ${levelId}`, // sidebar title
    hackerRankLink: `https://www.hackerrank.com/amoha-codes-practice-set-${levelId}`,
  };
});

// --- LevelItem ---
const LevelItem: React.FC<{
  level: Level;
  isSelected: boolean;
  onSelect: (id: number) => void;
  darkMode: boolean;
  isCompleted: boolean;
  toggleComplete: (id: number) => void;
}> = ({ level, isSelected, onSelect, darkMode, isCompleted, toggleComplete }) => (
  <div
    className={`w-full text-left p-3 my-1 rounded-lg transition-all duration-200 flex items-center cursor-pointer
      ${isSelected
        ? "bg-purple-500 text-white shadow-md transform scale-[1.02]"
        : darkMode
        ? "text-gray-200 hover:bg-gray-700 hover:text-purple-400"
        : "text-gray-800 hover:bg-purple-50 hover:text-purple-400"
      }`}
    onClick={() => onSelect(level.id)}
  >
    <input
      type="checkbox"
      checked={isCompleted}
      onChange={(e) => {
        e.stopPropagation();
        toggleComplete(level.id);
      }}
      className="mr-3 w-4 h-4 accent-purple-500 cursor-pointer"
    />
    <div className="flex flex-col">
      <div className="font-semibold">{level.title}</div>
      <div className="text-xs opacity-80">{isSelected ? "Selected" : "Click to open link"}</div>
    </div>
  </div>
);

// --- ChainLevelCard (border removed) ---
const ChainLevelCard = React.forwardRef<
  HTMLDivElement,
  { level: Level; isSelected: boolean; onSelect: (id: number) => void; darkMode: boolean }
>(({ level, isSelected, onSelect, darkMode }, ref) => {
  const handleClick = () => {
    onSelect(level.id);
    window.open(level.hackerRankLink, "_blank");
  };

  return (
    <div
      ref={ref}
      className={`relative p-6 rounded-xl shadow-lg transition-all duration-300 w-full max-w-xs cursor-pointer mx-auto
        ${isSelected
          ? "bg-purple-500 text-white shadow-xl shadow-purple-300 transform scale-[1.05]"
          : darkMode
          ? "bg-gray-800 text-gray-100 hover:shadow-2xl hover:border-purple-400"
          : "bg-white text-gray-900 hover:shadow-2xl hover:border-purple-300"
        }
        min-h-[100px] flex flex-col justify-center`}
      onClick={handleClick}
    >
      <div className="flex justify-center items-center">
        <h3
          className={`text-xl font-extrabold ${
            isSelected ? "text-white" : darkMode ? "text-purple-400" : "text-purple-600"
          }`}
        >
          {`Practice Level ${level.id}`}
        </h3>
      </div>
    </div>
  );
});

// --- RoadmapFlow ---
const RoadmapFlow: React.FC<{
  selectedLevelId: number;
  onSelect: (id: number) => void;
  itemRefs: React.MutableRefObject<Map<number, HTMLDivElement | null>>;
  darkMode: boolean;
}> = ({ selectedLevelId, onSelect, itemRefs, darkMode }) => {
  const setItemRef = (id: number, el: HTMLDivElement | null) => {
    if (el) itemRefs.current.set(id, el);
    else itemRefs.current.delete(id);
  };

  return (
    <div className="p-4 flex flex-col items-center w-full">
      <h1
        className={`text-3xl font-extrabold mb-8 text-center ${
          darkMode ? "text-purple-400" : "text-purple-700"
        }`}
      >
        Practice Language Journey
      </h1>

      <div className="w-full flex flex-col items-center">
        {DUMMY_LEVELS.map((level, index) => (
          <React.Fragment key={level.id}>
            <ChainLevelCard
              ref={(el) => setItemRef(level.id, el)}
              level={level}
              isSelected={level.id === selectedLevelId}
              onSelect={onSelect}
              darkMode={darkMode}
            />
            {index < DUMMY_LEVELS.length - 1 && (
              <div className="relative flex flex-col items-center my-1">
                <div
                  className={`w-0.5 h-10 ${
                    darkMode ? "bg-gray-600" : "bg-gray-400"
                  } border-l border-dashed border-purple-400`}
                ></div>
                <div
                  className={`absolute top-1/2 transform -translate-y-1/2 w-3 h-3 rounded-full 
                    ${
                      level.id === selectedLevelId
                        ? "bg-purple-500 border-2 border-white shadow-lg"
                        : "bg-purple-400"
                    }`}
                ></div>
              </div>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

// --- ProgressSection ---
const ProgressSection: React.FC<{ completed: number; total: number; darkMode: boolean }> = ({
  completed,
  total,
  darkMode,
}) => {
  const percent = Math.round((completed / total) * 100);

  return (
    <div
      className={`flex items-center justify-between rounded-lg p-6 shadow-md mb-6
        ${darkMode ? "bg-gray-800 text-gray-100" : "bg-gray-100 text-gray-900"}
      `}
    >
      <div>
        <h3 className="text-lg font-bold">Progress</h3>
        <p className="text-2xl font-extrabold">
          {completed} / {total}
        </p>
        <p className="text-sm opacity-75">Total Progress</p>
      </div>

      {/* Circle Progress */}
      <div className="relative w-16 h-16">
        <svg className="w-16 h-16 transform -rotate-90">
          <circle
            cx="32"
            cy="32"
            r="28"
            stroke={darkMode ? "#4B5563" : "#E5E7EB"}
            strokeWidth="6"
            fill="none"
          />
          <circle
            cx="32"
            cy="32"
            r="28"
            stroke="#7C3AED"
            strokeWidth="6"
            fill="none"
            strokeDasharray={2 * Math.PI * 28}
            strokeDashoffset={(1 - completed / total) * 2 * Math.PI * 28}
            strokeLinecap="round"
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center text-sm font-bold">
          {percent}%
        </div>
      </div>
    </div>
  );
};

// --- ProgramingLang Component ---
const ProgramingLang: React.FC<{ darkMode: boolean }> = ({ darkMode }) => {
  const [selectedLevelId, setSelectedLevelId] = useState<number>(1);
  const [completedLevels, setCompletedLevels] = useState<Set<number>>(new Set());

  const sidebarRef = useRef<HTMLDivElement>(null);
  const chainRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef(new Map<number, HTMLDivElement | null>());
  const isScrolling = useRef(false);

  const handleSidebarScroll = useCallback(() => {
    if (isScrolling.current) return;
    isScrolling.current = true;
    if (sidebarRef.current && chainRef.current) {
      const scrollRatio =
        sidebarRef.current.scrollTop /
        (sidebarRef.current.scrollHeight - sidebarRef.current.clientHeight);
      chainRef.current.scrollTop =
        scrollRatio *
        (chainRef.current.scrollHeight - chainRef.current.clientHeight);
    }
    setTimeout(() => {
      isScrolling.current = false;
    }, 100);
  }, []);

  const handleChainScroll = useCallback(() => {
    if (isScrolling.current) return;
    isScrolling.current = true;
    if (sidebarRef.current && chainRef.current) {
      const scrollRatio =
        chainRef.current.scrollTop /
        (chainRef.current.scrollHeight - chainRef.current.clientHeight);
      sidebarRef.current.scrollTop =
        scrollRatio *
        (sidebarRef.current.scrollHeight - sidebarRef.current.clientHeight);
    }
    setTimeout(() => {
      isScrolling.current = false;
    }, 100);
  }, []);

  const handleSelect = (id: number) => {
    setSelectedLevelId(id);
    const node = itemRefs.current.get(id);
    if (node && chainRef.current) {
      isScrolling.current = true;
      node.scrollIntoView({ behavior: "smooth", block: "center" });
      setTimeout(() => {
        isScrolling.current = false;
        handleChainScroll();
      }, 500);
    }
  };

  const toggleComplete = (id: number) => {
    setCompletedLevels((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(id)) newSet.delete(id);
      else newSet.add(id);
      return newSet;
    });
  };

  useEffect(() => {
    const sidebarElement = sidebarRef.current;
    const chainElement = chainRef.current;
    if (sidebarElement && chainElement) {
      sidebarElement.addEventListener("scroll", handleSidebarScroll);
      chainElement.addEventListener("scroll", handleChainScroll);
      return () => {
        sidebarElement.removeEventListener("scroll", handleSidebarScroll);
        chainElement.removeEventListener("scroll", handleChainScroll);
      };
    }
  }, [handleSidebarScroll, handleChainScroll]);

  return (
    <div
      className={`min-h-screen font-sans px-10 py-25 transition-colors duration-500 ${
        darkMode ? "bg-gray-900 text-gray-100" : "bg-gray-100 text-gray-900"
      }`}
    >
      <div className="flex flex-col md:flex-row gap-6">
        {/* Sidebar */}
        <div
          className={`w-full md:w-80 flex-shrink-0 p-4 rounded-lg shadow-md transition-colors duration-500 ${
            darkMode ? "bg-gray-800" : "bg-white"
          }`}
        >
          <h2
            className={`text-2xl font-semibold mb-4 border-b pb-2 ${
              darkMode
                ? "text-gray-200 border-purple-400"
                : "text-gray-800 border-purple-200"
            }`}
          >
            Levels
          </h2>

          {/* ✅ Progress Section */}
          <ProgressSection
            completed={completedLevels.size}
            total={DUMMY_LEVELS.length}
            darkMode={darkMode}
          />

          {/* Levels */}
          <div
            ref={sidebarRef}
            className="h-[65vh] overflow-y-auto pr-2 custom-scrollbar"
          >
            {DUMMY_LEVELS.map((level) => (
              <LevelItem
                key={level.id}
                level={level}
                isSelected={selectedLevelId === level.id}
                onSelect={handleSelect}
                darkMode={darkMode}
                isCompleted={completedLevels.has(level.id)}
                toggleComplete={toggleComplete}
              />
            ))}
          </div>
        </div>

        {/* Main Content */}
        <div
          className={`flex-grow p-4 rounded-lg shadow-md transition-colors duration-500 ${
            darkMode ? "bg-gray-700" : "bg-gray-50"
          }`}
        >
          <div
            ref={chainRef}
            className="h-[75vh] overflow-y-auto flex items-start justify-center custom-scrollbar"
          >
            <RoadmapFlow
              selectedLevelId={selectedLevelId}
              onSelect={handleSelect}
              itemRefs={itemRefs}
              darkMode={darkMode}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgramingLang;
