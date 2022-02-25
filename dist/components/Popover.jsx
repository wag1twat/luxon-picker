"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.Popover = void 0;
var react_1 = __importDefault(require("react"));
var Popover = function (_a) {
    var isOpen = _a.isOpen, children = _a.children;
    if (isOpen) {
        return <>{children}</>;
    }
    return null;
};
exports.Popover = Popover;
