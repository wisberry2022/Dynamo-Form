import { Question } from "@/6_shared";
import { FC } from "react";
import { ReplyQuestions } from "../model/ComponentMapper";
import { useReplyHandler } from "@/5_entities/reply/libs/useReplyHandler";

type ReplyQuestionMapperProps = {
  question: Question;
};

const ReplyQuestionMapper: FC<ReplyQuestionMapperProps> = (props) => {
  const { question } = props;
  const {reply} = useReplyHandler();

  const content = ReplyQuestions[question.subCategory] || (() => {});

  return content(question, reply);
};

export default ReplyQuestionMapper;
