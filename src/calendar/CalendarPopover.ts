import React from "react";
import { Components } from "./components";

interface CalendarPopoverProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  isOpen: boolean;
  PickerContainer: Components["PickerContainer"];
}

const CalendarPopover: React.FC<CalendarPopoverProps> = ({
  isOpen,
  PickerContainer,
  ...props
}) => {
  if (isOpen) {
    return React.createElement(PickerContainer, {
      onClick: (e) => {
        console.log(e);
      },
      ...props
    });
  }
  return null;
};

export { CalendarPopover };
