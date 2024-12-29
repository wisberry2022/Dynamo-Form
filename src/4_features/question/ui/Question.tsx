import { FormPaper } from "@/5_entities/form";
import { Question as QuestionResponse } from "@/6_shared";
import { FC } from "react";
import { FaPen, FaRegTrashAlt, FaTrash } from "react-icons/fa";
import styles from "./styles/question.module.css";
import QuestionMapper from "./QuestionMapper";

type QuestionProps = {
  question: QuestionResponse;
};

export const Question: FC<QuestionProps> = (props) => {
  const { question } = props;

  return (
    <FormPaper>
      <FormPaper.TitleBar
        left={<div>{question.question}</div>}
        right={
          <div className={styles.mod}>
            <FaPen />
            <FaRegTrashAlt />
          </div>
        }
      />
      <FormPaper.Main>
        <QuestionMapper question={question} />
      </FormPaper.Main>
    </FormPaper>
  );
};
