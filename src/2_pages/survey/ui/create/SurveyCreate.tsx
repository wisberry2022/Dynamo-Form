import { FC } from "react";
import styles from "./styles/survey-create.module.css";
import { FormSelector } from "@/3_widgets/form";
import { SurveySetting } from "@/3_widgets/survey";
import { Button } from "@/6_shared";

export const SurveyCreate: FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.setting}>
        <FormSelector />
        <SurveySetting />
      </div>
      <div className={styles.btnBox}>
        <Button variant="brighten">취소하기</Button>
        <Button variant="primary">저장하기</Button>
      </div>
    </div>
  );
};
