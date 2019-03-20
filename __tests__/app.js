"use strict";
const path = require("path");
const assert = require("yeoman-assert");
const helpers = require("yeoman-test");

describe("generator-react-app-electron:app", () => {
  beforeAll(() => {
    return helpers
      .run(path.join(__dirname, "../generators/app"))
      .withPrompts({ name: "my-sample-project" });
  });

  it("creates files", () => {
    assert.file([
      ".storybook/config.js",
      "public/main.js",
      "src/App.js",
      "stories/index.js",
      ".env",
      ".eslintrc.json",
      ".gitignore",
      "craco.config.js",
      "main.js",
      "package.json",
      "README.md"
    ]);
  });
});
