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
  const [highScore, setHighScore] = useState(
    parseInt(localStorage.getItem("highScore")) || 0
  );
  const [speed, setSpeed] = useState(150);
  const [paused, setPaused] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const intervalRef = useRef(null);
  const touchStartRef = useRef(null);

  const eatSoundRef = useRef(null);
  const gameOverSoundRef = useRef(null);

  useEffect(() => {
    eatSoundRef.current = new Audio("/eat.mp3");
    gameOverSoundRef.current = new Audio("/gameover.mp3");
  }, []);

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
      if (e.key === "p" || e.key === "P") {
        togglePause();
        return;
      }

      if (gameOver || paused) return;

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
  }, [direction, gameOver, paused]);

  // Touch swipe
  const handleTouchStart = (e) => {
    touchStartRef.current = e.touches[0];
  };

  const handleTouchEnd = (e) => {
    if (!touchStartRef.current || paused || gameOver) return;
    const dx = e.changedTouches[0].clientX - touchStartRef.current.clientX;
    const dy = e.changedTouches[0].clientY - touchStartRef.current.clientY;

    if (Math.abs(dx) > Math.abs(dy)) {
      if (dx > 0 && direction[1] !== -1) setDirection([0, 1]);
      else if (dx < 0 && direction[1] !== 1) setDirection([0, -1]);
    } else {
      if (dy > 0 && direction[0] !== -1) setDirection([1, 0]);
      else if (dy < 0 && direction[0] !== 1) setDirection([-1, 0]);
    }
    touchStartRef.current = null;
  };

  // Game loop
  useEffect(() => {
    if (gameOver || paused) return;

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
          gameOverSoundRef.current?.play();
          clearInterval(intervalRef.current);
          setGameOver(true);
          if (score > highScore) {
            localStorage.setItem("highScore", score);
            setHighScore(score);
          }
          return prevSnake;
        }

        let newSnake = [newHead, ...prevSnake];

        if (newHead[0] === food[0] && newHead[1] === food[1]) {
          eatSoundRef.current?.play();
          const nextScore = score + 1;
          setScore(nextScore);
          setFood(generateFood(newSnake));
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
  }, [direction, food, gameOver, paused, score, speed]);

  const restartGame = () => {
    setSnake(INITIAL_SNAKE);
    setDirection(INITIAL_DIRECTION);
    setFood(generateFood(INITIAL_SNAKE));
    setGameOver(false);
    setScore(0);
    setSpeed(150);
    setPaused(false);
  };

  const togglePause = () => {
    if (gameOver) return;
    setPaused((p) => !p);
  };

  const toggleTheme = () => {
    setDarkMode((d) => !d);
  };

  const handleButton = (newDir) => {
    if (gameOver || paused) return;
    if (
      (newDir[0] === -direction[0] && newDir[1] === -direction[1]) ||
      (newDir[0] === direction[0] && newDir[1] === direction[1])
    )
      return;
    setDirection(newDir);
  };

  return (
    <div
      className={`flex flex-col items-center justify-center min-h-screen ${
        darkMode
          ? "bg-gray-900 text-white"
          : "bg-gradient-to-br from-green-100 to-green-300 text-black"
      } px-4`}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <h1 className="text-3xl font-bold mb-2">🐍 Snake Game</h1>
      <div className="text-lg font-semibold mb-2">Score: {score}</div>
      <div className="text-sm mb-4">High Score: {highScore}</div>

      <div
        className={`grid gap-[2px] ${
          darkMode ? "bg-gray-700" : "bg-gray-400"
        } rounded`}
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
                    : darkMode
                    ? "bg-gray-800"
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
            className="mt-2 px-4 py-2 bg-blue-600 text-white rounded shadow hover:bg-blue-700"
          >
            Restart
          </button>
        </div>
      )}

      {!gameOver && (
        <div className="flex flex-wrap gap-4 mt-4">
          <button
            onClick={togglePause}
            className="px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600"
          >
            {paused ? "Resume" : "Pause"}
          </button>
          <button
            onClick={toggleTheme}
            className="px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-700"
          >
            {darkMode ? "Light Mode" : "Dark Mode"}
          </button>
        </div>
      )}

      {!gameOver && (
        <div className="mt-6 grid grid-cols-3 gap-2 max-w-xs w-full">
          <button
            onClick={() => handleButton([-1, 0])}
            className="col-start-2 px-4 py-2 bg-gray-700 text-white rounded"
          >
            ⬆️
          </button>
          <button
            onClick={() => handleButton([0, -1])}
            className="col-start-1 row-start-2 px-4 py-2 bg-gray-700 text-white rounded"
          >
            ⬅️
          </button>
          <button
            onClick={() => handleButton([0, 1])}
            className="col-start-3 row-start-2 px-4 py-2 bg-gray-700 text-white rounded"
          >
            ➡️
          </button>
          <button
            onClick={() => handleButton([1, 0])}
            className="col-start-2 row-start-3 px-4 py-2 bg-gray-700 text-white rounded"
          >
            ⬇️
          </button>
        </div>
      )}
    </div>
  );
};

export default SnakeGame;