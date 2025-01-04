import { FormPaper } from "@/5_entities/form";
import { FC } from "react";
import styles from "./styles/form-info.module.css";
import { FormResponse, Switch } from "@/6_shared";
import { FaPen } from "react-icons/fa";

type FormInfoProps = {
  form: FormResponse;
};

export const FormInfo: FC<FormInfoProps> = (props) => {
  const { form } = props;

  return (
    <FormPaper>
      <FormPaper.TitleBar left="양식 정보" right={<FaPen />} />
      <FormPaper.Main>
        <div className={styles.formInfo}>
          <dl className={styles.infoRow}>
            <dt>
              <strong>제목</strong>
            </dt>
            <dd>
              <strong>{form.title}</strong>
            </dd>
          </dl>
          <dl className={styles.infoRow}>
            <dt>
              <strong>설명</strong>
            </dt>
            <dd>
              <strong>{form.description}</strong>
            </dd>
          </dl>
          <dl className={styles.infoRow}>
            <dt>
              <strong>항목 제목 자동 설정</strong>
            </dt>
            <dd>
              <strong>{form.autoTitle ? "자동" : "수동"}</strong>
            </dd>
          </dl>
        </div>
      </FormPaper.Main>
    </FormPaper>
  );
};
