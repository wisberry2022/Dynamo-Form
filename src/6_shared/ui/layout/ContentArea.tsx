import { FC, ReactNode } from "react";
import styles from "./styles/content-area.module.css";
import { TopToolBar } from "../lnb/TopToolBar";
import { Paper } from "./Paper";

type ContentAreaProps = {
  children: ReactNode;
  title?: string;
  navigate?: boolean;
  signOut?: boolean;
};

export const ContentArea: FC<ContentAreaProps> = (props) => {
  const { children, title = "", navigate = false, signOut = false } = props;
  return (
    <div className={styles.content}>
      <TopToolBar navigation={navigate} signOut={signOut} />
      <Paper>
        {title && <h2>{title}</h2>}
        {children}
      </Paper>
    </div>
  );
};
