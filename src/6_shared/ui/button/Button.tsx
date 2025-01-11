import { FC, MouseEventHandler, ReactNode } from "react";
import styles from "./styles/button.module.css";
import { ButtonVariant } from "@/6_shared/types";

type ButtonProps = {
  children: ReactNode;
  width?: number;
  variant?: ButtonVariant;
  className?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
};

export const Button: FC<ButtonProps> = (props) => {
  const { children, onClick, variant = "primary", className, width } = props;
  return (
    <button
      onClick={onClick}
      style={{ width: `${width ? `${width}%` : "auto"}` }}
      className={`${styles[variant]} ${styles.button} ${className}`}
    >
      {children}
    </button>
  );
};
