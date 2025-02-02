import { FC, ReactNode } from "react";
import { Container } from "./Container";
import { Paper } from "./Paper";

type FullLayoutProps = {
  children: ReactNode;
};

export const FullLayout: FC<FullLayoutProps> = (props) => {
  const { children } = props;

  return (
    <Container>
      <Paper height={90}>{children}</Paper>
    </Container>
  );
};
