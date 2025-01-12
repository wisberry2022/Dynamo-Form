import {
  RespValueSelector,
  SelectSubCategorySelector,
} from "@/5_entities/question";
import { Question, QuestionSubCategory } from "@/6_shared";
import { FC } from "react";

type SelectQuestionDetailSelectorProps = {
  state: Question;
  onChangeSubCategory: (category: QuestionSubCategory) => void;
};

const SelectQuestionDetailSelector: FC<SelectQuestionDetailSelectorProps> = (
  props
) => {
  const { state, onChangeSubCategory } = props;

  return (
    <>
      <SelectSubCategorySelector
        subCategory={state.subCategory}
        onChange={onChangeSubCategory}
      />
      <RespValueSelector />
    </>
  );
};

export default SelectQuestionDetailSelector;
