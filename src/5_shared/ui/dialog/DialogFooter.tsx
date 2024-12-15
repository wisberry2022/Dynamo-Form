import { FC, ReactNode } from "react";
import styles from "./Dialog.module.css";
import { Align } from "@/5_shared/types";

type DialogFooterProps = {
  children: ReactNode;
  align?: Align;
};

export const DialogFooter: FC<DialogFooterProps> = (props) => {
  const { children, align = "center" } = props;

  return <div className={`${styles[align]} ${styles.footer}`}>{children}</div>;
};
