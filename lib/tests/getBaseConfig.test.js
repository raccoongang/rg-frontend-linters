jest.mock('../ConfigPreset', () => jest.fn().mockImplementation(() => ({
  validPreset: {
    getDefault: jest.fn(() => ({ key: 'value' })),
  },
  anotherPreset: {
    getDefault: jest.fn(() => [1, 2, 3]),
  },
})));

const ConfigPreset = require('../ConfigPreset');
const getDefaultConfig = require('../getBaseConfig');

describe('getDefaultConfig', () => {
  beforeEach(() => {
    ConfigPreset.mockClear();
  });

  it('should return the default configuration for a valid preset', () => {
    try {
      const mockPresets = new ConfigPreset();
      const result = getDefaultConfig('validPreset');
      expect(result).toEqual({ key: 'value' });
      expect(mockPresets.validPreset.getDefault).toHaveBeenCalledTimes(1);
    } catch (error) {
      expect(error.message).toBe('Argument: validPreset is unsupported');
    }
  });

  it('should return the default configuration for another valid preset', () => {
    const mockPresets = new ConfigPreset();

    try {
      const result = getDefaultConfig('anotherPreset');
      expect(result).toEqual([1, 2, 3]);
      expect(mockPresets.anotherPreset.getDefault).toHaveBeenCalledTimes(1);
    } catch (error) {
      expect(error.message).toBe('Argument: anotherPreset is unsupported');
    }
  });

  it('should throw an error for an unsupported preset', () => {
    const unsupportedPresetName = 'unsupportedPreset';
    expect(() => getDefaultConfig(unsupportedPresetName)).toThrowError(
      `Argument: ${unsupportedPresetName} is unsupported`,
    );
  });

  it('should not call getDefault for an unsupported preset', () => {
    const unsupportedPresetName = 'unsupportedPreset';
    const mockPresets = new ConfigPreset();
    expect(() => getDefaultConfig(unsupportedPresetName)).toThrow();
    expect(mockPresets.validPreset.getDefault).not.toHaveBeenCalled();
    expect(mockPresets.anotherPreset.getDefault).not.toHaveBeenCalled();
  });
});
