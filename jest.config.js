module.exports = {
  preset: 'jest-expo',
  testPathIgnorePatterns: ['/node_modules', '/android', '/ios'],
  setupFilesAfterEnv: [
    '@testing-library/jest-native/extend-expect',
    './jest.setup.js',
  ],
  transformIgnorePatterns: ['/node_modules/(?!native-base)/'],
  collectCoverage: true,
  collectCoverageFrom: [
    '**/*.{ts,tsx}',
    '!**/coverage/**',
    '!**/node_modules/**',
    '!**/babel.config.js',
    '!./src/styles/theme/*.ts',
    '!./src/utils/test/*.tsx',
    '!./src/routes/**',
    '!./src/@types/**',
    '!./src/components/**/mock.ts',
    '!./App.tsx',
  ],
}
