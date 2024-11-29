/** @type {import('@jest/types').Config.InitialOptions} */
module.exports = {
  verbose: true,
  collectCoverage: true,
  coverageReporters: ['text', 'html', 'lcov'],
  testEnvironment: 'node',
  roots: ['<rootDir>/tests/'],
  coverageDirectory: '<rootDir>/coverage',
};
