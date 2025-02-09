import { FC, ReactNode } from "react";
import { LeftLNB } from "../lnb";
import { ContentArea } from "./ContentArea";
import { Container } from "../container";

type PageLayoutProps = {
  title: string;
  children: ReactNode;
  disableTopToolBar?: boolean;
};

export const PageLayout: FC<PageLayoutProps> = (props) => {
  const { title, children, disableTopToolBar = false } = props;

  return (
    <Container>
      <LeftLNB />
      <ContentArea title={title} disableTopToolBar={disableTopToolBar}>
        {children}
      </ContentArea>
    </Container>
  );
};
