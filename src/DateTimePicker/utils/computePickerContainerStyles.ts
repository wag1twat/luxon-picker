const computePickerContainerStyles = (
  offsetHeight: number = 0
): React.CSSProperties => {
  return {
    position: "absolute",
    top: offsetHeight + 5,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 1,
    width: "fit-content",
  };
};

export { computePickerContainerStyles };
