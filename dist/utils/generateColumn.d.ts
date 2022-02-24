declare type Column = {
    weekday: number;
};
declare type GenerateColumn = {
    (weekday: number): Column;
};
declare const generateColumn: GenerateColumn;
export { generateColumn };
