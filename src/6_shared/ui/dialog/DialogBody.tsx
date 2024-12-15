import { FC, ReactNode } from "react";
import styles from "./Dialog.module.css";

type DialogBodyProps = {
  children: ReactNode;
};

export const DialogBody: FC<DialogBodyProps> = (props) => {
  const { children } = props;
  return <div className={styles.body}>{children}</div>;
};
