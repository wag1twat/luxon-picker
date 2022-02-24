"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.useDisclosure = void 0;
var react_1 = __importDefault(require("react"));
var useDisclosure = function () {
    var _a = react_1["default"].useState(true), isOpen = _a[0], setOpen = _a[1];
    return { isOpen: isOpen, onOpen: function () { return setOpen(true); }, onClose: function () { return setOpen(false); } };
};
exports.useDisclosure = useDisclosure;
