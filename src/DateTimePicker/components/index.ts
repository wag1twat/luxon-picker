import React from "react";
import {
  ButtonProps,
  ClockIconProps,
  DivProps,
  InputProps,
  SpanProps,
  TableBodyProps,
  TableProps,
  TdProps,
  ThProps,
  TrProps,
} from "./types";

const ClockIcon: React.FC<ClockIconProps> = (props) => {
  return React.createElement("img", {
    src: "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjwhRE9DVFlQRSBzdmcgIFBVQkxJQyAnLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4nICAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz48c3ZnIGhlaWdodD0iNTEycHgiIGlkPSJMYXllcl8xIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyOyIgdmVyc2lvbj0iMS4xIiB2aWV3Qm94PSIwIDAgNTEyIDUxMiIgd2lkdGg9IjUxMnB4IiB4bWw6c3BhY2U9InByZXNlcnZlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj48Zz48cGF0aCBkPSJNMjU2LDQ4QzE0MS4xLDQ4LDQ4LDE0MS4xLDQ4LDI1NnM5My4xLDIwOCwyMDgsMjA4YzExNC45LDAsMjA4LTkzLjEsMjA4LTIwOFMzNzAuOSw0OCwyNTYsNDh6IE0yNTYsNDQ2LjcgICBjLTEwNS4xLDAtMTkwLjctODUuNS0xOTAuNy0xOTAuN2MwLTEwNS4xLDg1LjUtMTkwLjcsMTkwLjctMTkwLjdjMTA1LjEsMCwxOTAuNyw4NS41LDE5MC43LDE5MC43ICAgQzQ0Ni43LDM2MS4xLDM2MS4xLDQ0Ni43LDI1Niw0NDYuN3oiLz48cG9seWdvbiBwb2ludHM9IjI1NiwyNTYgMTYwLDI1NiAxNjAsMjczLjMgMjczLjMsMjczLjMgMjczLjMsMTI4IDI1NiwxMjggICIvPjwvZz48L3N2Zz4=",
    ...props,
  });
};
const Input = React.forwardRef<HTMLInputElement, InputProps>((props, ref) =>
  React.createElement("input", { ...props, ref }),
);
const TimeInput = React.forwardRef<HTMLInputElement, InputProps>((props, ref) =>
  React.createElement("input", {
    ...props,
    ref,
  }),
);
const YearInput = React.forwardRef<HTMLInputElement, InputProps>((props, ref) =>
  React.createElement("input", {
    ...props,
    ref,
  }),
);
const PrevMonthButton: React.FC<ButtonProps> = (props) =>
  React.createElement("button", props);
const NextMonthButton: React.FC<ButtonProps> = (props) =>
  React.createElement("button", props);
const DateButton: React.FC<ButtonProps> = (props) =>
  React.createElement("button", props);
const CloseButton: React.FC<ButtonProps> = (props) =>
  React.createElement("button", props);
const NowButton: React.FC<ButtonProps> = (props) =>
  React.createElement("button", props);
const Week: React.FC<SpanProps> = (props) => React.createElement("span", props);
const Month: React.FC<SpanProps> = (props) =>
  React.createElement("span", props);
const Container: React.FC<DivProps> = (props) =>
  React.createElement("div", props);
const PickerContainer = React.forwardRef<HTMLDivElement, DivProps>(
  (props, ref) => React.createElement("div", { ...props, ref }),
);
const Table: React.FC<TableProps> = (props) =>
  React.createElement("table", props);
const Tr: React.FC<TrProps> = (props) => React.createElement("tr", props);
const Td: React.FC<TdProps> = (props) => React.createElement("td", props);
const Th: React.FC<ThProps> = (props) => React.createElement("th", props);
const TableBody: React.FC<TableBodyProps> = (props) =>
  React.createElement("tbody", props);

const TimeContainer: React.FC<DivProps> = (props) => {
  return React.createElement("div", props);
};

interface Components {
  ClockIcon: typeof ClockIcon;
  CloseButton: typeof CloseButton;
  NowButton: typeof NowButton;
  PrevMonthButton: typeof PrevMonthButton;
  NextMonthButton: typeof NextMonthButton;
  DateButton: typeof DateButton;
  Week: typeof Week;
  Month: typeof Month;
  Input: typeof Input;
  Container: typeof Container;
  PickerContainer: typeof PickerContainer;
  Table: typeof Table;
  Tr: typeof Tr;
  Td: typeof Td;
  Th: typeof Th;
  TableBody: typeof TableBody;
  TimeContainer: typeof TimeContainer;
  TimeInput: typeof TimeInput;
  YearInput: typeof YearInput;
}

const defaultComponents: Components = {
  ClockIcon,
  PrevMonthButton,
  NextMonthButton,
  DateButton,
  CloseButton,
  NowButton,
  Week,
  Month,
  Input,
  Container,
  PickerContainer,
  Table,
  Tr,
  Td,
  Th,
  TableBody,
  TimeContainer,
  TimeInput,
  YearInput,
};

export type { Components };

export { defaultComponents };
