import { useFormSWR } from "@/6_shared";
import { FC } from "react";
import styles from "./styles/form-detail.module.css";
import { FormInfo } from "@/4_features/form";

type FormDetailProps = {
  formId: number;
};

export const FormDetail: FC<FormDetailProps> = (props) => {
  const { formId } = props;
  const { form, mutate } = useFormSWR(formId);

  return (
    <div id={styles.formDetail}>
      {form && form.data && <FormInfo form={form.data} />}
    </div>
  );
};
