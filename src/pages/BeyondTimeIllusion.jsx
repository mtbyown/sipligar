import React, { useEffect, useRef, useState } from "react";

const phrases = [
  "You’ve always been here.",
  "Past? Future? Just illusion.",
  "Time is a loop.",
  "The moment is eternal.",
  "Nothing ever changes.",
];

const BeyondTimeIllusion = () => {
  const canvasRef = useRef(null);
  const [glitchText, setGlitchText] = useState(phrases[0]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let animationFrameId;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const drawSwirl = (time) => {
      const w = canvas.width;
      const h = canvas.height;
      ctx.clearRect(0, 0, w, h);

      for (let i = 0; i < 100; i++) {
        const angle = (i / 100) * Math.PI * 2 + time / 2000;
        const radius = i * 3;
        const x = w / 2 + Math.cos(angle) * radius;
        const y = h / 2 + Math.sin(angle) * radius;
        ctx.beginPath();
        ctx.arc(x, y, 6, 0, Math.PI * 2);
        ctx.fillStyle = `hsl(${(time / 5 + i * 10) % 360}, 100%, 70%)`;
        ctx.fill();
      }

      animationFrameId = requestAnimationFrame(drawSwirl);
    };

    drawSwirl(0);

    const glitchInterval = setInterval(() => {
      const random = Math.floor(Math.random() * phrases.length);
      setGlitchText(phrases[random]);
    }, 3000);

    return () => {
      clearInterval(glitchInterval);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="relative w-screen h-screen overflow-hidden bg-black text-white font-mono">
      <canvas ref={canvasRef} className="absolute top-0 left-0 z-0" />

      <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
        <div className="text-center animate-pulse text-2xl md:text-4xl text-pink-400 drop-shadow-lg">
          {glitchText}
        </div>
        <p className="mt-4 text-sm text-gray-300 italic">
          ⌛ Let go. Time never mattered.
        </p>
        <button
          className="mt-6 px-4 py-2 rounded-full bg-indigo-700 hover:bg-indigo-800 text-white shadow-xl transition-all"
          onClick={() => alert("You can’t exit a loop that doesn’t exist.")}
        >
          Try to Escape
        </button>
      </div>
    </div>
  );
};

export default BeyondTimeIllusion;