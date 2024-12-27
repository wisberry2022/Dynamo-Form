import { FC, useEffect } from "react";
import styles from "./styles/Toast.module.css";
import gbStyles from "@/styles/global.module.css";
import { FaCheckCircle } from "react-icons/fa";
import { MdErrorOutline, MdOutlineWarning } from "react-icons/md";
import { useRecoilState } from "recoil";
import { ToastState } from "@/6_shared/states/Toast/ToastStates";

export const CommonToast: FC = () => {
  const [toast, setToast] = useRecoilState(ToastState);

  useEffect(() => {
    if (toast.message) {
      let timer = setTimeout(() => {
        setToast({ type: "success", message: "" });
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [toast.message]);

  const stylesMapper = {
    success: {
      bg: gbStyles.primary,
      icon: <FaCheckCircle />,
      color: toast.type,
    },
    error: {
      bg: gbStyles.pink,
      icon: <MdErrorOutline />,
      color: toast.type,
    },
    warning: {
      bg: gbStyles.brighten,
      icon: <MdOutlineWarning />,
      color: toast.type,
    },
  };

  return (
    <div
      className={`${toast.message ? styles.on : styles.off} ${
        stylesMapper[toast.type].bg
      } ${styles.toast}`}
    >
      {stylesMapper[toast.type].icon}
      <span className={styles[toast.type]}>{toast.message}</span>
    </div>
  );
};