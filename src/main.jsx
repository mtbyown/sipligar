import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";

// Layout components
import Navbar from "./components/Navbar";

// Pages
import UselessHome from "./pages/UselessHome";
import BallBouncingGame from "./pages/BallBouncingGame";
import TrickyUseless from "./pages/TrickyUseless";
import Useless from "./pages/Useless";
import UselessFinalBoss from "./pages/UselessFinalBoss";
import SnakeGame from "./pages/SnakeGame";
import FirstUseless from "./pages/FirstUseless";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>

    <Routes>
      <Route path="/" element={<UselessHome />} />
      <Route path="/BallBouncingGame" element={<BallBouncingGame />} />
      <Route path="/FirstUseless" element={<FirstUseless />} />
      <Route path="/SnakeGame" element={<SnakeGame />} />
      <Route path="/TrickyUseless" element={<TrickyUseless />} />
      <Route path="/Useless" element={<Useless />} />
      <Route path="/UselessFinalBoss" element={<UselessFinalBoss />} />

      <Route path="*" element={<div className="text-center py-20 text-white">Page not found</div>} />

    </Routes>

  </BrowserRouter>
);
