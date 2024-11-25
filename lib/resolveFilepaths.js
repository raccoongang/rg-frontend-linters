/**
 * Resolves a filepath by searching through an array of filepaths in specified directories.
 * If no file is found, throws an error.
 *
 * @param {string[]} filepaths - An array of filepaths to search for.
 * @param {string[]} [resolvePaths=[process.cwd()]] - An array of directories to check for the file.
 * Defaults to the current working directory.
 * @throws {Error} Throws an error if none of the filepaths are found in the provided directories.
 * @returns {string} - The resolved absolute path to the first found file.
 */
module.exports = (filepaths, resolvePaths = [process.cwd()]) => {
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < filepaths.length; i++) {
    try {
      return require.resolve(filepaths[i], { paths: resolvePaths });
    } catch (e) {
      // Do nothing, maybe we'll find it in the next loop
    }
  }
  throw new Error(`Could not resolve files:\n ${filepaths.join('\n')}\n\n in directories:\n ${resolvePaths.join(', ')}\n`);
};
