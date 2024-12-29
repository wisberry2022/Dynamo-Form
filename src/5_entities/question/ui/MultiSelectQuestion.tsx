import {
  Checkbox,
  Question,
  Radio,
  RadioGroup,
  SelectQuestion,
} from "@/6_shared";
import { FC } from "react";
import styles from "./styles/multi-select-question.module.css";

type MultiSelectQuestionProps = {
  question: SelectQuestion;
};

export const MultiSelectQuestion: FC<MultiSelectQuestionProps> = (props) => {
  const { question } = props;

  return (
    <div className={styles.qContainer}>
      <div className={styles.title}>
        <h4>{question.question}</h4>
        {question.multiple && (
          <strong>({question.responseLimit}개 선택 가능)</strong>
        )}
      </div>
      <div className={styles.list}>
        <QuestionContent question={question} />
      </div>
    </div>
  );
};

type QuestionContentProps = {
  question: SelectQuestion;
};

const QuestionContent: FC<QuestionContentProps> = (props) => {
  const { question } = props;

  if (question.multiple) {
    return question.questions.map((quest, idx) => (
      <div className={styles.quest}>
        <Checkbox
          key={idx}
          value={idx}
          checked={false}
          onChecked={() => {}}
          label={quest}
        />
      </div>
    ));
  }

  return (
    <RadioGroup className={styles.radioGrp} value="" onChange={() => {}}>
      {question.questions.map((quest, idx) => (
        <Radio key={idx} value={quest} label={quest} />
      ))}
    </RadioGroup>
  );
};
