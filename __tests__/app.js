"use strict";
const path = require("path");
const assert = require("yeoman-assert");
const helpers = require("yeoman-test");

const expectedFiles = [
  ".storybook/main.js",
  "electron/index.js",
  "public/index.html",
  "src/App.js",
  "src/stories/Button.stories.tsx",
  ".env",
  ".eslintrc.json",
  ".gitignore",
  "craco.config.js",
  "main.js",
  "package.json",
  "README.md"
];

function testFiles() {
  for (const f of expectedFiles) {
    it(`creates ${f}`, () => {
      assert.file([f]);
    });
  }
}

describe("generator-react-app-electron:app", () => {
  beforeAll(() => {
    return helpers
      .run(path.join(__dirname, "../generators/app"))
      .withPrompts({ name: "my-sample-project" });
  });

  testFiles();
});

describe("generator-react-app-electron:app with args", () => {
  beforeAll(() => {
    return helpers
      .run(path.join(__dirname, "../generators/app"))
      .withOptions({ name: "my-sample-project" });
  });

  testFiles();
});
