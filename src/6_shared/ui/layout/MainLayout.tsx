import { FC, ReactNode } from "react";
import { Container } from "./Container";

type MainLayoutProps = {
  children: ReactNode;
};

export const MainLayout: FC<MainLayoutProps> = (props) => {
  const { children } = props;

  return <Container>hi</Container>;
};
