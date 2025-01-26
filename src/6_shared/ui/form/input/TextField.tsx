import { ChangeEventHandler, FC, useState } from "react";
import styles from "./textfield.module.css";

type TextFieldProps = {
  name?: string;
  value?: string | number;
  placeholder?: string;
  className?: string;
  width?: number;
  fullWidth?: boolean;
  onChange?: ChangeEventHandler<HTMLInputElement>;
};

export const TextField: FC<TextFieldProps> = (props) => {
  const {
    placeholder = "",
    className = "",
    name = "",
    value = "",
    width = 0,
    fullWidth = false,
    onChange,
  } = props;

  return (
    <input
      type="text"
      name={name}
      className={`${styles.textField} ${className}`}
      placeholder={placeholder}
      value={value}
      onClick={(e) => e.stopPropagation()}
      onChange={onChange}
      style={{ width: fullWidth ? "100%" : width ? `${width}px` : "auto" }}
    />
  );
};
