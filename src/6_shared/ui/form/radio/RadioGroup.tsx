import styles from "./radio.module.css";
import { Children, cloneElement, FC, ReactElement, ReactNode } from "react";

type RadioGroupProps = {
  value: any;
  children: ReactNode;
  onChange: (value: any) => void;
  className?: string;
};

export const RadioGroup: FC<RadioGroupProps> = (props) => {
  const { value, onChange, children, className } = props;
  const childArr = Children.toArray(children);

  return (
    <div className={className ?? styles.radioGroup}>
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
  value: any;
  selected?: any;
  label?: string;
  onChange?: (value: any) => void;
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
