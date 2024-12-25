import { ChangeEventHandler, FC, useState } from "react";
import styles from "./textfield.module.css";

type TextFieldProps = {
  value?: string;
  placeholder?: string;
  className?: string;
  width?: number;
  onChange?: ChangeEventHandler<HTMLInputElement>;
};

export const TextField: FC<TextFieldProps> = (props) => {
  const {
    placeholder = "",
    className = "",
    value = "",
    onChange,
    width = 0,
  } = props;

  return (
    <input
      type="text"
      className={`${styles.textField} ${className}`}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      style={{ width: width ? `${width}px` : "auto" }}
    />
  );
};
