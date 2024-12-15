import { useState } from "react";

export const usePopover = () => {
  const [open, setOpen] = useState<boolean>(false);

  const onOpen = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  const onToggle = () => {
    setOpen((prev) => !prev);
  };

  return {
    open,
    onOpen,
    onClose,
    onToggle,
  };
};
