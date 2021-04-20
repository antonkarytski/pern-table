const webpack = require("webpack");
const path = require("path");

module.exports = {
  target: "node",
  mode: "production",
  entry: "./app.js",
  resolve: {
    modules: ["server", "node_modules"],
    alias: {
      "pg-native": path.join(__dirname, "aliases/pg-native.js"),
    },
  },
  plugins: [new webpack.IgnorePlugin(/^pg-native$/)],
};
