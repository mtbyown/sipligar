module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        spin: "spin 1s linear infinite",
        "spin-slow": "spin 8s linear infinite",
        "spin-slower": "spin 16s linear infinite",
        "spin-reverse": "spinReverse 6s linear infinite",
        float: "floatUp 3s ease-in-out forwards",
        flash: "flashBg 1s infinite",
        vortex: "vortexPull 2.5s ease-in-out forwards",
      },
      keyframes: {
        spinReverse: {
          from: { transform: "rotate(360deg)" },
          to: { transform: "rotate(0deg)" },
        },
        floatUp: {
          "0%": { transform: "translateY(0)", opacity: 1 },
          "100%": { transform: "translateY(-100vh)", opacity: 0 },
        },
        flashBg: {
          "0%, 100%": { backgroundColor: "#000" },
          "50%": { backgroundColor: "#1a1a1a" },
        },
        vortexPull: {
          "0%": {
            transform: "translate(0, 0)",
            top: "auto",
            left: "auto",
            opacity: 1,
          },
          "100%": {
            transform: "translate(-50%, -50%) scale(0.2)",
            top: "50%",
            left: "50%",
            opacity: 0,
          },
        },
      },
    },
  },
  plugins: [],
};
