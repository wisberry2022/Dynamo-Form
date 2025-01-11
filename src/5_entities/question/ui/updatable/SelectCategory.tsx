import { DataHandlerType, Question, SelectQuestion } from "@/6_shared";
import { FC } from "react";
import { UpdatableCategoryLayout } from "./UpdatableCategoryLayout";
import { CategorySelector } from "../private/CategorySelector.";

type SelectCategoryProps = {
  handler: DataHandlerType<SelectQuestion>;
  onQuestionSave: (question: Question) => void;
};

export const SelectCategory: FC<SelectCategoryProps> = (props) => {
  const { handler, onQuestionSave } = props;
  const { state: question, onTextField } = handler;

  const onSectionSave = () => {
    onQuestionSave(question);
  };

  return (
    <UpdatableCategoryLayout
      status="MODIFY"
      question={question}
      onQuestion={onTextField}
      onSectionSave={onSectionSave}
    >
        <CategorySelector />
    </UpdatableCategoryLayout>
  );
};
