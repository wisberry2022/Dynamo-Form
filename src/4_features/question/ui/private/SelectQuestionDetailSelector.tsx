import {
  ReducerDropDownQuestion,
  ReducerMultipleQuestion,
  RespValueSelector,
  SelectSubCategorySelector,
} from "@/5_entities/question";
import { Question, QuestionSubCategory, SelectQuestion } from "@/6_shared";
import { FC } from "react";
import { DropdownQuestionPopup, MultipleQuestionPopup } from "../popup";

type SelectQuestionDetailSelectorProps = {
  state: Question;
  onChangeSubCategory: (category: QuestionSubCategory) => void;
  onChangeMultipleQuestion: (question: ReducerMultipleQuestion) => void;
  onChangeDropDownQuestion: (question: ReducerDropDownQuestion) => void;
};

const SelectQuestionDetailSelector: FC<SelectQuestionDetailSelectorProps> = (
  props
) => {
  const {
    state,
    onChangeSubCategory,
    onChangeDropDownQuestion,
    onChangeMultipleQuestion,
  } = props;

  return (
    <>
      <SelectSubCategorySelector
        subCategory={state.subCategory}
        onChange={onChangeSubCategory}
      />
      <RespValueSelector
        popup={
          state.subCategory === "DROPDOWN" ? (
            <DropdownQuestionPopup />
          ) : (
            <MultipleQuestionPopup
              question={state as SelectQuestion}
              onConfirm={onChangeMultipleQuestion}
            />
          )
        }
      />
    </>
  );
};

export default SelectQuestionDetailSelector;
