import { Chip, ListButton } from "@/6_shared";
import { SurveyListResponse } from "@/6_shared/types/domain/Survey";
import { FC } from "react";
import { FaFileAlt, FaRegPlusSquare, FaRegTrashAlt } from "react-icons/fa";
import { MdReportGmailerrorred } from "react-icons/md";
import styles from "./styles/survey-list.module.css";
import { SurveyStatusChip } from "@/5_entities/survey";

type SurveyListProps = {
  surveys: SurveyListResponse[];
};

export const SurveyList: FC<SurveyListProps> = (props) => {
  const { surveys } = props;
  return (
    <>
      <ListButton
        bgColor="primary"
        onClick={() => {}}
        center={
          <ListButton.Center
            left={<FaRegPlusSquare className={styles.tIcon} />}
            right={
              <strong className={styles.tTitle}>새로운 설문조사 만들기</strong>
            }
          />
        }
      />
      {surveys.map((survey) => {
        return (
          <ListButton
            key={survey.id}
            onClick={() => {}}
            left={
              <ListButton.Left
                left={
                  <div>
                    <SurveyStatusChip status={survey.status} />
                  </div>
                }
                right={
                  <div className={styles.svTitle}>
                    <FaFileAlt />
                    <strong>{survey.title}</strong>
                  </div>
                }
              />
            }
            right={
              <ListButton.Right
                left={<MdReportGmailerrorred className={styles.tIcon} />}
                right={<FaRegTrashAlt className={styles.tIcon} />}
              />
            }
          />
        );
      })}
    </>
  );
};
