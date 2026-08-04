const commitlintConfig = require('../../config/.commitlintrc');

describe('CommitLint config', () => {
  it("resolves its extended config from this package's dependencies", () => {
    expect(commitlintConfig.extends).toEqual([
      require.resolve('@commitlint/config-conventional'),
    ]);
  });
});
