import {
  RespValueSelector,
  SelectSubCategorySelector,
} from "@/5_entities/question";
import { Question, QuestionSubCategory } from "@/6_shared";
import { FC } from "react";
import { DropdownQuestionPopup, MultipleQuestionPopup } from "../popup";

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
      <RespValueSelector
        popup={
          state.subCategory === "DROPDOWN" ? (
            <DropdownQuestionPopup />
          ) : (
            <MultipleQuestionPopup />
          )
        }
      />
    </>
  );
};

export default SelectQuestionDetailSelector;
