import {
  CardWrapper,
  LabelTextiField,
  QuestionSubCategory,
  TextualQuestion,
} from "@/6_shared";
import { ChangeEventHandler, FC } from "react";
import styles from "./style/desc-selector.module.css";
import { ReducerTextualQuestion } from "../../model/types";

type DescriptiveSelectorProps = {
  state: TextualQuestion;
  onChangeTextualQuestion: (question: ReducerTextualQuestion) => void;
};

export const DescriptiveSelector: FC<DescriptiveSelectorProps> = (props) => {
  const { state, onChangeTextualQuestion } = props;

  const onChangeAnswerLimit: ChangeEventHandler<HTMLInputElement> = (e) => {
    onChangeTextualQuestion({
      answerLimit: e.target.value ? parseInt(e.target.value) : 0,
    });
  };

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
          name="answerLimit"
          value={state.answerLimit}
          onChange={onChangeAnswerLimit}
          subLabel="3000자 이상은 설정할 수 없습니다."
          placeholder="숫자를 입력하세요"
        />
      </div>
    </CardWrapper>
  );
};
