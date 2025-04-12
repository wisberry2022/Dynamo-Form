import {
  Button,
  ListButtonType2,
  PopupTrigger,
  SurveyRespondentResponse,
  Respondent as RespondentService,
  RespondentResponse
} from "@/6_shared";
import { FC, useState } from "react";
import styles from "./styles/respondent.module.css";
import { RespondentInfoDialog } from "@/5_entities/respondent";

type RespondentType = {
  respondent: SurveyRespondentResponse;
};

export const Respondent: FC<RespondentType> = (props) => {
  const { respondent } = props;
  const [detail, setDetail] = useState<RespondentResponse | null>(null);

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
            <PopupTrigger
              trigger={
                <Button variant="secondary" className={styles.btn}>
                  응답자 정보 확인
                </Button>
              }
              popup={<RespondentInfoDialog respondent={detail} />}
              triggerOption={
                {
                  triggerOnClickSideEffect: async () => {
                    const result = await RespondentService.get(respondent.id);
                    setDetail(result?.data);
                  }
                }
              }
            />
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
