import {
  Button,
  endpoints,
  handleError,
  PopupTrigger,
  Survey,
  SurveyDetailResponse,
  SurveyStatus,
  Toast,
  useSurveyListSWR,
} from "@/6_shared";
import { useRouter } from "next/router";
import { FC } from "react";
import { SurveyDeleteDialog } from "./SurveyDeleteDialog";
import { toUpdateRequest } from "../libs/TypeMapper";
import useSWR from "swr";
import { Paths } from "@/6_shared/api/core/Paths";
import { SurveyCompleteDialog } from "./SurveyCompleteDialog";
import { SurveySuspendDialog } from "./SurveySuspendDialog";

type SurveyDetailButtonsAreaProps = {
  survey: SurveyDetailResponse;
  status: SurveyStatus;
};

export const SurveyDetailButtonsArea: FC<SurveyDetailButtonsAreaProps> = (
  props
) => {
  const { survey, status } = props;
  const { mutate } = useSWR(Paths.survey.get(survey.id));

  // 취소하기
  const router = useRouter();

  const onCancel = () => {
    router.back();
  };

  // 삭제하기
  const onDelete = async () => {
    try {
      await Survey.delete(survey.id);
      Toast.success("설문조사를 삭제했습니다.");
      router.replace(endpoints.survey.index);
    } catch (e) {
      handleError(e);
    }
  };

  // 수정하기
  const onUpdate = async () => {
    try {
      await Survey.update(toUpdateRequest(survey));
      Toast.success("수정되었습니다.");
      mutate();
    } catch (e) {
      handleError(e);
    }
  };

  // 중단하기
  const onSuspend = async () => {
    try {
      await Survey.suspend(survey.id);
      Toast.success("중단되었습니다.");
      mutate();
    } catch (e) {
      handleError(e);
    }
  };

  // 마감하기
  const onComplete = async () => {
    try {
      await Survey.complete(survey.id);
      Toast.success("마감되었습니다.");
      mutate();
    } catch (e) {
      handleError(e);
    }
  };

  if (status === "WAITING") {
    return (
      <>
        <Button variant="brighten" onClick={onCancel}>
          취소하기
        </Button>
        <PopupTrigger
          trigger={
            <Button variant="pink" onClick={onDelete}>
              삭제하기
            </Button>
          }
          popup={<SurveyDeleteDialog onConfirm={onDelete} />}
        />
        <Button variant="primary" onClick={onUpdate}>
          저장하기
        </Button>
      </>
    );
  }

  if (status === "PROGRESS") {
    return (
      <>
        <Button variant="brighten" onClick={onCancel}>
          취소하기
        </Button>
        <PopupTrigger
          trigger={<Button variant="hazy">중단하기</Button>}
          popup={<SurveySuspendDialog onConfirm={onSuspend} />}
        />
        <PopupTrigger
          trigger={<Button variant="pink">마감하기</Button>}
          popup={<SurveyCompleteDialog onConfirm={onComplete} />}
        />
      </>
    );
  }

  if (status === "COMPLETE") {
    return (
      <>
        <Button variant="brighten" onClick={onCancel}>
          취소하기
        </Button>
        <PopupTrigger
          trigger={<Button variant="pink">삭제하기</Button>}
          popup={<SurveyDeleteDialog onConfirm={onDelete} />}
        />
      </>
    );
  }

  if (status === "SUSPENDED") {
    return (
      <>
        <Button variant="brighten" onClick={onCancel}>
          취소하기
        </Button>
        <Button variant="primary" onClick={onUpdate}>
          수정하기
        </Button>
      </>
    );
  }

  return <></>;
};
