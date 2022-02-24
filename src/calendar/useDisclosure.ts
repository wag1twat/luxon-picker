import React from "react";

const useDisclosure = () => {
  const [isOpen, setOpen] = React.useState(true);

  return { isOpen, onOpen: () => setOpen(true), onClose: () => setOpen(false) };
};

export { useDisclosure };
