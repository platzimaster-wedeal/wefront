const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require("path");

module.exports = {
 entry: "./src/index.jsx",
 output: {
  path: path.resolve(__dirname, "dist"),
  filename: "app.bundle.js",
  publicPath: "/",
 },
 resolve: {
  extensions: [".js", ".jsx"],
 },
 devServer: {
  open: true,
  port: 3000,
  historyApiFallback: true,
 },
 module: {
  rules: [
   {
    test: /\.(js|jsx)$/,
    exclude: "/node_module/",
    use: {
     loader: "babel-loader",
     options: {
      presets: ["@babel/preset-env", "@babel/preset-react"],
     },
    },
   },
   {
    test: /\.html$/,
    use: [
     {
      loader: "html-loader",
     },
    ],
   },
   {
    test: /\.(s*)css$/,
    use: [
     {
      loader: MiniCssExtractPlugin.loader,
     },
     {
      loader: "css-loader",
      options: {
       sourceMap: true,
      },
     },
     {
      loader: "resolve-url-loader",
     },
     {
      loader: "sass-loader",
      options: {
       sourceMap: true,
      },
     },
    ],
   },
   {
    test: /\.(png|gif|jpg)$/,
    use: [
     {
      loader: "file-loader",
      options: {
       filename: "[name]-[hash].[ext]",
       outputPath: "assets/images",
       publicPath: "/assets/images",
      },
     },
    ],
   },
   {
    test: /\.(TTF)$/,
    use: [
     {
      loader: "file-loader",
      options: {
       filename: "[name]-[hash].[ext]",
       outputPath: "assets/fonts",
       publicPath: "/assets/fonts",
      },
     },
    ],
   },
  ],
 },

 plugins: [
  new HtmlWebpackPlugin({
   template: "public/index.html",
  }),

  new MiniCssExtractPlugin({
   filename: "assets/[name].css",
  }),
 ],
};
