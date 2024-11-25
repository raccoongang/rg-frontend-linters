const path = require('path');

const defaultConfigDir = path.resolve(__dirname, '../config');

/**
 * Creates a configuration preset object with methods to access configuration files.
 *
 * @param {Object} options - Configuration options for the preset.
 * @param {string} [options.defaultDir=defaultConfigDir] - The directory to search
 * for the configuration file. Defaults to `../config`.
 * @param {string} options.defaultFilename - The name of the default configuration file.
 * @returns {Object} - An object representing the configuration preset.
 * @property {string} defaultFilename - The name of the default configuration file.
 * @property {Function} getDefault - A function that retrieves the default
 * configuration object by resolving and requiring the configuration file.
 */
function ConfigPreset({
  defaultDir = defaultConfigDir,
  defaultFilename,
}) {
  return {
    defaultFilename,
    /**
     * Retrieves the default configuration object by requiring the resolved configuration file.
     *
     * @returns {any} - The required default configuration object.
     */
    // eslint-disable-next-line import/no-dynamic-require, global-require
    getDefault: () => require(require.resolve(`./${defaultFilename}`, { paths: [defaultDir] })),
  };
}

module.exports = ConfigPreset;
