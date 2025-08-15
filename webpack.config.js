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
      test: /\.js$/, // Only applies to .js files (corrected regex)
      exclude: /node_modules/, // Exclude node_modules directory
      use: {
        loader: 'babel-loader', // Use babel-loader for compilation
        options: {
          presets: ['@babel/preset-env', '@babel/preset-react'] // Options for babel
        }
      }
    }]
  },
  // Development server configuration
  devServer: {
    static: './dist', // Static serving directory
  },
};