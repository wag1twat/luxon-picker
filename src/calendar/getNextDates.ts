import { DateTime } from "luxon";

const getNextDates = (nextDate: DateTime) => {
  return Array.from(Array(7 - nextDate.weekday).keys()).map((key) =>
    nextDate.plus({ day: key + 1 })
  );
};

export { getNextDates };
