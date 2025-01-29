import { ConfirmDialog } from "@/6_shared";
import { FC } from "react";

type SurveyCompleteDialogProps = {
  onConfirm: () => void;
  open?: boolean;
  onClose?: () => void;
};

export const SurveyCompleteDialog: FC<SurveyCompleteDialogProps> = (props) => {
  const { onConfirm, open, onClose } = props;

  return (
    <ConfirmDialog
      open={open}
      onClose={onClose}
      title="마감하기"
      onConfirm={onConfirm}
      content={{
        title: "마감하시겠습니까?",
        description: "마감된 설문 조사는 다시 진행할 수 없습니다",
      }}
    />
  );
};
