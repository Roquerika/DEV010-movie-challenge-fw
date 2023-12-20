export default {
    preset: 'ts-jest',
    testEnvironment: 'jsdom',
    moduleNameMapper:{
      '\\.(css|scss)$': 'identity-obj-proxy',
    },
    moduleDirectories: ['node_modules', 'src'],
    testMatch: ['<rootDir>/src/**/*.test.tsx'],
    setupFilesAfterEnv: ['<rootDir>/src/setupTests.ts'],
    moduleFileExtensions: ['ts','tsx','js','jsx','json','node']
  };

