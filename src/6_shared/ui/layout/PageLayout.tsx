import { FC, ReactNode } from "react";
import { LeftLNB } from "../lnb";
import { ContentArea } from "./ContentArea";
import { Container } from "../container";

type PageLayoutProps = {
  title: string;
  children: ReactNode;
  navigate?: boolean;
  signOut?: boolean;
};

export const PageLayout: FC<PageLayoutProps> = (props) => {
  const { title, children, navigate = false, signOut = false } = props;

  return (
    <Container>
      <LeftLNB />
      <ContentArea title={title} navigate={navigate} signOut={signOut}>
        {children}
      </ContentArea>
    </Container>
  );
};
