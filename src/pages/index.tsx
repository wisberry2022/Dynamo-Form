import { PageLayout, PageWithLayout, Select, TextField } from "@/5_shared";
import { ChangeEventHandler, useState } from "react";

const Page: PageWithLayout = () => {
  return (
    <>
      <Select></Select>
    </>
  );
};

Page.getLayout = (page) => <PageLayout>{page}</PageLayout>;

export default Page;
