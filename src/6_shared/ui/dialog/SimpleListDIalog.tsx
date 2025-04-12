import { FC } from "react";
import { Dialog } from "./kit/Dialog";
import { DialogHeader } from "./kit/DialogHeader";
import { DialogBody } from "./kit/DialogBody";
import { DialogFooter } from "./kit/DialogFooter";
import { Button } from "../button";
import styles from "./styles/simple-list-dialog.module.css";
import { SimpleListType } from "@/6_shared/types";

type SimpleListDialogProps = {
  list: SimpleListType[];
  title?: string;
  open?: boolean;
  onClose?: () => void;
};

export const SimpleListDialog: FC<SimpleListDialogProps> = (props) => {
  const { list, title = "모달", open, onClose } = props;

  return (
    <Dialog open={open} onClose={onClose} size="small">
      <DialogHeader title={title} onClose={onClose} />
      <DialogBody>
        <ul className={styles.list}>
          {list.map((lst, idx) => (
            <li key={idx}>
              <strong>{lst.label}</strong>
              <span>{lst.content}</span>
            </li>
          ))}
        </ul>
      </DialogBody>
      <DialogFooter>
        <div className={styles.btnBox}>
          <Button variant="primary" onClick={onClose}>
            확인
          </Button>
        </div>
      </DialogFooter>
    </Dialog>
  );
};
