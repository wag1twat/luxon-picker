import React from "react";
import { DivProps } from "./types";
interface PopoverProps extends DivProps {
    isOpen: boolean;
}
declare const Popover: React.FC<PopoverProps>;
export { Popover };
