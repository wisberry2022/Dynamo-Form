import styles from "./radio.module.css";
import { FC, useState } from "react";

type RadioProps = {
  selected: string | number;
  value: string | number;
  onChange: (value: string | number) => void;
  label?: string;
};

export const Radio: FC<RadioProps> = (props) => {
  const { selected, value, onChange, label } = props;

  const onClick = () => {
    onChange(value);
  };

  return (
    <div
      className={`${styles.radioRow}  ${
        value === selected ? styles.checked : ""
      }`}
      onClick={onClick}
    >
      <div>
        <div className={`${styles.checkeBall}`}></div>
      </div>
      <span>{label}</span>
    </div>
  );
};
