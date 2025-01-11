import { FC, ReactNode } from "react";
import styles from "./card-wrapper.module.css";
import parse from "html-react-parser";

type CardWrapperProps = {
  title: string;
  description: string;
  children: ReactNode;
};

export const CardWrapper: FC<CardWrapperProps> = (props) => {
  const { title, description, children } = props;

  return (
    <div className={styles.cardWrapper}>
      <div className={styles.labelGroup}>
        <div className={styles.title}>
          <h4>{parse(title)}</h4>
        </div>
        <p className={styles.desc}>{parse(description)}</p>
      </div>
      {children}
    </div>
  );
};
