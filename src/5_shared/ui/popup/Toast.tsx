import { FC } from "react";
import styles from "./Toast.module.css";
import gbStyles from "@/styles/global.module.css";
import { FaCheckCircle } from "react-icons/fa";
import { MdErrorOutline, MdOutlineWarning } from "react-icons/md";

type ToastProps = {
  type: "success" | "error" | "warning";
  message: string;
};

export const Toast: FC<ToastProps> = (props) => {
  const { type, message } = props;

  const stylesMapper = {
    success: {
      bg: gbStyles.primary,
      icon: <FaCheckCircle />,
      color: type,
    },
    error: {
      bg: gbStyles.pink,
      icon: <MdErrorOutline />,
      color: type,
    },
    warning: {
      bg: gbStyles.brighten,
      icon: <MdOutlineWarning />,
      color: type,
    },
  };

  return (
    <div className={`${stylesMapper[type].bg} ${styles.toast}`}>
      {stylesMapper[type].icon}
      <span className={styles[type]}>{message}</span>
    </div>
  );
};
