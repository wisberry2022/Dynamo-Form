import styles from "./styles/evidence-selector.module.css";
import { FC } from "react";
import {
  Button,
  CardWrapper,
  PopupTrigger,
  Radio,
  RadioGroup,
  TextField,
} from "@/6_shared";
import { EvidenceQuestionPopup } from "../popup";

const EvidenceQuestionDetailSelector: FC = () => {
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
              popup={<EvidenceQuestionPopup />}
            />
          </div>
        </div>
        <div className={styles.rows}>
          <strong>첨부 파일 용량 설정</strong>
          <div className={styles.right}>
            <TextField placeholder="숫자를 입력하세요" />
            <RadioGroup
              className={styles.radioGrp}
              value=""
              onChange={() => {}}
            >
              <Radio value="" label="kb" />
              <Radio value="" label="mb" />
              <Radio value="" label="gb" />
            </RadioGroup>
          </div>
        </div>
      </div>
    </CardWrapper>
  );
};

export default EvidenceQuestionDetailSelector;
