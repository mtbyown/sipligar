import React, { useState, useEffect } from "react";

const fakeLogs = [
  "[SYSTEM] Initializing garbage collector...",
  "[ERROR] Syntax is valid, but meaningless.",
  "[AI] Generating random epiphany...",
  "[CPU] Overclocked for no reason.",
  "[MEMORY] Forgetting everything...",
  "[NETWORK] Pinged the void... no response.",
  "[GRAPHICS] Rendering delusion in 4K...",
  "[SECURITY] Blocked 0 threats. Impressive.",
  "[DISK] Spinning in confusion...",
  "[LOGIC] Not found. Did you even try?",
];

const glitchColors = [
  "text-pink-400", "text-green-400", "text-red-500",
  "text-yellow-300", "text-indigo-300", "text-blue-400"
];

const FakeProgress = () => {
  const [progress, setProgress] = useState(0);
  const [status, setStatus] = useState("🤖 Booting up nonsense...");
  const [logs, setLogs] = useState([]);
  const [glitch, setGlitch] = useState(glitchColors[0]);
  const [emoji, setEmoji] = useState("🌀");
  const [destruct, setDestruct] = useState(null);
  const [showError, setShowError] = useState(false);

  useEffect(() => {
    const progressInterval = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) {
          clearInterval(progressInterval);
          setStatus("✅ Upload complete. Confusion initialized.");
          setEmoji("🧠✨");
          triggerSelfDestruct();
          return 100;
        }
        return p + 1;
      });
    }, 70);

    const statusInterval = setInterval(() => {
      const logLine = fakeLogs[Math.floor(Math.random() * fakeLogs.length)];
      const color = glitchColors[Math.floor(Math.random() * glitchColors.length)];
      setLogs((prev) => [...prev.slice(-9), logLine]);
      setGlitch(color);
    }, 500);

    return () => {
      clearInterval(progressInterval);
      clearInterval(statusInterval);
    };
  }, []);

  const triggerSelfDestruct = () => {
    let timer = 5;
    setDestruct(timer);
    const countdown = setInterval(() => {
      timer--;
      if (timer <= 0) {
        clearInterval(countdown);
        setStatus("💥 Error 0xDEAD: Reality not found.");
        setShowError(true);
        setDestruct(null);
      } else {
        setStatus(`💣 Self-destruct in ${timer}...`);
      }
    }, 1000);
  };

  const reset = () => {
    setProgress(0);
    setLogs([]);
    setStatus("🤖 Booting up nonsense...");
    setEmoji("🌀");
    setShowError(false);
    setDestruct(null);
  };

  return (
    <div className="min-h-screen bg-black text-green-300 font-mono px-4 py-6 flex flex-col justify-center items-center relative overflow-hidden">
      {/* Main Emoji */}
      <div className={`text-3xl mb-2 animate-pulse ${glitch}`}>
        {emoji}
      </div>

      {/* Status Line */}
      <h1 className={`text-sm mb-2 ${glitch}`}>{status}</h1>

      {/* Progress Bar */}
      <div className="w-full max-w-md bg-gray-800 h-3 rounded overflow-hidden mb-2 border border-gray-700">
        <div
          className="h-full bg-green-400 transition-all duration-300"
          style={{ width: `${progress}%` }}
        ></div>
      </div>

      <p className="text-xs text-gray-400 mb-4">
        {progress}% complete... or corrupt.
      </p>

      {/* Terminal Logs */}
      <div className="w-full max-w-md h-40 bg-gray-900 border border-green-700 rounded p-2 text-xs overflow-hidden relative">
        <div className="overflow-y-auto h-full">
          {logs.map((log, i) => (
            <div key={i} className="whitespace-pre">{log}</div>
          ))}
        </div>
        <div className="absolute bottom-2 left-2 animate-pulse text-green-500">█</div>
      </div>

      {/* Destruct Timer Message */}
      {destruct !== null && (
        <p className="text-red-500 mt-3 animate-bounce">
          Warning: Everything is meaningless in {destruct}...
        </p>
      )}

      {/* Error Modal */}
      {showError && (
        <div className="absolute top-0 left-0 w-full h-full bg-black/80 flex items-center justify-center z-50">
          <div className="bg-gray-800 border border-red-600 p-6 rounded shadow-lg text-center space-y-4 max-w-sm">
            <h2 className="text-red-500 font-bold text-lg">💀 ERROR 0xDEAD</h2>
            <p className="text-sm text-gray-300">
              The simulation has crashed. Reality cannot be restored.
            </p>
            <button
              onClick={reset}
              className="mt-2 px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded text-sm"
            >
              Reboot Simulation
            </button>
          </div>
        </div>
      )}

      {/* Footer */}
      {!showError && progress === 100 && destruct === null && (
        <button
          onClick={reset}
          className="mt-5 px-4 py-2 bg-gray-700 hover:bg-gray-600 text-sm text-white rounded"
        >
          Restart Terminal Nonsense
        </button>
      )}
    </div>
  );
};

export default FakeProgress;
