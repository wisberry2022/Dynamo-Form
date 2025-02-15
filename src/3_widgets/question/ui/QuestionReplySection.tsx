import { ReplyQuestion } from "@/4_features/question";
import { Question } from "@/6_shared";
import { FC } from "react";

type QuestionReplySectionProps = {
  question: Question;
};

export const QuestionReplySection: FC<QuestionReplySectionProps> = (props) => {
  const { question } = props;

  return <ReplyQuestion question={question} />;
};
