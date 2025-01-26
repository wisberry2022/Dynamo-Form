import {
  Button,
  Checkbox,
  Dialog,
  DialogBody,
  DialogFooter,
  DialogHeader,
  DropDownQuestion,
  TextField,
  useListData,
} from "@/6_shared";
import styles from "./styles/dropdown-question.module.css";
import cstyles from "./styles/common-popup.module.css";
import { FC, useState } from "react";
import { FaPen, FaRegSave, FaRegTrashAlt } from "react-icons/fa";
import { MdAddCircleOutline } from "react-icons/md";
import { ReducerDropDownQuestion } from "@/5_entities/question";

type DropdownQuestoinPopupProps = {
  question: DropDownQuestion;
  onConfirm: (question: ReducerDropDownQuestion) => void;
  open?: boolean;
  onClose?: () => void;
};

export const DropdownQuestionPopup: FC<DropdownQuestoinPopupProps> = (
  props
) => {
  const { question, onConfirm, open, onClose } = props;

  const {
    list,
    addRow,
    removeBulkRow,
    removeRow,
    onChangeValue,
    convertOrigin,
  } = useListData<string>(question.questions, {
    defaultData: "질문을 입력하세요",
  });

  // 체크박스
  const [checks, setChecks] = useState<number[]>([]);

  const onCheck = (value: number) => {
    if (checks.includes(value)) {
      setChecks(checks.filter((v) => v !== value));
      return;
    }
    setChecks((prev) => prev.concat(value));
  };

  // 질문 리스트 수정
  const onRemoveBulk = (seqs: number[]) => {
    removeBulkRow(seqs);
    setChecks([]);
  };

  // 질문 리스트 수정
  const [edit, setEdit] = useState<number>(0);

  const onEdit = (seq: number) => {
    setEdit((prev) => {
      if (prev === seq) return 0;
      if (prev !== seq) return seq;
      return seq;
    });
  };

  const onSaveEdited = () => {
    setEdit(0);
  };

  // 저장 함수
  const onSave = () => {
    onConfirm({
      questions: convertOrigin(),
    });
    onClose?.();
  };

  return (
    <Dialog open={open} onClose={onClose} size="small">
      <DialogHeader title="선택형 - 드롭다운형" onClose={onClose} />
      <DialogBody>
        <div className={styles.content}>
          <div className={cstyles.title}>
            <h4>드롭다운 리스트를 추가할 수 있습니다.</h4>
            <p>
              리스트는 최소 2개부터, 최대 15개까지 추가할 수 있습니다. <br />
              드롭다운은 단수응답만 지원합니다.
            </p>
          </div>
          <div className={cstyles.list}>
            <div className={cstyles.dataArea}>
              <ul>
                {list.map((itm) => {
                  const isEditMode = edit === itm.seq;
                  return (
                    <li
                      key={itm.seq}
                      className={isEditMode ? cstyles.edit : ""}
                    >
                      <Checkbox
                        value={itm.value}
                        onChecked={() => onCheck(itm.seq)}
                        checked={checks.includes(itm.seq)}
                        label={isEditMode ? "" : (itm.value as string)}
                      />
                      {isEditMode ? (
                        <>
                          <div className={cstyles.listRight}>
                            <TextField
                              className={cstyles.edit}
                              value={itm.value as string}
                              onChange={(e) =>
                                onChangeValue(itm.seq, e.target.value)
                              }
                              placeholder="응답을 입력하세요"
                            />
                            <div className={cstyles.iconBox}>
                              <FaRegSave onClick={onSaveEdited} />
                              <FaRegTrashAlt
                                onClick={() => removeRow(itm.seq)}
                              />
                            </div>
                          </div>
                        </>
                      ) : (
                        <FaPen
                          onClick={() => onEdit(itm.seq)}
                          style={{ cursor: "pointer" }}
                        />
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>

            <div className={cstyles.controller}>
              <div className={cstyles.row} onClick={addRow}>
                <MdAddCircleOutline />
                <span>응답 추가하기</span>
              </div>
              <div
                className={`${cstyles.row} ${cstyles.delete}`}
                onClick={() => onRemoveBulk(checks)}
              >
                <FaRegTrashAlt />
                <span>응답 삭제하기</span>
              </div>
            </div>
          </div>
        </div>
      </DialogBody>
      <DialogFooter>
        <div className={cstyles.btnBox}>
          <Button variant="primary" onClick={onClose}>
            취소
          </Button>
          <Button variant="brighten" onClick={onSave}>
            저장
          </Button>
        </div>
      </DialogFooter>
    </Dialog>
  );
};
