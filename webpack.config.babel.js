import path from "path";
import HtmlWebpackPlugin from "html-webpack-plugin";

const config = {
  entry: [
    path.join(__dirname, "src/app.module.js")
  ],
  output: {
    path: path.join(__dirname, "public/"),
    filename: "bundle.js"
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: path.join(__dirname, "src/index.html")
    })
  ],
  resolve: {
    extensions: [".json", ".js"]
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        include: path.join(__dirname, "src"),
        use: [
          {
            loader: "babel-loader",
            options: {
              babelrc: false,
              presets: [
                ["es2015", {modules: false}],
              ]
            }
          }
        ]
      },
      {
        test: /\.html$/,
        loader: "html-loader"
      }
    ]
  }
};

export default config;
