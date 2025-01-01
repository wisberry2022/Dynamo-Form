import {
  DragEventHandler,
  FC,
  MouseEventHandler,
  useRef,
  useState,
} from "react";
import styles from "./slide.module.css";

type SliderProps = {
  min: number;
  max: number;
  className?: string;
  disableLabel?: boolean;
};

export const Slider: FC<SliderProps> = (props) => {
  const { min, max, className, disableLabel = false } = props;
  const pointRef = useRef<HTMLSpanElement>(null);
  const barRef = useRef<HTMLDivElement>(null);

  const [state, setState] = useState<boolean>(false);
  const [score, setScore] = useState(0);

  const calcScore = (offset: number) => {
    const range = max - min;
    const xEnd = barRef.current?.offsetWidth as number;
    const intvl = range / xEnd;

    if (offset < 0) {
      setScore(min);
      return;
    }

    if (offset > xEnd) {
      setScore(max);
      return;
    }

    setScore(Math.round(offset * intvl));
  };

  const onMouseDown: MouseEventHandler<HTMLSpanElement> = (e) => {
    e.stopPropagation();
    setState(true);
  };

  const onMouseUp: MouseEventHandler<HTMLSpanElement> = (e) => {
    e.stopPropagation();
    setState(false);
  };

  const onMouseMove: MouseEventHandler<HTMLSpanElement> = (e) => {
    if (state) {
      const xStart = barRef.current?.offsetLeft as number;
      const xEnd = barRef.current?.offsetWidth as number;
      const currentOffset = e.pageX - xStart;

      calcScore(currentOffset);

      if (currentOffset >= 0 && currentOffset <= xEnd) {
        (pointRef.current as HTMLSpanElement).style.left = `${
          e.pageX - xStart
        }px`;
      }
    }
  };

  const onLineClick: MouseEventHandler<HTMLDivElement> = (e) => {
    const x = barRef.current?.offsetLeft as number;
    (pointRef.current as HTMLSpanElement).style.left = `${e.pageX - x}px`;
    calcScore(e.pageX - x);
  };

  return (
    <div
      className={styles.sContainer}
      onMouseMove={onMouseMove}
      onMouseUp={onMouseUp}
    >
      {!disableLabel && (
        <div className={styles.labels}>
          <strong className={styles.left}>{min}</strong>
          <strong className={styles.right}>{max}</strong>
        </div>
      )}
      <div
        ref={barRef}
        className={`${styles.slide} ${className}`}
        onClick={onLineClick}
      >
        <span ref={pointRef} onMouseDown={onMouseDown} style={{}} />
      </div>
      <strong>{score}점</strong>
    </div>
  );
};
