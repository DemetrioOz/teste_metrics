module.exports = {
  verbose: true,
  transform: {
    "^.+\\.ts$": "ts-jest",
  },
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  clearMocks: true,
  transformIgnorePatterns: ["\\\\node_modules\\\\"],
  testMatch: ["**/*.test.ts"],
  testTimeout: 1200000,
  bail: 0,
  reporters: [
    "default",
    [
      "jest-html-reporters",
      {
        publicPath: "./html-report",
        filename: "report.html",
        expand: false,
      },
    ],
  ],
};
