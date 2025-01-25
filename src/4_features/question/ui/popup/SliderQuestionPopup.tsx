import {
  Button,
  Dialog,
  DialogBody,
  DialogFooter,
  DialogHeader,
  TextField,
} from "@/6_shared";
import cstyles from "./styles/common-popup.module.css";
import styles from "./styles/slider-popup.module.css";
import { FC } from "react";

type SliderQuestionPopupProps = {
  open?: boolean;
  onClose?: () => void;
};

export const SliderQuestionPopup: FC<SliderQuestionPopupProps> = (props) => {
  const { open, onClose } = props;
  return (
    <Dialog open={open} onClose={onClose} size="small">
      <DialogHeader title="평가형 - 수치 조절형" onClose={onClose} />
      <DialogBody>
        <div className={styles.content}>
          <div className={cstyles.title}>
            <h4>직접 수치를 조절하여 평가할 수 있습니다.</h4>
          </div>
          <div className={styles.body}>
            <ul>
              <li>
                <span>점수 범위 설정</span>
                <div className={styles.rangeBox}>
                  <TextField placeholder="숫자를 입력하세요" width={130} />
                  <span>~</span>
                  <TextField placeholder="숫자를 입력하세요" width={130} />
                </div>
              </li>
              <li>
                <span>점수 설정</span>
                <TextField placeholder="숫자를 입력하세요" width={276} />
              </li>
            </ul>
          </div>
        </div>
      </DialogBody>
      <DialogFooter>
        <div className={cstyles.btnBox}>
          <Button variant="primary">취소</Button>
          <Button variant="brighten">확인</Button>
        </div>
      </DialogFooter>
    </Dialog>
  );
};
