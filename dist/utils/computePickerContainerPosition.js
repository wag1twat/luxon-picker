"use strict";
exports.__esModule = true;
exports.computePickerContainerPosition = void 0;
var computePickerContainerPosition = function (pickerContainerRef, inputRef) {
    var result = { top: "0px", right: "0px", left: "0px" };
    if (pickerContainerRef && inputRef.current) {
        var innerHeight_1 = globalThis.innerHeight;
        var innerWidth_1 = globalThis.innerWidth;
        var height = pickerContainerRef.clientHeight;
        var inputHeight = inputRef.current.clientHeight;
        var _a = pickerContainerRef.getBoundingClientRect(), bottom = _a.bottom, right = _a.right;
        if (bottom + height > innerHeight_1) {
            result.top = -(height + 5) + "px";
        }
        else {
            result.top = inputHeight + 5 + "px";
        }
        if (right > innerWidth_1) {
            result.left = "-" + (right - innerWidth_1) + "px";
        }
        else {
            result.left = "0px";
        }
    }
    return result;
};
exports.computePickerContainerPosition = computePickerContainerPosition;
