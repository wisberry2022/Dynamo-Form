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
      <QuestionContent question={question} />
    </div>
  );
};

type QuestionContentProps = {
  question: SelectQuestion;
};

const QuestionContent: FC<QuestionContentProps> = (props) => {
  const { question } = props;

  if (question.multiple) {
    return (
      <div className={styles.quest}>
        {question.questions.map((quest, idx) => (
          <Checkbox
            key={idx}
            value={idx}
            checked={false}
            onChecked={() => {}}
            label={quest}
          />
        ))}
      </div>
    );
  }

  return (
    <RadioGroup className={styles.radioGrp} value="" onChange={() => {}}>
      {question.questions.map((quest, idx) => (
        <Radio key={idx} value={quest} label={quest} />
      ))}
    </RadioGroup>
  );
};
