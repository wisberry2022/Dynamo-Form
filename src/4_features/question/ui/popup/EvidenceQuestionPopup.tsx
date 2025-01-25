import {
  Button,
  Checkbox,
  Dialog,
  DialogBody,
  DialogFooter,
  DialogHeader,
} from "@/6_shared";
import cstyles from "./styles/common-popup.module.css";
import styles from "./styles/evidence-popup.module.css";
import { FC } from "react";
import { ExtensionSetting } from "../../constants/Extensions";

type EvidenceQuestionPopupProps = {
  open?: boolean;
  onClose?: () => void;
};

export const EvidenceQuestionPopup: FC<EvidenceQuestionPopupProps> = (
  props
) => {
  const { open, onClose } = props;

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
                  onChecked={() => {}}
                  value={"1"}
                  checked={false}
                  label="이미지"
                />
                <Checkbox
                  onChecked={() => {}}
                  value={"1"}
                  checked={false}
                  label="동영상"
                />
                <Checkbox
                  onChecked={() => {}}
                  value={"1"}
                  checked={false}
                  label="음성"
                />
                <Checkbox
                  onChecked={() => {}}
                  value={"1"}
                  checked={false}
                  label="기타"
                />
              </div>
            </div>
            <div className={styles.right}>
              <h5 className={styles.mTitle}>확장자 설정</h5>
              <div className={styles.checks}>
                {ExtensionSetting.map((ext) => (
                  <Checkbox
                    key={ext}
                    onChecked={() => {}}
                    value={ext}
                    label={ext}
                    checked={false}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </DialogBody>
      <DialogFooter>
        <div className={cstyles.btnBox}>
          <Button variant="primary">취소</Button>
          <Button variant="brighten">저장</Button>
        </div>
      </DialogFooter>
    </Dialog>
  );
};
