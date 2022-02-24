interface Column {
    weekday: number;
}
interface GenerateColumn {
    (weekday: number): Column;
}
declare const generateColumn: GenerateColumn;
export { generateColumn };
