import { FC } from "react";
import styles from "./styles/warn-page.module.css";
import { formatDate } from "@/6_shared";

type WaitingPageProps = {
  startDate: string;
  endDate: string;
};

export const WaitingPage: FC<WaitingPageProps> = (props) => {
  const { startDate, endDate } = props;

  console.log("endDate", endDate);

  return (
    <div className={styles.content}>
      <h2>설문 조사 기간이 아닙니다.</h2>
      <p>
        설문 기간: {formatDate(startDate, "yyyy-MM-dd HH:mm")}{" "}
        {endDate ? `~ ${formatDate(endDate, "yyyy-MM-dd HH:mm")}` : ""}
      </p>
    </div>
  );
};
