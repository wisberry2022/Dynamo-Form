import { FC, ReactNode } from "react";
import styles from "./styles/blank-layout.module.css";

type BlankLayoutProps = {
  children: ReactNode;
};

export const BlankLayout: FC<BlankLayoutProps> = (props) => {
  const { children } = props;

  return <div className={styles.blank}>{children}</div>;
};
