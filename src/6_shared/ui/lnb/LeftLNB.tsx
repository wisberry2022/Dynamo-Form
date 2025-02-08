import { FC } from "react";
import styles from "./styles/left-lnb.module.css";
import { MdOutlineCreate, MdOutlineDocumentScanner } from "react-icons/md";
import { FaPodcast } from "react-icons/fa";

export const LeftLNB: FC = () => {
  return (
    <div className={styles.lnb}>
      <div className={styles.iconBtn}>
        <MdOutlineDocumentScanner />
        <span>양식 관리</span>
      </div>
      <div className={styles.iconBtn}>
        <MdOutlineCreate />
        <span>양식 생성</span>
      </div>
      <div className={styles.iconBtn}>
        <FaPodcast />
        <span>설문조사 관리</span>
      </div>
    </div>
  );
};
