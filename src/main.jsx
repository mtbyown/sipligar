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
import UselessAnimation from "./pages/UselessAnimation";
import UselessIllusion from "./pages/UselessIllusion";
import RealIllusion from "./pages/RealIllusion";
import Brain404 from "./pages/404Brain";
import ClickMeWar from "./pages/ClickMeWar";
import RandomEmojiExplosion from "./pages/RandomEmojiExplosion";
import ThinkingIndicator from "./pages/ThinkingIndicator";
import UselessAnimations from "./pages/UselessAnimation";
import FakeProgress from "./pages/FakeProgress";
import BeyondTimeIllusion from "./pages/BeyondTimeIllusion";
import NoSignalCrt from "./pages/NoSignal";
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
      <Route path="/UselessAnimations" element={<UselessAnimations />} />
      <Route path="/UselessAnimation" element={<UselessAnimation />} />
      <Route path="/UselessIllusion" element={<UselessIllusion />} />
      <Route path="/RealIllusion" element={<RealIllusion />} />
      <Route path="/BeyondTimeIllusion" element={<BeyondTimeIllusion />} />
      <Route path="/Brain404" element={<Brain404 />} />
      <Route path="/ClickMeWar" element={<ClickMeWar />} />
      <Route path="/RandomEmojiExplosion" element={<RandomEmojiExplosion />} />
      <Route path="/ThinkingIndicator" element={<ThinkingIndicator />} />
      <Route path="/FakeProgress" element={<FakeProgress />} />
    Route path="/NoSignal" element={<NoSignal />} />

      <Route path="*" element={<div className="text-center py-20 text-white">Page not found</div>} />

    </Routes>

  </BrowserRouter>
);
