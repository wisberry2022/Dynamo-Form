import styles from "./radio.module.css";
import { Children, cloneElement, FC, ReactElement, ReactNode } from "react";

type RadioGroupProps = {
  value: string | number;
  onChange: (value: string | number) => void;
  children: ReactNode;
};

export const RadioGroup: FC<RadioGroupProps> = (props) => {
  const { value, onChange, children } = props;
  const childArr = Children.toArray(children);

  return (
    <div className={styles.radioGroup}>
      {childArr.map((child, idx) =>
        cloneElement(child as ReactElement<RadioProps>, {
          key: idx,
          selected: value,
          onChange,
        })
      )}
    </div>
  );
};

type RadioProps = {
  value: string | number;
  selected?: string | number;
  label?: string;
  onChange?: (value: string | number) => void;
};

export const Radio: FC<RadioProps> = (props) => {
  const { selected, value, onChange = () => {}, label } = props;

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
