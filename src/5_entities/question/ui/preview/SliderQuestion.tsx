import {
  Slider,
  SliderQuestion as SliderQuestionResponse,
  SliderReply,
} from "@/6_shared";
import { FC, MouseEventHandler } from "react";
import styles from "./styles/slider-question.module.css";

type SliderQuestionProps = {
  question: SliderQuestionResponse;
  value?: SliderReply;
  handler?: (questionId: number, score: number) => void;
};

export const SliderQuestion: FC<SliderQuestionProps> = (props) => {
  const { question, value, handler = () => {} } = props;

  const onChange = (score: number) => {
    handler(question.id as number, score);
  };

  return (
    <div className={styles.qContainer}>
      <Slider
        defaultScore={(question.min + question.max) / 2}
        min={question.min}
        max={question.max}
        value={value?.score}
        onChange={onChange}
      />
    </div>
  );
};
