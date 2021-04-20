module.exports = {
  target: "node",
  mode: "production",
  entry: "./app.js",
  resolve: {
    modules: ["server", "node_modules"],
  },
};
