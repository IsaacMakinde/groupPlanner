module.exports = {
  bail: 1,
  verbose: true,
  testPathIgnorePatterns: ["<rootDir>/.github", "<rootDir>/node_modules"],
  transform: {
    "^.+\\.(js|jsx|ts|tsx)$": "babel-jest",
  },
  testEnvironment: "jest-environment-jsdom",
  moduleFileExtensions: ["js", "jsx", "ts", "tsx"],
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
  testMatch: ["**/?(*.)+(spec|test).[jt]s?(x)"],
};
// TODO: Add more configurations as needed
