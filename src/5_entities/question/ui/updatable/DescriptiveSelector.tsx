import { CardWrapper, LabelTextiField, QuestionSubCategory } from "@/6_shared";
import { FC } from "react";
import styles from "./style/desc-selector.module.css";

type DescriptiveSelectorProps = {};

export const DescriptiveSelector: FC<DescriptiveSelectorProps> = (props) => {
  return (
    <CardWrapper
      title="STEP2. 세부 유형 설정하기"
      description={`
    STEP1에서 설정한 유형을 기반으로 <br />
    더욱 세부적인 질문을 구성할 수 있습니다.
  `}
      size={2.17}
    >
      <div className={styles.content}>
        <LabelTextiField
          className={styles.selectorTextField}
          width={450}
          label="답변 최대 길이"
          subLabel="3000자 이상은 설정할 수 없습니다."
          placeholder="숫자를 입력하세요"
        />
      </div>
    </CardWrapper>
  );
};
