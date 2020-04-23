require('dotenv').config();

const path = require('path');
const Dotenv = require('dotenv-webpack');
const withSass = require('@zeit/next-sass');
const withPlugins = require('next-compose-plugins');

const nextConfig = {
  webpack: (config) => {

    config.plugins = [
      ...config.plugins,

      // Read the .env file
      new Dotenv({
        path: path.join(__dirname, '.env'),
        systemvars: true,
      }),
    ];

    return config;
  },
};

module.exports = withPlugins(
  [
    [
      withSass,
      {
        cssModules: true,
        cssLoaderOptions: {
          localIdentName: '[path]___[local]___[hash:base64:5]',
        },
      }
    ],
  ],
  nextConfig
)
