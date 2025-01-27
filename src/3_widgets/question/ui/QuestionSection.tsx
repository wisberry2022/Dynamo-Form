import { QuestionPreview, UpdatableQuestion } from "@/4_features/question";
import { Button, DataStatus, Question } from "@/6_shared";
import { FC, useState } from "react";

type QuestionSectionProps = {
  question: Question;
  onQuestionSave: (question: Question) => void;
  onDelete: (id: number) => void;
};

export const QuestionSection: FC<QuestionSectionProps> = (props) => {
  const { question, onQuestionSave, onDelete } = props;
  const [status, setStatus] = useState<DataStatus>(
    question.id ? "READ" : "MODIFY"
  );

  const onModify = () => {
    setStatus("MODIFY");
  };

  const onRead = () => {
    setStatus("READ");
  };

  return status === "READ" ? (
    <QuestionPreview
      question={question}
      onModify={onModify}
      onDelete={onDelete}
    />
  ) : (
    <UpdatableQuestion
      question={question}
      onReadOnly={onRead}
      onQuestionSave={onQuestionSave}
    />
  );
};
