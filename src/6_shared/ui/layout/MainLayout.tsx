import { FC, ReactNode } from "react";
import { Container } from "../container";

type MainLayoutProps = {
  children: ReactNode;
};

export const MainLayout: FC<MainLayoutProps> = (props) => {
  const { children } = props;

  return <Container>{children}</Container>;
};
