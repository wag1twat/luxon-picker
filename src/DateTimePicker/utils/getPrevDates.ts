import { DateTime } from "luxon";

const getPrevDates = (nextDate: DateTime) => {
  return Array.from(Array(nextDate.weekday - 1).keys())
    .map((key) => nextDate.minus({ day: key + 1 }))
    .reverse();
};

export { getPrevDates };
