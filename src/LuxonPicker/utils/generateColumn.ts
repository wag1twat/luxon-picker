interface Column {
  weekday: number;
}

interface GenerateColumn {
  (weekday: number): Column;
}
const generateColumn: GenerateColumn = (weekday) => {
  return {
    weekday
  };
};

export { generateColumn };
