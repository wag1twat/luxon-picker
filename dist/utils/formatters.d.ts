declare type Formatter = {
    (date: string): string;
};
/**
 * @param date
 * @returns 25 февр. 2021 г., 15:10
 */
export declare const formatDateTime: Formatter;
/**
 * @param date
 * @returns 25.02.2021 15:10
 */
export declare const formatDateTimeNumeric: Formatter;
/**
 * @param date
 * @returns 25.02.21 15:11
 */
export declare const formatDateTimeShortNumeric: Formatter;
/**
 * @param date
 * @returns 25.02.2021
 */
export declare const formatDate: Formatter;
/**
 * @param date
 * @returns 25 февр., 15:10
 */
export declare const formatShortDateTime: Formatter;
/**
 * @param date
 * @returns 2021-02-25T15:10
 */
export declare const formatShortISODateTime: Formatter;
/**
 * @param date
 * @returns 2021-02-25T15:10
 */
export declare const getCurrentShortISODateTime: Formatter;
/**
 * @param date
 * @returns 2021-02-25
 */
export declare const getCurrentISODate: () => string;
export {};
