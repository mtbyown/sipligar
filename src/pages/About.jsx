import React, { useRef, useEffect, useState } from "react";

const BallBouncingGame = () => {
  const ballRef = useRef(null);
  const containerRef = useRef(null);
  const [ballPos, setBallPos] = useState({ x: 100, y: 100 });
  const [velocity, setVelocity] = useState({ dx: 2, dy: 3 });
  const [paddleX, setPaddleX] = useState(120);
  const [isGameOver, setIsGameOver] = useState(false);
  const [gameStarted, setGameStarted] = useState(false);
  const [score, setScore] = useState(0);

  const paddleWidth = 100;
  const paddleHeight = 15;

  // Paddle control with keyboard
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!gameStarted || isGameOver) return;
      if (e.key === "ArrowLeft") {
        setPaddleX((prev) => Math.max(prev - 20, 0));
      } else if (e.key === "ArrowRight") {
        setPaddleX((prev) =>
          Math.min(prev + 20, containerRef.current.offsetWidth - paddleWidth)
        );
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [gameStarted, isGameOver]);

  // Paddle control with mouse
  const handleMouseMove = (e) => {
    if (!gameStarted || isGameOver) return;
    const container = containerRef.current;
    const containerRect = container.getBoundingClientRect();
    const relativeX = e.clientX - containerRect.left;
    setPaddleX(
      Math.min(
        Math.max(relativeX - paddleWidth / 2, 0),
        container.offsetWidth - paddleWidth
      )
    );
  };

  // Paddle control with touch
  const handleTouchMove = (e) => {
    if (!gameStarted || isGameOver) return;
    const touch = e.touches[0];
    const container = containerRef.current;
    const containerRect = container.getBoundingClientRect();
    const relativeX = touch.clientX - containerRect.left;
    setPaddleX(
      Math.min(
        Math.max(relativeX - paddleWidth / 2, 0),
        container.offsetWidth - paddleWidth
      )
    );
  };

  // Ball movement logic
  useEffect(() => {
    if (!gameStarted || isGameOver) return;

    const interval = setInterval(() => {
      const ball = ballRef.current;
      const container = containerRef.current;
      if (!ball || !container) return;

      const ballRect = ball.getBoundingClientRect();
      const containerRect = container.getBoundingClientRect();

      let newX = ballPos.x + velocity.dx;
      let newY = ballPos.y + velocity.dy;

      // Bounce off walls
      if (newX < 0 || newX + ballRect.width > containerRect.width) {
        setVelocity((prev) => ({ ...prev, dx: -prev.dx }));
      }

      if (newY < 0) {
        setVelocity((prev) => ({ ...prev, dy: -prev.dy }));
      }

      // Paddle zone
      const paddleTop = container.offsetHeight - paddleHeight - 10;
      const ballBottom = newY + ballRect.height;
      const ballCenterX = newX + ballRect.width / 2;

      if (ballBottom >= paddleTop) {
        if (
          ballCenterX >= paddleX &&
          ballCenterX <= paddleX + paddleWidth &&
          newY < container.offsetHeight
        ) {
          // Ball hit paddle
          setVelocity((prev) => ({ ...prev, dy: -prev.dy }));
          setScore((prev) => prev + 1);
        } else if (ballBottom > container.offsetHeight) {
          // Missed paddle
          setIsGameOver(true);
          setGameStarted(false);
          clearInterval(interval);
        }
      }

      setBallPos({ x: newX, y: newY });
    }, 10);

    return () => clearInterval(interval);
  }, [ballPos, velocity, paddleX, gameStarted, isGameOver]);

  const startGame = () => {
    setBallPos({ x: 100, y: 100 });
    setVelocity({ dx: 2, dy: 3 });
    setIsGameOver(false);
    setGameStarted(true);
    setScore(0);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-100 to-indigo-200 p-4">
      <div className="text-center absolute top-4 left-0 right-0 text-xl font-semibold text-gray-700">
        Score: {score}
      </div>

      <div
        ref={containerRef}
        onMouseMove={handleMouseMove}
        onTouchMove={handleTouchMove}
        className="relative w-[90vw] max-w-[600px] h-[70vh] bg-white rounded-lg shadow-lg border border-gray-300 overflow-hidden"
      >
        {/* Ball */}
        <div
          ref={ballRef}
          className="absolute w-6 h-6 bg-red-500 rounded-full"
          style={{ left: ballPos.x, top: ballPos.y }}
        ></div>

        {/* Paddle */}
        <div
          className="absolute bottom-[10px] h-[15px] bg-blue-600 rounded"
          style={{ width: `${paddleWidth}px`, left: `${paddleX}px` }}
        ></div>

        {/* Overlay */}
        {!gameStarted && (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50">
            {isGameOver ? (
              <h2 className="text-white text-2xl font-bold mb-4">Game Over</h2>
            ) : (
              <h2 className="text-white text-2xl font-bold mb-4">Ready?</h2>
            )}
            <button
              onClick={startGame}
              className="px-6 py-2 bg-green-500 text-white font-semibold rounded hover:bg-green-600 transition"
            >
              {isGameOver ? "Restart Game" : "Start Game"}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default BallBouncingGame;
