import React, {
  Children,
  cloneElement,
  FC,
  ReactElement,
  ReactNode,
  useEffect,
  useRef,
} from "react";
import styles from "./Dialog.module.css";
import { DialogScale } from "@/6_shared/types";
import { createPortal } from "react-dom";

type DialogProps = {
  children: ReactNode;
  open?: boolean;
  size?: DialogScale;
  onClose?: () => void;
};

export const Dialog: FC<DialogProps> = (props) => {
  const { children, open = false, onClose = () => {}, size = "medium" } = props;
  const selectRef = useRef<HTMLDivElement>(null);

  const childArr = Children.toArray(children);

  useEffect(() => {
    const handleClick: EventListener = (event: any) => {
      if (selectRef.current && !selectRef.current.contains(event.target)) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClick);

    return () => {
      selectRef.current = null;
      document.removeEventListener("mousedown", handleClick);
    };
  }, []);

  return (
    open &&
    createPortal(
      <div ref={selectRef} className={`${styles[size]} ${styles.dialog}`}>
        {childArr?.map((child, idx) => {
          return !idx
            ? cloneElement(child as ReactElement<any>, { key: idx, onClose })
            : cloneElement(child as ReactElement, { key: idx });
        })}
      </div>,
      document.querySelector("body") as HTMLElement
    )
  );
};
