import { FC } from "react";
import styles from "./styles/warn-page.module.css";
import sstyles from "./styles/suspend-page.module.css";
import { formatDate } from "@/6_shared";

type SuspendPageProps = {
  suspendedDate: string;
};

export const SuspendPage: FC<SuspendPageProps> = (props) => {
  const { suspendedDate } = props;

  return (
    <div className={styles.content}>
      <div className={sstyles.suspend}>
        <h2>본 설문 조사는 일시적으로 중단되었습니다.</h2>
        <p>관리자가 설문 조사를 재개할 경우 다시 참여할 수 있습니다.</p>
      </div>
      <p>중단 일자: {formatDate(suspendedDate, "yyyy-MM-dd HH:mm")}</p>
    </div>
  );
};
