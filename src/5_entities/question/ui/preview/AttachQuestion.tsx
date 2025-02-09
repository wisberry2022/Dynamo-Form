import {
  AttachQuestion as AttachQuestionResponse,
  Button,
  FileExtensions,
} from "@/6_shared";
import { FC } from "react";
import styles from "./styles/attach-question.module.css";

type AttachQuestionProps = {
  question: AttachQuestionResponse;
};

export const AttachQuestion: FC<AttachQuestionProps> = (props) => {
  const { question } = props;

  const getUploadableExtensions = (extensions: FileExtensions[]): string => {
    if (!extensions) {
      return "";
    }
    return extensions.join(", ");
  };

  return (
    <div className={styles.qContainer}>
      <div className={styles.titleBox}>
        <h4>파일을 첨부해주세요</h4>
        <strong>
          업로드 가능한 파일 확장자:{" "}
          {getUploadableExtensions(question.extensions)}
        </strong>
      </div>
      <div className={styles.uploadBox}>
        <Button variant="brighten">업로드</Button>
        <div className={styles.exams}>
          <p>가족관계 증명서.pdf</p>
          <p>재직증명서.pdf</p>
          <p>A 대학교_성적증명서.pdf</p>
        </div>
      </div>
    </div>
  );
};
