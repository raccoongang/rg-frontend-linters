const ConfigPreset = require('./ConfigPreset');

const searchFilepaths = [process.cwd()];

const eslint = new ConfigPreset({
    defaultFilename: '.eslintrc.js',
    searchFilenames: ['.eslintrc', '.eslintrc.js'],
    searchFilepaths,
});

module.exports = { eslint };
