import {
  Checkbox,
  PageLayout,
  PageWithLayout,
  Radio,
  RadioGroup,
} from "@/5_shared";
import { useState } from "react";

const Page: PageWithLayout = () => {
  const [checked, setChecked] = useState<number[]>([1, 2, 3]);

  const onChecked = (value: number) => {
    setChecked((prev) => {
      if (prev.includes(value)) {
        return prev.filter((item) => item !== value);
      }
      return prev.concat(value);
    });
  };

  return (
    <>
      <Checkbox
        label="체크1"
        checked={checked.includes(1)}
        onChecked={onChecked}
        value={1}
      />
      <Checkbox
        label="체크2"
        checked={checked.includes(2)}
        onChecked={onChecked}
        value={2}
      />
      <Checkbox
        label="체크3"
        checked={checked.includes(3)}
        onChecked={onChecked}
        value={3}
      />
    </>
  );
};

Page.getLayout = (page) => <PageLayout>{page}</PageLayout>;

export default Page;
