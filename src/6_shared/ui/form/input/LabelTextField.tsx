import { ChangeEventHandler, FC } from "react";
import { TextField } from "./TextField";
import styles from "./label-textfield.module.css";

type LabelTextFieldProps = {
  label: string;
  name?: string;
  value?: any;
  className?: string;
  placeholder?: string;
  width?: number;
  subLabel?: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
};

export const LabelTextiField: FC<LabelTextFieldProps> = (props) => {
  const { label, name, value, className, placeholder, width, subLabel, onChange } = props;

  return (
    <div
      style={{ width: `${width ? `${width}px` : "auto"}` }}
      className={`${className} ${styles.labelTextField}`}
    >
      <div className={styles.labelBox}>
        <strong>{label}</strong>
        {subLabel && <span>{subLabel}</span>}
      </div>
      <div className={styles.fieldBox}>
        <TextField
          name={name}
          value={value}
          placeholder={placeholder}
          onChange={onChange}
          width={100}
          fullWidth
        />
      </div>
    </div>
  );
};
