import { Index } from "@/2_pages/index";
import { Container, PageLayout, PageWithLayout } from "@/6_shared";
import { FC, useState } from "react";

const Page: PageWithLayout = () => {
  return <Index />;
};

Page.getLayout = (page) => (
  <PageLayout title="" disableTopToolBar>
    {page}
  </PageLayout>
);

export default Page;
