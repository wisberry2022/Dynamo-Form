import { FC } from "react";
import styles from "./styles/form-list.module.css";
import { useFormListSWR } from "@/6_shared/api";
import { FormList } from "@/3_widgets/form";

export const FormListMain: FC = () => {
  const { formList } = useFormListSWR();

  return (
    <div id={styles.listContainer}>
      <FormList formList={formList?.data} />
    </div>
  );
};
