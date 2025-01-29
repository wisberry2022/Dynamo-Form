import { DeleteDialog } from "@/6_shared";
import { FC } from "react";

type SurveyDeleteDialogProps = {
  open?: boolean;
  onClose?: () => void;
  onConfirm?: () => void;
};

export const SurveyDeleteDialog: FC<SurveyDeleteDialogProps> = (props) => {
  const { open, onClose, onConfirm } = props;

  return (
    <DeleteDialog
      title="설문 조사 삭제"
      open={open}
      onClose={onClose}
      onConfirm={onConfirm}
    />
  );
};
