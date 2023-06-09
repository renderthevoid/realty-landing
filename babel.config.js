const plugins = ["@babel/plugin-proposal-class-properties"];
if (process.env.NODE_ENV === "development") {
  plugins.push("react-refresh/babel");
}

module.exports = {
  presets: ["@babel/preset-env"],
  plugins,
};
