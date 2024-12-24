import { FC, ReactNode } from "react";
import { Container } from "./Container";
import { DetailHeader } from "../header";
import { Paper } from "./Paper";

type PageLayoutProps = {
  title: string;
  children: ReactNode;
};

export const PageLayout: FC<PageLayoutProps> = (props) => {
  const { title, children } = props;

  return (
    <Container>
      <DetailHeader title={title} />
      <Paper>{children}</Paper>
    </Container>
  );
};
