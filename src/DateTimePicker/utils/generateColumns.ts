import { generateColumn } from "./generateColumn";

const generateColumns = () =>
  Array.from(Array(7).keys()).map((weekday) => generateColumn(weekday + 1));

export { generateColumns };
