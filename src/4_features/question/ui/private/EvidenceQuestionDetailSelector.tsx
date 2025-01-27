import styles from "./styles/evidence-selector.module.css";
import { ChangeEventHandler, FC, Reducer, useState } from "react";
import {
  AttachQuestion,
  Button,
  CardWrapper,
  FileSize,
  PopupTrigger,
  Radio,
  RadioGroup,
  TextField,
} from "@/6_shared";
import { EvidenceQuestionPopup } from "../popup";
import { ReducerAttachQuestion } from "@/5_entities/question";
import { toReducerAttachQuestion } from "../../libs/TypeMapper";

type EvidenceQuestionDetailSelectorProps = {
  state: AttachQuestion;
  onChangeAttachQuestion: (question: ReducerAttachQuestion) => void;
};

const EvidenceQuestionDetailSelector: FC<
  EvidenceQuestionDetailSelectorProps
> = (props) => {
  const { state, onChangeAttachQuestion } = props;

  // 데이터 핸들링
  const onChangeFileSize: ChangeEventHandler<HTMLInputElement> = (e) => {
    onChangeAttachQuestion({
      ...state,
      [e.target.name]: e.target.value ? parseInt(e.target.value) : 0,
    });
  };

  const onChangeFileUnit = (unit: FileSize) => {
    onChangeAttachQuestion({
      ...state,
      unit,
    });
  };

  return (
    <CardWrapper
      title="STEP2. 세부 유형 설정하기"
      description={`
STEP1에서 설정한 유형을 기반으로 <br />
더욱 세부적인 질문을 구성할 수 있습니다.
`}
      size={2.17}
    >
      <div className={styles.content}>
        <div className={styles.rows}>
          <strong>첨부 가능한 파일 유형</strong>
          <div className={styles.right}>
            <PopupTrigger
              trigger={<Button variant="primary">설정하기</Button>}
              popup={
                <EvidenceQuestionPopup
                  question={state}
                  onConfirm={onChangeAttachQuestion}
                />
              }
            />
          </div>
        </div>
        <div className={styles.rows}>
          <strong>첨부 파일 용량 설정</strong>
          <div className={styles.right}>
            <TextField
              placeholder="숫자를 입력하세요"
              name="maxFileSize"
              value={state.maxFileSize}
              onChange={onChangeFileSize}
            />
            <RadioGroup
              className={styles.radioGrp}
              value={state.unit}
              onChange={onChangeFileUnit}
            >
              <Radio value="KB" label="KB" />
              <Radio value="MB" label="MB" />
              <Radio value="GB" label="GB" />
            </RadioGroup>
          </div>
        </div>
      </div>
    </CardWrapper>
  );
};

export default EvidenceQuestionDetailSelector;
