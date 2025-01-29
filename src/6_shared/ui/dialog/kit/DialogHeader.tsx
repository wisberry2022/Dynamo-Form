import { FC, ReactNode } from "react";
import styles from "./styles/Dialog.module.css";
import { MdOutlineClose } from "react-icons/md";

type DialogHeaderProps = {
  title?: string;
  children?: ReactNode;
  onClose?: () => void;
};

export const DialogHeader: FC<DialogHeaderProps> = (props) => {
  const { title, children, onClose = () => {} } = props;

  return (
    <div className={styles.header}>
      {children || (
        <>
          <strong>{title}</strong>
          <MdOutlineClose onClick={onClose} />
        </>
      )}
    </div>
  );
};
