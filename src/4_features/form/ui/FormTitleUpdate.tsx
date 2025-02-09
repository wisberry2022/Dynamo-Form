import { TextField, Toast } from "@/6_shared";
import { ChangeEventHandler, FC, MouseEvent, useState } from "react";
import styles from "./styles/form-update.module.css";
import { FaPen } from "react-icons/fa";
import { Form } from "@/6_shared/api";
import useSWR from "swr";
import { Paths } from "@/6_shared/api/core/Paths";

type FormTitleUpdateProps = {
  id: number;
  open: boolean;
  title: string;
  desc?: string;
  init?: () => void;
};

export const FormTitleUpdate: FC<FormTitleUpdateProps> = (props) => {
  const { id, open, title, desc = "", init = () => {} } = props;
  const [value, setValue] = useState<string>(title);

  const { mutate } = useSWR(Paths.form.getAll);

  const onClick = async (
    e: MouseEvent<SVGElement, globalThis.MouseEvent>,
    id: number
  ) => {
    e.stopPropagation();
    try {
      await Form.updateName({
        id,
        title: value,
      });
      init();
      mutate();
      Toast.success("양식 이름이 변경되었습니다.");
    } catch (e) {}
  };

  const onChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setValue(e.target.value);
  };

  return open ? (
    <>
      <TextField
        className={styles.updateField}
        placeholder={"양식 이름을 입력하세요"}
        onChange={onChange}
        value={value}
      />
      <FaPen onClick={(e) => onClick(e, id)} />
    </>
  ) : (
    <div className={styles.titleBox}>
      <strong className={styles.tTitle}>{title}</strong>
      {desc && <span>{desc}</span>}
    </div>
  );
};
