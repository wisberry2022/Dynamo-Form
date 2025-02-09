import { FC } from "react";
import styles from "./styles/form-summary.module.css";
import { FaSearch } from "react-icons/fa";
import { endpoints, formatDate, SimpleFormDetailResponse } from "@/6_shared";

type FormSummaryProps = {
  form: SimpleFormDetailResponse;
};

export const FormSummary: FC<FormSummaryProps> = (props) => {
  const { form } = props;

  // 양식 상세보기
  const goFormDetail = (formId: number | null | undefined) => {
    if (!formId) {
      return;
    }
    window.open(endpoints.form.detail(formId), "_blank");
  };

  return (
    <div className={styles.summary}>
      <div className={styles.titleBox}>
        <h4>양식 정보</h4>
      </div>
      <div className={styles.body}>
        <ul>
          <li>
            <strong>양식 제목</strong>
            <span>{form?.title}</span>
          </li>
          <li>
            <strong>양식 설명</strong>
            <span>{form?.description}</span>
          </li>
          <li>
            <strong>양식 생성 일자</strong>
            <span>{formatDate(form?.regDttm as string)}</span>
          </li>
          <li>
            <strong>질문 개수</strong>
            <span> {form?.questionCount}개</span>
          </li>
          <li>
            <strong>양식 상세보기</strong>
            <span>
              <FaSearch onClick={() => goFormDetail(form?.id)} />
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
};
