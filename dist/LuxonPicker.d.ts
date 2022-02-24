import React from "react";
import { Components } from "./components";
import { DateTime } from "luxon";
interface LuxonPickerProps {
    /**
     * Picker locale
     * @default "ru"
     * @example locale="ru"
     * @example locale="en"
     */
    locale?: string;
    /**
     * Components must be memoized or const.
     * Custom component be mergered with default components.
     * import { defaultComponents } from './LuxonPicker/components';
     */
    components?: Partial<Components>;
    date: DateTime | null;
    onChangeDate: (date: DateTime) => void;
    /**
     * DateTe format in input
     * @example DateTime.toFormat("dd.LL.yyyy")
     */
    inputFormat?: string;
}
declare const LuxonPicker: React.FC<LuxonPickerProps>;
export { LuxonPicker };
