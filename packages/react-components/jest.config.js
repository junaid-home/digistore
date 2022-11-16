module.exports = {
  roots: ["<rootDir>/src"],
  testRegex: "(/.*\\.spec)\\.(ts|tsx)$",
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
  moduleNameMapper: {
    "\\.(css|scss)$": "identity-obj-proxy",
  },
  testEnvironment: "jsdom",
};
