import { usePopover } from "@/6_shared/hooks";
import { cloneElement, FC, ReactElement } from "react";

type PopupTriggerProps = {
  trigger: ReactElement;
  popup: ReactElement;
};

export const PopupTrigger: FC<PopupTriggerProps> = (props) => {
  const { trigger, popup } = props;
  const { open, onClose, onOpen } = usePopover();

  return (
    <>
      {cloneElement<any>(trigger, {
        onClick: (e: any) => {
          e.stopPropagation();
          onOpen();
        },
      })}
      {cloneElement<any>(popup, { open, onClose })}
    </>
  );
};
