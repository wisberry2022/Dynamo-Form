import { FC } from "react";
import styles from "./styles/form-selector.module.css";
import { Button, PopupTrigger } from "@/6_shared";
import { FormLoaderDialog, FormSummary } from "@/4_features/form";

type FormSelectorProps = {
  formId: number | null;
}

export const FormSelector: FC<FormSelectorProps> = (props) => {
  const {formId} = props;

  return (
    <div className={styles.selector}>
      <PopupTrigger
        trigger={<Button variant="brighten">양식 불러오기</Button>}
        popup={<FormLoaderDialog formId={formId} />}
      />
      <FormSummary />
    </div>
  );
};
