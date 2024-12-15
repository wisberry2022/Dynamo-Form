import { cloneElement, FC, ReactElement, ReactNode } from "react";
import styles from "./button.module.css";

type SquareButtonProps = {
  title: string;
  icon: ReactNode;
};

export const SquareButton: FC<SquareButtonProps> = (props) => {
  const { title, icon } = props;

  return (
    <div className={styles.squaredBtn}>
      <div>
        <strong>{title}</strong>
        {cloneElement(icon as ReactElement<any>, { className: styles.icon })}
      </div>
    </div>
  );
};
