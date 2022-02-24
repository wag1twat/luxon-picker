import React from "react";
import { DateTime } from "luxon";
import {
  getMonthDays,
  matrixify,
  useDisclosure,
  computePickerContainerStyles,
  generateColumns,
} from "./utils";
import { Components, defaultComponents } from "./components";
import { Popover } from "./components/Popover";

const columns = generateColumns();

interface LuxonPickerProps {
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

const LuxonPicker: React.FC<LuxonPickerProps> = React.memo(
  ({
    locale = "ru",
    inputFormat = "dd.LL.yyyy",
    components,
    date,
    onChangeDate,
  }) => {
    const { isOpen, onOpen, onClose } = useDisclosure();

    const [currentDate, setCurrentDate] = React.useState(
      DateTime.local().setLocale(locale)
    );

    const rows = React.useMemo(
      () => matrixify(getMonthDays(currentDate)),
      [currentDate]
    );

    const assignComponents = React.useMemo(
      () => ({ ...defaultComponents, ...components }),
      [components]
    );

    const inputRef = React.useRef<HTMLInputElement | null>(null);

    const handleChangeDate = React.useCallback(
      (d: DateTime) => (e: React.MouseEvent<HTMLButtonElement>) => {
        e.stopPropagation();
        onChangeDate(d);
      },
      [onChangeDate]
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
      [onChangeDate]
    );

    const handleClose = React.useCallback(
      (e: React.MouseEvent<HTMLButtonElement>) => {
        e.stopPropagation();
        onClose();
      },
      [onClose]
    );

    React.useEffect(() => {
      const current = inputRef.current;

      if (current) {
        current.addEventListener("click", onOpen);
      }
      return () => {
        if (current) {
          current.removeEventListener("click", onOpen);
        }
      };
    }, [onOpen]);

    return React.createElement(
      assignComponents.Container,
      {
        style: { position: "relative", display: "flex" },
      },
      React.createElement(assignComponents.Input, {
        readOnly: true,
        defaultValue: "",
        value: date ? date.toFormat(inputFormat) : "",
        ref: inputRef,
      }),
      React.createElement(
        Popover,
        {
          PickerContainer: assignComponents.PickerContainer,
          isOpen,
          style: computePickerContainerStyles(inputRef.current?.offsetHeight),
        },
        React.createElement(
          assignComponents.Table,
          {
            style: {
              backgroundColor: "#fff",
              borderWidth: 1,
              borderColor: "lightblue",
              borderRadius: 4,
              borderCollapse: "separate",
            },
          },
          React.createElement(
            assignComponents.TableBody,
            null,
            React.createElement(
              assignComponents.Tr,
              null,
              React.createElement(
                assignComponents.Th,
                { colSpan: 1 },
                React.createElement(
                  assignComponents.PrevMonthButton,
                  {
                    onClick: (e) => {
                      e.stopPropagation();
                      setCurrentDate((prev) => prev.minus({ month: 1 }));
                    },
                    style: {
                      cursor: "pointer",
                    },
                  },
                  "<"
                )
              ),
              React.createElement(
                assignComponents.Th,
                { colSpan: 7 },
                React.createElement(
                  assignComponents.Month,
                  null,
                  currentDate.monthLong
                )
              ),
              React.createElement(
                assignComponents.Th,
                { colSpan: 1 },
                React.createElement(
                  assignComponents.NextMonthButton,
                  {
                    onClick: (e) => {
                      e.stopPropagation();
                      setCurrentDate((prev) => prev.plus({ month: 1 }));
                    },
                    style: {
                      cursor: "pointer",
                    },
                  },
                  ">"
                )
              )
            ),
            React.createElement(
              assignComponents.Tr,
              null,
              React.createElement(assignComponents.Td),
              React.createElement(
                assignComponents.Td,
                { colSpan: 7 },
                React.createElement(
                  assignComponents.Table,
                  null,
                  React.createElement(
                    assignComponents.TableBody,
                    null,
                    React.createElement(
                      assignComponents.Tr,
                      null,
                      columns.map((column) =>
                        React.createElement(
                          assignComponents.Th,
                          { key: column.weekday },
                          React.createElement(
                            assignComponents.Week,
                            null,
                            currentDate.set({ weekday: column.weekday })
                              .weekdayShort
                          )
                        )
                      )
                    ),
                    rows.map((row, rowIndex) =>
                      React.createElement(
                        assignComponents.Tr,
                        { key: `__row__${rowIndex}__` },
                        row.map((d, dIndex) =>
                          React.createElement(
                            assignComponents.Td,
                            { key: `__d_${dIndex}__` },
                            React.createElement(
                              assignComponents.DateButton,
                              {
                                style: { cursor: "pointer", width: "100%" },
                                isActive: date
                                  ? date.ordinal === d.ordinal
                                  : false,
                                onClick: handleChangeDate(d),
                              },
                              d.day
                            )
                          )
                        )
                      )
                    )
                  )
                )
              ),
              React.createElement(assignComponents.Td)
            ),
            React.createElement(
              assignComponents.Tr,
              null,
              React.createElement(assignComponents.Td),
              React.createElement(
                assignComponents.Td,
                {
                  colSpan: 7,
                },
                React.createElement(
                  assignComponents.TimeWrapper,
                  {
                    style: {
                      display: "flex",
                      justifyContent: "flex-end",
                      alignItems: "center",
                    },
                  },
                  React.createElement(assignComponents.ClockIcon, {
                    style: { margin: 10 },
                  }),
                  React.createElement(assignComponents.TimeInput, {
                    type: "number",
                    defaultValue: date?.hour.toString(),
                    value: date?.hour.toString(),
                    onChange: handleChangeTime(date, "hour", 0, 23),
                    style: {
                      maxWidth: 60,
                    },
                    disabled: date === null,
                  }),
                  React.createElement("span", { style: { margin: 10 } }, ":"),
                  React.createElement(assignComponents.TimeInput, {
                    type: "number",
                    defaultValue: date?.minute.toString(),
                    value: date?.minute.toString(),
                    onChange: handleChangeTime(date, "minute", 0, 59),
                    style: {
                      maxWidth: 60,
                    },
                    disabled: date === null,
                  })
                )
              ),
              React.createElement(assignComponents.Td)
            ),
            React.createElement(
              assignComponents.Tr,
              null,
              React.createElement(
                assignComponents.Td,
                { colSpan: 9 },
                React.createElement(
                  assignComponents.CloseButton,
                  {
                    style: { float: "right", cursor: "pointer" },
                    onClick: handleClose,
                  },
                  "close"
                )
              )
            )
          )
        )
      )
    );
  }
);

export { LuxonPicker };
