import { FC } from "react";
import styles from "./radio-card.module.css";
import { Radio, RadioGroup } from "../../form";
import { CardWrapper } from "../card-kit/CardWrapper";
import { FormLabelType } from "@/6_shared/types";

type RadioCardProps = {
  title: string;
  description: string;
  defaultValue: any;
  radioLabels: FormLabelType[];
  onChange: (value: any) => void;
};

export const RadioCard: FC<RadioCardProps> = (props) => {
  const { title, description, defaultValue, onChange, radioLabels } = props;

  return (
    <CardWrapper title={title} description={description}>
      <div className={styles.radioGroup}>
        <RadioGroup value={defaultValue} onChange={onChange}>
          {radioLabels.map((label) => (
            <Radio key={label.id} value={label.value} label={label.label} />
          ))}
        </RadioGroup>
      </div>
    </CardWrapper>
  );
};
