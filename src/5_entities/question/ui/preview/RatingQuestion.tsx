import {
  RatingQuestion as RatingQuestionResponse,
  StarReview,
} from "@/6_shared";
import { FC } from "react";
import styles from "./styles/rating-question.module.css";

type RatingQuestionProps = {
  question: RatingQuestionResponse;
};

export const RatingQuestion: FC<RatingQuestionProps> = (props) => {
  const { question } = props;
  return (
    <div className={styles.qContainer}>
      <StarReview limit={question.ratingLimit} score={question.score} />
    </div>
  );
};
