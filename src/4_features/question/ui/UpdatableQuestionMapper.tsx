import { DataHandlerType, Question } from "@/6_shared";
import { FC } from "react";
import { QuestionSetter } from "../model/ComponentMapper";

type UpdatableQuestionMapperProps = {
  handler: DataHandlerType<Question>;
  onQuestionSave: (question: Question) => void;
};

const UpdatableQuestionMapper: FC<UpdatableQuestionMapperProps> = (props) => {
  const { handler, onQuestionSave } = props;

  const content = QuestionSetter[handler.state.category] || (() => {});

  return content(handler, onQuestionSave);
};

export default UpdatableQuestionMapper;
