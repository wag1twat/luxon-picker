import React from "react";
import { DateTime } from "luxon";
import { Components } from "./components";
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
declare const LuxonPicker: React.FC<LuxonPickerProps>;
export { LuxonPicker };
