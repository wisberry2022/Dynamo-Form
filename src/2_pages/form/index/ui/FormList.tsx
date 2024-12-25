import { FC, useEffect } from "react";
import styles from "./styles/form-list.module.css";
import { ListButton } from "@/6_shared";
import {
  FaFileAlt,
  FaPen,
  FaRegPlusSquare,
  FaRegTrashAlt,
} from "react-icons/fa";
import { Form, useFormListSWR } from "@/6_shared/api";
import { FormDelete } from "@/4_features/form";

export const FormList: FC = () => {
  const { formList } = useFormListSWR();

  return (
    <div id={styles.listContainer}>
      <ListButton
        bgColor="primary"
        center={
          <ListButton.Center
            left={<FaRegPlusSquare className={styles.tIcon} />}
            right={
              <strong className={styles.tTitle}>새로운 양식 만들기</strong>
            }
          />
        }
      />
      {formList?.data?.map((form) => {
        return (
          <ListButton
            key={form.id}
            left={
              <ListButton.Left
                left={<FaFileAlt className={styles.tIcon} />}
                right={<strong className={styles.tTitle}>{form.title}</strong>}
              />
            }
            right={
              <ListButton.Right
                left={<FaPen className={styles.tIcon} />}
                right={<FormDelete />}
              />
            }
          />
        );
      })}
    </div>
  );
};
