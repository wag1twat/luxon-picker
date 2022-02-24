"use strict";
exports.__esModule = true;
exports.getNextDates = void 0;
var getNextDates = function (nextDate) {
    return Array.from(Array(7 - nextDate.weekday).keys()).map(function (key) {
        return nextDate.plus({ day: key + 1 });
    });
};
exports.getNextDates = getNextDates;
