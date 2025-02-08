import { FC, ReactNode } from "react";
import { Container } from "./Container";
import { LeftLNB } from "../lnb";
import { ContentArea } from "./ContentArea";

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
      <ContentArea disableTopToolBar={disableTopToolBar}>
        {children}
      </ContentArea>
    </Container>
  );
};
