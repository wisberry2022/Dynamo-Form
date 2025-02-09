import { FormPaper } from "@/5_entities/form";
import { Question as QuestionResponse } from "@/6_shared";
import { FC } from "react";
import { FaPen, FaRegTrashAlt, FaTrash } from "react-icons/fa";
import styles from "./styles/question.module.css";
import QuestionMapper from "./QuestionMapper";
import { QuestionTitle } from "@/5_entities/question";

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
        left={<QuestionTitle question={question} />}
        right={
          <div className={styles.mod}>
            <FaPen onClick={onModify} />
            <FaRegTrashAlt onClick={() => onDelete(question.viewOrder)} />
          </div>
        }
      />
      <FormPaper.Main>
        <QuestionMapper question={question} />
      </FormPaper.Main>
    </FormPaper>
  );
};
