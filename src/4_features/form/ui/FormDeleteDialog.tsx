import {
  Button,
  Dialog,
  DialogBody,
  DialogFooter,
  DialogHeader,
} from "@/6_shared";
import { FC } from "react";
import styles from "./styles/form-delete.module.css";

type FormDeleteDialogProps = {
  open?: boolean;
  onClose?: () => void;
  onConfirm?: () => void;
};

const FormDeleteDialog: FC<FormDeleteDialogProps> = (props) => {
  const { open, onClose, onConfirm } = props;

  const confirm = () => {
    onConfirm?.();
    onClose?.();
  };

  return (
    <Dialog size="small" open={open} onClose={onClose}>
      <DialogHeader title="양식 삭제" />
      <DialogBody>
        <h3 className={styles.body}>정말로 삭제하시겠습니까?</h3>
      </DialogBody>
      <DialogFooter align="right">
        <div style={{ display: "flex", gap: "1rem" }}>
          <Button variant="brighten" onClick={onClose}>
            취소
          </Button>
          <Button variant="pink" onClick={confirm}>
            확인
          </Button>
        </div>
      </DialogFooter>
    </Dialog>
  );
};

export default FormDeleteDialog;
