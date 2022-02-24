"use strict";
exports.__esModule = true;
exports.matrixify = void 0;
var matrixify = function (arr) {
    var matrix = [];
    var arrLength = arr.length;
    for (var i = 0; i < arrLength; i += 7) {
        matrix.push(arr.slice(i, 7 + i));
    }
    return matrix;
};
exports.matrixify = matrixify;
