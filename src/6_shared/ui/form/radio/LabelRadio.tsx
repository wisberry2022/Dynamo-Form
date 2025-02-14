import { FC } from "react";
import { Radio, RadioGroup } from "./RadioGroup";
import { FormLabelType } from "@/6_shared/types";
import styles from "./label-radio.module.css";

type LabelRadioProps = {
  label: string;
  radioSet: FormLabelType[];
  value?: any;
  className?: string;
  row?: boolean;
  onChange?: (e: any) => void;
};

export const LabelRadio: FC<LabelRadioProps> = (props) => {
  const {
    label,
    radioSet,
    value,
    onChange = () => {},
    row = false,
    className,
  } = props;

  return (
    <div className={`${styles.labelRadioContainer} ${className}`}>
      <strong>{label}</strong>
      <RadioGroup
        value={value}
        onChange={onChange}
        className={row ? styles.row : styles.column}
      >
        {radioSet.map((radio) => (
          <Radio key={radio.id} value={radio.value} label={radio.label} />
        ))}
      </RadioGroup>
    </div>
  );
};
