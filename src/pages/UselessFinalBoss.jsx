import React, { useState, useEffect } from "react";

const UselessFinalBoss = () => {
  const [misses, setMisses] = useState(0);
  const [toggle, setToggle] = useState(false);
  const [rotation, setRotation] = useState(0);
  const [ignored, setIgnored] = useState(false);

  // Complains if ignored
  useEffect(() => {
    const timer = setTimeout(() => {
      setIgnored(true);
    }, 10000); // 10s of inactivity

    return () => clearTimeout(timer);
  }, [misses, toggle]);

  // Rotate text randomly
  useEffect(() => {
    const interval = setInterval(() => {
      setRotation(Math.floor(Math.random() * 360));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleMissClick = () => {
    setMisses(misses + 1);
    setIgnored(false);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-slate-50 text-center px-4 relative">
      <h1 className="text-4xl font-bold mb-6 text-indigo-600">🧩 Boss of Uselessness</h1>

      {/* Miss Button */}
      <button
        onClick={handleMissClick}
        className="px-6 py-3 bg-red-400 text-white rounded shadow hover:bg-red-500 transition"
      >
        Click me to miss ({misses} misses so far)
      </button>
      <p className="text-sm italic text-gray-600 mt-1">Nice try. You still missed.</p>

      {/* Useless Toggle */}
      <div className="mt-6">
        <label className="inline-flex items-center cursor-pointer">
          <input
            type="checkbox"
            className="sr-only"
            checked={toggle}
            onChange={() => {
              setToggle(!toggle);
              setIgnored(false);
            }}
          />
          <div className="w-11 h-6 bg-gray-300 rounded-full p-1">
            <div
              className={`w-4 h-4 rounded-full shadow-md transform duration-300 ease-in-out ${
                toggle ? "bg-green-400 translate-x-5" : "bg-gray-500"
              }`}
            ></div>
          </div>
          <span className="ml-3 text-gray-700">Toggle absolutely nothing</span>
        </label>
        <p className="text-xs mt-1 text-gray-400 italic">Nothing changed. Feels powerful, right?</p>
      </div>

      {/* Random Rotating Text */}
      <div
        className="mt-10 text-2xl font-semibold text-purple-700 transition-transform duration-700"
        style={{ transform: `rotate(${rotation}deg)` }}
      >
        Why are you still here?
      </div>

      {/* Complains if ignored */}
      {ignored && (
        <div className="absolute bottom-6 text-red-600 font-semibold animate-pulse">
          😡 Why are you ignoring me??
        </div>
      )}

      <footer className="mt-12 text-xs text-gray-400 text-center">
        © 2025 Useless Universe Inc. | Proudly wasting your time
      </footer>
    </div>
  );
};

export default UselessFinalBoss;
