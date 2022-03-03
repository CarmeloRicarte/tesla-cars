module.exports = {
  preset: 'jest-preset-angular',
  setupFilesAfterEnv: ['<rootDir>/setup-jest.ts'],
  globalSetup: 'jest-preset-angular/global-setup',
  reporters: [
    "default",
    ["jest-html-reporters", {
      "publicPath": "./html-tests-report",
      "filename": "tests-report.html",
      "openReport": true
    }]
  ],
  moduleNameMapper: {
    "^src/(.*)$": "<rootDir>/src/$1"
  }
};
