const computePickerContainerPosition = (
  pickerContainerRef: HTMLDivElement,
  inputRef: React.MutableRefObject<HTMLInputElement | null>,
) => {
  let result = { top: "0px", right: "0px", left: "0px" };

  if (pickerContainerRef && inputRef.current) {
    const innerHeight = globalThis.innerHeight;
    const innerWidth = globalThis.innerWidth;
    const height = pickerContainerRef.clientHeight;
    const inputHeight = inputRef.current.clientHeight;

    const { bottom, right } = pickerContainerRef.getBoundingClientRect();

    if (bottom + height > innerHeight) {
      result.top = `${-(height + 5)}px`;
    } else {
      result.top = `${inputHeight + 5}px`;
    }

    if (right > innerWidth) {
      result.left = `-${right - innerWidth}px`;
    } else {
      result.left = "0px";
    }
  }

  return result;
};

export { computePickerContainerPosition };
