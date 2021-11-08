module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        // Configure your color palette here
        primeryClr:"#6D597A",
        secondryClr:"#E56B6F",
        thirdClr:"#CCD3D9",
        fourthClr:"#EAAC8B",
        bgSecondry: "#E5E5E5",
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
