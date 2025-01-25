import { EvaluativeSelector, RespValueSelector } from "@/5_entities/question";
import { Question, QuestionSubCategory } from "@/6_shared";
import { FC } from "react";
import { RatingQuestionPopup } from "../popup/RatingQuestionPopup";
import { SliderQuestionPopup } from "../popup";

type EvaluativeQuestionDetailSelectorProps = {
  state: Question;
  onChangeSubCategory: (category: QuestionSubCategory) => void;
};

const EvaluativeQuestionDetailSelector: FC<
  EvaluativeQuestionDetailSelectorProps
> = (props) => {
  const { state, onChangeSubCategory } = props;
  return (
    <>
      <EvaluativeSelector
        question={state}
        onChangeSubCategory={onChangeSubCategory}
      />
      <RespValueSelector
        popup={
          state.subCategory === "RATING" ? (
            <RatingQuestionPopup />
          ) : (
            <SliderQuestionPopup />
          )
        }
      />
    </>
  );
};

export default EvaluativeQuestionDetailSelector;
