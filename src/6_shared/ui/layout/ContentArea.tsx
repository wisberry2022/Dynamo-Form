import { FC, ReactNode } from "react";
import styles from "./styles/content-area.module.css";
import { TopToolBar } from "../lnb/TopToolBar";
import { Paper } from "./Paper";

type ContentAreaProps = {
  children: ReactNode;
  disableTopToolBar?: boolean;
};

export const ContentArea: FC<ContentAreaProps> = (props) => {
  const { children, disableTopToolBar = false } = props;
  return (
    <div className={styles.content}>
      <TopToolBar disableNavigation={disableTopToolBar} />
      <Paper>{children}</Paper>
    </div>
  );
};
