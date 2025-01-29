import {
  endpoints,
  handleError,
  ListButton,
  PopupTrigger,
  Survey,
  SurveyListResponse,
  Toast,
} from "@/6_shared";
import { FC } from "react";
import { FaFileAlt, FaRegPlusSquare, FaRegTrashAlt } from "react-icons/fa";
import { MdReportGmailerrorred } from "react-icons/md";
import styles from "./styles/survey-list.module.css";
import { SurveyStatusChip } from "@/5_entities/survey";
import { useRouter } from "next/router";
import { SurveyDeleteDialog } from "@/4_features/survey";
import useSWR from "swr";
import { Paths } from "@/6_shared/api/core/Paths";

type SurveyListProps = {
  surveys: SurveyListResponse[];
};

export const SurveyList: FC<SurveyListProps> = (props) => {
  const { surveys } = props;
  const { mutate } = useSWR(Paths.survey.list);

  const router = useRouter();

  // 설문조사 생성 페이지 이동
  const goCreate = () => {
    router.push(endpoints.survey.create);
  };

  // 설문조사 수정 페이지 이동
  const goDetail = (id: number) => {
    router.push(endpoints.survey.id(id));
  };

  // 설문조사 삭제 함수
  const onConfirm = async (surveyId: number) => {
    try {
      await Survey.delete(surveyId);
      Toast.success("설문조사가 삭제되었습니다.");
      mutate();
    } catch (e) {
      handleError(e);
    }
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
            onClick={() => goDetail(survey.id)}
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
                right={
                  <PopupTrigger
                    trigger={<FaRegTrashAlt className={styles.tIcon} />}
                    popup={
                      <SurveyDeleteDialog
                        onConfirm={() => onConfirm(survey.id)}
                      />
                    }
                  />
                }
              />
            }
          />
        );
      })}
    </>
  );
};
