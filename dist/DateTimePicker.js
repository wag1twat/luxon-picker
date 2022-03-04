"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.DateTimePicker = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = __importDefault(require("react"));
var luxon_1 = require("luxon");
var utils_1 = require("./utils");
var components_1 = require("./components");
var useOutsideClick_1 = require("./utils/useOutsideClick");
var classes = require("./date-time-picker.module.css");
var columns = (0, utils_1.generateColumns)();
var DateTimePicker = react_1["default"].memo(function (_a) {
    var _b = _a.locale, locale = _b === void 0 ? "ru" : _b, _c = _a.inputFormat, inputFormat = _c === void 0 ? "dd.LL.yyyy" : _c, components = _a.components, date = _a.date, onChangeDate = _a.onChangeDate;
    var assignComponents = react_1["default"].useMemo(function () { return (__assign(__assign({}, components_1.defaultComponents), components)); }, [components]);
    var _d = react_1["default"].useState(luxon_1.DateTime.local().setLocale(locale)), currentDate = _d[0], setCurrentDate = _d[1];
    var rows = react_1["default"].useMemo(function () { return (0, utils_1.matrixify)((0, utils_1.getMonthDays)(currentDate)); }, [currentDate]);
    var _e = (0, utils_1.useDisclosure)(), isOpen = _e.isOpen, onOpen = _e.onOpen, onClose = _e.onClose;
    var inputRef = react_1["default"].useRef(null);
    var handleOpen = react_1["default"].useCallback(function (e) {
        e.stopPropagation();
        onOpen();
    }, [onOpen]);
    var handleClose = react_1["default"].useCallback(function (e) {
        e.stopPropagation();
        onClose();
    }, [onClose]);
    var handleChangeDate = react_1["default"].useCallback(function (d) { return function (e) {
        e.stopPropagation();
        onChangeDate(d);
    }; }, [onChangeDate]);
    var handleChangeTime = react_1["default"].useCallback(function (d, type, min, max) {
        return function (e) {
            var _a, _b;
            e.stopPropagation();
            if (d) {
                var int = parseInt(e.target.value, 10);
                if (isNaN(int)) {
                    return onChangeDate(d.set((_a = {}, _a[type] = 0, _a)));
                }
                if (int >= min && int <= max) {
                    return onChangeDate(d.set((_b = {}, _b[type] = int, _b)));
                }
            }
        };
    }, [onChangeDate]);
    var handleChangeYear = react_1["default"].useCallback(function (e) {
        e.stopPropagation();
        var int = parseInt(e.target.value, 10);
        if (isNaN(int)) {
            return;
        }
        setCurrentDate(function (prevCurrentDate) {
            var nextCurrentDate = prevCurrentDate.set({ year: int });
            if (nextCurrentDate.isValid) {
                return nextCurrentDate;
            }
            return prevCurrentDate;
        });
    }, [setCurrentDate]);
    var handleNextMonth = react_1["default"].useCallback(function (e) {
        e.stopPropagation();
        setCurrentDate(function (prev) { return prev.plus({ month: 1 }); });
    }, [setCurrentDate]);
    var handlePrevMonth = react_1["default"].useCallback(function (e) {
        e.stopPropagation();
        setCurrentDate(function (prev) { return prev.minus({ month: 1 }); });
    }, [setCurrentDate]);
    react_1["default"].useEffect(function () {
        var current = inputRef.current;
        if (current) {
            current.addEventListener("click", handleOpen);
        }
        return function () {
            if (current) {
                current.removeEventListener("click", handleOpen);
            }
        };
    }, [handleOpen]);
    var pickerContainerRef = react_1["default"].useRef(null);
    (0, useOutsideClick_1.useOutsideClick)({
        ref: pickerContainerRef,
        handler: function (e) { return handleClose(e); }
    });
    return ((0, jsx_runtime_1.jsxs)(assignComponents.Container, __assign({ className: classes.container }, { children: [(0, jsx_runtime_1.jsx)(assignComponents.Input, { ref: inputRef, readOnly: true, defaultValue: "", value: date ? date.toFormat(inputFormat) : "" }, void 0), (0, jsx_runtime_1.jsx)(assignComponents.PickerContainer, __assign({ className: classes.picker_container, hidden: !isOpen, ref: function (ref) {
                    if (ref) {
                        var styles = (0, utils_1.computePickerContainerPosition)(ref, inputRef);
                        ref.style.top = styles.top;
                        ref.style.left = styles.left;
                        ref.style.right = styles.right;
                    }
                    pickerContainerRef.current = ref;
                } }, { children: (0, jsx_runtime_1.jsx)(assignComponents.Table, __assign({ className: classes.root_table }, { children: (0, jsx_runtime_1.jsxs)(assignComponents.TableBody, __assign({ className: classes.root_table_body }, { children: [(0, jsx_runtime_1.jsxs)(assignComponents.Tr, __assign({ className: classes.root_tr }, { children: [(0, jsx_runtime_1.jsx)(assignComponents.Th, __assign({ colSpan: 2, className: classes.root_th }, { children: (0, jsx_runtime_1.jsx)(assignComponents.PrevMonthButton, { className: classes.prev_month_button, onClick: handlePrevMonth, children: "<" }, void 0) }), void 0), (0, jsx_runtime_1.jsx)(assignComponents.Th, __assign({ colSpan: 3, className: (0, utils_1.mergeClasses)(classes.root_th, classes.root_th_month) }, { children: (0, jsx_runtime_1.jsx)(assignComponents.Month, { children: currentDate.monthLong }, void 0) }), void 0), (0, jsx_runtime_1.jsx)(assignComponents.Th, __assign({ colSpan: 3, className: (0, utils_1.mergeClasses)(classes.root_th, classes.root_th_year) }, { children: (0, jsx_runtime_1.jsx)(assignComponents.YearInput, { type: "number", defaultValue: currentDate.year, value: currentDate.year, onChange: handleChangeYear, className: classes.input_year }, void 0) }), void 0), (0, jsx_runtime_1.jsx)(assignComponents.Th, __assign({ colSpan: 2, className: classes.root_th }, { children: (0, jsx_runtime_1.jsx)(assignComponents.NextMonthButton, { className: classes.next_month_button, onClick: handleNextMonth, children: ">" }, void 0) }), void 0)] }), void 0), (0, jsx_runtime_1.jsx)(assignComponents.Tr, __assign({ className: classes.root_tr }, { children: (0, jsx_runtime_1.jsx)(assignComponents.Td, __assign({ colSpan: 9, className: classes.root_td }, { children: (0, jsx_runtime_1.jsx)(assignComponents.Table, __assign({ className: classes.calendar_table }, { children: (0, jsx_runtime_1.jsxs)(assignComponents.TableBody, __assign({ className: classes.calendar_table_body }, { children: [(0, jsx_runtime_1.jsx)(assignComponents.Tr, __assign({ className: classes.calendar_tr }, { children: columns.map(function (_a) {
                                                        var weekday = _a.weekday;
                                                        return ((0, jsx_runtime_1.jsx)(assignComponents.Th, __assign({ className: classes.calendar_th }, { children: (0, jsx_runtime_1.jsx)(assignComponents.Week, { children: currentDate.set({ weekday: weekday }).weekdayShort }, void 0) }), "__weekday__" + weekday + "__"));
                                                    }) }), void 0), rows.map(function (dates, datesIndex) {
                                                    return ((0, jsx_runtime_1.jsx)(assignComponents.Tr, __assign({ className: classes.calendar_tr }, { children: dates.map(function (datetime, dateIndex) {
                                                            return ((0, jsx_runtime_1.jsx)(assignComponents.Td, __assign({ className: classes.calendar_td }, { children: (0, jsx_runtime_1.jsx)(assignComponents.DateButton, { className: classes.calendar_date_button, "data-date-active": date
                                                                        ? date.ordinal === datetime.ordinal
                                                                        : false, onClick: handleChangeDate(datetime), children: datetime.day }, void 0) }), "__date__" + dateIndex + "__"));
                                                        }) }), "__dates__" + datesIndex + "__"));
                                                }), (0, jsx_runtime_1.jsxs)(assignComponents.Tr, __assign({ className: classes.calendar_tr }, { children: [(0, jsx_runtime_1.jsx)(assignComponents.Td, __assign({ colSpan: 1, className: classes.calendar_td }, { children: (0, jsx_runtime_1.jsx)(assignComponents.ClockIcon, { className: classes.calendar_clock_icon }, void 0) }), void 0), (0, jsx_runtime_1.jsx)(assignComponents.Td, __assign({ colSpan: 2, className: classes.calendar_td }, { children: (0, jsx_runtime_1.jsx)(assignComponents.TimeInput, { className: classes.calendar_time_input, type: "number", defaultValue: date === null || date === void 0 ? void 0 : date.hour.toString(), value: date === null || date === void 0 ? void 0 : date.hour.toString(), onChange: handleChangeTime(date, "hour", 0, 23), disabled: date === null }, void 0) }), void 0), (0, jsx_runtime_1.jsx)(assignComponents.Td, __assign({ colSpan: 2, className: classes.calendar_td }, { children: (0, jsx_runtime_1.jsx)(assignComponents.TimeInput, { className: classes.calendar_time_input, type: "number", defaultValue: date === null || date === void 0 ? void 0 : date.minute.toString(), value: date === null || date === void 0 ? void 0 : date.minute.toString(), onChange: handleChangeTime(date, "minute", 0, 59), disabled: date === null }, void 0) }), void 0)] }), void 0), (0, jsx_runtime_1.jsxs)(assignComponents.Tr, __assign({ className: classes.calendar_tr }, { children: [(0, jsx_runtime_1.jsx)(assignComponents.Td, { colSpan: 3 }, void 0), (0, jsx_runtime_1.jsx)(assignComponents.Td, __assign({ colSpan: 2, className: classes.calendar_td }, { children: (0, jsx_runtime_1.jsx)(assignComponents.NowButton, { className: classes.calendar_now_button, onClick: function () { return onChangeDate(luxon_1.DateTime.now()); }, children: "Now" }, void 0) }), void 0), (0, jsx_runtime_1.jsx)(assignComponents.Td, __assign({ colSpan: 2, className: classes.calendar_td }, { children: (0, jsx_runtime_1.jsx)(assignComponents.CloseButton, { className: classes.calendar_close_button, onClick: handleClose, children: "Close" }, void 0) }), void 0)] }), void 0)] }), void 0) }), void 0) }), void 0) }), void 0)] }), void 0) }), void 0) }), void 0)] }), void 0));
});
exports.DateTimePicker = DateTimePicker;
