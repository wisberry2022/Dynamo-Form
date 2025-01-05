import { ChangeEventHandler, FC, useState } from "react";
import styles from "./textfield.module.css";

type TextFieldProps = {
  name?: string;
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
    name = "",
    value = "",
    onChange,
    width = 0,
  } = props;

  return (
    <input
      type="text"
      name={name}
      className={`${styles.textField} ${className}`}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      style={{ width: width ? `${width}px` : "auto" }}
    />
  );
};
