import { ReadOnlyFormInfo, UpdatableFormInfo } from "@/4_features/form";
import { DataHandlerType, DataStatus, FormResponse } from "@/6_shared";
import { FC, useState } from "react";

type FormInfoProps = {
  form: FormResponse;
  formHandler: DataHandlerType<FormResponse>;
  onSectionSave: (form: FormResponse) => void;
};

export const FormInfo: FC<FormInfoProps> = (props) => {
  const { form, formHandler, onSectionSave } = props;
  const { onTextField, onSwitch } = formHandler;

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
    <UpdatableFormInfo
      form={form}
      onTextField={onTextField}
      onSwitch={onSwitch}
      onClick={onChangeReadOnly}
    />
  );
};
