"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.useOutsideClick = void 0;
var react_1 = __importDefault(require("react"));
function isElement(el) {
    return (el != null &&
        typeof el == "object" &&
        "nodeType" in el &&
        el.nodeType === Node.ELEMENT_NODE);
}
function getOwnerDocument(node) {
    var _a;
    return isElement(node) ? (_a = node.ownerDocument) !== null && _a !== void 0 ? _a : document : document;
}
function canUseDOM() {
    return !!(typeof window !== "undefined" &&
        window.document &&
        window.document.createElement);
}
var isBrowser = canUseDOM();
var useSafeLayoutEffect = isBrowser ? react_1["default"].useLayoutEffect : react_1["default"].useEffect;
function useCallbackRef(fn, deps) {
    if (deps === void 0) { deps = []; }
    var ref = react_1["default"].useRef(fn);
    useSafeLayoutEffect(function () {
        ref.current = fn;
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
    return react_1["default"].useCallback((function () {
        var _a;
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return (_a = ref.current) === null || _a === void 0 ? void 0 : _a.call.apply(_a, __spreadArray([ref], args, false));
    }), deps);
}
/**
 * Example, used in components like Dialogs and Popovers so they can close
 * when a user clicks outside them.
 */
function useOutsideClick(props) {
    var ref = props.ref, handler = props.handler, _a = props.enabled, enabled = _a === void 0 ? true : _a;
    var savedHandler = useCallbackRef(handler);
    var stateRef = react_1["default"].useRef({
        isPointerDown: false,
        ignoreEmulatedMouseEvents: false
    });
    var state = stateRef.current;
    react_1["default"].useEffect(function () {
        if (!enabled)
            return;
        var onPointerDown = function (e) {
            if (isValidEvent(e, ref)) {
                state.isPointerDown = true;
            }
        };
        var onMouseUp = function (event) {
            if (state.ignoreEmulatedMouseEvents) {
                state.ignoreEmulatedMouseEvents = false;
                return;
            }
            if (state.isPointerDown && handler && isValidEvent(event, ref)) {
                state.isPointerDown = false;
                savedHandler(event);
            }
        };
        var onTouchEnd = function (event) {
            state.ignoreEmulatedMouseEvents = true;
            if (handler && state.isPointerDown && isValidEvent(event, ref)) {
                state.isPointerDown = false;
                savedHandler(event);
            }
        };
        var doc = getOwnerDocument(ref.current);
        doc.addEventListener("mousedown", onPointerDown, true);
        doc.addEventListener("mouseup", onMouseUp, true);
        doc.addEventListener("touchstart", onPointerDown, true);
        doc.addEventListener("touchend", onTouchEnd, true);
        return function () {
            doc.removeEventListener("mousedown", onPointerDown, true);
            doc.removeEventListener("mouseup", onMouseUp, true);
            doc.removeEventListener("touchstart", onPointerDown, true);
            doc.removeEventListener("touchend", onTouchEnd, true);
        };
    }, [handler, ref, savedHandler, state, enabled]);
}
exports.useOutsideClick = useOutsideClick;
function isValidEvent(event, ref) {
    var _a;
    var target = event.target;
    if (event.button > 0)
        return false;
    // if the event target is no longer in the document
    if (target) {
        var doc = getOwnerDocument(target);
        if (!doc.body.contains(target))
            return false;
    }
    return !((_a = ref.current) === null || _a === void 0 ? void 0 : _a.contains(target));
}
