import {
  Button,
  Dialog,
  DialogBody,
  DialogFooter,
  DialogHeader,
  Radio,
  Searcher,
} from "@/6_shared";
import { FC } from "react";
import styles from "./styles/form-loader-dialog.module.css";

type FormLoaderDialogProps = {
  open?: boolean;
  onClose?: () => void;
};

export const FormLoaderDialog: FC<FormLoaderDialogProps> = (props) => {
  const { open, onClose } = props;

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogHeader title="양식 불러오기" onClose={onClose} />
      <DialogBody>
        <div className={styles.content}>
          <Searcher placeholder="양식명으로 검색할 수 있습니다." />
          <div className={styles.tableContainer}>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th>선택</th>
                  <th>양식 제목</th>
                  <th>생성 일자</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <Radio value={1} />
                  </td>
                  <td>제목1</td>
                  <td>2025-01-27</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </DialogBody>
      <DialogFooter>
        <div className={styles.btnBox}>
          <Button variant="primary" onClick={onClose}>
            취소하기
          </Button>
          <Button variant="secondary">불러오기</Button>
        </div>
      </DialogFooter>
    </Dialog>
  );
};
