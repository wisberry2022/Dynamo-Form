import { FC, MouseEventHandler } from "react";
import { Dialog } from "./kit/Dialog";
import { DialogHeader } from "./kit/DialogHeader";
import { DialogBody } from "./kit/DialogBody";
import { DialogFooter } from "./kit/DialogFooter";
import { Button } from "../button";
import styles from "./styles/confirm-dialog.module.css";

type ConfirmDialogProps = {
  title: string;
  content: {
    title: string;
    description?: string;
  };
  open?: boolean;
  onClose?: () => void;
  onConfirm?: () => void;
};

export const ConfirmDialog: FC<ConfirmDialogProps> = (props) => {
  const { title, content, open, onClose, onConfirm } = props;

  const close: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.stopPropagation();
    onClose?.();
  };

  const confirm: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.stopPropagation();
    onConfirm?.();
  };

  return (
    <Dialog open={open} onClose={onClose} size="small">
      <DialogHeader title={title} onClose={onClose} />
      <DialogBody>
        <div className={styles.content}>
          <h3>{content.title}</h3>
          {content["description"] && <p>{content.description}</p>}
        </div>
      </DialogBody>
      <DialogFooter>
        <div className={styles.btnBox}>
          <Button variant="brighten" onClick={close}>
            취소
          </Button>
          <Button variant="primary" onClick={confirm}>
            확인
          </Button>
        </div>
      </DialogFooter>
    </Dialog>
  );
};
