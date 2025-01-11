import { QuestionCategory, RadioCard } from "@/6_shared";
import { FC } from "react";
import { CategorySelectRadioLabel } from "../../constants/constants";

type CategorySelectorProps = {
  category: QuestionCategory;
  onChangeCategory: (category: QuestionCategory) => void;
};

export const CategorySelector: FC<CategorySelectorProps> = (props) => {
  const { category, onChangeCategory } = props;

  return (
    <RadioCard
      title="STEP1. 항목 유형 설정하기"
      description={`
        항목 유형을 설정하면 <br />
        다양한 형태의 설문지를 만들 수 있습니다.`}
      radioLabels={CategorySelectRadioLabel}
      defaultValue={category}
      onChange={onChangeCategory}
    />
  );
};
