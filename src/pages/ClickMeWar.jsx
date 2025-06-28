import React, { useState, useEffect } from "react";
import Confetti from "react-confetti";
import { useWindowSize } from "@react-hook/window-size";

const ClickMeWar = () => {
  const [count1, set1] = useState(0);
  const [count2, set2] = useState(0);
  const [message, setMessage] = useState("");
  const [showConfetti, setShowConfetti] = useState(false);
  const [width, height] = useWindowSize();

  const maxScore = 15;

  const vibrate = (duration) => {
    if (navigator.vibrate) navigator.vibrate(duration);
  };

  const handleClick = (player) => {
    if (count1 >= maxScore || count2 >= maxScore) return;

    if (player === 1) {
      const newCount = count1 + 1;
      set1(newCount);
      vibrate(50);
      taunt("blue", newCount);
      if (newCount === maxScore) endGame("Player 1 💙");
    } else {
      const newCount = count2 + 1;
      set2(newCount);
      vibrate(50);
      taunt("red", newCount);
      if (newCount === maxScore) endGame("Player 2 ❤️");
    }
  };

  const taunt = (player, count) => {
    if (count % 5 === 0) {
      setMessage(`${player === "blue" ? "Blue" : "Red"} Button is 🔥`);
    } else {
      setMessage("");
    }
  };

  const endGame = (winner) => {
    setMessage(`${winner} wins the war of nothingness! 🎉`);
    setShowConfetti(true);
  };

  const resetGame = () => {
    set1(0);
    set2(0);
    setMessage("");
    setShowConfetti(false);
  };

  const getRank = (score) => {
    if (score >= maxScore) return "🥇";
    if (score >= 10) return "🥈";
    if (score >= 5) return "🥉";
    return "🧱";
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white font-mono px-4 space-y-6 overflow-hidden relative">
      {showConfetti && <Confetti width={width} height={height} />}

      <h1 className="text-2xl font-bold text-yellow-400">⚔️ Click Me War</h1>
      <p className="text-sm text-gray-400 italic">First to {maxScore} wins absolutely nothing.</p>

      <div className="flex gap-6">
        <button
          onClick={() => handleClick(1)}
          disabled={count1 >= maxScore || count2 >= maxScore}
          className="bg-blue-600 px-6 py-2 rounded text-white hover:bg-blue-700 disabled:opacity-40"
        >
          Click Me 1 ({count1}) {getRank(count1)}
        </button>

        <button
          onClick={() => handleClick(2)}
          disabled={count1 >= maxScore || count2 >= maxScore}
          className="bg-red-600 px-6 py-2 rounded text-white hover:bg-red-700 disabled:opacity-40"
        >
          Click Me 2 ({count2}) {getRank(count2)}
        </button>
      </div>

      <div className="w-full max-w-sm space-y-2">
        <div className="text-xs text-blue-300">Player 1 Progress</div>
        <div className="w-full h-2 bg-gray-700 rounded-full overflow-hidden">
          <div className="h-full bg-blue-500" style={{ width: `${(count1 / maxScore) * 100}%` }}></div>
        </div>

        <div className="text-xs text-red-300 mt-3">Player 2 Progress</div>
        <div className="w-full h-2 bg-gray-700 rounded-full overflow-hidden">
          <div className="h-full bg-red-500" style={{ width: `${(count2 / maxScore) * 100}%` }}></div>
        </div>
      </div>

      <div className="text-sm text-green-300 h-6">{message}</div>

      {(count1 >= maxScore || count2 >= maxScore) && (
        <button
          onClick={resetGame}
          className="mt-2 px-4 py-1 bg-gray-700 hover:bg-gray-600 rounded text-sm text-white"
        >
          Reset War
        </button>
      )}

      <p className="text-xs text-gray-500 italic mt-6">
        Who knew buttons could hurt feelings?
      </p>
    </div>
  );
};

export default ClickMeWar;
