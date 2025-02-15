import {
  AttachQuestion as AttachQuestionResponse,
  AttachReply,
  Button,
  File,
  FileExtensions,
  FileUploadResponse,
  handleError,
  Toast,
} from "@/6_shared";
import {
  ChangeEventHandler,
  FC,
  MouseEventHandler,
  useRef,
  useState,
} from "react";
import styles from "./styles/attach-question.module.css";

type AttachQuestionProps = {
  question: AttachQuestionResponse;
  value?: AttachReply;
  handler?: (questionId: number, fileKey: string) => void;
};

export const AttachQuestion: FC<AttachQuestionProps> = (props) => {
  const { question, value, handler = () => {} } = props;
  const uploadRef = useRef<HTMLInputElement>(null);

  const getUploadableExtensions = (extensions: FileExtensions[]): string => {
    if (!extensions) {
      return "";
    }
    return extensions.join(", ");
  };

  const onClick: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.stopPropagation();
    // value가 존재할 때만 업로드 가능하도록 조치
    if (value) {
      uploadRef.current?.click();
    }
  };

  // 업로드 함수
  const [uploadKey, setKey] = useState<number>(0);
  const [files, setFiles] = useState<FileUploadResponse[]>([]);
  
  const onUpload: ChangeEventHandler<HTMLInputElement> = async (e) => {
    try {
      const formData = new FormData();
      formData.append("file", (e.target.files as FileList)[0]);
      const response = await File.upload(formData);
      handler(question.id as number, response.data.fileKey);
      setFiles((prev) => [...prev, response.data]);
      Toast.success("파일이 업로드되었습니다.");
    } catch (e) {
      console.log("e", e);
      handleError(e);
    } finally {
      setKey((prev) => prev + 1);
    }
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
        <div>
          <Button variant="brighten" onClick={onClick}>
            업로드
          </Button>
          <input
            key={uploadKey}
            hidden
            type="file"
            ref={uploadRef}
            onChange={onUpload}
          />
        </div>
        <div className={styles.exams}>
          {value ? (
            files.map((file) => <p key={file.fileKey}>{file.fileName}</p>)
          ) : (
            <>
              <p>가족관계 증명서.pdf</p>
              <p>재직증명서.pdf</p>
              <p>A 대학교_성적증명서.pdf</p>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
