const getDefaultWebpackConfig = require('@nrwl/react/plugins/webpack')

function getWebpackConfig(config) {
  config = getDefaultWebpackConfig(config)

  return config;
}

module.exports = getWebpackConfig;