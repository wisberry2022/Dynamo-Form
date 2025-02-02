import { FC } from "react";
import styles from "./styles/warn-page.module.css";

export const NoSurveyPage: FC = () => {
  return (
    <div className={styles.content}>
      <h2>존재하지 않는 설문 조사입니다.</h2>
      <p>마감 후 삭제된 설문 조사거나, 서비스 오류일 수 있습니다.</p>
    </div>
  );
};
