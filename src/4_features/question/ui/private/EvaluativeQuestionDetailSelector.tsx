import { EvaluativeSelector, RespValueSelector } from "@/5_entities/question";
import { Question, QuestionSubCategory } from "@/6_shared";
import { FC } from "react";

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
      <RespValueSelector />
    </>
  );
};

export default EvaluativeQuestionDetailSelector;
