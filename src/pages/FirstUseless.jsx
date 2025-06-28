import React, { useState, useEffect } from "react";

const FirstUseless = () => {
  const [clicks, setClicks] = useState(0);
  const [loading, setLoading] = useState(false);
  const [uselessFact, setUselessFact] = useState(null);

  const handleClick = () => {
    setClicks(clicks + 1);
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  };

  const handleSelfDestruct = () => {
    alert("Initiating self-destruct...");
    setTimeout(() => {
      alert("Just kidding. Resetting.");
      setClicks(0);
      setUselessFact(null);
    }, 1500);
  };

  const fetchUselessFact = async () => {
    try {
      const res = await fetch("https://uselessfacts.jsph.pl/api/v2/facts/random?language=en");
      const data = await res.json();
      setUselessFact(data.text);
    } catch (err) {
      setUselessFact("Useless fact failed to load. That’s pretty useless.");
    }
  };

  useEffect(() => {
    fetchUselessFact();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-yellow-50 text-center px-4">
      <h1 className="text-3xl font-bold text-yellow-800 mb-2">😶 The Useless Things</h1>
      <p className="text-yellow-600 mb-6 italic">Now 300% more useless.</p>

      <button
        onClick={handleClick}
        className="px-6 py-3 bg-purple-600 text-white rounded-lg shadow hover:bg-purple-700 transition mb-4"
      >
        {loading ? (
          <span className="flex items-center gap-2">
            <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
            Thinking...
          </span>
        ) : (
          `Useless Click ${clicks}`
        )}
      </button>

      <button
        onClick={handleSelfDestruct}
        className="px-5 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition mb-6"
      >
        💣 Self Destruct
      </button>

      <div className="bg-white border border-gray-300 rounded-lg p-4 max-w-lg shadow">
        <h2 className="font-semibold mb-2 text-gray-700">🧠 Random Useless Fact</h2>
        <p className="text-gray-600 text-sm">
          {uselessFact || "Loading your nonsense..."}
        </p>
        <button
          onClick={fetchUselessFact}
          className="mt-3 text-blue-600 text-sm underline hover:text-blue-800"
        >
          Fetch another useless fact
        </button>
      </div>

      <p className="mt-8 text-xs text-gray-400">© 2025 Truly Useless Inc.</p>
    </div>
  );
};

export default FirstUseless;
