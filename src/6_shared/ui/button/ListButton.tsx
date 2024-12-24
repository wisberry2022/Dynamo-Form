import { FC, ReactNode } from "react";
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
  }>;

export const ListButton: ListButtonType = (props) => {
  const { bgColor = "secondary", left, center, right } = props;

  const colors = {
    primary: "#D8F9FA",
    secondary: "#f9f9f9",
  };

  return (
    <div
      style={{ backgroundColor: colors[bgColor] }}
      className={styles.listBtn}
    >
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

ListButton.Left = Left;
ListButton.Center = Center;
ListButton.Right = Right;
