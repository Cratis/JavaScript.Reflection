"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _TypeInfo = require("./TypeInfo");

Object.keys(_TypeInfo).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _TypeInfo[key];
    }
  });
});
//# sourceMappingURL=index.js.map
