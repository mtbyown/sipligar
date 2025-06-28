import React, { useEffect, useState } from "react";

const emojis = ["😂", "🙃", "😵", "🔥", "💩", "🌀", "🥴", "🎉", "👾", "🧠"];

const getRandomEmoji = () => emojis[Math.floor(Math.random() * emojis.length)];

const playBoomSound = () => {
  const boom = new Audio("https://assets.mixkit.co/sfx/preview/mixkit-arcade-game-jump-coin-216.wav");
  boom.volume = 0.2;
  boom.play().catch(() => {});
};

const RandomEmojiExplosion = () => {
  const [emojiList, setEmojiList] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      spawnEmoji(false);
    }, 200);

    const cleanup = setInterval(() => {
      setEmojiList((prev) => prev.slice(-200));
    }, 1500);

    return () => {
      clearInterval(interval);
      clearInterval(cleanup);
    };
  }, []);

  const spawnEmoji = (isMini = false, isVortex = false) => {
    const id = Date.now() + Math.random();
    const emoji = {
      id,
      emoji: getRandomEmoji(),
      top: isVortex ? 50 : 90 + Math.random() * 10,
      left: isVortex ? 50 : Math.random() * 95,
      size: isMini ? 12 + Math.random() * 10 : 20 + Math.random() * 40,
      spin: Math.random() > 0.5,
      vortex: isVortex,
    };
    setEmojiList((prev) => [...prev, emoji]);
  };

  const explodeEmoji = (x, y) => {
    const burst = Array.from({ length: 8 }).map(() => ({
      id: Date.now() + Math.random(),
      emoji: getRandomEmoji(),
      top: y,
      left: x,
      size: 12 + Math.random() * 10,
      spin: true,
      vortex: false,
    }));
    setEmojiList((prev) => [...prev, ...burst]);
  };

  const detonate = () => {
    playBoomSound();
    for (let i = 0; i < 100; i++) {
      spawnEmoji(false, i % 4 === 0); // 25% vortex
    }
  };

  return (
    <div className="relative w-full h-screen bg-black overflow-hidden text-center animate-flash">
      <div className="absolute top-4 left-0 right-0 text-white font-bold text-xl z-10">
        💥 ULTIMATE EMOJI CHAOS 💥
      </div>

      <button
        onClick={detonate}
        className="absolute z-10 top-14 left-1/2 -translate-x-1/2 bg-pink-600 hover:bg-pink-700 text-white px-4 py-2 rounded shadow mt-2"
      >
        💣 Detonate
      </button>

      {emojiList.map((item) => (
        <div
          key={item.id}
          className={`absolute ${
            item.vortex ? "animate-vortex" : "animate-float"
          } ${item.spin ? "animate-spin-slow" : ""}`}
          onClick={() => explodeEmoji(item.left, item.top)}
          style={{
            top: `${item.top}%`,
            left: `${item.left}%`,
            fontSize: `${item.size}px`,
            animationDuration: `${2 + Math.random() * 2}s`,
            opacity: 0.9,
          }}
        >
          {item.emoji}
        </div>
      ))}
    </div>
  );
};

export default RandomEmojiExplosion;
