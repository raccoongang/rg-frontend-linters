jest.mock('../ConfigPreset', () => jest.fn((options) => ({
  defaultFilename: options.defaultFilename,
  getDefault: jest.fn(),
})));

const ConfigPreset = require('../ConfigPreset');

describe('presets', () => {
  let presets;

  beforeEach(() => {
    jest.clearAllMocks();
    // eslint-disable-next-line global-require
    presets = require('../presets');
  });

  it('should create a ConfigPreset for ESLint with the correct arguments', () => {
    expect(ConfigPreset).toHaveBeenCalledWith({
      defaultFilename: '.eslintrc.js',
      searchFilenames: ['.eslintrc', '.eslintrc.js'],
      searchFilepaths: [process.cwd()],
    });

    expect(presets.eslint.defaultFilename).toBe('.eslintrc.js');
    expect(presets.eslint.getDefault).toBeDefined();
    expect(typeof presets.eslint.getDefault).toBe('function');
  });
});
