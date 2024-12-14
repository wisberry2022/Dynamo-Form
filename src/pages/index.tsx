import { PageLayout, PageWithLayout, Select, TextField } from "@/5_shared";
import { ChangeEventHandler, useState } from "react";

const Page: PageWithLayout = () => {
  const [value, setValue] = useState<string>("Value1");

  const onChange = (value: any) => {
    setValue(value);
  };

  return (
    <>
      <Select value={value} onChange={onChange}>
        <Select.Item label={"Value1"} value={"Value1"} />
        <Select.Item label={"Value2"} value={"Value2"} />
        <Select.Item label={"Value3"} value={"Value3"} />
        <Select.Item label={"Value4"} value={"Value4"} />
        <Select.Item label={"Value5"} value={"Value5"} />
        <Select.Item label={"Value6"} value={"Value6"} />
      </Select>
    </>
  );
};

Page.getLayout = (page) => <PageLayout>{page}</PageLayout>;

export default Page;
