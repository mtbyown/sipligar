import React, { useState, useEffect, useRef } from "react";

const GRID_SIZE = 20;
const INITIAL_SNAKE = [
  [8, 8],
  [8, 9],
  [8, 10],
];
const INITIAL_DIRECTION = [0, -1];

const SnakeGame = () => {
  const [snake, setSnake] = useState(INITIAL_SNAKE);
  const [food, setFood] = useState(generateFood(INITIAL_SNAKE));
  const [direction, setDirection] = useState(INITIAL_DIRECTION);
  const [gameOver, setGameOver] = useState(false);
  const [score, setScore] = useState(0);
  const [speed, setSpeed] = useState(150);
  const intervalRef = useRef(null);
  const touchStartRef = useRef(null);

  const eatSound = new Audio("/eat.mp3");
  const gameOverSound = new Audio("/gameover.mp3");

  function generateFood(snake) {
    let newFood;
    do {
      newFood = [
        Math.floor(Math.random() * GRID_SIZE),
        Math.floor(Math.random() * GRID_SIZE),
      ];
    } while (snake.some(([x, y]) => x === newFood[0] && y === newFood[1]));
    return newFood;
  }

  // Keyboard controls
  useEffect(() => {
    const handleKey = (e) => {
      if (gameOver) return;
      switch (e.key) {
        case "ArrowUp":
          if (direction[0] !== 1) setDirection([-1, 0]);
          break;
        case "ArrowDown":
          if (direction[0] !== -1) setDirection([1, 0]);
          break;
        case "ArrowLeft":
          if (direction[1] !== 1) setDirection([0, -1]);
          break;
        case "ArrowRight":
          if (direction[1] !== -1) setDirection([0, 1]);
          break;
      }
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [direction, gameOver]);

  // Touch controls
  const handleTouchStart = (e) => {
    touchStartRef.current = e.touches[0];
  };

  const handleTouchEnd = (e) => {
    if (!touchStartRef.current) return;
    const dx = e.changedTouches[0].clientX - touchStartRef.current.clientX;
    const dy = e.changedTouches[0].clientY - touchStartRef.current.clientY;

    if (Math.abs(dx) > Math.abs(dy)) {
      // horizontal swipe
      if (dx > 0 && direction[1] !== -1) setDirection([0, 1]); // right
      else if (dx < 0 && direction[1] !== 1) setDirection([0, -1]); // left
    } else {
      // vertical swipe
      if (dy > 0 && direction[0] !== -1) setDirection([1, 0]); // down
      else if (dy < 0 && direction[0] !== 1) setDirection([-1, 0]); // up
    }
    touchStartRef.current = null;
  };

  // Game loop
  useEffect(() => {
    if (gameOver) return;

    intervalRef.current = setInterval(() => {
      setSnake((prevSnake) => {
        const newHead = [
          prevSnake[0][0] + direction[0],
          prevSnake[0][1] + direction[1],
        ];

        if (
          newHead[0] < 0 ||
          newHead[1] < 0 ||
          newHead[0] >= GRID_SIZE ||
          newHead[1] >= GRID_SIZE ||
          prevSnake.some(([x, y]) => x === newHead[0] && y === newHead[1])
        ) {
          gameOverSound.play();
          clearInterval(intervalRef.current);
          setGameOver(true);
          return prevSnake;
        }

        let newSnake = [newHead, ...prevSnake];

        if (newHead[0] === food[0] && newHead[1] === food[1]) {
          eatSound.play();
          const nextScore = score + 1;
          setScore(nextScore);
          setFood(generateFood(newSnake));

          // speed up every 5 points
          if (nextScore % 5 === 0) {
            const faster = Math.max(speed - 15, 60);
            setSpeed(faster);
          }
        } else {
          newSnake.pop();
        }

        return newSnake;
      });
    }, speed);

    return () => clearInterval(intervalRef.current);
  }, [direction, food, gameOver, score, speed]);

  const restartGame = () => {
    setSnake(INITIAL_SNAKE);
    setDirection(INITIAL_DIRECTION);
    setFood(generateFood(INITIAL_SNAKE));
    setGameOver(false);
    setScore(0);
    setSpeed(150);
  };

  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-green-100 to-green-300"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <h1 className="text-2xl font-bold mb-4">🐍 Snake Game</h1>
      <div className="text-lg font-medium mb-2">Score: {score}</div>
      <div
        className="grid gap-[2px] bg-gray-300"
        style={{
          gridTemplateColumns: `repeat(${GRID_SIZE}, 1fr)`,
          width: "min(90vw, 90vh)",
          aspectRatio: "1 / 1",
        }}
      >
        {[...Array(GRID_SIZE)].map((_, row) =>
          [...Array(GRID_SIZE)].map((_, col) => {
            const isSnake = snake.some(([x, y]) => x === row && y === col);
            const isHead = snake[0][0] === row && snake[0][1] === col;
            const isFood = food[0] === row && food[1] === col;
            return (
              <div
                key={`${row}-${col}`}
                className={`w-full aspect-square ${
                  isHead
                    ? "bg-green-800"
                    : isSnake
                    ? "bg-green-600"
                    : isFood
                    ? "bg-red-500"
                    : "bg-white"
                }`}
              ></div>
            );
          })
        )}
      </div>
      {gameOver && (
        <div className="mt-4 text-center">
          <p className="text-xl font-bold text-red-600">Game Over</p>
          <button
            onClick={restartGame}
            className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Restart
          </button>
        </div>
      )}
    </div>
  );
};

export default SnakeGame;
