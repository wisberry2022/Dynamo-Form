import { ChangeEventHandler, FC, ReactNode } from "react";
import cstyles from "./style/category.module.css";
import { Button, DataStatus, LabelTextiField, Question } from "@/6_shared";

type UpdatableCategoryLayoutProps = {
  status: DataStatus;
  question: Question;
  children: ReactNode;
  onQuestion: ChangeEventHandler<HTMLInputElement>;
  onSectionSave: () => void;
};

export const UpdatableCategoryLayout: FC<UpdatableCategoryLayoutProps> = (
  props
) => {
  const { status, question, children, onQuestion, onSectionSave } = props;

  return (
    <div className={cstyles.category}>
      <div className={cstyles.titleSetter}>
        <LabelTextiField
          label="질문"
          placeholder="질문을 입력하세요"
          name="question"
          onChange={onQuestion}
          value={question.question}
        />
      </div>
      <div className={cstyles.content}>{children}</div>
      {status === "MODIFY" ? (
        <Button
          className={cstyles.btn}
          variant="brighten"
          onClick={onSectionSave}
        >
          항목 수정하기
        </Button>
      ) : (
        <Button
          className={cstyles.btn}
          variant="primary"
          onClick={onSectionSave}
        >
          항목 추가하기
        </Button>
      )}
    </div>
  );
};
