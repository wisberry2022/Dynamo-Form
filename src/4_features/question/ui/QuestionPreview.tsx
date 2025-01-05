import { FormPaper } from "@/5_entities/form";
import {
  DataHandlerType,
  FormResponse,
  Question as QuestionResponse,
  useDataHandler,
} from "@/6_shared";
import { FC } from "react";
import { FaPen, FaRegTrashAlt, FaTrash } from "react-icons/fa";
import styles from "./styles/question.module.css";
import QuestionMapper from "./QuestionMapper";

type QuestionPreviewProps = {
  question: QuestionResponse;
  onModify: () => void;
  onDelete: (id: number) => void;
};

export const QuestionPreview: FC<QuestionPreviewProps> = (props) => {
  const { question, onModify, onDelete } = props;

  return (
    <FormPaper>
      <FormPaper.TitleBar
        left={<div>{question.question}</div>}
        right={
          <div className={styles.mod}>
            <FaPen onClick={onModify} />
            <FaRegTrashAlt onClick={() => onDelete(question.id)} />
          </div>
        }
      />
      <FormPaper.Main>
        <QuestionMapper question={question} />
      </FormPaper.Main>
    </FormPaper>
  );
};
