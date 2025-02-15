const path = require('path');
const Dotenv = require('dotenv-webpack');
const webpack = require('webpack');

// Get environment variables
const discordId = process.env.NEXT_PUBLIC_DISCORD_ID || '';

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NEXT_PUBLIC_DISCORD_ID': JSON.stringify(discordId)
      }
    }),
    new webpack.ProvidePlugin({
      gsap: 'gsap'
    })
  ],
  devServer: {
    static: {
      directory: path.join(__dirname, '/'),
    },
    compress: true,
    port: 3000,
  }
}; 