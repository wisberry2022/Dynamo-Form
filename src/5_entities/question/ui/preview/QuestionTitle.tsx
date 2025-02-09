import { FC, ReactNode } from "react";
import styles from "./styles/question-title.module.css";
import {
  DropDownQuestion,
  Question,
  SelectQuestion,
  TextualQuestion,
} from "@/6_shared";

type QuestionTitleProps = {
  question: Question;
};

export const QuestionTitle: FC<QuestionTitleProps> = (props) => {
  const { question } = props;

  const getSubQuestion = (question: Question): ReactNode => {
    switch (question.subCategory) {
      case "MULTI_QUESTION":
        let selectQuestion = question as SelectQuestion;
        return selectQuestion.multiple ? (
          <span> ({selectQuestion.responseLimit}개 선택 가능)</span>
        ) : null;
      case "TEXTUAL":
        let textualQuestion = question as TextualQuestion;
        return <span>({textualQuestion.answerLimit}자 이내로 서술)</span>;
      default:
        return null;
    }
  };

  return (
    <div className={styles.title}>
      <strong>{question.question}</strong>
      {getSubQuestion(question)}
    </div>
  );
};
