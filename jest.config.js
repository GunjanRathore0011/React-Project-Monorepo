export default {
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.[tj]sx?$": "babel-jest",
  },
  roots: ["<rootDir>/apps"], // test files inside all apps
  moduleFileExtensions: ["js", "jsx"],
  collectCoverage: true,
  collectCoverageFrom: [
    "apps/**/*.{js,jsx}",
    "!**/node_modules/**",
    "!**/dist/**",
  ],
  coverageDirectory: "coverage",
};
