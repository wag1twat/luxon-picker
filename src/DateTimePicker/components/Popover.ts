import React from "react";
import { Components } from ".";
import { DivProps } from "./types";

interface PopoverProps extends DivProps {
  isOpen: boolean;
  PickerContainer: Components["PickerContainer"];
}

const Popover: React.FC<PopoverProps> = ({
  isOpen,
  PickerContainer,
  ...props
}) => {
  if (isOpen) {
    return React.createElement(PickerContainer, props);
  }
  return null;
};

export { Popover };
