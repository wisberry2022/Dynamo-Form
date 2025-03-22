import { formatDate, SurveySummaryResponse } from "@/6_shared";
import { FC } from "react";
import styles from "./styles/summary-card.module.css";
import { SurveySummaryViewType } from "./model/types";
import { SurveyStatusChip } from "@/5_entities/survey";

type SummaryCardProps = {
  data: SurveySummaryViewType;
};

export const SummaryCard: FC<SummaryCardProps> = (props) => {
  const { data } = props;

  return (
    <div className={styles.card}>
      <div className={styles.listBox}>
        <ul>
          <li>
            <strong>제목</strong>
            <span>{data.title}</span>
          </li>
          <li>
            <strong>설명</strong>
            <span>{data.description}</span>
          </li>
          <li>
            <strong>설문 기간</strong>
            <div>
              <div className={styles.left}>
                <SurveyStatusChip status={data.status} />
              </div>
              <div className={styles.right}>
                {formatDate(data.startDttm, "yyyy-MM-dd HH:mm")} ~{" "}
                {formatDate(data.endDttm, "yyyy-MM-dd HH:mm")}
              </div>
            </div>
          </li>
        </ul>
        <ul>
          <li>
            <strong>참여자 수</strong>
            <span>{data.participants}명</span>
          </li>
          <li>
            <strong>제한 인원</strong>
            <span>{data.limitParticipants}명</span>
          </li>
          <li>
            <strong>총 문항 수</strong>
            <span>{data.totalQuestionCount}개</span>
          </li>
        </ul>
      </div>
    </div>
  );
};
