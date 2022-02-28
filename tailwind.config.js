module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    backgroundColor: (theme) => ({
      ...theme("colors"),
      primary: "#C1BADC",
      secondary: "#F18338",
      danger: "#e3342f",
      mmOrange: '#ea8644ff',
      mmPurple: '#64599eff',
      mmGray: '#bbb7bd'
    })
  },
  plugins: [],
};
