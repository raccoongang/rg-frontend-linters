console.log('============================= I AM RG ESLINT CONFIG =============================');
// eslint-disable-next-line import/no-extraneous-dependencies
const { createConfig } = require('@openedx/frontend-build');

module.exports = createConfig('eslint');
