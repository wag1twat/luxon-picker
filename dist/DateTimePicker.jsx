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
var date_time_picker_module_css_1 = __importDefault(require("./date-time-picker.module.css"));
var luxon_1 = require("luxon");
var utils_1 = require("./utils");
var components_1 = require("./components");
var Popover_1 = require("./components/Popover");
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
    return (<assignComponents.Container className={date_time_picker_module_css_1["default"].container}>
        <assignComponents.Input ref={inputRef} readOnly={true} defaultValue="" value={date ? date.toFormat(inputFormat) : ""}/>
        <Popover_1.Popover isOpen={isOpen}>
          <assignComponents.PickerContainer className={date_time_picker_module_css_1["default"].picker_container} ref={function (ref) {
            if (ref) {
                var styles = (0, utils_1.computePickerContainerPosition)(ref, inputRef);
                ref.style.top = styles.top;
                ref.style.left = styles.left;
                ref.style.right = styles.right;
            }
        }}>
            <assignComponents.Table className={date_time_picker_module_css_1["default"].root_table}>
              <assignComponents.TableBody className={date_time_picker_module_css_1["default"].root_table_body}>
                <assignComponents.Tr className={date_time_picker_module_css_1["default"].root_tr}>
                  <assignComponents.Th colSpan={2} className={date_time_picker_module_css_1["default"].root_th}>
                    <assignComponents.PrevMonthButton className={date_time_picker_module_css_1["default"].prev_month_button} onClick={handlePrevMonth} children={"<"}/>
                  </assignComponents.Th>
                  <assignComponents.Th colSpan={3} className={(0, utils_1.mergeClasses)(date_time_picker_module_css_1["default"].root_th, date_time_picker_module_css_1["default"].root_th_month)}>
                    <assignComponents.Month children={currentDate.monthLong}/>
                  </assignComponents.Th>
                  <assignComponents.Th colSpan={3} className={(0, utils_1.mergeClasses)(date_time_picker_module_css_1["default"].root_th, date_time_picker_module_css_1["default"].root_th_year)}>
                    <assignComponents.YearInput type="number" defaultValue={currentDate.year} value={currentDate.year} onChange={handleChangeYear} className={date_time_picker_module_css_1["default"].input_year}/>
                  </assignComponents.Th>
                  <assignComponents.Th colSpan={2} className={date_time_picker_module_css_1["default"].root_th}>
                    <assignComponents.NextMonthButton className={date_time_picker_module_css_1["default"].next_month_button} onClick={handleNextMonth} children={">"}/>
                  </assignComponents.Th>
                </assignComponents.Tr>
                <assignComponents.Tr className={date_time_picker_module_css_1["default"].root_tr}>
                  <assignComponents.Td colSpan={9} className={date_time_picker_module_css_1["default"].root_td}>
                    <assignComponents.Table className={date_time_picker_module_css_1["default"].calendar_table}>
                      <assignComponents.TableBody className={date_time_picker_module_css_1["default"].calendar_table_body}>
                        <assignComponents.Tr className={date_time_picker_module_css_1["default"].calendar_tr}>
                          {columns.map(function (_a) {
            var weekday = _a.weekday;
            return (<assignComponents.Th key={"__weekday__" + weekday + "__"} className={date_time_picker_module_css_1["default"].calendar_th}>
                                <assignComponents.Week>
                                  {currentDate.set({ weekday: weekday }).weekdayShort}
                                </assignComponents.Week>
                              </assignComponents.Th>);
        })}
                        </assignComponents.Tr>
                        {rows.map(function (dates, datesIndex) {
            return (<assignComponents.Tr key={"__dates__" + datesIndex + "__"} className={date_time_picker_module_css_1["default"].calendar_tr}>
                              {dates.map(function (datetime, dateIndex) {
                    return (<assignComponents.Td key={"__date__" + dateIndex + "__"} className={date_time_picker_module_css_1["default"].calendar_td}>
                                    <assignComponents.DateButton className={date_time_picker_module_css_1["default"].calendar_date_button} data-date-active={date
                            ? date.ordinal === datetime.ordinal
                            : false} onClick={handleChangeDate(datetime)} children={datetime.day}/>
                                  </assignComponents.Td>);
                })}
                            </assignComponents.Tr>);
        })}

                        <assignComponents.Tr className={date_time_picker_module_css_1["default"].calendar_tr}>
                          <assignComponents.Td colSpan={1} className={date_time_picker_module_css_1["default"].calendar_td}>
                            <assignComponents.ClockIcon className={date_time_picker_module_css_1["default"].calendar_clock_icon}/>
                          </assignComponents.Td>
                          <assignComponents.Td colSpan={2} className={date_time_picker_module_css_1["default"].calendar_td}>
                            <assignComponents.TimeInput className={date_time_picker_module_css_1["default"].calendar_time_input} type="number" defaultValue={date === null || date === void 0 ? void 0 : date.hour.toString()} value={date === null || date === void 0 ? void 0 : date.hour.toString()} onChange={handleChangeTime(date, "hour", 0, 23)} disabled={date === null}/>
                          </assignComponents.Td>
                          <assignComponents.Td colSpan={2} className={date_time_picker_module_css_1["default"].calendar_td}>
                            <assignComponents.TimeInput className={date_time_picker_module_css_1["default"].calendar_time_input} type="number" defaultValue={date === null || date === void 0 ? void 0 : date.minute.toString()} value={date === null || date === void 0 ? void 0 : date.minute.toString()} onChange={handleChangeTime(date, "minute", 0, 59)} disabled={date === null}/>
                          </assignComponents.Td>
                        </assignComponents.Tr>
                        <assignComponents.Tr className={date_time_picker_module_css_1["default"].calendar_tr}>
                          <assignComponents.Td colSpan={3}/>
                          <assignComponents.Td colSpan={2} className={date_time_picker_module_css_1["default"].calendar_td}>
                            <assignComponents.NowButton className={date_time_picker_module_css_1["default"].calendar_now_button} onClick={function () { return onChangeDate(luxon_1.DateTime.now()); }} children="Now"/>
                          </assignComponents.Td>
                          <assignComponents.Td colSpan={2} className={date_time_picker_module_css_1["default"].calendar_td}>
                            <assignComponents.CloseButton className={date_time_picker_module_css_1["default"].calendar_close_button} onClick={handleClose} children="Close"/>
                          </assignComponents.Td>
                        </assignComponents.Tr>
                      </assignComponents.TableBody>
                    </assignComponents.Table>
                  </assignComponents.Td>
                </assignComponents.Tr>
              </assignComponents.TableBody>
            </assignComponents.Table>
          </assignComponents.PickerContainer>
        </Popover_1.Popover>
      </assignComponents.Container>);
});
exports.DateTimePicker = DateTimePicker;
