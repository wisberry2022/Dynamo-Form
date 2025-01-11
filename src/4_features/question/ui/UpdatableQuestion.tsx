import { FormPaper } from "@/5_entities/form";
import {
  Question as QuestionResponse,
  Switch,
  TextField,
  useDataHandler,
} from "@/6_shared";
import { FC } from "react";
import styles from "./styles/updatable-question.module.css";
import { MdOutlineClose } from "react-icons/md";
import UpdatableQuestionMapper from "./UpdatableQuestionMapper";

type UpdatableQuestionProps = {
  question: QuestionResponse;
  onReadOnly: () => void;
  onQuestionSave: (question: QuestionResponse) => void;
};

export const UpdatableQuestion: FC<UpdatableQuestionProps> = (props) => {
  const { question, onReadOnly, onQuestionSave } = props;
  const handler = useDataHandler<QuestionResponse>(question);

  const onSectionSave = () => {
    onQuestionSave(handler.state);
    onReadOnly();
  };

  return (
    <FormPaper>
      <FormPaper.TitleBar
        left={
          <div className={styles.titleField}>
            <strong>1. </strong>
            <TextField
              name="title"
              placeholder="질문 제목을 입력하세요"
              value={handler.state.title}
              onChange={handler.onTextField}
            />
          </div>
        }
        right={
          <div className={styles.mod}>
            <div className={styles.required}>
              <strong>필수 응답 여부</strong>
              <Switch
                onChange={handler.onSwitch}
                name="required"
                checked={question.required}
              />
            </div>
            <MdOutlineClose onClick={onReadOnly} />
          </div>
        }
      />
      <FormPaper.Main>
        <UpdatableQuestionMapper
          handler={handler}
          onQuestionSave={onSectionSave}
        />
      </FormPaper.Main>
    </FormPaper>
  );
};
