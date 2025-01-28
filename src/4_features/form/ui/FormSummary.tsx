import { FC } from "react";
import styles from "./styles/form-summary.module.css";
import { FaSearch } from "react-icons/fa";

export const FormSummary: FC = () => {
  return (
    <div className={styles.summary}>
      <div className={styles.titleBox}>
        <h4>양식 정보</h4>
      </div>
      <div className={styles.body}>
        <ul>
          <li>
            <strong>양식 제목</strong>
            <span>기말 리포트 설문 조사 양식</span>
          </li>
          <li>
            <strong>양식 설명</strong>
            <span>기말 리포트 설문 조사 양식 설명입니다.</span>
          </li>
          <li>
            <strong>양식 생성 일자</strong>
            <span>2025-01-24</span>
          </li>
          <li>
            <strong>질문 개수</strong>
            <span>5개</span>
          </li>
          <li>
            <strong>양식 상세보기</strong>
            <span>
              <FaSearch />
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
};
