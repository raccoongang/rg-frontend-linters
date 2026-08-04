# RG Frontend Linters

**RG Frontend Linters** provides standardized configurations for **ESLint**, **Stylelint**, and **CommitLint**.
This ensures consistent code quality, style, and commit message conventions across all Open edX projects.

## Configurations

- **ESLint**: Enforce consistent JavaScript code style and quality.
- **Stylelint**: Maintain uniform SCSS formatting and conventions.
- **CommitLint**: Validate commit messages against defined standards.

---

## Installation and Usage

### 1. Add the repository to `package.json`:

Include `rg-frontend-linters` as a dependency:

```json
"dependencies": {
  "rg-frontend-linters": "git+https://github.com/raccoongang/rg-frontend-linters.git#<version>"
}
```

If you use the Stylelint configuration, install the supported Stylelint version in the consuming repository:

```bash
npm install --save-dev stylelint@^15.6.0
```

### Stylelint compatibility

The Stylelint configuration supports **Stylelint `^15.6.0`** (versions `>=15.6.0 <16.0.0`).

If you use the CommitLint configuration, install the CLI in the consuming repository:

```bash
npm install --save-dev @commitlint/cli@^21.2.1
```

### CommitLint compatibility

The CommitLint configuration supports **@commitlint/cli `^21.2.1`**. Because
`@commitlint/config-conventional@21` ships with this package, **v2.0.0 onwards requires Node
`>=22.12.0`** in the consuming repository; stay on `1.0.0` if you are still on an older runtime.

`@commitlint/config-conventional` is resolved from this package, so the consuming repository does not
need to declare it. The same applies to `@edx/stylelint-config-edx`.

### 2. Create a configuration file

Add a configuration file for the desired linter in the root of your project. For example, to configure Stylelint:

```bash
    touch .stylelintrc.js
```

### 3. Initialize the configuration

Use the provided helper function to set up the linter configuration. For example:

Stylelint (`.stylelintrc.js`):

```javascript
const { createConfig } = require('rg-frontend-linters');

module.exports = createConfig('stylelint');
```

ESLint (`.eslintrc.js`):

```javascript
const { createConfig } = require('rg-frontend-linters');

module.exports = createConfig('eslint');
```

CommitLint (`commitlint.config.js`):

```javascript
const { createConfig } = require('rg-frontend-linters');

module.exports = createConfig('commitlint');
```

### Extending Configuration

Extend the default configuration by adding custom rules or overriding existing ones.

```javascript
const { createConfig } = require('rg-frontend-linters');

module.exports = createConfig('<configName>', {
    // Custom rules go here
});
```

