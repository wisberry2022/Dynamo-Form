import {
  AttachQuestion,
  Button,
  Checkbox,
  Dialog,
  DialogBody,
  DialogFooter,
  DialogHeader,
  FileExtensions,
} from "@/6_shared";
import cstyles from "./styles/common-popup.module.css";
import styles from "./styles/evidence-popup.module.css";
import { FC, Reducer, useState } from "react";
import { ExtensionsLabelSetting } from "../../constants/Extensions";
import { ReducerAttachQuestion } from "@/5_entities/question";
import { toReducerAttachQuestion } from "../../libs/TypeMapper";

type EvidenceQuestionPopupProps = {
  question: AttachQuestion;
  onConfirm: (question: ReducerAttachQuestion) => void;
  open?: boolean;
  onClose?: () => void;
};

export const EvidenceQuestionPopup: FC<EvidenceQuestionPopupProps> = (
  props
) => {
  const { question, onConfirm, open, onClose } = props;
  const [state, setState] = useState<ReducerAttachQuestion>(
    toReducerAttachQuestion(question)
  );

  // 데이터 핸들링 함수
  const onCheckAttachable = (value: string) => {
    setState((prev) => ({
      ...prev,
      [value]: !prev[value],
    }));
  };

  const onCheckExtension = (value: FileExtensions) => {
    setState((prev) => ({
      ...prev,
      extensions: prev.extensions.includes(value)
        ? prev.extensions.filter((ext) => ext !== value)
        : prev.extensions.concat(value),
    }));
  };

  // 저장 함수
  const onSave = () => {
    onConfirm(state);
    onClose?.();
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogHeader title="첨부 파일 상세설정" onClose={onClose} />
      <DialogBody>
        <div className={styles.content}>
          <div className={cstyles.title}>
            <h4>첨부할 파일 유형과 확장자를 상세 설정할 수 있습니다.</h4>
          </div>
          <div className={styles.body}>
            <div className={styles.left}>
              <h5 className={styles.mTitle}>파일 유형 설정</h5>
              <div className={styles.checks}>
                <Checkbox
                  onChecked={onCheckAttachable}
                  value={"attachableImage"}
                  checked={state.attachableImage}
                  label="이미지"
                />
                <Checkbox
                  onChecked={onCheckAttachable}
                  value={"attachableVideo"}
                  checked={state.attachableVideo}
                  label="동영상"
                />
                <Checkbox
                  onChecked={onCheckAttachable}
                  value={"attachableAudio"}
                  checked={state.attachableAudio}
                  label="음성"
                />
                <Checkbox
                  onChecked={onCheckAttachable}
                  value={"attachableOthers"}
                  checked={state.attachableOthers}
                  label="기타"
                />
              </div>
            </div>
            <div className={styles.right}>
              <h5 className={styles.mTitle}>확장자 설정</h5>
              <div className={styles.checks}>
                {ExtensionsLabelSetting.map((ext) => (
                  <Checkbox
                    key={ext.value}
                    onChecked={onCheckExtension}
                    value={ext.value}
                    label={ext.label}
                    checked={state.extensions.includes(ext.value)}
                  />
                ))}
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
