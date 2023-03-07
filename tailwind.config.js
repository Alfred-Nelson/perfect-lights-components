const path = require("path");
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [path.join(__dirname, "./src/**/*.(js|jsx|ts|tsx)")],
  theme: {
    extend: {
      colors: {
        "pot-yellow": "#D4A15E",
        "pot-grey1": "#F4F5F6",
        "pot-grey6": "#111111",
        "pot-grey2": "#383838",
        "pot-grey5": "#242424",
        "pot-lightgrey":"#CBCBCB"
      },
    },
  },
  plugins: [],
};
