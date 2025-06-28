import React, { useState, useEffect } from "react";

const getRandomColor = () =>
  `hsl(${Math.floor(Math.random() * 360)}, 90%, 85%)`;

const UselessDeluxe = () => {
  const [gaslightClicks, setGaslightClicks] = useState(0);
  const [reverseProgress, setReverseProgress] = useState(100);
  const [disco, setDisco] = useState(false);
  const [bgColor, setBgColor] = useState("bg-rose-50");
  const [paranoia, setParanoia] = useState(false);

  // Disco background
  useEffect(() => {
    let interval;
    if (disco) {
      interval = setInterval(() => {
        const color = getRandomColor();
        setBgColor(`bg-[${color}]`);
        document.body.style.backgroundColor = color;
      }, 300);
    } else {
      document.body.style.backgroundColor = "";
    }
    return () => clearInterval(interval);
  }, [disco]);

  // Reverse progress bar
  useEffect(() => {
    const interval = setInterval(() => {
      setReverseProgress((p) => (p > 0 ? p - 0.2 : 100));
    }, 100);
    return () => clearInterval(interval);
  }, []);

  // Paranoia message
  useEffect(() => {
    const timer = setTimeout(() => {
      setParanoia(Math.random() < 0.3); // ~30% chance
    }, 5000);
    return () => clearTimeout(timer);
  }, [gaslightClicks]);

  return (
    <div
      className={`relative flex flex-col items-center justify-center min-h-screen transition duration-300 ease-in-out px-4 ${
        disco ? "" : "bg-rose-50"
      }`}
    >
      <h1 className="text-3xl font-bold text-pink-700 mb-4">
        🧼 Useless Deluxe Edition
      </h1>
      <p className="text-pink-500 italic mb-6">Now with even less purpose.</p>

      {/* Gaslight Button */}
      <button
        onClick={() => setGaslightClicks((c) => c + 1)}
        className="px-6 py-3 bg-yellow-500 text-black rounded shadow hover:bg-yellow-600 transition mb-4"
      >
        You haven’t clicked me at all
      </button>
      <p className="text-xs text-gray-500 italic mb-4">
        (you clicked {gaslightClicks} times but... no you didn’t)
      </p>

      {/* Reverse Progress */}
      <div className="w-full max-w-md mt-2 mb-8">
        <div className="bg-gray-200 h-4 rounded-full overflow-hidden">
          <div
            className="bg-blue-500 h-full transition-all"
            style={{ width: `${reverseProgress}%` }}
          ></div>
        </div>
        <p className="text-sm text-gray-600 mt-1">
          Uploading negativity... {Math.floor(reverseProgress)}%
        </p>
      </div>

      {/* Disco Button */}
      <button
        onClick={() => setDisco((d) => !d)}
        className={`px-5 py-2 rounded-lg text-white transition shadow mb-10 ${
          disco ? "bg-purple-700" : "bg-purple-500 hover:bg-purple-600"
        }`}
      >
        {disco ? "🛑 Stop Disco Mode" : "💃 Start Disco Mode"}
      </button>

      {/* Paranoid Message */}
      {paranoia && (
        <div className="absolute bottom-10 text-red-700 animate-pulse">
          👁 You are being watched...
        </div>
      )}

      <footer className="mt-12 text-xs text-gray-400 text-center">
        © 2025 — Built proudly by Nobody for No Reason.
      </footer>
    </div>
  );
};

export default UselessDeluxe;
