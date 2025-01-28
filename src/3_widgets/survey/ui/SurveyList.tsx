import { endpoints, ListButton, SurveyListResponse } from "@/6_shared";
import { FC } from "react";
import { FaFileAlt, FaRegPlusSquare, FaRegTrashAlt } from "react-icons/fa";
import { MdReportGmailerrorred } from "react-icons/md";
import styles from "./styles/survey-list.module.css";
import { SurveyStatusChip } from "@/5_entities/survey";
import { useRouter } from "next/router";

type SurveyListProps = {
  surveys: SurveyListResponse[];
};

export const SurveyList: FC<SurveyListProps> = (props) => {
  const { surveys } = props;

  const router = useRouter();

  const goCreate = () => {
    router.push(endpoints.survey.create);
  };

  return (
    <>
      <ListButton
        bgColor="primary"
        onClick={goCreate}
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
