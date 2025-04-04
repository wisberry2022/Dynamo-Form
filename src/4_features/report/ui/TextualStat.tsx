import { FC } from "react";
import { TextualStatView } from "../model/types";
import styles from "./styles/stat-common.module.css";
import { Button } from "@/6_shared";

type TextualStatProps = {
  stat: TextualStatView;
};

export const TextualStat: FC<TextualStatProps> = (props) => {
  const { stat } = props;
  return (
    <div className={styles.statContainer}>
      <h3>{stat.question}</h3>
      <div className={styles.box}>
        <div className={styles.summary}>
          <div className={styles.info}>
            <strong>평균 응답 글자 수</strong>
            <strong>
              {stat.averageAnswers
                ? `${Math.floor(stat.averageAnswers)}자`
                : "무응답"}
            </strong>
          </div>
          <Button variant="secondary">답변지 다운로드</Button>
        </div>
        <div className={styles.aiSummary}>
          <div className={styles.content}>
            <strong>AI 응답 요약</strong>
          </div>
          <p>컨텐츠</p>
        </div>
      </div>
    </div>
  );
};
