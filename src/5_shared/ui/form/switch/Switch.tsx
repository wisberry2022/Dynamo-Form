import { FC, useState } from "react";
import styles from "./switch.module.css";

type SwitchProps = {
  checked: boolean;
  onChange: (checked: boolean) => void;
  label?: string;
};

export const Switch: FC<SwitchProps> = (props) => {
  const { checked, onChange, label } = props;
  const [isToggle, setToggle] = useState<boolean>(checked);

  const onSwitch = () => {
    onChange(!isToggle);
    setToggle((prev) => !prev);
  };

  return (
    <div className={styles.switch} onClick={onSwitch}>
      <div className={`${styles.stick} ${isToggle ? styles.active : ""}`}></div>
      {label && <span className={styles.label}>{label}</span>}
    </div>
  );
};
