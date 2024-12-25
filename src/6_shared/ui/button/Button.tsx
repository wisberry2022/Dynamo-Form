import { FC, ReactNode } from "react";
import styles from "./styles/button.module.css";
import { ButtonVariant } from "@/6_shared/types";

type ButtonProps = {
  children: ReactNode;
  width?: number;
  variant?: ButtonVariant;
  onClick?: () => void;
};

export const Button: FC<ButtonProps> = (props) => {
  const { children, onClick, variant = "primary", width } = props;
  return (
    <button
      onClick={onClick}
      style={{ width: `${width ? `${width}%` : "auto"}` }}
      className={`${styles[variant]} ${styles.button}`}
    >
      {children}
    </button>
  );
};
