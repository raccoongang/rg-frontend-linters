const { merge } = require('webpack-merge');

const getBaseConfig = require('./getBaseConfig');

/**
 * Merges a base configuration with a custom configuration fragment.
 *
 * @param {string} commandName - The name of the command for which the base configuration is retrieved.
 * @param {Object} [configFragment={}] - A custom configuration fragment to merge with the base configuration.
 * @returns {Object} - The resulting configuration after merging the base configuration with the custom fragment.
 */
module.exports = (commandName, configFragment = {}) => {
  const baseConfig = getBaseConfig(commandName);
  return merge(baseConfig, configFragment);
};
