const path = require('path');

module.exports = {
  // Entry point of the application
  entry: './src/index.js',
  // Output configuration
  output: {
    path: path.resolve(__dirname, 'dist'), // Directory for output files
    filename: 'bundle.js', // Name of the output file
  },
  // Module configuration
  module: {
    rules: [{
      test: /.\js$/, // Chỉ áp dụng cho file .js
      exclude: /node_modules/, // Loại bỏ thư mục node_modules
      use: {
        loader: 'babel-loader', // Sử dụng babel-loader để biên dịch
        options: {
          presets: ['@babel/preset-env', '@babel/preset-react'] // Tùy chọn cho babel
        }
      }
    }]
  },
  // Development server configuration
  devServer: {
    static: './dist', // Thư mục phục vụ tĩnh
  },
};