import {
  PageLayout,
  PageWithLayout,
  Select,
  Switch,
  TextField,
} from "@/5_shared";
import { ChangeEventHandler, useState } from "react";

const Page: PageWithLayout = () => {
  const [value, setValue] = useState<boolean>(true);

  const onChange = (value: boolean) => {
    setValue(value);
  };

  return (
    <>
      <Switch
        checked={value}
        onChange={onChange}
        label={value ? "사용" : "미사용"}
      />
    </>
  );
};

Page.getLayout = (page) => <PageLayout>{page}</PageLayout>;

export default Page;
