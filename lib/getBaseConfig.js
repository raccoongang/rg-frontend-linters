const presets = require('./presets');

/**
 * Retrieves the default configuration for a given preset name.
 *
 * @param {string} presetName - The name of the preset for which the default configuration is requested.
 * @throws {Error} Throws an error if the given preset name is unsupported.
 * @returns {any} - The default configuration associated with the preset.
 */
module.exports = (presetName) => {
  if (presets[presetName] === undefined) {
    throw new Error(`Argument: ${presetName} is unsupported`);
  }

  return presets[presetName].getDefault();
};
