import { FC, ReactNode } from "react";
import styles from "./styles/paper.module.css";

type PaperProps = {
  children: ReactNode;
  height?: number;
};

export const Paper: FC<PaperProps> = (props) => {
  const { children, height } = props;

  return (
    <div
      style={{ height: height && `${height}% !important` }}
      className={styles.paper}
    >
      {children}
    </div>
  );
};
