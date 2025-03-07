import styles from "./styles/container.module.css";
import { FC, ReactNode } from "react";

type ContainerProps = {
  children: ReactNode;
};

export const Container: FC<ContainerProps> = (props) => {
  const { children } = props;

  return <div className={styles.container}>{children}</div>;
};
