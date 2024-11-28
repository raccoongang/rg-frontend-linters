const { merge } = require('webpack-merge');

const getBaseConfig = require('../getBaseConfig');
const createConfig = require('../createConfig');

jest.mock('../getBaseConfig', () => jest.fn());

jest.mock('webpack-merge', () => ({
  merge: jest.fn(),
}));

describe('createConfig', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should merge base configuration with the custom fragment', () => {
    const commandName = 'build';
    const baseConfig = { mode: 'production', entry: './src/index.js' };
    const configFragment = { output: { filename: 'bundle.js' } };
    const mergedConfig = { ...baseConfig, ...configFragment };

    getBaseConfig.mockReturnValue(baseConfig);
    merge.mockReturnValue(mergedConfig);

    const result = createConfig(commandName, configFragment);

    expect(getBaseConfig).toHaveBeenCalledTimes(1);
    expect(getBaseConfig).toHaveBeenCalledWith(commandName);

    expect(merge).toHaveBeenCalledTimes(1);
    expect(merge).toHaveBeenCalledWith(baseConfig, configFragment);

    expect(result).toEqual(mergedConfig);
  });

  it('should merge base configuration with an empty fragment if none is provided', () => {
    const commandName = 'serve';
    const baseConfig = { mode: 'development', devServer: { port: 8080 } };
    const configFragment = {};
    const mergedConfig = { ...baseConfig };

    getBaseConfig.mockReturnValue(baseConfig);
    merge.mockReturnValue(mergedConfig);

    const result = createConfig(commandName);

    expect(getBaseConfig).toHaveBeenCalledTimes(1);
    expect(getBaseConfig).toHaveBeenCalledWith(commandName);

    expect(merge).toHaveBeenCalledTimes(1);
    expect(merge).toHaveBeenCalledWith(baseConfig, configFragment);

    expect(result).toEqual(mergedConfig);
  });

  it('should throw an error if getBaseConfig throws', () => {
    const commandName = 'invalidCommand';
    getBaseConfig.mockImplementation(() => {
      throw new Error('Invalid command name');
    });

    expect(() => createConfig(commandName)).toThrow('Invalid command name');

    expect(getBaseConfig).toHaveBeenCalledTimes(1);
    expect(getBaseConfig).toHaveBeenCalledWith(commandName);

    expect(merge).not.toHaveBeenCalled();
  });
});
