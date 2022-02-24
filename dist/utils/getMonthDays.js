"use strict";
exports.__esModule = true;
exports.getMonthDays = void 0;
var getNextDates_1 = require("./getNextDates");
var getPrevDates_1 = require("./getPrevDates");
var getMonthDays = function (date) {
    var dates = [];
    var daysInMonth = date.daysInMonth;
    for (var day = 1; day <= daysInMonth; day++) {
        var nextDate = date.set({ day: day });
        if (day === 1) {
            if (nextDate.weekday !== 1) {
                getPrevDates_1.getPrevDates(nextDate).forEach(function (prevDate) {
                    dates.push(prevDate);
                });
                dates.push(date.set({ day: day }));
            }
            else {
                dates.push(date.set({ day: day }));
            }
        }
        else if (day === daysInMonth) {
            if (nextDate.weekday !== 7) {
                dates.push(nextDate);
                getNextDates_1.getNextDates(nextDate).forEach(function (nextDate) {
                    dates.push(nextDate);
                });
            }
        }
        else {
            dates.push(date.set({ day: day }));
        }
    }
    return dates;
};
exports.getMonthDays = getMonthDays;
