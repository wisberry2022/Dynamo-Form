import { FC, ReactNode } from "react";
import styles from "./styles/button.module.css";
import { ButtonVariant } from "@/6_shared/types";

type ButtonProps = {
  children: ReactNode;
  variant?: ButtonVariant;
  onClick?: () => void;
};

export const Button: FC<ButtonProps> = (props) => {
  const { children, onClick, variant = "primary" } = props;
  return (
    <button onClick={onClick} className={`${styles[variant]} ${styles.button}`}>
      {children}
    </button>
  );
};
