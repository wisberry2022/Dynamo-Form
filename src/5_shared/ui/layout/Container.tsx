import styles from "./container.module.scss";
import { FC, ReactNode } from "react";

type ContainerProps = {
  children: ReactNode;
};

export const Container: FC<ContainerProps> = (props) => {
  const { children } = props;

  return <div className={styles.container}>{children}</div>;
};
