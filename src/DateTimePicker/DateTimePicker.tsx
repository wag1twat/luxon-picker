import React from "react";
import { DateTime } from "luxon";
import {
  getMonthDays,
  matrixify,
  useDisclosure,
  generateColumns,
  mergeClasses,
  computePickerContainerPosition,
} from "./utils";
import { Components, defaultComponents } from "./components";

const classes = require("./date-time-picker.module.css");

const columns = generateColumns();

interface DateTimePickerProps {
  /**
   * locale default "ru"
   * @example locale="en"
   */
  locale?: string;
  /**
   * Components must be memoized or const
   */
  components?: Partial<Components>;
  date: DateTime | null;
  onChangeDate: (date: DateTime) => void;
  /**
   * Input date format
   * @example DateTime.toFormat("dd.LL.yyyy")
   */
  inputFormat?: string;
}

const DateTimePicker: React.FC<DateTimePickerProps> = React.memo(
  ({
    locale = "ru",
    inputFormat = "dd.LL.yyyy",
    components,
    date,
    onChangeDate,
  }) => {
    const assignComponents = React.useMemo(
      () => ({ ...defaultComponents, ...components }),
      [components],
    );

    const [currentDate, setCurrentDate] = React.useState(
      DateTime.local().setLocale(locale),
    );

    const rows = React.useMemo(
      () => matrixify(getMonthDays(currentDate)),
      [currentDate],
    );

    const { isOpen, onOpen, onClose } = useDisclosure();

    const inputRef = React.useRef<HTMLInputElement | null>(null);

    const handleOpen = React.useCallback(
      (e: MouseEvent) => {
        e.stopPropagation();
        onOpen();
      },
      [onOpen],
    );

    const handleClose = React.useCallback(
      (e: React.MouseEvent<HTMLButtonElement>) => {
        e.stopPropagation();
        onClose();
      },
      [onClose],
    );

    const handleChangeDate = React.useCallback(
      (d: DateTime) => (e: React.MouseEvent<HTMLButtonElement>) => {
        e.stopPropagation();
        onChangeDate(d);
      },
      [onChangeDate],
    );

    const handleChangeTime = React.useCallback(
      (d: DateTime | null, type: "hour" | "minute", min: number, max: number) =>
        (e: React.ChangeEvent<HTMLInputElement>) => {
          e.stopPropagation();
          if (d) {
            const int = parseInt(e.target.value, 10);

            if (isNaN(int)) {
              return onChangeDate(d.set({ [type]: 0 }));
            }

            if (int >= min && int <= max) {
              return onChangeDate(d.set({ [type]: int }));
            }
          }
        },
      [onChangeDate],
    );

    const handleChangeYear = React.useCallback(
      (e: React.ChangeEvent<HTMLInputElement>) => {
        e.stopPropagation();

        const int = parseInt(e.target.value, 10);

        if (isNaN(int)) {
          return;
        }

        setCurrentDate((prevCurrentDate) => {
          const nextCurrentDate = prevCurrentDate.set({ year: int });

          if (nextCurrentDate.isValid) {
            return nextCurrentDate;
          }
          return prevCurrentDate;
        });
      },
      [setCurrentDate],
    );

    const handleNextMonth = React.useCallback(
      (e: React.MouseEvent<HTMLButtonElement>) => {
        e.stopPropagation();
        setCurrentDate((prev) => prev.plus({ month: 1 }));
      },
      [setCurrentDate],
    );

    const handlePrevMonth = React.useCallback(
      (e: React.MouseEvent<HTMLButtonElement>) => {
        e.stopPropagation();
        setCurrentDate((prev) => prev.minus({ month: 1 }));
      },
      [setCurrentDate],
    );

    React.useEffect(() => {
      const current = inputRef.current;

      if (current) {
        current.addEventListener("click", handleOpen);
      }
      return () => {
        if (current) {
          current.removeEventListener("click", handleOpen);
        }
      };
    }, [handleOpen]);

    return (
      <assignComponents.Container className={classes.container}>
        <assignComponents.Input
          ref={inputRef}
          readOnly={true}
          defaultValue=""
          value={date ? date.toFormat(inputFormat) : ""}
        />

        <assignComponents.PickerContainer
          className={classes.picker_container}
          hidden={!isOpen}
          ref={(ref) => {
            if (ref) {
              const styles = computePickerContainerPosition(ref, inputRef);

              ref.style.top = styles.top;
              ref.style.left = styles.left;
              ref.style.right = styles.right;
            }
          }}
        >
          <assignComponents.Table className={classes.root_table}>
            <assignComponents.TableBody className={classes.root_table_body}>
              <assignComponents.Tr className={classes.root_tr}>
                <assignComponents.Th colSpan={2} className={classes.root_th}>
                  <assignComponents.PrevMonthButton
                    className={classes.prev_month_button}
                    onClick={handlePrevMonth}
                    children={"<"}
                  />
                </assignComponents.Th>
                <assignComponents.Th
                  colSpan={3}
                  className={mergeClasses(
                    classes.root_th,
                    classes.root_th_month,
                  )}
                >
                  <assignComponents.Month children={currentDate.monthLong} />
                </assignComponents.Th>
                <assignComponents.Th
                  colSpan={3}
                  className={mergeClasses(
                    classes.root_th,
                    classes.root_th_year,
                  )}
                >
                  <assignComponents.YearInput
                    type="number"
                    defaultValue={currentDate.year}
                    value={currentDate.year}
                    onChange={handleChangeYear}
                    className={classes.input_year}
                  />
                </assignComponents.Th>
                <assignComponents.Th colSpan={2} className={classes.root_th}>
                  <assignComponents.NextMonthButton
                    className={classes.next_month_button}
                    onClick={handleNextMonth}
                    children={">"}
                  />
                </assignComponents.Th>
              </assignComponents.Tr>
              <assignComponents.Tr className={classes.root_tr}>
                <assignComponents.Td colSpan={9} className={classes.root_td}>
                  <assignComponents.Table className={classes.calendar_table}>
                    <assignComponents.TableBody
                      className={classes.calendar_table_body}
                    >
                      <assignComponents.Tr className={classes.calendar_tr}>
                        {columns.map(({ weekday }) => {
                          return (
                            <assignComponents.Th
                              key={`__weekday__${weekday}__`}
                              className={classes.calendar_th}
                            >
                              <assignComponents.Week>
                                {currentDate.set({ weekday }).weekdayShort}
                              </assignComponents.Week>
                            </assignComponents.Th>
                          );
                        })}
                      </assignComponents.Tr>
                      {rows.map((dates, datesIndex) => {
                        return (
                          <assignComponents.Tr
                            key={`__dates__${datesIndex}__`}
                            className={classes.calendar_tr}
                          >
                            {dates.map((datetime, dateIndex) => {
                              return (
                                <assignComponents.Td
                                  key={`__date__${dateIndex}__`}
                                  className={classes.calendar_td}
                                >
                                  <assignComponents.DateButton
                                    className={classes.calendar_date_button}
                                    data-date-active={
                                      date
                                        ? date.ordinal === datetime.ordinal
                                        : false
                                    }
                                    onClick={handleChangeDate(datetime)}
                                    children={datetime.day}
                                  />
                                </assignComponents.Td>
                              );
                            })}
                          </assignComponents.Tr>
                        );
                      })}

                      <assignComponents.Tr className={classes.calendar_tr}>
                        <assignComponents.Td
                          colSpan={1}
                          className={classes.calendar_td}
                        >
                          <assignComponents.ClockIcon
                            className={classes.calendar_clock_icon}
                          />
                        </assignComponents.Td>
                        <assignComponents.Td
                          colSpan={2}
                          className={classes.calendar_td}
                        >
                          <assignComponents.TimeInput
                            className={classes.calendar_time_input}
                            type="number"
                            defaultValue={date?.hour.toString()}
                            value={date?.hour.toString()}
                            onChange={handleChangeTime(date, "hour", 0, 23)}
                            disabled={date === null}
                          />
                        </assignComponents.Td>
                        <assignComponents.Td
                          colSpan={2}
                          className={classes.calendar_td}
                        >
                          <assignComponents.TimeInput
                            className={classes.calendar_time_input}
                            type="number"
                            defaultValue={date?.minute.toString()}
                            value={date?.minute.toString()}
                            onChange={handleChangeTime(date, "minute", 0, 59)}
                            disabled={date === null}
                          />
                        </assignComponents.Td>
                      </assignComponents.Tr>
                      <assignComponents.Tr className={classes.calendar_tr}>
                        <assignComponents.Td colSpan={3} />
                        <assignComponents.Td
                          colSpan={2}
                          className={classes.calendar_td}
                        >
                          <assignComponents.NowButton
                            className={classes.calendar_now_button}
                            onClick={() => onChangeDate(DateTime.now())}
                            children="Now"
                          />
                        </assignComponents.Td>
                        <assignComponents.Td
                          colSpan={2}
                          className={classes.calendar_td}
                        >
                          <assignComponents.CloseButton
                            className={classes.calendar_close_button}
                            onClick={handleClose}
                            children="Close"
                          />
                        </assignComponents.Td>
                      </assignComponents.Tr>
                    </assignComponents.TableBody>
                  </assignComponents.Table>
                </assignComponents.Td>
              </assignComponents.Tr>
            </assignComponents.TableBody>
          </assignComponents.Table>
        </assignComponents.PickerContainer>
      </assignComponents.Container>
    );
  },
);

export { DateTimePicker };
