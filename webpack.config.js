const path = require('path');
const Dotenv = require('dotenv-webpack');
const webpack = require('webpack');

// Debug environment variables
console.log('Environment Variables Debug:');
console.log('NODE_ENV:', process.env.NODE_ENV);
console.log('NEXT_PUBLIC_DISCORD_ID from process.env:', process.env.NEXT_PUBLIC_DISCORD_ID);

// Ensure Discord ID is available at build time
const discordId = process.env.NEXT_PUBLIC_DISCORD_ID || '381767483100626945';
console.log('Final Discord ID being used:', discordId);

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
    new Dotenv({
      systemvars: true, // Load all system variables
      safe: true, // Load '.env.example' to verify the '.env' variables are all set
      defaults: true, // Load '.env.defaults' as the default values if empty
      silent: true // Hide any warnings
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV),
        NEXT_PUBLIC_DISCORD_ID: JSON.stringify(discordId)
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