import React, { useEffect, useState } from "react";

const RealIllusion = () => {
  const [showHypnosis, setShowHypnosis] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowHypnosis(true);
      playWhisper();
    }, 10000);

    return () => clearTimeout(timer);
  }, []);

  const playWhisper = () => {
    const audio = new Audio("https://assets.mixkit.co/sfx/preview/mixkit-whispers-in-dark-718.mp3");
    audio.loop = true;
    audio.volume = 0.3;
    audio.play().catch(() => {});
  };

  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen bg-black text-white px-4 relative overflow-hidden group"
    >
      <div
        className="relative w-72 h-72 transition-all duration-300 group-hover:scale-110"
        style={{ filter: "contrast(120%) brightness(110%) blur(0.5px)" }}
      >
        <div
          className="absolute inset-0 rounded-full animate-spin-slower bg-[conic-gradient(from_0deg,_black_0deg,_white_30deg,_black_60deg)] shadow-2xl shadow-indigo-900"
          style={{ filter: "hue-rotate(30deg)" }}
        ></div>
        <div
          className="absolute inset-4 rounded-full animate-spin-reverse bg-[conic-gradient(from_180deg,_black_0deg,_white_30deg,_black_60deg)] opacity-50"
        ></div>
        <div className="absolute inset-8 rounded-full animate-ping bg-black"></div>
      </div>

      <p className="mt-8 text-center text-gray-300 italic max-w-xs z-10">
        🌀 Stare at the center for 10 seconds... then look at your hand or the wall. 👁️
      </p>

      <button
        onClick={() => alert("You can't escape now.")}
        className="mt-6 px-4 py-2 bg-indigo-600 hover:bg-indigo-800 text-white rounded-full shadow-lg transition-all duration-300 z-10"
      >
        I'm Done Staring
      </button>

      {showHypnosis && (
        <div className="absolute top-1/2 left-1/2 text-pink-400 text-2xl font-mono opacity-0 animate-fadeIn z-20 transform -translate-x-1/2 -translate-y-1/2 text-center">
          <p className="tracking-widest">YOU ARE NOW...</p>
          <p className="text-3xl font-extrabold mt-2 animate-pulse">ONE OF US 🧠</p>
        </div>
      )}

      <div className="absolute inset-0 pointer-events-none animate-fadeIn backdrop-blur-md backdrop-brightness-75"></div>
    </div>
  );
};

export default RealIllusion;
