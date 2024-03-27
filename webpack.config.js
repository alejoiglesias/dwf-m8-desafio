const Dotenv = require("dotenv-webpack");
const liveServer = require("live-server");
const path = require("path");
const dev = process.env.NODE_ENV == "development";

if (dev) {
  liveServer.start({
    root: "./",
    file: "./index.html",
  });
}
module.exports = {
  watch: dev,
  entry: "./src/index.tsx",
  plugins: [new Dotenv()],
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              modules: true,
            },
          },
        ],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
};
