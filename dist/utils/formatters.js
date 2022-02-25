"use strict";
exports.__esModule = true;
exports.getCurrentISODate = exports.getCurrentShortISODateTime = exports.formatShortISODateTime = exports.formatShortDateTime = exports.formatDate = exports.formatDateTimeShortNumeric = exports.formatDateTimeNumeric = exports.formatDateTime = void 0;
var luxon_1 = require("luxon");
/**
 * @param date
 * @returns 25 февр. 2021 г., 15:10
 */
var formatDateTime = function (date) {
    return luxon_1.DateTime.fromISO(date).toLocaleString(luxon_1.DateTime.DATETIME_MED);
};
exports.formatDateTime = formatDateTime;
/**
 * @param date
 * @returns 25.02.2021 15:10
 */
var formatDateTimeNumeric = function (date) {
    return luxon_1.DateTime.fromISO(date).toFormat("dd.LL.yyyy HH:mm");
};
exports.formatDateTimeNumeric = formatDateTimeNumeric;
/**
 * @param date
 * @returns 25.02.21 15:11
 */
var formatDateTimeShortNumeric = function (date) {
    return luxon_1.DateTime.fromISO(date).toFormat("dd.LL.yy HH:mm");
};
exports.formatDateTimeShortNumeric = formatDateTimeShortNumeric;
/**
 * @param date
 * @returns 25.02.2021
 */
var formatDate = function (date) {
    return luxon_1.DateTime.fromISO(date).toFormat("dd.LL.yyyy");
};
exports.formatDate = formatDate;
/**
 * @param date
 * @returns 25 февр., 15:10
 */
var formatShortDateTime = function (date) {
    return luxon_1.DateTime.fromISO(date).toFormat("dd LLL HH:mm");
};
exports.formatShortDateTime = formatShortDateTime;
/**
 * @param date
 * @returns 2021-02-25T15:10
 */
var formatShortISODateTime = function (date) {
    return luxon_1.DateTime.fromISO(date).toFormat("yyyy-LL-dd'T'HH:mm");
};
exports.formatShortISODateTime = formatShortISODateTime;
/**
 * @param date
 * @returns 2021-02-25T15:10
 */
var getCurrentShortISODateTime = function () {
    return (0, exports.formatShortISODateTime)(luxon_1.DateTime.local().toString());
};
exports.getCurrentShortISODateTime = getCurrentShortISODateTime;
/**
 * @param date
 * @returns 2021-02-25
 */
var getCurrentISODate = function () { return luxon_1.DateTime.local().toISODate(); };
exports.getCurrentISODate = getCurrentISODate;
