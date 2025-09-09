module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        sea: "#64ffda",
        navy: "#0b1722",
        deep: "#081018",
        slate: "#8892b0",
        light: "#ccd6f6"
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif']
      }
    },
  },
  plugins: [],
}