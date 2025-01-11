import { RadioCard } from "@/6_shared";
import { FC } from "react";
import { CategorySelectRadioLabel } from "../../constants/constants";

export const CategorySelector: FC = () => {
  return (
    <RadioCard
      title="STEP1. 항목 유형 설정하기"
      description={`
        항목 유형을 설정하면 <br />
        다양한 형태의 설문지를 만들 수 있습니다.`}
      radioLabels={CategorySelectRadioLabel}
      defaultValue=""
      onChange={() => {}}
    />
  );
};
