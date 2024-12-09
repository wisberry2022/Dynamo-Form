import { PageLayout, PageWithLayout, TextField } from "@/5_shared";
import { ChangeEventHandler, useState } from "react";

const Page: PageWithLayout = () => {
  const [value, setValue] = useState<string>("");

  const onChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setValue(e.target.value);
  };

  return (
    <>
      <TextField placeholder="placeholder" value={value} onChange={onChange} />
    </>
  );
};

Page.getLayout = (page) => <PageLayout>{page}</PageLayout>;

export default Page;
