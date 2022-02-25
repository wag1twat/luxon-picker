const mergeClasses = (...args: (string | undefined)[]) => {
  return args
    .filter((arg) => Boolean(arg))
    .join(" ")
    .trim();
};

export { mergeClasses };
