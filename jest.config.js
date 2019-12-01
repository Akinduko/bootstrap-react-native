module.exports = {
  // Load setup-tests.js before test execution
  preset: 'react-native',
  setupFiles: ['<rootDir>/src/config/test/jest-setup.js'],
  transformIgnorePatterns: ['/node_modules/(?!native-base|react-native|react-navigation)/'],
  setupFilesAfterEnv: ['<rootDir>setup-tests.js'],
  reporters: ['default', 'jest-junit'],
  collectCoverageFrom: ['<rootDir>/src/**/*.{js|jsx}', '!<rootDir>/__tests__/**/*.{js|jsx}'],
  moduleNameMapper: {
    '^<assets>/(.*)$': '<rootDir>/src/assets/$1',
    '^<components>/(.*)$': '<rootDir>/src/components/$1',
    '^<config>/(.*)$': '<rootDir>/src/config/$1',
    '^<constants>/(.*)$': '<rootDir>/src/constants/$1',
    '^<integrations>/(.*)$': '<rootDir>/src/integrations/$1',
    '^<navigation>/(.*)$': '<rootDir>/src/navigation/$1',
    '^<screens>/(.*)$': '<rootDir>/src/screens/$1',
    '^<services>/(.*)$': '<rootDir>/src/services/$1',
    '^<state>/(.*)$': '<rootDir>/src/state/$1',
    '^<graphql>/(.*)$': '<rootDir>/src/graphql/$1',
    '^<context>/(.*)$': '<rootDir>/src/context/$1',
    '^<utils>/(.*)$': '<rootDir>/src/utils/$1'
  },
  verbose: true,
  snapshotSerializers: ['enzyme-to-json/serializer']
};
