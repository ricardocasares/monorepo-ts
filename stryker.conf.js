module.exports = function(config) {
  config.set({
    mutator: "typescript",
    packageManager: "yarn",
    reporters: ["clear-text", "progress"],
    testRunner: "jest",
    transpilers: ["typescript"],
    coverageAnalysis: "off",
    tsconfigFile: "packages/tsconfig.base.json",
    mutate: ["packages/**/*.ts", "!packages/**/*@(.test).ts"]
  });
};
