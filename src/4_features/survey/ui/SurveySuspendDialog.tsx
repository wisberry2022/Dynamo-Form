import { ConfirmDialog } from "@/6_shared";
import { FC } from "react";

type SurveySuspendDialogProps = {
  open?: boolean;
  onClose?: () => void;
  onConfirm?: () => void;
};

export const SurveySuspendDialog: FC<SurveySuspendDialogProps> = (props) => {
  const { open, onClose, onConfirm } = props;

  return (
    <ConfirmDialog
      open={open}
      onClose={onClose}
      title="중단하기"
      content={{
        title: "설문을 중단하시겠습니까?",
        description: "중단된 설문 조사는 추후 다시 진행할 수 있습니다.",
      }}
      onConfirm={onConfirm}
    />
  );
};
