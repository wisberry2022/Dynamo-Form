import { FormResponse, LabelTextiField } from "@/6_shared";
import { ChangeEventHandler, FC } from "react";
import styles from "./styles/updatable-form-info.module.css";

type UpdatableFormInfoProps = {
  form: FormResponse;
  onTextField: ChangeEventHandler<HTMLInputElement>;
  onSwitch: (name: string, checked: boolean) => void;
  onClick: () => void;
};

export const UpdatableFormInfo: FC<UpdatableFormInfoProps> = (props) => {
  const { form, onTextField, onSwitch, onClick } = props;
  return (
    <div className={styles.formInfo}>
      <div className={styles.left}>
        <strong>양식 정보</strong>
        <span>양식 정보를 입력/설정할 수 있습니다.</span>
      </div>
      <div className={styles.right}>
        <LabelTextiField
          label="제목"
          name="title"
          onChange={onTextField}
          value={form.title}
        />
        <LabelTextiField
          label="설명"
          name="description"
          onChange={onTextField}
          value={form.description}
        />
      </div>
    </div>
  );
};
