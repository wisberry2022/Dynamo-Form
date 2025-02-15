import { FC } from "react";
import styles from "./styles/warn-page.module.css";
import { formatDate } from "@/6_shared";

type CompletePageProps = {
  completedDate: string;
};

export const CompletePage: FC<CompletePageProps> = (props) => {
  const { completedDate } = props;
  return (
    <div className={styles.content}>
      <h2>본 설문 조사는 마감되었습니다.</h2>
      <p>마감 일자: {formatDate(completedDate, "yyyy-MM-dd HH:mm")}</p>
    </div>
  );
};
