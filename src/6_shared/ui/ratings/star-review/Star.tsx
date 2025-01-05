import { FC, MouseEvent } from "react";
import { FaRegStar, FaStar, FaStarHalfAlt } from "react-icons/fa";
import styles from "./starreview.module.css";

type StarProps = {
  id: number;
  half: number;
  rated: boolean;
  onClick: (
    e: MouseEvent<SVGElement, globalThis.MouseEvent>,
    id: number
  ) => void;
};

const Star: FC<StarProps> = (props) => {
  const { id, half, rated, onClick } = props;

  if (half === id + 1) {
    return (
      <FaStarHalfAlt
        className={`${styles.star} ${styles.half}`}
        onClick={(e) => onClick(e, id)}
      />
    );
  }

  if (rated) {
    return (
      <FaStar
        className={`${styles.star} ${styles.scored}`}
        onClick={(e) => onClick(e, id)}
      />
    );
  }

  return <FaRegStar className={styles.star} onClick={(e) => onClick(e, id)} />;
};

export default Star;
