import { usePopover } from "@/6_shared/hooks";
import {
  cloneElement,
  FC,
  HTMLAttributes,
  ReactElement,
  ReactNode,
} from "react";

type PopupTriggerProps = {
  trigger: ReactElement;
  popup: ReactElement;
  triggerOption?: {
    triggerOnClickSideEffect?: () => void;
  }
};

export const PopupTrigger: FC<PopupTriggerProps> = (props) => {
  const { trigger, popup, triggerOption } = props;
  const { open, onClose, onOpen } = usePopover();

  return (
    <>
      {cloneElement<any>(trigger, {
        onClick: (e: any) => {
          e.stopPropagation();
          triggerOption?.triggerOnClickSideEffect?.();
          onOpen();
        },
      })}
      {cloneElement<any>(popup, { open, onClose })}
    </>
  );
};
