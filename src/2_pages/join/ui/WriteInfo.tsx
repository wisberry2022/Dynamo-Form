import { FC } from "react";
import styles from "./styles/write-info.module.css";
import { useGetSurtveyInfo } from "../libs/hooks";
import { Button, LabelTextiField } from "@/6_shared";

export const WriteInfo: FC = () => {
  const { title, startDate, endDate } = useGetSurtveyInfo();

  return (
    <div className={styles.container}>
      <div className={styles.surveyInfo}>
        <h2>{title}</h2>
        <span>
          설문 기간: {startDate} ~ {endDate}
        </span>
      </div>
      <div className={styles.userInfo}>
        <h4>설문자 정보 입력하기</h4>
        <ul>
          <li>
            <LabelTextiField label="이름" placeholder="이름을 입력하세요" />
          </li>
          <li>
            <LabelTextiField label="이메일" placeholder="이메일을 입력하세요" />
          </li>
          <li>
            <LabelTextiField label="연락처" placeholder="연락처를 입력하세요" />
          </li>
          <li></li>
        </ul>
        <Button className={styles.btn}>참여하기</Button>
      </div>
    </div>
  );
};
