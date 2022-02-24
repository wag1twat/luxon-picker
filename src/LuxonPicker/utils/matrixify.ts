import { DateTime } from "luxon";

const matrixify = function (arr: Array<DateTime>) {
  const matrix = [];

  const arrLength = arr.length;

  for (let i = 0; i < arrLength; i += 7) {
    matrix.push(arr.slice(i, 7 + i));
  }

  return matrix;
};

export { matrixify };
