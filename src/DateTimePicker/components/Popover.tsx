import React from "react";
import { DivProps } from "./types";

interface PopoverProps extends DivProps {
  isOpen: boolean;
}

const Popover: React.FC<PopoverProps> = ({ isOpen, children }) => {
  if (isOpen) {
    return <>{children}</>;
  }
  return null;
};

export { Popover };
