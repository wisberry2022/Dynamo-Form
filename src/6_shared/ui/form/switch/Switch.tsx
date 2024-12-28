import { FC, useState } from "react";
import styles from "./switch.module.css";

type SwitchProps = {
  checked: boolean;
  onChange: (checked: boolean) => void;
  label?: string;
  className?: string;
  width?: number;
};

export const Switch: FC<SwitchProps> = (props) => {
  const { checked, onChange, label, className, width = 0 } = props;
  const [isToggle, setToggle] = useState<boolean>(checked);

  const onSwitch = () => {
    onChange(!isToggle);
    setToggle((prev) => !prev);
  };

  return (
    <div
      style={{ width: `${width ? `${width}px !important` : "auto"}` }}
      className={`${styles.switch} ${className}`}
      onClick={onSwitch}
    >
      <div className={`${styles.stick} ${isToggle ? styles.active : ""}`}></div>
      {label && <span className={styles.label}>{label}</span>}
    </div>
  );
};
