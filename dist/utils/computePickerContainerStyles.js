"use strict";
exports.__esModule = true;
exports.computePickerContainerStyles = void 0;
var computePickerContainerStyles = function (offsetHeight) {
    if (offsetHeight === void 0) { offsetHeight = 0; }
    return {
        position: "absolute",
        top: offsetHeight + 5,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 1,
        width: "fit-content"
    };
};
exports.computePickerContainerStyles = computePickerContainerStyles;
