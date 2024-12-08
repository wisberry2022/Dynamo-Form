import { FC, ReactNode } from "react";
import styles from "./paper.module.css";

type PaperProps = {
  children: ReactNode;
};

export const Paper: FC<PaperProps> = (props) => {
  const { children } = props;

  return <div className={styles.paper}>{children}</div>;
};
