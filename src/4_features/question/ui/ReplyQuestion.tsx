import { FormPaper } from "@/5_entities/form";
import { QuestionTitle } from "@/5_entities/question";
import { Question } from "@/6_shared";
import { FC } from "react";
import ReplyQuestionMapper from "./ReplyQuestionMapper";

type ReplyQuestionProps = {
  question: Question;
};

export const ReplyQuestion: FC<ReplyQuestionProps> = (props) => {
  const { question } = props;

  return (
    <FormPaper>
      <FormPaper.TitleBar
        left={<QuestionTitle question={question} />}
        right={null}
      />
      <FormPaper.Main>
        <ReplyQuestionMapper question={question} />
      </FormPaper.Main>
    </FormPaper>
  );
};
