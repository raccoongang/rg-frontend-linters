const stylelintConfig = require('../../config/.stylelintrc');

describe('Stylelint config', () => {
  it("resolves its extended config from this package's dependencies", () => {
    expect(stylelintConfig.extends).toEqual([
      require.resolve('@edx/stylelint-config-edx'),
    ]);
  });
});
