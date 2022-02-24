"use strict";
exports.__esModule = true;
exports.getPrevDates = void 0;
var getPrevDates = function (nextDate) {
    return Array.from(Array(nextDate.weekday - 1).keys())
        .map(function (key) { return nextDate.minus({ day: key + 1 }); })
        .reverse();
};
exports.getPrevDates = getPrevDates;
