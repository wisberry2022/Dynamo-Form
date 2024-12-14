import { FC } from "react";
import styles from "./select.module.css";

export const Select: FC = () => {
  return (
    <>
      <div className={styles.select}>
        <span>Value</span>
      </div>
    </>
  );
};
