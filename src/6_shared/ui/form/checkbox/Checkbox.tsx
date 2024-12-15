import { FC, useState } from "react";
import styles from "./checkbox.module.css";
import { FaCheck } from "react-icons/fa";

type CheckboxProps = {
  value: any;
  onChecked: (value: any) => void;
  checked?: boolean;
  label?: string;
};

export const Checkbox: FC<CheckboxProps> = (props) => {
  const { value, onChecked, checked = false, label } = props;

  const onClick = () => {
    onChecked(value);
  };

  return (
    <div className={styles.checkboxSet} onClick={onClick}>
      <div className={`${styles.checkbox} ${checked ? styles.checked : ""}`}>
        <FaCheck />
      </div>
      {label && <span>{label}</span>}
    </div>
  );
};
