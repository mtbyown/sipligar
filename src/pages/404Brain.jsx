import React, { useEffect, useState } from "react";

const Brain404 = () => {
  const [dots, setDots] = useState(".");
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const dotInterval = setInterval(() => {
      setDots((prev) => (prev.length >= 3 ? "." : prev + "."));
    }, 400);

    const progressInterval = setInterval(() => {
      setProgress((p) => (p < 100 ? p + 1 : 100));
    }, 50);

    return () => {
      clearInterval(dotInterval);
      clearInterval(progressInterval);
    };
  }, []);

  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-black via-gray-900 to-black text-white font-mono flex flex-col items-center justify-center px-4 py-8 space-y-5">
      {/* Title */}
      <h1 className="text-3xl text-red-500 font-bold text-center">
        🧠 404 - Brain Not Found
      </h1>

      {/* Fake thinking */}
      <p className="text-sm text-gray-400">
        Please insert coffee to continue{dots}
      </p>

      {/* Fake brain download bar */}
      <div className="w-64 bg-gray-800 rounded-full h-4 overflow-hidden shadow-inner border border-gray-600">
        <div
          className="h-full bg-indigo-500 transition-all duration-200"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
      <p className="text-xs text-indigo-300">
        Downloading brain... {progress}%
      </p>

      {/* Antivirus scan results */}
      <div className="bg-gray-800 rounded p-3 w-64 text-left text-sm shadow-md border border-gray-700">
        <p className="text-green-400 font-bold mb-1">🧪 Cognitive Antivirus Scan</p>
        <ul className="list-disc list-inside text-green-300 space-y-1 text-xs">
          <li>🧼 Memory Wiped: ✔️</li>
          <li>🪲 Thought Virus: Detected</li>
          <li>🧃 Motivation Levels: Critically Low</li>
          <li>🥴 Sarcasm Overflow: Unrecoverable</li>
        </ul>
      </div>

      {/* QR joke (spinning emoji illusion) */}
      <div className="text-4xl animate-spin-slow mt-2">🌀</div>
      <p className="text-xs text-gray-500 italic -mt-1">Scan to reboot logic... or not.</p>

      {/* Try again */}
      <button
        onClick={() => alert("Error: Button did nothing. Again.")}
        className="mt-3 px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded shadow text-sm"
      >
        Try Again Anyway
      </button>
    </div>
  );
};

export default Brain404;
