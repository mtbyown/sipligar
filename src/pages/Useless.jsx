import React, { useState, useEffect, useRef } from "react";

const Useless = () => {
  const [clicks, setClicks] = useState(100);
  const [fact, setFact] = useState("Loading something useless...");
  const [progress, setProgress] = useState(0);
  const [hovered, setHovered] = useState(false);
  const runawayRef = useRef(null);

  useEffect(() => {
    const getFact = async () => {
      try {
        const res = await fetch("https://uselessfacts.jsph.pl/api/v2/facts/random?language=en");
        const data = await res.json();
        setFact(data.text);
      } catch {
        setFact("Couldn't even load a useless fact. How useless is that?");
      }
    };
    getFact();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((p) => (p < 99 ? p + 0.3 : 0)); // never finishes
    }, 100);
    return () => clearInterval(interval);
  }, []);

  const moveButtonRandomly = () => {
    if (runawayRef.current) {
      const btn = runawayRef.current;
      const container = btn.parentElement;

      const maxX = container.offsetWidth - btn.offsetWidth;
      const maxY = container.offsetHeight - btn.offsetHeight;

      btn.style.position = "absolute";
      btn.style.left = Math.random() * maxX + "px";
      btn.style.top = Math.random() * maxY + "px";
    }
  };

  return (
    <div className="relative flex flex-col items-center justify-center h-screen bg-rose-50 px-4 overflow-hidden text-center">
      <h1 className="text-3xl font-bold text-rose-700 mb-2">🌀 Completely Useless</h1>
      <p className="text-rose-500 italic mb-6">Now with reverse logic and emotional instability.</p>

      {/* Reverse Counter */}
      <button
        onClick={() => setClicks(clicks - 1)}
        className="px-6 py-3 bg-purple-600 text-white rounded-lg shadow hover:bg-purple-700 transition mb-4"
      >
        Don't click! You're making it worse ({clicks})
      </button>

      {/* Runaway Button */}
      <div
        ref={runawayRef}
        onMouseEnter={() => {
          setHovered(true);
          moveButtonRandomly();
        }}
        onMouseLeave={() => setHovered(false)}
        className={`px-5 py-2 bg-yellow-400 text-black rounded transition-all duration-300 ease-in-out shadow-md cursor-pointer ${
          hovered ? "scale-105 rotate-2" : ""
        }`}
      >
        Can't catch me!
      </div>

      {/* Fake Progress */}
      <div className="w-full max-w-md mt-8">
        <div className="bg-gray-200 h-4 rounded-full overflow-hidden">
          <div
            className="bg-green-500 h-full transition-all"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        <p className="text-sm text-gray-600 mt-2">
          Totally doing something... {Math.floor(progress)}%
        </p>
      </div>

      {/* Useless Fact */}
      <div className="bg-white border border-gray-300 rounded-lg p-4 mt-8 max-w-lg shadow text-gray-700 text-sm">
        <strong>🧠 Useless Fact:</strong>
        <p className="mt-2">{fact}</p>
      </div>

      {/* Footer */}
      <p className="mt-10 text-xs text-gray-400">© 2025 Useless Innovations™</p>
    </div>
  );
};

export default Useless;
