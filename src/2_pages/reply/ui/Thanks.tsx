import { FC } from "react";
import styles from "./styles/thanks.module.css";

export const Thanks: FC = () => {
  return (
    <div className={styles.tContainer}>
      <h3>설문에 참여해주셔서 감사합니다.</h3>
    </div>
  );
};
