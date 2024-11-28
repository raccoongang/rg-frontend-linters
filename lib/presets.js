const ConfigPreset = require('./ConfigPreset');

const searchFilepaths = [process.cwd()];

/**
 * Configuration preset for ESLint.
 * Searches for ESLint configuration files in the current working directory.
 *
 * @type {ConfigPreset}
 */
const eslint = new ConfigPreset({
  defaultFilename: '.eslintrc.js',
  searchFilenames: ['.eslintrc', '.eslintrc.js'],
  searchFilepaths,
});

/**
 * Configuration preset for Stylelint.
 * Searches for Stylelint configuration files in the current working directory.
 *
 * @type {ConfigPreset}
 */
const stylelint = new ConfigPreset({
  defaultFilename: '.stylelintrc',
  searchFilenames: ['.stylelintrc', '.stylelintrc.js'],
  searchFilepaths,
});

/**
 * Configuration preset for Commitlint.
 * Searches for Commitlint configuration files in the current working directory.
 *
 * @type {ConfigPreset}
 */
const commitlint = new ConfigPreset({
  defaultFilename: '.commitlintrc',
  searchFilenames: ['.commitlintrc', '.commitlintrc.js'],
  searchFilepaths,
});

module.exports = { eslint, stylelint, commitlint };
