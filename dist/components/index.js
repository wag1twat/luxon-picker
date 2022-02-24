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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.defaultComponents = void 0;
var react_1 = __importDefault(require("react"));
var ClockIcon = function (_a) {
    var style = _a.style, props = __rest(_a, ["style"]);
    return react_1["default"].createElement("img", __assign({ style: __assign(__assign({}, style), { width: 30, height: 30 }), src: "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjwhRE9DVFlQRSBzdmcgIFBVQkxJQyAnLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4nICAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz48c3ZnIGhlaWdodD0iNTEycHgiIGlkPSJMYXllcl8xIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyOyIgdmVyc2lvbj0iMS4xIiB2aWV3Qm94PSIwIDAgNTEyIDUxMiIgd2lkdGg9IjUxMnB4IiB4bWw6c3BhY2U9InByZXNlcnZlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj48Zz48cGF0aCBkPSJNMjU2LDQ4QzE0MS4xLDQ4LDQ4LDE0MS4xLDQ4LDI1NnM5My4xLDIwOCwyMDgsMjA4YzExNC45LDAsMjA4LTkzLjEsMjA4LTIwOFMzNzAuOSw0OCwyNTYsNDh6IE0yNTYsNDQ2LjcgICBjLTEwNS4xLDAtMTkwLjctODUuNS0xOTAuNy0xOTAuN2MwLTEwNS4xLDg1LjUtMTkwLjcsMTkwLjctMTkwLjdjMTA1LjEsMCwxOTAuNyw4NS41LDE5MC43LDE5MC43ICAgQzQ0Ni43LDM2MS4xLDM2MS4xLDQ0Ni43LDI1Niw0NDYuN3oiLz48cG9seWdvbiBwb2ludHM9IjI1NiwyNTYgMTYwLDI1NiAxNjAsMjczLjMgMjczLjMsMjczLjMgMjczLjMsMTI4IDI1NiwxMjggICIvPjwvZz48L3N2Zz4=" }, props));
};
var Input = react_1["default"].forwardRef(function (props, ref) {
    return react_1["default"].createElement("input", __assign(__assign({}, props), { ref: ref }));
});
var TimeInput = react_1["default"].forwardRef(function (_a, ref) {
    var style = _a.style, props = __rest(_a, ["style"]);
    return react_1["default"].createElement("input", __assign(__assign({ style: __assign(__assign({}, style), { padding: 5, borderWidth: 1, borderRadius: 4 }) }, props), { ref: ref }));
});
var PrevMonthButton = function (_a) {
    var style = _a.style, props = __rest(_a, ["style"]);
    return react_1["default"].createElement("button", __assign({ style: __assign(__assign({}, style), { padding: 10 }) }, props));
};
var NextMonthButton = function (_a) {
    var style = _a.style, props = __rest(_a, ["style"]);
    return react_1["default"].createElement("button", __assign({ style: __assign(__assign({}, style), { padding: 10 }) }, props));
};
var DateButton = function (_a) {
    var style = _a.style, isActive = _a.isActive, props = __rest(_a, ["style", "isActive"]);
    return react_1["default"].createElement("button", __assign({ style: __assign(__assign({}, style), { padding: 5, borderWidth: 1, borderRadius: 4, backgroundColor: isActive ? "lightblue" : "transparent" }) }, props));
};
var CloseButton = function (_a) {
    var style = _a.style, props = __rest(_a, ["style"]);
    return react_1["default"].createElement("button", __assign({ style: __assign(__assign({}, style), { padding: 5, borderWidth: 1, borderRadius: 4, backgroundColor: "lightblue" }) }, props));
};
var Week = function (_a) {
    var style = _a.style, props = __rest(_a, ["style"]);
    return react_1["default"].createElement("span", __assign({ style: __assign(__assign({}, style), { textTransform: "capitalize" }) }, props));
};
var Month = function (_a) {
    var style = _a.style, props = __rest(_a, ["style"]);
    return react_1["default"].createElement("span", __assign({ style: __assign(__assign({}, style), { textTransform: "capitalize" }) }, props));
};
var Container = function (props) {
    return react_1["default"].createElement("div", props);
};
var PickerContainer = function (props) {
    return react_1["default"].createElement("div", props);
};
var Table = function (props) {
    return react_1["default"].createElement("table", props);
};
var Tr = function (props) { return react_1["default"].createElement("tr", props); };
var Td = function (props) { return react_1["default"].createElement("td", props); };
var Th = function (props) { return react_1["default"].createElement("th", props); };
var TableBody = function (props) {
    return react_1["default"].createElement("tbody", props);
};
var TimeWrapper = function (props) {
    return react_1["default"].createElement("div", props);
};
var defaultComponents = {
    ClockIcon: ClockIcon,
    PrevMonthButton: PrevMonthButton,
    NextMonthButton: NextMonthButton,
    DateButton: DateButton,
    CloseButton: CloseButton,
    Week: Week,
    Month: Month,
    Input: Input,
    Container: Container,
    PickerContainer: PickerContainer,
    Table: Table,
    Tr: Tr,
    Td: Td,
    Th: Th,
    TableBody: TableBody,
    TimeWrapper: TimeWrapper,
    TimeInput: TimeInput
};
exports.defaultComponents = defaultComponents;
