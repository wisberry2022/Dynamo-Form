import { ChangeEventHandler, FC } from "react";
import { TextField } from "./TextField";
import styles from "./label-textfield.module.css";

type LabelTextFieldProps = {
  label: string;
  name?: string;
  value?: any;
  placeholder?: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
};

export const LabelTextiField: FC<LabelTextFieldProps> = (props) => {
  const { label, name, value, placeholder, onChange } = props;

  return (
    <div className={styles.labelTextField}>
      <strong>{label}</strong>
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
