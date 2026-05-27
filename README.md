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

