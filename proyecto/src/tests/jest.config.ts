module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'jsdom',
    moduleDirectories: ['node_modules', 'src'],
    testMatch: ['<rootDir>/src/**/*.test.tsx'],
    setupFilesAfterEnv: ['<rootDir>/src/setupTests.ts'],
  };