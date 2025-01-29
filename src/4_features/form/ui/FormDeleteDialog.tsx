import {
  Button,
  DeleteDialog,
  Dialog,
  DialogBody,
  DialogFooter,
  DialogHeader,
} from "@/6_shared";
import { FC, MouseEventHandler } from "react";
import styles from "./styles/form-delete.module.css";

type FormDeleteDialogProps = {
  open?: boolean;
  onClose?: () => void;
  onConfirm?: () => void;
};

const FormDeleteDialog: FC<FormDeleteDialogProps> = (props) => {
  const { open, onClose, onConfirm } = props;

  return (
    <DeleteDialog
      title="양식 삭제"
      open={open}
      onClose={onClose}
      onConfirm={onConfirm}
    />
  );
};

export default FormDeleteDialog;
