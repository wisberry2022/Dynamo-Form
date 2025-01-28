import { FC } from "react";
import styles from "./styles/form-selector.module.css";
import { Button } from "@/6_shared";
import { FormSummary } from "@/4_features/form";

export const FormSelector: FC = () => {
  return (
    <div className={styles.selector}>
      <Button variant="brighten">양식 불러오기</Button>
      <FormSummary />
    </div>
  );
};
