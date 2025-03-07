import { FormPaper } from "@/5_entities/form";
import {
  LabelTextiField,
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
  onDelete: (viewOrder: number) => void;
};

export const UpdatableQuestion: FC<UpdatableQuestionProps> = (props) => {
  const { question, onReadOnly, onQuestionSave, onDelete } = props;
  const handler = useDataHandler<QuestionResponse>(question);

  const onSectionSave = (question: QuestionResponse) => {
    onQuestionSave(question);
    onReadOnly();
  };

  const onCancel = () => {
    if (!question.id) {
      onDelete(question.viewOrder);
      return;
    }
    onReadOnly();
  };

  return (
    <FormPaper>
      <FormPaper.TitleBar
        left={
          <div className={styles.required}>
            <strong>필수 응답 여부</strong>
            <Switch
              onChange={handler.onSwitch}
              name="required"
              checked={question.required}
            />
          </div>
        }
        right={
          <div className={styles.mod}>
            <MdOutlineClose onClick={onCancel} />
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
