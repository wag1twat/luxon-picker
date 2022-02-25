import { DateTime } from "luxon";

type Formatter = {
  (date: string): string;
};

/**
 * @param date
 * @returns 25 февр. 2021 г., 15:10
 */
export const formatDateTime: Formatter = (date) =>
  DateTime.fromISO(date).toLocaleString(DateTime.DATETIME_MED);

/**
 * @param date
 * @returns 25.02.2021 15:10
 */
export const formatDateTimeNumeric: Formatter = (date) =>
  DateTime.fromISO(date).toFormat("dd.LL.yyyy HH:mm");

/**
 * @param date
 * @returns 25.02.21 15:11
 */
export const formatDateTimeShortNumeric: Formatter = (date) =>
  DateTime.fromISO(date).toFormat("dd.LL.yy HH:mm");

/**
 * @param date
 * @returns 25.02.2021
 */
export const formatDate: Formatter = (date) =>
  DateTime.fromISO(date).toFormat("dd.LL.yyyy");

/**
 * @param date
 * @returns 25 февр., 15:10
 */
export const formatShortDateTime: Formatter = (date) =>
  DateTime.fromISO(date).toFormat("dd LLL HH:mm");

/**
 * @param date
 * @returns 2021-02-25T15:10
 */
export const formatShortISODateTime: Formatter = (date) =>
  DateTime.fromISO(date).toFormat("yyyy-LL-dd'T'HH:mm");

/**
 * @param date
 * @returns 2021-02-25T15:10
 */
export const getCurrentShortISODateTime: Formatter = () =>
  formatShortISODateTime(DateTime.local().toString());

/**
 * @param date
 * @returns 2021-02-25
 */
export const getCurrentISODate = () => DateTime.local().toISODate();
