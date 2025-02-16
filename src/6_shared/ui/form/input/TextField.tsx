import { ChangeEventHandler, FC, useState } from "react";
import styles from "./textfield.module.css";

type TextFieldProps = {
  name?: string;
  value?: string | number;
  placeholder?: string;
  className?: string;
  width?: number;
  fullWidth?: boolean;
  type?: string;
  isError?: boolean;
  onChange?: ChangeEventHandler<HTMLInputElement>;
};

export const TextField: FC<TextFieldProps> = (props) => {
  const {
    placeholder = "",
    className = "",
    name = "",
    value = "",
    width = 0,
    type = "text",
    fullWidth = false,
    isError = false,
    onChange,
  } = props;

  return (
    <input
      type={type ?? "text"}
      name={name}
      className={`${styles.textField} ${className} ${
        isError ? styles.error : ""
      }`}
      placeholder={placeholder}
      value={value}
      onClick={(e) => e.stopPropagation()}
      onChange={onChange}
      style={{ width: fullWidth ? "100%" : width ? `${width}px` : "auto" }}
    />
  );
};
