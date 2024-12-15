import { FC, ReactNode } from "react";
import { Container } from "./Container";
import { DetailHeader } from "../header";
import { Paper } from "./Paper";

type PageLayoutProps = {
  children: ReactNode;
};

export const PageLayout: FC<PageLayoutProps> = (props) => {
  const { children } = props;

  return (
    <Container>
      <DetailHeader />
      <Paper>{children}</Paper>
    </Container>
  );
};
