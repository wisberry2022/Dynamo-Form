import { Button, ListButtonType2, SurveyRespondentResponse } from "@/6_shared";
import { FC } from "react";
import styles from "./styles/respondent.module.css";

type RespondentType = {
  respondent: SurveyRespondentResponse;
};

export const Respondent: FC<RespondentType> = (props) => {
  const { respondent } = props;

  return (
    <ListButtonType2
      left={
        <ListButtonType2.Left
          left={<strong className={styles.label}>설문자</strong>}
          right={<span className={styles.content}>{respondent.name}</span>}
          classes={styles.left}
        />
      }
      right={
        <ListButtonType2.Right
          left={
            <Button variant="secondary" className={styles.btn}>
              응답자 정보 확인
            </Button>
          }
          right={
            <Button variant="brighten" className={styles.btn}>
              응답 상세 확인
            </Button>
          }
          classes={styles.right}
        />
      }
    />
  );
};
