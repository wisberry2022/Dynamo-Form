import { FC } from "react";
import styles from "./styles/form-selector.module.css";
import { Button, PopupTrigger } from "@/6_shared";
import { FormLoaderDialog, FormSummary } from "@/4_features/form";

export const FormSelector: FC = () => {
  return (
    <div className={styles.selector}>
      <PopupTrigger
        trigger={<Button variant="brighten">양식 불러오기</Button>}
        popup={<FormLoaderDialog />}
      />
      <FormSummary />
    </div>
  );
};
