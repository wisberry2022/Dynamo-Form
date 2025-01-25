import {
  Button,
  Dialog,
  DialogBody,
  DialogFooter,
  DialogHeader,
  Select,
} from "@/6_shared";
import cstyles from "./styles/common-popup.module.css";
import styles from "./styles/rating-popup.module.css";
import { FC } from "react";

type RatingQuestionPopupProps = {
  open?: boolean;
  onClose?: () => void;
};

export const RatingQuestionPopup: FC<RatingQuestionPopupProps> = (props) => {
  const { open, onClose } = props;

  return (
    <Dialog open={open} onClose={onClose} size="small">
      <DialogHeader title="평가형 - 별점형" onClose={onClose} />
      <DialogBody>
        <div className={styles.content}>
          <div className={cstyles.title}>
            <h4>별점으로 평가할 수 있습니다.</h4>
          </div>
          <div className={styles.body}>
            <ul>
              <li>
                <span>별점 개수</span>
                <div>
                  <Select height={1.1} value={"1"}>
                    <Select.Item value="1" label="1개" />
                    <Select.Item value="2" label="2개" />
                    <Select.Item value="3" label="3개" />
                    <Select.Item value="4" label="4개" />
                    <Select.Item value="5" label="5개" />
                  </Select>
                </div>
              </li>
              <li>
                <span>배점 설정</span>
                <div>
                  <Select height={1.1} value="1">
                    <Select.Item value="1" label="1점" />
                    <Select.Item value="2" label="2점" />
                    <Select.Item value="3" label="3점" />
                    <Select.Item value="4" label="4점" />
                  </Select>
                </div>
              </li>
            </ul>
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
