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
var react_1 = __importDefault(require("react"));
var luxon_1 = require("luxon");
var utils_1 = require("./utils");
var components_1 = require("./components");
var Popover_1 = require("./components/Popover");
var columns = utils_1.generateColumns();
var DateTimePicker = react_1["default"].memo(function (_a) {
    var _b;
    var _c = _a.locale, locale = _c === void 0 ? "ru" : _c, _d = _a.inputFormat, inputFormat = _d === void 0 ? "dd.LL.yyyy" : _d, components = _a.components, date = _a.date, onChangeDate = _a.onChangeDate;
    var _e = utils_1.useDisclosure(), isOpen = _e.isOpen, onOpen = _e.onOpen, onClose = _e.onClose;
    var _f = react_1["default"].useState(luxon_1.DateTime.local().setLocale(locale)), currentDate = _f[0], setCurrentDate = _f[1];
    var rows = react_1["default"].useMemo(function () { return utils_1.matrixify(utils_1.getMonthDays(currentDate)); }, [currentDate]);
    var assignComponents = react_1["default"].useMemo(function () { return (__assign(__assign({}, components_1.defaultComponents), components)); }, [components]);
    var inputRef = react_1["default"].useRef(null);
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
    var handleClose = react_1["default"].useCallback(function (e) {
        e.stopPropagation();
        onClose();
    }, [onClose]);
    react_1["default"].useEffect(function () {
        var current = inputRef.current;
        if (current) {
            current.addEventListener("click", onOpen);
        }
        return function () {
            if (current) {
                current.removeEventListener("click", onOpen);
            }
        };
    }, [onOpen]);
    return react_1["default"].createElement(assignComponents.Container, {
        style: { position: "relative", display: "flex" }
    }, react_1["default"].createElement(assignComponents.Input, {
        readOnly: true,
        defaultValue: "",
        value: date ? date.toFormat(inputFormat) : "",
        ref: inputRef
    }), react_1["default"].createElement(Popover_1.Popover, {
        PickerContainer: assignComponents.PickerContainer,
        isOpen: isOpen,
        style: utils_1.computePickerContainerStyles((_b = inputRef.current) === null || _b === void 0 ? void 0 : _b.offsetHeight)
    }, react_1["default"].createElement(assignComponents.Table, {
        style: {
            backgroundColor: "#fff",
            borderWidth: 1,
            borderColor: "lightblue",
            borderRadius: 4,
            borderCollapse: "separate"
        }
    }, react_1["default"].createElement(assignComponents.TableBody, null, react_1["default"].createElement(assignComponents.Tr, null, react_1["default"].createElement(assignComponents.Th, { colSpan: 1 }, react_1["default"].createElement(assignComponents.PrevMonthButton, {
        onClick: function (e) {
            e.stopPropagation();
            setCurrentDate(function (prev) { return prev.minus({ month: 1 }); });
        },
        style: {
            cursor: "pointer"
        }
    }, "<")), react_1["default"].createElement(assignComponents.Th, { colSpan: 7 }, react_1["default"].createElement(assignComponents.Month, null, currentDate.monthLong)), react_1["default"].createElement(assignComponents.Th, { colSpan: 1 }, react_1["default"].createElement(assignComponents.NextMonthButton, {
        onClick: function (e) {
            e.stopPropagation();
            setCurrentDate(function (prev) { return prev.plus({ month: 1 }); });
        },
        style: {
            cursor: "pointer"
        }
    }, ">"))), react_1["default"].createElement(assignComponents.Tr, null, react_1["default"].createElement(assignComponents.Td), react_1["default"].createElement(assignComponents.Td, { colSpan: 7 }, react_1["default"].createElement(assignComponents.Table, null, react_1["default"].createElement(assignComponents.TableBody, null, react_1["default"].createElement(assignComponents.Tr, null, columns.map(function (column) {
        return react_1["default"].createElement(assignComponents.Th, { key: column.weekday }, react_1["default"].createElement(assignComponents.Week, null, currentDate.set({ weekday: column.weekday })
            .weekdayShort));
    })), rows.map(function (row, rowIndex) {
        return react_1["default"].createElement(assignComponents.Tr, { key: "__row__" + rowIndex + "__" }, row.map(function (d, dIndex) {
            return react_1["default"].createElement(assignComponents.Td, { key: "__d_" + dIndex + "__" }, react_1["default"].createElement(assignComponents.DateButton, {
                style: { cursor: "pointer", width: "100%" },
                isActive: date
                    ? date.ordinal === d.ordinal
                    : false,
                onClick: handleChangeDate(d)
            }, d.day));
        }));
    })))), react_1["default"].createElement(assignComponents.Td)), react_1["default"].createElement(assignComponents.Tr, null, react_1["default"].createElement(assignComponents.Td), react_1["default"].createElement(assignComponents.Td, {
        colSpan: 7
    }, react_1["default"].createElement(assignComponents.TimeWrapper, {
        style: {
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center"
        }
    }, react_1["default"].createElement(assignComponents.ClockIcon, {
        style: { margin: 10 }
    }), react_1["default"].createElement(assignComponents.TimeInput, {
        type: "number",
        defaultValue: date === null || date === void 0 ? void 0 : date.hour.toString(),
        value: date === null || date === void 0 ? void 0 : date.hour.toString(),
        onChange: handleChangeTime(date, "hour", 0, 23),
        style: {
            maxWidth: 60
        },
        disabled: date === null
    }), react_1["default"].createElement("span", { style: { margin: 10 } }, ":"), react_1["default"].createElement(assignComponents.TimeInput, {
        type: "number",
        defaultValue: date === null || date === void 0 ? void 0 : date.minute.toString(),
        value: date === null || date === void 0 ? void 0 : date.minute.toString(),
        onChange: handleChangeTime(date, "minute", 0, 59),
        style: {
            maxWidth: 60
        },
        disabled: date === null
    }))), react_1["default"].createElement(assignComponents.Td)), react_1["default"].createElement(assignComponents.Tr, null, react_1["default"].createElement(assignComponents.Td, { colSpan: 9 }, react_1["default"].createElement(assignComponents.CloseButton, {
        style: { float: "right", cursor: "pointer" },
        onClick: handleClose
    }, "close")))))));
});
exports.DateTimePicker = DateTimePicker;
