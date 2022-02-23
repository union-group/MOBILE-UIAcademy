/* eslint-disable @typescript-eslint/no-var-requires */
const componentGenerator = require('./generators/component')
const screenGenerator = require('./generators/screen')

module.exports = (plop) => {
  componentGenerator(plop)
  screenGenerator(plop)
}
