"use strict";
exports.__esModule = true;
exports.mergeClasses = void 0;
var mergeClasses = function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    return args
        .filter(function (arg) { return Boolean(arg); })
        .join(" ")
        .trim();
};
exports.mergeClasses = mergeClasses;
