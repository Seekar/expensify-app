const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = env => {
  const isProd = env === "production";
  return {
    mode: "development",
    entry: "./src/app.js",
    output: {
      path: path.join(__dirname, "public"),
      filename: "bundle.js"
    },
    module: {
      rules: [
        {
          loader: "babel-loader",
          test: /\.js$/,
          exclude: /node_modules/
        },
        {
          test: /\.s?css$/,
          use: [
            {
              loader: MiniCssExtractPlugin.loader,
              options: {
                esModule: true
              }
            },
            "css-loader",
            "sass-loader"
          ]
        }
      ]
    },
    plugins: [
      new MiniCssExtractPlugin({
        filename: "styles.css"
      })
    ],
    devtool: isProd ? "source-map" : "inline-source-map",
    devServer: {
      contentBase: path.join(__dirname, "public"),
      historyApiFallback: true,
      host: "localhost",
      port: 8080
    }
  };
};
