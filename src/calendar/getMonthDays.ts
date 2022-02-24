import { DateTime } from "luxon";
import { getNextDates } from "./getNextDates";
import { getPrevDates } from "./getPrevDates";

interface GetMonthDays {
  (date: DateTime): DateTime[];
}

const getMonthDays: GetMonthDays = (date) => {
  const dates = [];

  const daysInMonth = date.daysInMonth;

  for (let day = 1; day <= daysInMonth; day++) {
    const nextDate = date.set({ day });

    if (day === 1) {
      if (nextDate.weekday !== 1) {
        getPrevDates(nextDate).forEach((prevDate) => {
          dates.push(prevDate);
        });

        dates.push(date.set({ day }));
      } else {
        dates.push(date.set({ day }));
      }
    } else if (day === daysInMonth) {
      if (nextDate.weekday !== 7) {
        dates.push(nextDate);

        getNextDates(nextDate).forEach((nextDate) => {
          dates.push(nextDate);
        });
      }
    } else {
      dates.push(date.set({ day }));
    }
  }

  return dates;
};

export { getMonthDays };
