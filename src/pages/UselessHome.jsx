import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const UselessHome = () => {
  const navigate = useNavigate();

  const allPages = [
    "/BallBouncingGame",
    "/FirstUseless",
    "/SnakeGame",
    "/TrickyUseless",
    "/Useless",
    "/UselessFinalBoss",
    "/UselessAnimation",
    "/UselessIllusion",
    "/RealIllusion",
    "/404Brain",
    "/ClickMeWar",
    "/RandomEmojiExplosion",
    "/ThinkingIndicator",
    "/UselessAnimations",
  ];

  const [visitedPages, setVisitedPages] = useState([]);

  const triggerUseless = () => {
    // filter pages not yet visited
    const remainingPages = allPages.filter((page) => !visitedPages.includes(page));

    // if all pages are visited, reset
    if (remainingPages.length === 0) {
      setVisitedPages([]);
      return triggerUseless(); // re-run to start fresh
    }

    // pick a random unvisited page
    const randomIndex = Math.floor(Math.random() * remainingPages.length);
    const selectedPage = remainingPages[randomIndex];

    // update visited and navigate
    setVisitedPages((prev) => [...prev, selectedPage]);
    navigate(selectedPage);
  };

  const uselessFacts = [
    "Bananas are radioactive, but who cares?",
    "Octopuses have three hearts and still no friends.",
    "You can't hum while holding your nose. Try it.",
    "This website was approved by nobody important.",
    "You just wasted 7 seconds reading this.",
    "Cows moo in accents. Udder nonsense!",
  ];

  const uselessButtons = [
    "Do Nothing",
    "Click Me Maybe",
    "Warning: No Use",
    "This Button Does Nothing",
    "Secret: Still Nothing",
  ];

  const handleUselessClick = () => {
    alert("Congratulations! You've achieved absolutely nothing!");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white px-6 py-10 font-mono flex flex-col items-center text-center space-y-8">
      <header className="text-4xl sm:text-5xl font-bold">
        Welcome to The Useless Website
      </header>

      <div className="text-yellow-400 animate-pulse bg-gray-800 px-4 py-2 rounded-full shadow">
        ⚠️ Breaking News: Nothing Important is Happening!
      </div>

      <main className="space-y-8 max-w-xl">
        <p className="text-lg italic text-gray-300">
          “The best way to waste time is to spend it here.” – Someone Who Had Time
        </p>

        <button
          onClick={triggerUseless}
          className="px-6 py-3 bg-red-600 hover:bg-red-700 text-white rounded-full text-lg font-semibold transition duration-300"
        >
          Magical Button
        </button>

        <div className="bg-gray-800 p-4 rounded shadow-md text-left">
          <h2 className="text-xl font-bold text-pink-400 mb-2">Today's Useless Facts</h2>
          <ul className="list-disc list-inside space-y-1">
            {uselessFacts.map((fact, index) => (
              <li key={index} className="text-sm text-gray-300">
                {fact}
              </li>
            ))}
          </ul>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {uselessButtons.map((label, idx) => (
            <button
              key={idx}
              onClick={handleUselessClick}
              className="bg-blue-700 hover:bg-blue-800 text-white px-4 py-2 rounded shadow transition duration-300 text-sm"
            >
              {label}
            </button>
          ))}
        </div>

        <div className="bg-gray-700 p-3 rounded-md text-sm text-yellow-200">
          🚀 Useless Stat: You've wasted <strong>{Math.floor(Math.random() * 60)} seconds</strong> just loading this page.
        </div>
      </main>

      <footer className="mt-12 text-sm text-gray-500">
        © 2025 Total Waste Pvt. Ltd. | Still scrolling? You really need a hobby.
      </footer>
    </div>
  );
};

export default UselessHome;
