import { FC, MouseEvent, useState } from "react";
import styles from "./starreview.module.css";
import { FaRegStar, FaStar, FaStarHalfAlt } from "react-icons/fa";
import Star from "./Star";

type StarReviewProps = {
  limit: number;
  score: number;
  value?: number;
  hideCurrentScore?: boolean;
};

export const StarReview: FC<StarReviewProps> = (props) => {
  const { limit, score, value = 0, hideCurrentScore = false } = props;
  const [range, setRange] = useState<number>(0);
  const [half, setHalf] = useState<number>(-1);
  const [viewScore, setScore] = useState<number>(value);

  const _calcScore = (range: number, half: number) => {
    const criteria = score;

    if (half < 0) {
      setScore(criteria * range);
      return;
    }
    setScore(criteria * range - criteria / 2);
  };

  const _coloring = (
    e: MouseEvent<SVGElement, globalThis.MouseEvent>,
    id: number
  ) => {
    const width = e.currentTarget.clientWidth;
    const pageX = e.nativeEvent.pageX;
    const middlePoint =
      e.currentTarget.getBoundingClientRect().left + width / 2;
    const isLeft = pageX < middlePoint;

    // 별 아이콘의 왼쪽영역을 눌렀을 때
    if (isLeft) {
      setHalf(id);
    } else {
      // 별 아이콘의 오른쪽 영역을 눌렀을 때
      if (half) {
        // 클릭한 별의 이전 별에 이미 반쪽 별이 있을 떼
        setHalf(-1);
      }
    }

    _calcScore(id, isLeft ? id : -1);
    setRange(id);
  };

  const onClick = (
    e: MouseEvent<SVGElement, globalThis.MouseEvent>,
    id: number
  ) => {
    e.stopPropagation();
    _coloring(e, id + 1);
  };

  return (
    <div className={styles.review}>
      <div className={styles.stars}>
        {Array.from({ length: limit / score }).map((_, i) => (
          <Star
            key={i}
            id={i}
            half={half}
            rated={i + 1 <= range}
            onClick={onClick}
          />
        ))}
      </div>
      {!hideCurrentScore && (
        <div className={styles.scoreBox}>
          ( {viewScore} / {limit}점 )
        </div>
      )}
    </div>
  );
};
