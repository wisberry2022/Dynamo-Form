import { FC, ReactNode } from "react";
import { Paper } from "./Paper";
import { ColumnContainer } from "../container/ColumnContainer";

type FullLayoutProps = {
  children: ReactNode;
};

export const FullLayout: FC<FullLayoutProps> = (props) => {
  const { children } = props;

  return (
    <ColumnContainer>
      <Paper height={85}>{children}</Paper>
    </ColumnContainer>
  );
};
