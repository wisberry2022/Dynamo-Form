import {
  Button,
  Dialog,
  DialogBody,
  DialogFooter,
  DialogHeader,
  RatingQuestion,
  Select,
} from "@/6_shared";
import cstyles from "./styles/common-popup.module.css";
import styles from "./styles/rating-popup.module.css";
import { FC, useState } from "react";
import { ReducerRatingQuestion } from "@/5_entities/question";
import { toReducerRatingQuestion } from "../../libs/TypeMapper";

type RatingQuestionPopupProps = {
  question: RatingQuestion;
  onConfirm: (question: ReducerRatingQuestion) => void;
  open?: boolean;
  onClose?: () => void;
};

export const RatingQuestionPopup: FC<RatingQuestionPopupProps> = (props) => {
  const { question, onConfirm, open, onClose } = props;
  const [state, setState] = useState<ReducerRatingQuestion>(
    toReducerRatingQuestion(question)
  );

  // 데이터 세팅 함수
  const onChangeRatingLimit = (value: number) => {
    setState((prev) => ({
      ...prev,
      ratingLimit: Number.parseInt(value.toString()),
    }));
  };

  const onChangeScore = (value: number) => {
    setState((prev) => ({
      ...prev,
      score: Number.parseInt(value.toString()),
    }));
  };

  // 저장 함수
  const onSave = () => {
    onConfirm(state);
    onClose?.();
  };

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
                  <Select
                    height={1.1}
                    value={state.ratingLimit}
                    onChange={onChangeRatingLimit}
                    listHeight={30}
                  >
                    {Array.from({ length: 7 }).map((_, i) => (
                      <Select.Item
                        key={i + 4}
                        value={i + 4}
                        label={`${i + 4}개`}
                      />
                    ))}
                  </Select>
                </div>
              </li>
              <li>
                <span>배점 설정</span>
                <div>
                  <Select
                    height={1.1}
                    value={state.score}
                    onChange={onChangeScore}
                  >
                    {Array.from({ length: 10 }).map((_, i) => (
                      <Select.Item
                        key={i + 1}
                        value={i + 1}
                        label={`${i + 1}점`}
                      />
                    ))}
                  </Select>
                </div>
              </li>
            </ul>
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
