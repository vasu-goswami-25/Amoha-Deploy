import React, { useState } from "react";
import { Mail, MapPin, GraduationCap, Share2, Edit, Upload } from "lucide-react";

interface User {
  avatar?: string;
  name?: string;
  username?: string;
  email?: string;
  education?: string;
  location?: string;
}

interface SheetData {
  total: string;
  percent: number;
  easy?: string;
  medium?: string;
  hard?: string;
}

interface ProfilePageProps {
  user?: User;
}

const ProfilePage: React.FC<ProfilePageProps> = ({ user }) => {
  const [activeTab, setActiveTab] = useState<string>("DSA Sheet");
  const [profileImage, setProfileImage] = useState<string>(
    user?.avatar || "https://via.placeholder.com/100"
  );

  const [leetcodeUsername, setLeetcodeUsername] = useState<string>("");
  const [gfgUsername, setGfgUsername] = useState<string>("");
  const [codeforcesUsername, setCodeforcesUsername] = useState<string>("");

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setProfileImage(imageUrl);
    }
  };

  const sheetData: Record<string, SheetData> = {
    "DSA Sheet": { total: "0/425", percent: 0, easy: "0/93", medium: "0/162", hard: "0/170" },
    "Blind 75": { total: "0/75", percent: 0, easy: "0/20", medium: "0/48", hard: "0/7" },
    "Algorithm": { total: "0/166", percent: 0 }, // easy/medium/hard removed
    "ServiceBasedDSA Sheet": { total: "0/240", percent: 0, easy: "0/100", medium: "0/120", hard: "0/20" },
    "ServiceBasedPatternDSASheet": { total: "0/80", percent: 0 }, // easy/medium/hard removed
  };

  const overallProgressData = [
    { title: "DSA Sheet", done: "0/425" },
    { title: "Blind75", done: "0/75" },
    { title: "ServiceBasedDSA Sheet", done: "0/240" },
    { title: "ServiceBasedPatternDSA Sheet", done: "0/80" },
    { title: "All in one DSA Sheet", done: "0/747" },
    { title: "Algorithm", done: "0/166" },
  ];

  const topicsCovered = [
    { topic: "Arrays", count: 27 }, { topic: "Binary Search", count: 7 },
    { topic: "Hashing", count: 6 }, { topic: "Sorting", count: 6 },
    { topic: "String", count: 4 }, { topic: "Two Pointer", count: 4 },
    { topic: "Binary Search Tree", count: 0 }, { topic: "Binary Tree", count: 0 },
    { topic: "Bit Manipulation", count: 0 }, { topic: "Dynamic Programming", count: 0 },
    { topic: "Graph", count: 0 }, { topic: "Greedy", count: 0 },
    { topic: "Heap", count: 0 }, { topic: "Linked List", count: 0 },
    { topic: "Maths", count: 0 }, { topic: "Python", count: 0 },
    { topic: "Queue", count: 0 }, { topic: "Recursion", count: 0 },
    { topic: "Sliding Window", count: 0 }, { topic: "Stack", count: 0 }
  ];

  const currentSheet = sheetData[activeTab];

  return (
    <div className="min-h-screen bg-gray-100 p-20">
      <div className="flex gap-6">
        {/* Left Sidebar */}
        <div className="w-1/4 bg-white p-6 rounded-xl shadow">
          {/* Profile Image & Upload */}
          <div className="flex flex-col items-center mb-6">
            <div className="relative w-24 h-24 group">
              <img
                src={profileImage}
                alt="Profile"
                className="w-full h-full rounded-full border-4 border-purple-700 mb-3 object-cover"
              />
              <label
                htmlFor="profile-upload"
                className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center rounded-full cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity"
              >
                <Upload size={24} className="text-white" />
                <input
                  id="profile-upload"
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={handleImageUpload}
                />
              </label>
            </div>
            <h2 className="text-lg font-semibold mt-3">{user?.name || "Username"}</h2>
            <p className="text-gray-500 text-sm">@{user?.username || "handle"}</p>
            <button className="mt-2 p-1 rounded-md hover:bg-gray-200">
              <Edit size={16} />
            </button>
          </div>

          {/* Personal Info */}
          <div className="space-y-3 text-gray-600">
            <div className="flex items-center gap-2">
              <Mail size={16} className="text-purple-700" />
              <span>{user?.email || "user@example.com"}</span>
            </div>
            <div className="flex items-center gap-2">
              <GraduationCap size={16} className="text-purple-700" />
              <span>{user?.education || "-"}</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin size={16} className="text-purple-700" />
              <span>{user?.location || "-"}</span>
            </div>
          </div>

          {/* Share */}
          <div className="mt-6 flex items-center gap-2 text-orange-500 cursor-pointer hover:underline">
            <Share2 size={16} />
            <span>Share your Profile</span>
          </div>
        </div>

        {/* Right Content */}
        <div className="flex-1 space-y-6">
          {/* Coding Profiles */}
          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-lg font-semibold mb-4">Coding Profiles</h3>
            <div className="grid grid-cols-3 gap-6">
              {/** Reusable input card */}
              {[
                { title: "LeetCode", value: leetcodeUsername, setter: setLeetcodeUsername },
                { title: "GFG", value: gfgUsername, setter: setGfgUsername },
                { title: "Codeforces", value: codeforcesUsername, setter: setCodeforcesUsername },
              ].map((item, idx) => (
                <div key={idx} className="bg-white p-6 rounded-xl shadow">
                  <h3 className="text-lg font-semibold mb-4">{item.title} Username</h3>
                  <div className="mt-1 flex gap-3 items-center">
                    <input
                      type="text"
                      placeholder={`Enter your ${item.title} username`}
                      value={item.value}
                      onChange={(e) => item.setter(e.target.value)}
                      className="flex-1 bg-gray-100 p-2 rounded-md outline-none focus:ring-2 focus:ring-purple-700"
                    />
                    <button className="bg-red-500 text-white px-3 py-2 rounded-md hover:bg-red-400 cursor-pointer">
                      Save
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Overall Progress */}
          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-lg font-semibold mb-4">Overall Progress</h3>
            <div className="space-y-3">
              {overallProgressData.map((item, idx) => {
                const [done, total] = item.done.split("/").map(Number);
                const percent = total > 0 ? Math.floor((done / total) * 100) : 0;
                return (
                  <div key={idx}>
                    <div className="flex justify-between text-sm text-gray-500">
                      <span>{item.title}</span>
                      <span>{percent}% {item.done}</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-purple-700 h-2 rounded-full"
                        style={{ width: `${percent}%` }}
                      ></div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Bottom Section */}
          <div className="bg-white p-6 rounded-xl shadow">
            <div className="flex border-b border-gray-300 mb-6">
              {Object.keys(sheetData).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-4 py-2 ${
                    activeTab === tab
                      ? "text-orange-500 border-b-2 border-orange-500"
                      : "text-gray-500 hover:text-black"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            {currentSheet && (
              <div>
                <div className="grid grid-cols-4 gap-6 text-center">
                  {/* Total Progress Card */}
                  <div className="p-4 rounded-lg bg-gray-100">
                    <div className="text-sm text-gray-500">Total Progress</div>
                    <div className="text-xl font-semibold mt-1">{currentSheet.total}</div>
                    <div className="text-sm text-gray-400">{currentSheet.percent}%</div>
                  </div>

                  {/* Easy */}
                  {currentSheet.easy && (
                    <div className="p-4 rounded-lg bg-gray-100">
                      <div className="text-sm text-gray-500">Easy</div>
                      <div className="text-lg font-semibold mt-1">{currentSheet.easy} completed</div>
                    </div>
                  )}

                  {/* Medium */}
                  {currentSheet.medium && (
                    <div className="p-4 rounded-lg bg-gray-100">
                      <div className="text-sm text-gray-500">Medium</div>
                      <div className="text-lg font-semibold mt-1">{currentSheet.medium} completed</div>
                    </div>
                  )}

                  {/* Hard */}
                  {currentSheet.hard && (
                    <div className="p-4 rounded-lg bg-gray-100">
                      <div className="text-sm text-gray-500">Hard</div>
                      <div className="text-lg font-semibold mt-1">{currentSheet.hard} completed</div>
                    </div>
                  )}
                </div>

                {/* Topics Covered */}
                <div className="mt-6">
                  <h4 className="text-lg font-semibold mb-3">Topics covered</h4>
                  <div className="flex flex-wrap gap-2">
                    {topicsCovered.map((item, idx) => (
                      <span
                        key={idx}
                        className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm"
                      >
                        {item.topic} × {item.count}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
