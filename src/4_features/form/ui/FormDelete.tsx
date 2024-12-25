import { PopupTrigger } from "@/6_shared";
import { FC } from "react";
import { FaRegTrashAlt } from "react-icons/fa";
import styles from "./styles/form-delete.module.css";
import FormDeleteDialog from "./FormDeleteDialog";

// ToDo: 삭제 API 연동 필요
export const FormDelete: FC = () => {
  const onConfirm = () => {
    console.log("Delete");
  };

  return (
    <PopupTrigger
      trigger={<FaRegTrashAlt className={styles.tIcon} />}
      popup={<FormDeleteDialog onConfirm={onConfirm} />}
    />
  );
};
