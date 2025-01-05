import { FormPaper } from "@/5_entities/form";
import { FC } from "react";
import styles from "./styles/form-updatable.module.css";
import { FormResponse, Switch, TextField } from "@/6_shared";
import { FaPen } from "react-icons/fa";

type UpdatableFormInfoProps = {
  form: FormResponse;
  onClick: () => void;
};

export const UpdatableFormInfo: FC<UpdatableFormInfoProps> = (props) => {
  const { form, onClick } = props;

  return (
    <FormPaper>
      <FormPaper.TitleBar
        left="양식 정보"
        right={<FaPen onClick={onClick} />}
      />
      <FormPaper.Main>
        <div className={styles.formInfo}>
          <dl className={styles.infoRow}>
            <dt>
              <strong>제목</strong>
            </dt>
            <dd>
              <TextField
                value={form.title}
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
                value={form.description}
                placeholder="양식 설명을 입력하세요"
              />
            </dd>
          </dl>
          <dl className={styles.infoRow}>
            <dt>
              <strong>항목 제목 자동 설정</strong>
            </dt>
            <dd>
              <Switch onChange={() => {}} checked={form.autoTitle} />
            </dd>
          </dl>
        </div>
      </FormPaper.Main>
    </FormPaper>
  );
};
