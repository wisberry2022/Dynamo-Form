import { Question } from "@/6_shared";
import { FC } from "react";
import { Questions } from "../model/ComponentMapper";

type QuestionMapperProps = {
  question: Question;
};

const QuestionMapper: FC<QuestionMapperProps> = (props) => {
  const { question } = props;

  const content = Questions[question.subCategory] || (() => {});

  return content(question);
};

export default QuestionMapper;
