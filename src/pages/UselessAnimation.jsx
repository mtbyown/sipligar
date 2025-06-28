import React from "react";

const UselessAnimations = () => {
  return (
    <div className="flex flex-col items-center space-y-10 mt-16">
      {/* Infinite Spinner */}
      <div className="flex flex-col items-center">
        <div className="w-20 h-20 border-4 border-dashed border-yellow-400 rounded-full animate-spin"></div>
        <p className="mt-2 text-sm text-yellow-300 italic">Spinning... just because.</p>
      </div>

      {/* Fake Loading Bar */}
      <div className="w-64 h-3 bg-gray-700 rounded-full overflow-hidden">
        <div className="h-full bg-blue-500 animate-pulse w-1/3"></div>
      </div>
      <p className="text-xs text-blue-400">Loading nothing...</p>

      {/* Endless Rotating Cube */}
      <div className="relative w-20 h-20 transform animate-[spin_3s_linear_infinite] bg-gradient-to-tr from-pink-600 to-purple-700 rotate-12 shadow-xl rounded-md">
        <div className="absolute inset-0 m-auto text-center text-white text-xs font-bold pt-6">🤷‍♂️</div>
      </div>
      <p className="text-sm text-purple-400 italic">Processing random thoughts...</p>

      {/* Blinking Light */}
      <div className="w-4 h-4 rounded-full bg-red-500 animate-ping"></div>
      <p className="text-xs text-red-300">Alert: Nothing detected.</p>

      {/* Glitch Text */}
      <p className="text-lg font-mono text-green-300 animate-pulse">
        <span className="blur-sm">System Running Useless.exe</span>
      </p>
    </div>
  );
};

export default UselessAnimations;
