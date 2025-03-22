import {
  endpoints,
  handleError,
  ListButton,
  PopupTrigger,
  Survey,
  SurveyListResponse,
  Toast,
} from "@/6_shared";
import { FC, MouseEvent, MouseEventHandler } from "react";
import { FaRegTrashAlt } from "react-icons/fa";
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

  // 현황 페이지 이동
  const onReport = (
    e: MouseEvent<SVGElement, globalThis.MouseEvent>,
    surveyId: number
  ) => {
    e.stopPropagation();
    router.push(endpoints.survey.report(surveyId));
  };

  return (
    <>
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
                  // ToDo: 설문조사 리스트, 설명값 필드 추가
                  <div className={styles.svTitle}>
                    <strong>{survey.title}</strong>
                  </div>
                }
              />
            }
            right={
              <ListButton.Right
                left={
                  <MdReportGmailerrorred
                    className={styles.tIcon}
                    onClick={(e) => onReport(e, survey.id)}
                  />
                }
                right={
                  ["WAITING", "COMPLETE"].includes(survey.status) && (
                    <PopupTrigger
                      trigger={<FaRegTrashAlt className={styles.tIcon} />}
                      popup={
                        <SurveyDeleteDialog
                          onConfirm={() => onConfirm(survey.id)}
                        />
                      }
                    />
                  )
                }
              />
            }
          />
        );
      })}
    </>
  );
};
