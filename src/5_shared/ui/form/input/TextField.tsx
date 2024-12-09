import { ChangeEventHandler, FC, useState } from "react";
import styles from "./textfield.module.css";

type TextFieldProps = {
  value?: string;
  placeholder?: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  width?: number;
};

export const TextField: FC<TextFieldProps> = (props) => {
  const { placeholder = "", value = "", onChange, width = 0 } = props;

  return (
    <input
      type="text"
      className={styles.textField}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      style={{ width: width ? `${width}px` : "auto" }}
    />
  );
};
