import { ReadOnlyFormInfo, UpdatableFormInfo } from "@/4_features/form";
import { DataStatus, FormResponse } from "@/6_shared";
import { ChangeEventHandler, FC, useState } from "react";

type FormInfoProps = {
  form: FormResponse;
};

export const FormInfo: FC<FormInfoProps> = (props) => {
  const { form } = props;
  const [status, setStatus] = useState<DataStatus>("READ");

  const onChangeModify = () => {
    setStatus("MODIFY");
  };

  const onChangeReadOnly = () => {
    setStatus("READ");
  };

  return status === "READ" ? (
    <ReadOnlyFormInfo form={form} onClick={onChangeModify} />
  ) : (
    <UpdatableFormInfo form={form} onClick={onChangeReadOnly} />
  );
};
