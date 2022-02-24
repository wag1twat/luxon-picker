"use strict";
exports.__esModule = true;
exports.computePickerContainerStyles = void 0;
var computePickerContainerStyles = function (offsetHeight, spacing) {
    if (offsetHeight === void 0) { offsetHeight = 0; }
    if (spacing === void 0) { spacing = 5; }
    return {
        position: "absolute",
        top: offsetHeight + spacing,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 1,
        width: "fit-content"
    };
};
exports.computePickerContainerStyles = computePickerContainerStyles;
