import { FC, MouseEventHandler, ReactNode } from "react";
import styles from "./styles/list-btn.module.css";

type ListButtonCompound = {
  Left: FC<LeftProps>;
  Center: FC<CenterProps>;
  Right: FC<RightProps>;
};

type ListButtonType = ListButtonCompound &
  FC<{
    bgColor?: "primary" | "secondary";
    left?: ReactNode;
    center?: ReactNode;
    right?: ReactNode;
    onClick?: () => void;
  }>;

export const ListButtonType1: ListButtonType = (props) => {
  const { bgColor = "secondary", left, center, right, onClick } = props;

  return (
    <div className={styles.listBtn} onClick={onClick}>
      <div className={styles.leftBox}>{left}</div>
      <div className={styles.centerBox}>{center}</div>
      <div className={styles.rightBox}>{right}</div>
    </div>
  );
};

type LeftProps = {
  left: ReactNode;
  right: ReactNode;
};

const Left: FC<LeftProps> = (props) => {
  const { left, right } = props;

  return (
    <div className={styles.end}>
      {left}
      {right}
    </div>
  );
};

type CenterProps = {
  left: ReactNode;
  right: ReactNode;
};

const Center: FC<CenterProps> = (props) => {
  const { left, right } = props;

  return (
    <div className={styles.center}>
      {left}
      {right}
    </div>
  );
};

type RightProps = {
  left?: ReactNode;
  right?: ReactNode;
};

const Right: FC<RightProps> = (props) => {
  const { left, right } = props;

  return (
    <div className={styles.end}>
      {left}
      {right}
    </div>
  );
};

ListButtonType1.Left = Left;
ListButtonType1.Center = Center;
ListButtonType1.Right = Right;
