import React from "react";

const UselessIllusion = () => {
  return (
    <div className="flex flex-col items-center justify-center mt-16 space-y-6">
      {/* Illusion Circles */}
      <div className="relative w-48 h-48">
        <div className="absolute inset-0 rounded-full border-4 border-pink-500 animate-spin-slow"></div>
        <div className="absolute inset-4 rounded-full border-4 border-yellow-400 animate-spin-slower"></div>
        <div className="absolute inset-8 rounded-full border-4 border-green-400 animate-spin-reverse"></div>
      </div>

      <p className="text-sm text-gray-300 italic">
        Stare long enough, and you might still learn nothing.
      </p>

      {/* Wiggling “Loading Illusion” */}
      <div className="text-lg font-bold text-indigo-400 animate-bounce">
        Loading your imagination...
      </div>
    </div>
  );
};

export default UselessIllusion;
