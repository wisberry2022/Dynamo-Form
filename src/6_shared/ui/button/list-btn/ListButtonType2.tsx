import { FC, ReactNode } from "react";
import styles from "./styles/list-btn-v2.module.css";

type LeftProps = {
  left: ReactNode;
  right: ReactNode;
  classes?: string;
};

type RightProps = {
  left: ReactNode;
  right: ReactNode;
  classes?: string;
};

type ListButtonCompound = {
  Left: FC<LeftProps>;
  Right: FC<RightProps>;
};

type ListButtonType = ListButtonCompound &
  FC<{
    left?: ReactNode;
    right?: ReactNode;
  }>;

export const ListButtonType2: ListButtonType = (props) => {
  const { left, right } = props;

  return (
    <div className={styles.listBtnV2}>
      {left}
      {right}
    </div>
  );
};

const Left: FC<LeftProps> = (props) => {
  const { left, right, classes = "" } = props;
  return (
    <div className={`${classes || styles.left}`}>
      {left}
      {right}
    </div>
  );
};

const Right: FC<RightProps> = (props) => {
  const { left, right, classes = "" } = props;

  return (
    <div className={`${classes || styles.right}`}>
      {left}
      {right}
    </div>
  );
};

ListButtonType2.Left = Left;
ListButtonType2.Right = Right;
