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
      "electron/index.js",
      "public/index.html",
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

describe("generator-react-app-electron:app with args", () => {
  beforeAll(() => {
    return helpers
      .run(path.join(__dirname, "../generators/app"))
      .withOptions({ name: "my-sample-project" });
  });

  it("creates files", () => {
    assert.file([
      ".storybook/config.js",
      "electron/index.js",
      "public/index.html",
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
