const path = require('path');
const resolveFilepaths = require('./resolveFilepaths');

const defaultConfigDir = path.resolve(__dirname, '../config');

/**
 * Represents a configuration preset with methods to resolve default and custom configuration file paths.
 * @typedef {Object} ConfigPresetOptions
 * @property {string} [defaultDir] - The default directory to look for configuration files.
 * @property {string} defaultFilename - The name of the default configuration file.
 * @property {string[]} searchFilenames - A list of filenames to search for.
 * @property {string[]} searchFilepaths - A list of filepaths to search in.
 */

/**
 * Creates a configuration preset object with methods to access and resolve configuration file paths.
 * @param {ConfigPresetOptions} options - The options for creating the configuration preset.
 * @returns {Object} Configuration preset with methods to get the default config and resolve custom paths.
 * @property {string} defaultFilename - The name of the default configuration file.
 * @property {Function} getDefault - Function to require the default configuration file.
 * @property {string} defaultFilepath - Getter for the resolved path to the default configuration file.
 * @property {string|null} resolvedFilepath - Getter for the resolved path of the first found configuration file.
 */
function ConfigPreset({
  defaultDir = defaultConfigDir,
  defaultFilename,
  searchFilenames,
  searchFilepaths,
}) {
  return {
    defaultFilename,
    /**
        * Gets the default configuration object by requiring the default file.
        * @returns {any} The required default configuration object.
        */
    getDefault: () => require(require.resolve(`./${defaultFilename}`, { paths: [defaultDir] })),
    /**
        * Resolves the full path of the default configuration file.
        * @returns {string} The resolved path of the default configuration file.
        */
    get defaultFilepath() {
      console.log('getting default filepath', defaultFilename, defaultDir);
      return require.resolve(`./${defaultFilename}`, { paths: [defaultDir] });
    },
    /**
        * Resolves the first matching configuration file path from the provided filenames and filepaths.
        * @returns {string|null} The resolved configuration file path or null if no file is found.
        */
    get resolvedFilepath() {
      return resolveFilepaths(
        searchFilenames.map(filename => `./${filename}`),
        [...searchFilepaths, defaultDir],
      );
    },
  };
}

module.exports = ConfigPreset;
