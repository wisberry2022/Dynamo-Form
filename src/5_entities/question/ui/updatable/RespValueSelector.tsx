import { CardWrapper, PopupTrigger } from "@/6_shared";
import { FC, ReactElement, ReactNode } from "react";
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import styles from "./style/resp-value-selector.module.css";

type RespValueSelectorProps = {
  popup: ReactNode;
};

export const RespValueSelector: FC<RespValueSelectorProps> = (props) => {
  const { popup } = props;

  return (
    <CardWrapper
      title="STEP3. 선택값 설정"
      description="설문 응답자가 선택할 값을 세팅합니다."
    >
      <div className={styles.respValueBox}>
        <PopupTrigger
          trigger={
            <div className={styles.content}>
              <FaRegArrowAltCircleRight />
              <strong>설정하기</strong>
            </div>
          }
          popup={popup as ReactElement}
        />
      </div>
    </CardWrapper>
  );
};
