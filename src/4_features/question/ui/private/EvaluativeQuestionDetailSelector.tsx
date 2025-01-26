import {
  EvaluativeSelector,
  ReducerRatingQuestion,
  ReducerSliderQuestion,
  RespValueSelector,
} from "@/5_entities/question";
import {
  Question,
  QuestionSubCategory,
  RatingQuestion,
  SliderQuestion,
} from "@/6_shared";
import { FC } from "react";
import { RatingQuestionPopup } from "../popup/RatingQuestionPopup";
import { SliderQuestionPopup } from "../popup";

type EvaluativeQuestionDetailSelectorProps = {
  state: Question;
  onChangeSubCategory: (category: QuestionSubCategory) => void;
  onChangeRatingQuestion: (question: ReducerRatingQuestion) => void;
  onChangeSliderQuestion: (question: ReducerSliderQuestion) => void;
};

const EvaluativeQuestionDetailSelector: FC<
  EvaluativeQuestionDetailSelectorProps
> = (props) => {
  const {
    state,
    onChangeSubCategory,
    onChangeRatingQuestion,
    onChangeSliderQuestion,
  } = props;
  return (
    <>
      <EvaluativeSelector
        question={state}
        onChangeSubCategory={onChangeSubCategory}
      />
      <RespValueSelector
        popup={
          state.subCategory === "RATING" ? (
            <RatingQuestionPopup
              question={state as RatingQuestion}
              onConfirm={onChangeRatingQuestion}
            />
          ) : (
            <SliderQuestionPopup
              question={state as SliderQuestion}
              onConfirm={onChangeSliderQuestion}
            />
          )
        }
      />
    </>
  );
};

export default EvaluativeQuestionDetailSelector;
