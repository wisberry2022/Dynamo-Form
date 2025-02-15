import { Question } from "@/6_shared";
import { FC } from "react";
import { ReplyQuestions } from "../model/ComponentMapper";

type ReplyQuestionMapperProps = {
  question: Question;
};

const ReplyQuestionMapper: FC<ReplyQuestionMapperProps> = (props) => {
  const { question } = props;

  const content = ReplyQuestions[question.subCategory] || (() => {});

  return content(question);
};

export default ReplyQuestionMapper;
