import {
  ObjType,
  RespondentResponse,
  SimpleListDialog,
  SimpleListType,
} from "@/6_shared";
import { FC } from "react";

type RespondentInfoDialogProps = {
  respondent: RespondentResponse | null;
  open?: boolean;
  onClose?: () => void;
};

export const RespondentInfoDialog: FC<RespondentInfoDialogProps> = (props) => {
  const { respondent, open, onClose } = props;

  const keyMapper: ObjType<string> = {
    name: "이름",
    email: "이메일",
    phoneNumber: "연락처",
    gender: "성별",
  };

  const viewList: SimpleListType[] = respondent
    ? Object.entries(respondent).map(([label, content]) => {
        return {
          label: keyMapper[label],
          content:
            label === "gender"
              ? content === "MALE"
                ? "남성"
                : "여성"
              : content,
        } as SimpleListType;
      })
    : [];

  return (
    <SimpleListDialog
      title="설문자 정보 상세보기"
      list={viewList}
      open={open}
      onClose={onClose}
    />
  );
};
