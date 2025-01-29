import { FC, MouseEventHandler } from "react";
import styles from "./styles/delete-dialog.module.css";
import {
  Button,
  Dialog,
  DialogBody,
  DialogFooter,
  DialogHeader,
} from "@/6_shared";

type DeleteDialogProps = {
  title: string;
  open?: boolean;
  onClose?: () => void;
  onConfirm?: () => void;
};

export const DeleteDialog: FC<DeleteDialogProps> = (props) => {
  const { title, open, onClose = () => {}, onConfirm = () => {} } = props;

  const close: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.stopPropagation();
    onClose();
  };

  const confirm: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.stopPropagation();
    onClose();
    onConfirm();
  };

  return (
    <Dialog size="small" open={open} onClose={onClose}>
      <DialogHeader title={title} />
      <DialogBody>
        <h3 className={styles.body}>정말로 삭제하시겠습니까?</h3>
      </DialogBody>
      <DialogFooter align="right">
        <div style={{ display: "flex", gap: "1rem" }}>
          <Button variant="brighten" onClick={close}>
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
