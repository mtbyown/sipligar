import React from "react";

const ThinkingIndicator = () => {
  return (
    <div className="flex flex-col items-center mt-10 space-y-2">
      <div className="animate-pulse text-xl text-green-400">🤖 Thinking...</div>
      <div className="w-56 h-2 bg-gray-800 rounded-full overflow-hidden">
        <div className="w-1/3 h-full bg-green-500 animate-ping"></div>
      </div>
      <p className="text-xs text-gray-400 italic">Still no idea what to say.</p>
    </div>
  );
};

export default ThinkingIndicator;
