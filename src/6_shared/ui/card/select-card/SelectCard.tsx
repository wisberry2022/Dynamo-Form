import { FC } from "react";
import { CardWrapper } from "../card-kit/CardWrapper";
import { Select } from "../../form";
import styles from "./select-card.module.css";
import { FormLabelType, QuestionSubCategory } from "@/6_shared/types";

type SelectCardProps = {
  title: string;
  description: string;
  selectItemLabels: FormLabelType[];
  defaultValue?: string;
  onChange?: (value: any) => void;
};

export const SelectCard: FC<SelectCardProps> = (props) => {
  const { title, description, selectItemLabels, defaultValue, onChange } =
    props;

  return (
    <CardWrapper title={title} description={description}>
      <div className={styles.selectBox}>
        <Select value={defaultValue} onChange={onChange} width={100}>
          {selectItemLabels.map((item) => (
            <Select.Item key={item.id} label={item.label} value={item.value} />
          ))}
        </Select>
      </div>
    </CardWrapper>
  );
};
