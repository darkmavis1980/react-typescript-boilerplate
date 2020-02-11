module.exports = {
  // The root of your source code, typically /src
  // `<rootDir>` is a token Jest substitutes
  roots: ["<rootDir>/src"],

  // Automatically clear mock calls and instances between every test
  clearMocks: true,

  // Jest transformations -- this adds support for TypeScript
  // using ts-jest
  transform: {
    "^.+\\.tsx?$": "ts-jest"
  },

  // Runs special logic, such as cleaning up components
  // when using React Testing Library and adds special
  // extended assertions to Jest
  setupFilesAfterEnv: [
    "@testing-library/jest-dom/extend-expect",
    "<rootDir>/jest/setupEnzyme.ts"
  ],

   // The directory where Jest should output its coverage files
   coverageDirectory: "coverage",

   // An array of regexp pattern strings used to skip coverage collection
   // coveragePathIgnorePatterns: [
   //   "/node_modules/"
   // ],

   // A list of reporter names that Jest uses when writing coverage reports
   coverageReporters: [
       "json",
       "text",
       "lcov",
       "clover",
       "cobertura"
   ],

   // An object that configures minimum threshold enforcement for coverage results
   coverageThreshold: {"global": {"branches": 35, "functions": 40, "lines": 40, "statements": 40}},

  // Test spec file resolution pattern
  // Matches parent folder `__tests__` and filename
  // should contain `test` or `spec`.
  testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$",

  // Module file extensions for importing
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],

  // An array of regexp pattern strings, matched against all module paths before considered 'visible' to the module loader
  // modulePathIgnorePatterns: [],
  modulePathIgnorePatterns: [
    "<rootDir>/node_modules/", "<rootDir>/dist/*"
  ],
   // The paths to modules that run some code to configure or set up the testing environment before each test
  // setupFiles: [
  //   "./jest/jest.setup.js"
  // ],
  // An array of regexp pattern strings that are matched against all source file paths, matched files will skip transformation
  transformIgnorePatterns: [
    "/node_modules/"
  ],
  // The test environment that will be used for testing
  testEnvironment: "node",

  // Setup Enzyme
  snapshotSerializers: ["enzyme-to-json/serializer"]
};