import React from "react";

const NoSignalCRT = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden bg-black flex items-center justify-center">
      {/* Color Bars */}
      <div className="absolute inset-0 flex h-full">
        <div className="flex-1 bg-red-600"></div>
        <div className="flex-1 bg-yellow-400"></div>
        <div className="flex-1 bg-green-500"></div>
        <div className="flex-1 bg-blue-500"></div>
        <div className="flex-1 bg-purple-600"></div>
        <div className="flex-1 bg-white"></div>
        <div className="flex-1 bg-gray-400"></div>
      </div>

      {/* Scan Lines */}
      <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(0,0,0,0.15)_1px,transparent_1px)] bg-[size:100%_2px]"></div>

      {/* Flicker Effect */}
      <div className="absolute inset-0 pointer-events-none bg-black opacity-10 animate-flicker"></div>

      {/* Vignette */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0)_0%,rgba(0,0,0,0.7)_100%)]"></div>

      {/* CRT Curvature */}
      <div className="absolute inset-0 pointer-events-none border-4 border-black rounded-[10%]"></div>

      {/* NO SIGNAL Text */}
      <h1 className="relative text-white text-4xl sm:text-6xl font-mono font-bold animate-pulse drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]">
        NO SIGNAL
      </h1>

      {/* CRT Flicker Animation */}
      <style>
        {`
          @keyframes flicker {
            0% { opacity: 0.05; }
            5% { opacity: 0.15; }
            10% { opacity: 0.05; }
            15% { opacity: 0.2; }
            20% { opacity: 0.05; }
            25% { opacity: 0.1; }
            30% { opacity: 0.05; }
            100% { opacity: 0.15; }
          }

          .animate-flicker {
            animation: flicker 0.2s infinite;
          }
        `}
      </style>
    </div>
  );
};

export default NoSignalCRT;