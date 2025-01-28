import {
  Button,
  Checkbox,
  Dialog,
  DialogBody,
  DialogFooter,
  DialogHeader,
  Radio,
  RadioGroup,
  SelectQuestion,
  TextField,
  useListData,
} from "@/6_shared";
import { ChangeEventHandler, FC, useState } from "react";
import styles from "./styles/multiple-question.module.css";
import cstyles from "./styles/common-popup.module.css";
import { FaPen, FaRegSave, FaRegTrashAlt } from "react-icons/fa";
import { MdAddCircleOutline } from "react-icons/md";
import { ReducerMultipleQuestion } from "@/5_entities/question";
import { toReducerMultipleQuestion } from "../../libs/TypeMapper";
import { getNextSequenceInPrimitive } from "@/6_shared/utils/SequenceUtils";

type MultipleQuestionPopupProps = {
  question: SelectQuestion;
  onConfirm: (question: ReducerMultipleQuestion) => void;
  open?: boolean;
  onClose?: () => void;
};

export const MultipleQuestionPopup: FC<MultipleQuestionPopupProps> = (
  props
) => {
  const { question, onConfirm, open, onClose } = props;
  const [state, setState] = useState<ReducerMultipleQuestion>(
    toReducerMultipleQuestion(question)
  );

  const {
    list,
    addRow,
    removeRow,
    removeBulkRow,
    onChangeValue,
    convertOrigin,
  } = useListData<string>(state.questions, {
    defaultData: `질문을 입력하세요`,
  });

  // 질문 목록 핸들링
  const onRemoveBulk = (seqs: number[]) => {
    removeBulkRow(seqs);
    setChecks([]);
  };

  // 체크박스
  const [checks, setChecks] = useState<number[]>([]);

  const onChecked = (value: number) => {
    if (checks.includes(value)) {
      setChecks(checks.filter((v) => v !== value));
      return;
    }
    setChecks((prev) => prev.concat(value));
  };

  // 응답 유형
  const onChangeRespType = (value: boolean) => {
    setState((prev) => ({
      ...prev,
      multiple: value,
    }));
  };

  const onChangeResponseLimit: ChangeEventHandler<HTMLInputElement> = (e) => {
    setState((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  // 저장 버튼 이벤트
  const onSave = () => {
    onConfirm({
      ...state,
      questions: convertOrigin(),
    });
    onClose?.();
  };

  // 질문 수정
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

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogHeader title="선택형 - N지 선다형" onClose={onClose} />
      <DialogBody>
        <div className={styles.content}>
          <div className={styles.left}>
            <div className={cstyles.title}>
              <h4>선택지를 추가할 수 있습니다.</h4>
              <p>선택지는 최소 2개부터, 최대 30개까지 추가할 수 있습니다.</p>
            </div>
            <div className={cstyles.list}>
              <div className={cstyles.dataArea}>
                <ul>
                  {list.map((quest) => {
                    const isEditMode = edit === quest.seq;
                    return (
                      <li
                        key={quest.seq}
                        className={isEditMode ? cstyles.edit : ""}
                      >
                        <Checkbox
                          value={quest.value}
                          onChecked={() => onChecked(quest.seq)}
                          checked={checks.includes(quest.seq)}
                          label={isEditMode ? "" : (quest.value as string)}
                        />
                        {isEditMode ? (
                          <>
                            <div className={cstyles.listRight}>
                              <TextField
                                className={cstyles.edit}
                                value={quest.value as string}
                                onChange={(e) =>
                                  onChangeValue(quest.seq, e.target.value)
                                }
                                placeholder="응답을 입력하세요"
                              />
                              <div className={cstyles.iconBox}>
                                <FaRegSave onClick={onSaveEdited} />
                                <FaRegTrashAlt
                                  onClick={() => removeRow(quest.seq)}
                                />
                              </div>
                            </div>
                          </>
                        ) : (
                          <FaPen
                            onClick={() => onEdit(quest.seq)}
                            style={{ cursor: "pointer" }}
                          />
                        )}
                      </li>
                    );
                  })}
                  {/* <li>
                    <Checkbox value="1" onChecked={() => {}} label="테스트1" />
                    <div className={cstyles.listRight}>
                      <TextField
                        className={cstyles.edit}
                        placeholder="응답을 입력하세요"
                      />
                      <div className={cstyles.iconBox}>
                        <FaRegSave />
                        <FaRegTrashAlt />
                      </div>
                    </div>
                  </li> */}
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
          <div className={styles.right}>
            <div className={styles.respType}>
              <strong>응답 유형</strong>
              <RadioGroup value={state.multiple} onChange={onChangeRespType}>
                <Radio value={false} label="단일 응답" />
                <Radio value={true} label="복수 응답" />
              </RadioGroup>
            </div>
            {state.multiple && (
              <div className={styles.respLimit}>
                <strong>응답 가능 개수</strong>
                <TextField
                  name="responseLimit"
                  className={styles.respEdit}
                  onChange={onChangeResponseLimit}
                  value={state.responseLimit}
                  placeholder="숫자를 입력하세요"
                />
              </div>
            )}
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
