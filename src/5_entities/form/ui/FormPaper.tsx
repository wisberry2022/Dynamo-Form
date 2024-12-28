import { FC, ReactNode } from "react";
import styles from "./styles/form-paper.module.css";

type FormPaperCompound = {
  TitleBar: FC<TitleBarProps>;
  Main: FC<MainProps>;
};

type FormPaperProps = {
  children: ReactNode;
};

type FormPaperType = FormPaperCompound & FC<FormPaperProps>;

export const FormPaper: FormPaperType = (props) => {
  const { children } = props;

  return <div className={styles.formPaper}>{children}</div>;
};

type TitleBarProps = {
  left: ReactNode;
  right: ReactNode;
};

const TitleBar: FC<TitleBarProps> = (props) => {
  const { left, right } = props;

  return (
    <div className={styles.titleBar}>
      <div className={styles.left}>{left}</div>
      <div className={styles.right}>{right}</div>
    </div>
  );
};

type MainProps = {
  children: ReactNode;
};

const Main: FC<MainProps> = (props) => {
  const { children } = props;

  return <div className={styles.main}>{children}</div>;
};

FormPaper.TitleBar = TitleBar;
FormPaper.Main = Main;
