import {
  TextualQuestion as TextualQuestionResponse,
  TextualReply,
  Toast,
} from "@/6_shared";
import { ChangeEventHandler, FC, useMemo } from "react";
import styles from "./styles/textual-question.module.css";

type TextualQuestionProps = {
  question: TextualQuestionResponse;
  value?: TextualReply;
  disableWrite?: boolean;
  handler?: (questionId: number, text: string) => void;
};

export const TextualQuestion: FC<TextualQuestionProps> = (props) => {
  const {
    question,
    value = { text: "" },
    disableWrite = false,
    handler = () => {},
  } = props;
  const maxLength = useMemo(() => question.answerLimit, [question]);

  const onChange: ChangeEventHandler<HTMLTextAreaElement> = (e) => {
    const { value: input } = e.target;

    // 최대 입력 길이를 초과했을을 경우
    if (value?.text.concat(input).length > maxLength) {
      Toast.error(`최대 ${maxLength}자까지 입력 가능합니다.`);
      handler(question.id as number, value.text.slice(0, maxLength));
      return;
    }

    handler(question.id as number, input);
  };

  return (
    <div className={styles.qContainer}>
      {disableWrite ? (
        <div className={styles.answerArea}>
          <strong>답변 영역입니다.</strong>
        </div>
      ) : (
        <textarea
          className={styles.answerArea}
          onChange={onChange}
          value={value.text}
        />
      )}
    </div>
  );
};
