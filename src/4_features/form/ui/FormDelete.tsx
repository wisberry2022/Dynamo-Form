import { PopupTrigger } from "@/6_shared";
import { FC } from "react";
import { FaRegTrashAlt } from "react-icons/fa";
import styles from "./styles/form-delete.module.css";
import FormDeleteDialog from "./FormDeleteDialog";
import { Form } from "@/6_shared/api";
import useSWR from "swr";
import { Paths } from "@/6_shared/api/core/Paths";

type FormDeleteProps = {
  id: number;
};

export const FormDelete: FC<FormDeleteProps> = (props) => {
  const { id } = props;
  const { mutate } = useSWR(Paths.form.getAll);

  const onConfirm = async () => {
    try {
      await Form.delete(id);
      mutate();
    } catch (e) {}
  };

  return (
    <PopupTrigger
      trigger={<FaRegTrashAlt className={styles.tIcon} />}
      popup={<FormDeleteDialog onConfirm={onConfirm} />}
    />
  );
};
