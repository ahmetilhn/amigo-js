const path = require("path");
const nodeExternals = require("webpack-node-externals");
module.exports = {
  mode: "production",
  target: "web",
  entry: "./lib/index.ts",
  module: {
    rules: [
      {
        test: /\.(?:ts|mjs|cjs)$/,
        exclude: [/node_modules/, /demo/, /build/, /assets/],
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },
  resolve: {
    extensions: [".js", ".jsx"],
  },
  externals: [nodeExternals()],
  output: {
    filename: "index.js",
    path: path.resolve(__dirname, "build"),
    library: {
      name: "amigo-js",
      type: "umd",
      export: "default",
      umdNamedDefine: true,
    },
  },
};
