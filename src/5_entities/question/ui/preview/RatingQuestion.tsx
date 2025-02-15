import {
  RatingQuestion as RatingQuestionResponse,
  RatingReply,
  StarReview,
} from "@/6_shared";
import { FC } from "react";
import styles from "./styles/rating-question.module.css";

type RatingQuestionProps = {
  question: RatingQuestionResponse;
  value?: RatingReply;
  handler?: (questionId: number, score: number) => void;
};

export const RatingQuestion: FC<RatingQuestionProps> = (props) => {
  const { question, value, handler = () => {} } = props;

  const onScore = (score: number) => {
    handler(question.id as number, score);
  };

  return (
    <div className={styles.qContainer}>
      <StarReview
        limit={question.ratingLimit}
        score={question.score}
        value={value?.score}
        onChange={onScore}
      />
    </div>
  );
};
