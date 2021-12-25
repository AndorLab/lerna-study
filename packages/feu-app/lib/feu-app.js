"use strict";

const { min } = require("feu-tools");
const ui = require("feu-ui");

// module.exports = feuApp;

function feuApp() {
  // TODO
  console.log("入口");
  ui(min(2, 5))
}

feuApp()
