import HtmlWebpackPlugin from 'html-webpack-plugin';

module.exports = {
  mode: "development",
  entry: './src/index.tsx',
  output: {
    publicPath: '/'
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js']
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        type: 'asset/resource',
      },
      // {
      //   test: /\.(jpg|png)$/,
      //   use: {
      //     loader: 'url-loader',
      //   },
      // },
    ]
  },
  devServer: {
    historyApiFallback: true, // Redirect all 404s to index.html
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),
  ]
};