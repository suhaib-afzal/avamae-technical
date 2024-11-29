module.exports = {
  moduleNameMapper: {
    '\\.(css|less|scss)$': '<rootDir>/__testUtils__/styleMock.js',
  },
  testEnvironment: "<rootDir>/__testUtils__/FixJSDOMEnvironment.ts"
};
