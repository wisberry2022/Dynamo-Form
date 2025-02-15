import { FC } from "react";
import styles from "./styles/form-info-view.module.css";

type FormInfoViewProps = {
  title: string;
  desc: string;
};

export const FormInfoView: FC<FormInfoViewProps> = (props) => {
  const { title, desc } = props;

  return (
    <div className={styles.formInfo}>
      <h3>{title}</h3>
      <p>{desc}</p>
    </div>
  );
};
