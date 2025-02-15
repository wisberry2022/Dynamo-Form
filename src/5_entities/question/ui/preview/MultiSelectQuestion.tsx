import {
  Checkbox,
  Question,
  Radio,
  RadioGroup,
  SelectQuestion,
  SelectReply,
  Toast,
} from "@/6_shared";
import { FC, useMemo } from "react";
import styles from "./styles/multi-select-question.module.css";

type MultiSelectQuestionProps = {
  question: SelectQuestion;
  value?: SelectReply;
  handler?: (questionId: number, answers: string[]) => void;
};

export const MultiSelectQuestion: FC<MultiSelectQuestionProps> = (props) => {
  const { question, value, handler } = props;

  return (
    <div className={styles.qContainer}>
      <QuestionContent question={question} value={value} handler={handler} />
    </div>
  );
};

type QuestionContentProps = {
  question: SelectQuestion;
  value?: SelectReply;
  handler?: (questionId: number, answers: string[]) => void;
};

const QuestionContent: FC<QuestionContentProps> = (props) => {
  const {
    question,
    value = { answers: [] as string[] },
    handler = () => {},
  } = props;
  const { answers } = value;
  const maxSelect = useMemo(() => question.responseLimit, [question]);

  // 다건 선택형 질문의 답변 선택 이벤트
  const onChecked = (value: number) => {
    const target = question.questions[value];

    // 체크 해제
    if (answers.includes(target)) {
      handler(
        question.id as number,
        answers.filter((ans) => ans !== target)
      );
      return;
    }

    // 선택 제한
    const selected = [...answers, target];
    if (selected.length > maxSelect) {
      Toast.error(`${maxSelect}개 이상 선택할 수 없습니다!`);
      return;
    }

    handler(question.id as number, [...answers, target]);
  };

  // 단건 선택형 질문의 답변 선택 이벤트
  const onRadio = (value: string) => {
    handler(question.id as number, [value]);
  };

  if (question.multiple) {
    return (
      <div className={styles.quest}>
        {question.questions.map((quest, idx) => (
          <Checkbox
            key={idx}
            value={idx}
            checked={answers.includes(quest)}
            onChecked={onChecked}
            label={quest}
          />
        ))}
      </div>
    );
  }

  return (
    <RadioGroup
      className={styles.radioGrp}
      value={value.answers[0]}
      onChange={onRadio}
    >
      {question.questions.map((quest, idx) => (
        <Radio key={idx} value={quest} label={quest} />
      ))}
    </RadioGroup>
  );
};
