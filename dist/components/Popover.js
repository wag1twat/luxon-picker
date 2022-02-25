"use strict";
exports.__esModule = true;
exports.Popover = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var Popover = function (_a) {
    var isOpen = _a.isOpen, children = _a.children;
    if (isOpen) {
        return (0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: children }, void 0);
    }
    return null;
};
exports.Popover = Popover;
