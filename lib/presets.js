const ConfigPreset = require('./ConfigPreset');

const searchFilepaths = [process.cwd()];

const eslint = new ConfigPreset({
    defaultFilename: '.eslintrc.js',
    searchFilenames: ['.eslintrc', '.eslintrc.js'],
    searchFilepaths,
});

const stylelint = new ConfigPreset({
    defaultFilename: '.stylelintrc',
    searchFilenames: ['.stylelintrc', '.stylelintrc.js'],
    searchFilepaths,
});

module.exports = { eslint, stylelint };
