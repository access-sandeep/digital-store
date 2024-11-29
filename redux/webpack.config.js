const path = require("path");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "app.js",
    path: path.resolve(__dirname, "dist"),
  },
  devServer: {
    static: {
      directory: path.join(__dirname, "dist"),
    },
    port: 5050,
  },
  devtool: "source-map",
  mode: "development",
  stats: {
      errorDetails: true,
      children: true
  },
};
