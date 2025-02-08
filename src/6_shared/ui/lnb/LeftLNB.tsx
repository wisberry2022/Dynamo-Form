import { FC } from "react";
import styles from "./styles/left-lnb.module.css";
import { MdOutlineCreate, MdOutlineDocumentScanner } from "react-icons/md";
import { FaPodcast } from "react-icons/fa";
import { useRouter } from "next/router";
import { endpoints } from "@/6_shared/constants";

export const LeftLNB: FC = () => {
  const router = useRouter();

  const goPage = (link: string) => {
    router.push(link);
  };

  return (
    <div className={styles.lnb}>
      <div
        className={styles.iconBtn}
        onClick={() => goPage(endpoints.form.index)}
      >
        <MdOutlineDocumentScanner />
        <span>양식 관리</span>
      </div>
      <div
        className={styles.iconBtn}
        onClick={() => goPage(endpoints.form.create)}
      >
        <MdOutlineCreate />
        <span>양식 생성</span>
      </div>
      <div
        className={styles.iconBtn}
        onClick={() => goPage(endpoints.survey.index)}
      >
        <FaPodcast />
        <span>설문조사 관리</span>
      </div>
    </div>
  );
};
