import { FC } from "react";
import styles from "./styles/form-list.module.css";
import { useFormListSWR } from "@/6_shared/api";
import { FormList } from "@/3_widgets/form";
import { Button, endpoints } from "@/6_shared";
import { useRouter } from "next/router";

export const FormListMain: FC = () => {
  const { formList } = useFormListSWR();
  const router = useRouter();

  const goCreate = () => {
    router.push(endpoints.form.create);
  }

  return (
    <div id={styles.listContainer}>
      <div className={styles.listHeader}>
        <h3>양식 목록</h3>
        <Button onClick={goCreate}>양식 추가</Button>
      </div>
      <FormList formList={formList?.data} />
    </div>
  );
};
