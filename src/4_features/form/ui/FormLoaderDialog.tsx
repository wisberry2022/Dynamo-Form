import {
  Button,
  Dialog,
  DialogBody,
  DialogFooter,
  DialogHeader,
  formatDate,
  FormPopupListResponse,
  isMatchField,
  Radio,
  Searcher,
  useFormPopupListSWR,
} from "@/6_shared";
import { ChangeEventHandler, FC, useState } from "react";
import styles from "./styles/form-loader-dialog.module.css";

type FormLoaderDialogProps = {
  formId?: number | null;
  open?: boolean;
  onClose?: () => void;
  onConfirm?: (value: FormPopupListResponse) => void;
};

export const FormLoaderDialog: FC<FormLoaderDialogProps> = (props) => {
  const { formId, open, onClose, onConfirm } = props;
  const { forms } = useFormPopupListSWR();

  // 선택 기능
  const [selected, setSelected] = useState<number | null | undefined>(formId);

  const onChange = (value: number) => {
    setSelected(value);
  };

  // 검색 기능
  const [keyword, setKeyword] = useState<string>("");

  const onSearch: ChangeEventHandler<HTMLInputElement> = (e) => {
    setKeyword(e.target.value);
  };

  const searchData = (
    data: FormPopupListResponse[]
  ): FormPopupListResponse[] => {
    if (!keyword) return data;
    return data.filter((form) =>
      isMatchField<FormPopupListResponse>(form, ["title"], keyword)
    );
  };

  // 저장 기능
  const onSave = () => {
    onConfirm?.(
      viewData.find((form) => form.id === selected) as FormPopupListResponse
    );
    onClose?.();
  };

  const viewData = searchData(forms ?? []);

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogHeader title="양식 불러오기" onClose={onClose} />
      <DialogBody>
        <div className={styles.content}>
          <Searcher
            value={keyword}
            onChange={onSearch}
            placeholder="양식명으로 검색할 수 있습니다."
          />
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
                {viewData.map((form) => (
                  <tr key={form.id}>
                    <td>
                      <Radio
                        selected={selected}
                        value={form.id}
                        onChange={onChange}
                      />
                    </td>
                    <td>{form.title}</td>
                    <td>
                      {form.regDttm
                        ? formatDate(form.regDttm)
                        : formatDate(form.modDttm)}
                    </td>
                  </tr>
                ))}
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
          <Button variant="secondary" onClick={onSave}>
            불러오기
          </Button>
        </div>
      </DialogFooter>
    </Dialog>
  );
};
