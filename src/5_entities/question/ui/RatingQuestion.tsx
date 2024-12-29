import { RatingQuestion as RatingQuestionResponse } from "@/6_shared";
import { FC } from "react";
import styles from "./styles/rating-question.module.css";
import { FaRegStar } from "react-icons/fa";

type RatingQuestionProps = {
  question: RatingQuestionResponse;
};

export const RatingQuestion: FC<RatingQuestionProps> = (props) => {
  const { question } = props;
  return (
    <div className={styles.qContainer}>
      <h4>{question.question}</h4>
      <div className={styles.starts}>
        {Array.from({ length: question.ratingLimit / question.score }).map(
          (_, i) => (
            <FaRegStar key={i} />
          )
        )}
      </div>
      <div className={styles.scoreBox}>( 0 / {question.ratingLimit}점 )</div>
    </div>
  );
};
