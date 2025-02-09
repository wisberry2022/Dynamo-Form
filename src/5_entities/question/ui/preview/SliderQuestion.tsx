import { Slider, SliderQuestion as SliderQuestionResponse } from "@/6_shared";
import { FC, MouseEventHandler } from "react";
import styles from "./styles/slider-question.module.css";

type SliderQuestionProps = {
  question: SliderQuestionResponse;
};

export const SliderQuestion: FC<SliderQuestionProps> = (props) => {
  const { question } = props;

  return (
    <div className={styles.qContainer}>
      <Slider
        defaultScore={(question.min + question.max) / 2}
        min={question.min}
        max={question.max}
      />
    </div>
  );
};
