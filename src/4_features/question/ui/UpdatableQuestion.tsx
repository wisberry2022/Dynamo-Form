import { FormPaper } from "@/5_entities/form";
import {
  Question as QuestionResponse,
  Switch,
  useDataHandler,
} from "@/6_shared";
import { FC } from "react";
import styles from "./styles/updatable-question.module.css";
import QuestionMapper from "./QuestionMapper";
import { MdOutlineClose } from "react-icons/md";

type UpdatableQuestionProps = {
  question: QuestionResponse;
  onReadOnly: () => void;
};

export const UpdatableQuestion: FC<UpdatableQuestionProps> = (props) => {
  const { question, onReadOnly } = props;
  const { state } = useDataHandler<QuestionResponse>(question);

  return (
    <FormPaper>
      <FormPaper.TitleBar
        left={<div>{state.question}</div>}
        right={
          <div className={styles.mod}>
            <div className={styles.required}>
              <strong>필수 응답 여부</strong>
              <Switch onChange={() => {}} name="" checked={question.required} />
            </div>
            <MdOutlineClose onClick={onReadOnly} />
          </div>
        }
      />
      <FormPaper.Main>
        <QuestionMapper question={state} />
      </FormPaper.Main>
    </FormPaper>
  );
};
