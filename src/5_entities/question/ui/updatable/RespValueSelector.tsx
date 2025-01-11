import { CardWrapper } from "@/6_shared";
import { FC } from "react";
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import styles from "./style/resp-value-selector.module.css";

type RespValueSelectorProps = {};

export const RespValueSelector: FC = () => {
  return (
    <CardWrapper
      title="STEP3. 선택값 설정"
      description="설문 응답자가 선택할 값을 세팅합니다."
    >
      <div className={styles.respValueBox}>
        <div className={styles.content}>
          <FaRegArrowAltCircleRight />
          <strong>설정하기</strong>
        </div>
      </div>
    </CardWrapper>
  );
};
