import { ChipVariant } from "@/6_shared/types";
import { FC } from "react";
import styles from "./styles/chip.module.css";

type ChipProps = {
  text: string;
  variant?: ChipVariant;
};

export const Chip: FC<ChipProps> = (props) => {
  const { variant = "primary", text } = props;

  return (
    <div className={`${styles.chip} ${styles[variant as string]}`}>{text}</div>
  );
};
