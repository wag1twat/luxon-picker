import { DateTime } from "luxon";
interface GetMonthDays {
    (date: DateTime): DateTime[];
}
declare const getMonthDays: GetMonthDays;
export { getMonthDays };
