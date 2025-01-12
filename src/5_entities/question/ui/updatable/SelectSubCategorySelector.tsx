import { QuestionSubCategory, SelectCard } from "@/6_shared";
import { FC } from "react";
import { QuestionSubCategorySelectLabel } from "../../constants/constants";

type SubCategorySelectorProps = {
  subCategory: string;
  onChange: (value: QuestionSubCategory) => void;
};

export const SelectSubCategorySelector: FC<SubCategorySelectorProps> = (
  props
) => {
  const { subCategory, onChange } = props;

  const mapper: { [key: string]: string } = {
    MULTI_QUESTION: "N지 선다형",
    DROPDOWN: "드롭다운형",
  };


  return (
    <SelectCard
      title="STEP2. 세부 유형 설정하기"
      description={`
    STEP1에서 설정한 유형을 기반으로 <br />
    더욱 세부적인 질문을 구성할 수 있습니다.
    `}
      defaultValue={subCategory}
      selectItemLabels={QuestionSubCategorySelectLabel}
      onChange={onChange}
    />
  );
};
