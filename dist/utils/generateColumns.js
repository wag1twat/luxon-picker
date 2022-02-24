"use strict";
exports.__esModule = true;
exports.generateColumns = void 0;
var generateColumn_1 = require("./generateColumn");
var generateColumns = function () {
    return Array.from(Array(7).keys()).map(function (weekday) { return generateColumn_1.generateColumn(weekday + 1); });
};
exports.generateColumns = generateColumns;
