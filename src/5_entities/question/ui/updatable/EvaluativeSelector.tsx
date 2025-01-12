import {
  CardWrapper,
  Question,
  QuestionSubCategory,
  RadioCard,
} from "@/6_shared";
import { FC } from "react";
import { EvaluativeCategoryRadioLabel } from "../../constants/constants";

type EvaluativeSelectorProps = {
  question: Question;
  onChangeSubCategory: (subCategory: QuestionSubCategory) => void;
};

export const EvaluativeSelector: FC<EvaluativeSelectorProps> = (props) => {
  const { question, onChangeSubCategory } = props;

  return (
    <RadioCard
      title="STEP2. 세부 유형 설정하기"
      description={`
  STEP1에서 설정한 유형을 기반으로 <br />
  더욱 세부적인 질문을 구성할 수 있습니다.
      `}
      radioLabels={EvaluativeCategoryRadioLabel}
      defaultValue={question.subCategory}
      onChange={onChangeSubCategory}
    />
  );
};
