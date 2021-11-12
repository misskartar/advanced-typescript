"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var util = require("./lib/utilityFunctions");
var _a = util.GetAllMagazines(), mag1 = _a[0], mag2 = _a[1], rest = _a.slice(2);
console.log('test: ', mag1);
var magTitle = mag1.title;
console.log(magTitle);
var getMagTitle = function (_a) {
    var magTitle = _a.title;
    return magTitle;
};
var res = getMagTitle(mag1);
console.log(res);
//# sourceMappingURL=app.js.map