import React from "react";
import { Components } from ".";
import { DivProps } from "./types";
interface PopoverProps extends DivProps {
    isOpen: boolean;
    PickerContainer: Components["PickerContainer"];
}
declare const Popover: React.FC<PopoverProps>;
export { Popover };
