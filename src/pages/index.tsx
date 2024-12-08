import { Container, Radio, RadioGroup } from "@/5_shared";
import { NextPage } from "next";
import { useState } from "react";

const Page: NextPage = () => {
  const [selected, setSelected] = useState<string>("A");

  const onChange = (value: string | number) => {
    setSelected(value as string);
  };

  return (
    <Container>
      <RadioGroup value={selected} onChange={onChange}>
        <Radio value="A" label="사용" />
        <Radio value="B" label="미사용" />
      </RadioGroup>
    </Container>
  );
};

export default Page;
