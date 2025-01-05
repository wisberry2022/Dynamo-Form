import { FormPaper } from "@/5_entities/form";
import { ChangeEventHandler, FC } from "react";
import styles from "./styles/form-updatable.module.css";
import { FormResponse, Switch, TextField } from "@/6_shared";
import { FaRegSave } from "react-icons/fa";

type UpdatableFormInfoProps = {
  form: FormResponse;
  onTextField: ChangeEventHandler<HTMLInputElement>;
  onSwitch: (name: string, checked: boolean) => void;
  onClick: () => void;
};

export const UpdatableFormInfo: FC<UpdatableFormInfoProps> = (props) => {
  const { form, onTextField, onSwitch, onClick } = props;

  return (
    <FormPaper>
      <FormPaper.TitleBar
        left="양식 정보"
        right={<FaRegSave onClick={onClick} />}
      />
      <FormPaper.Main>
        <div className={styles.formInfo}>
          <dl className={styles.infoRow}>
            <dt>
              <strong>제목</strong>
            </dt>
            <dd>
              <TextField
                name="title"
                value={form.title}
                onChange={onTextField}
                placeholder="양식 제목을 입력하세요"
              />
            </dd>
          </dl>
          <dl className={styles.infoRow}>
            <dt>
              <strong>설명</strong>
            </dt>
            <dd>
              <TextField
                name="description"
                value={form.description}
                onChange={onTextField}
                placeholder="양식 설명을 입력하세요"
              />
            </dd>
          </dl>
          <dl className={styles.infoRow}>
            <dt>
              <strong>항목 제목 자동 설정</strong>
            </dt>
            <dd>
              <Switch
                onChange={onSwitch}
                name={"autoTitle"}
                checked={form.autoTitle}
              />
            </dd>
          </dl>
        </div>
      </FormPaper.Main>
    </FormPaper>
  );
};
