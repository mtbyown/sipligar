import React, { useState, useEffect } from "react";

const TrickyUseless = () => {
  const [aiThinking, setAiThinking] = useState(false);
  const [aiResult, setAiResult] = useState(null);
  const [sliderValue, setSliderValue] = useState(42);
  const [inputText, setInputText] = useState("");
  const [reflected, setReflected] = useState("");

  const fakeResults = [
    "Banana.",
    "42 but sideways.",
    "Definitely maybe.",
    "You’ll find out yesterday.",
    "Ask again later.",
    "💩",
  ];

  const startFakeAI = () => {
    setAiThinking(true);
    setAiResult(null);
    setTimeout(() => {
      const result = fakeResults[Math.floor(Math.random() * fakeResults.length)];
      setAiThinking(false);
      setAiResult(result);
    }, 3000);
  };

  const generateFakeChart = () => {
    const lines = ["📈", "📉", "📊", "🔺", "🔻"];
    return lines[Math.floor(Math.random() * lines.length)];
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-10 bg-indigo-50 text-center">
      <h1 className="text-3xl font-bold text-indigo-700 mb-4">
        🤖 Tricky but Totally Useless
      </h1>
      <p className="text-indigo-500 mb-8 italic">Pretending to be intelligent since 2025</p>

      {/* Fake AI Brain */}
      <div className="mb-6">
        <button
          onClick={startFakeAI}
          className="px-5 py-3 bg-indigo-600 text-white rounded-lg shadow hover:bg-indigo-700 transition"
        >
          Run AI Analysis
        </button>
        <div className="mt-4 text-gray-700 min-h-[40px]">
          {aiThinking && (
            <span className="animate-pulse">Thinking... 🤔</span>
          )}
          {aiResult && <p className="font-mono text-lg">AI says: {aiResult}</p>}
        </div>
      </div>

      {/* Fake Controls */}
      <div className="w-full max-w-md bg-white p-6 rounded-lg shadow mb-6 text-left">
        <h2 className="text-lg font-semibold text-indigo-600 mb-2">Advanced Controls</h2>
        <label className="block mb-3">
          <span className="text-gray-700">Power Level</span>
          <input
            type="range"
            min="0"
            max="9000"
            value={sliderValue}
            onChange={(e) => setSliderValue(e.target.value)}
            className="w-full"
          />
        </label>
        <label className="flex items-center mb-2">
          <input type="checkbox" className="mr-2" />
          <span className="text-gray-700">Enable Quantum Banana Mode</span>
        </label>
        <label className="flex items-center">
          <input type="checkbox" className="mr-2" />
          <span className="text-gray-700">Disable Reality</span>
        </label>
        <p className="text-xs text-gray-500 mt-3 italic">Disclaimer: These controls affect nothing.</p>
      </div>

      {/* Fake Chart */}
      <div className="bg-white p-4 rounded-lg shadow w-full max-w-sm mb-8">
        <h3 className="text-md font-bold text-indigo-700 mb-2">Live Market Insights</h3>
        <div className="text-3xl">{generateFakeChart()}</div>
        <p className="text-sm text-gray-500 mt-2">Oh wait... never mind.</p>
      </div>

      {/* Reflective Button */}
      <div className="bg-white p-4 rounded-lg shadow w-full max-w-sm">
        <h3 className="text-md font-bold text-indigo-700 mb-2">Say Something</h3>
        <input
          type="text"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          placeholder="Say something profound"
          className="w-full px-3 py-2 border rounded mb-2"
        />
        <button
          onClick={() => setReflected(inputText)}
          className="px-4 py-2 bg-indigo-500 text-white rounded hover:bg-indigo-600 transition"
        >
          Reflect
        </button>
        {reflected && (
          <p className="mt-2 text-gray-700">Wow. "{reflected}". Deep.</p>
        )}
      </div>

      <p className="mt-10 text-xs text-gray-400">© 2025 Overengineered Nothingness™</p>
    </div>
  );
};

export default TrickyUseless;
