import styles from "./styles/container.module.css";
import { FC, ReactNode } from "react";

type ColumnContainerProps = {
  children: ReactNode;
};

export const ColumnContainer: FC<ColumnContainerProps> = (props) => {
  const { children } = props;

  return <div className={styles.fContainer}>{children}</div>;
};
