const path = require('path');
const ConfigPreset = require('../ConfigPreset');

jest.mock('path', () => ({
  resolve: jest.fn(),
}));

jest.mock('../../config/.eslintrc', () => ({
  key: 'value',
}), { virtual: true });

describe('ConfigPreset', () => {
  const mockDefaultDir = '/mocked/config';
  const mockDefaultFilename = 'someConfigFile.js';

  beforeEach(() => {
    jest.clearAllMocks();
    path.resolve.mockImplementation(() => mockDefaultDir);
  });

  it('should create a configuration preset with defaultFilename', () => {
    const preset = ConfigPreset({
      defaultDir: mockDefaultDir,
      defaultFilename: mockDefaultFilename,
    });

    expect(preset.defaultFilename).toBe(mockDefaultFilename);
    expect(typeof preset.getDefault).toBe('function');
  });

  it('should throw an error if the configuration file cannot be resolved', () => {
    const invalidFilename = 'invalidConfigFile.js';
    const preset = ConfigPreset({
      defaultDir: mockDefaultDir,
      defaultFilename: invalidFilename,
    });

    jest.spyOn(require, 'resolve').mockImplementation(() => {
      throw new Error(`Cannot find module './${invalidFilename}'`);
    });

    expect(() => preset.getDefault()).toThrow();
  });
});
