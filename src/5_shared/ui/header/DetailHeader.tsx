import { FaArrowLeft, FaHome } from "react-icons/fa";
import styles from "./header.module.css";
import { FC } from "react";

export const DetailHeader: FC = () => {
  return (
    <>
      <div className={styles.utilBar}>
        <FaArrowLeft />
        <FaHome />
      </div>
      <div className={styles.detailHeader}>
        <h2>타이틀</h2>
      </div>
    </>
  );
};
