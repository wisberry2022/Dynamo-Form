import { FC } from "react";
import styles from "./styles/survey-setting.module.css";
import { Switch, TextField } from "@/6_shared";
import { DateTimePicker } from "@/6_shared/ui/calendar";

export const SurveySetting: FC = () => {
  return (
    <div className={styles.surveySetting}>
      <div className={styles.titleBox}>
        <h2>설문 조사 설정</h2>
        <p>
          생성한 양식을 기반으로 설문 조사를 생성할 수 있습니다. <br />
          생성한 설문 조사를 다른 사람에게 공유할 수 있습니다.
        </p>
      </div>
      <div className={styles.settings}>
        <ul>
          <li>
            <strong>설문 조사 제목</strong>
            <TextField placeholder="제목을 입력하세요." width={364} />
          </li>
          <li>
            <strong>설문 조사 설명</strong>
            <TextField placeholder="설명을 입력하세요." width={364} />
          </li>
          <li>
            <div className={styles.descBox}>
              <strong>설문 조사 시작일</strong>
              <span>설정한 날짜로부터 설문 조사에 참여할 수 있습니다.</span>
            </div>
            <div className={styles.subContent}>
              <Switch
                checked={false}
                name="test"
                onChange={() => {}}
                label="미사용"
              />
              <DateTimePicker />
            </div>
          </li>
          <li>
            <div className={styles.descBox}>
              <strong>설문 조사 마감일</strong>
              <span>설정한 날짜에 설문 조사가 마감됩니다.</span>
            </div>
            <div className={styles.subContent}>
              <Switch
                checked={false}
                name="test"
                onChange={() => {}}
                label="미사용"
              />
              <DateTimePicker />
            </div>
          </li>
          <li>
            <div className={styles.descBox}>
              <strong>설문 참여 인원수 제한</strong>
              <p>
                설정한 인원수까지만 설문 조사에 참여할 수 있습니다. <br />
                ex&#41;5명 제한 설명 시 -&gt; 5명에게만 설문조사 공유 가능능
              </p>
            </div>
            <div className={styles.subContent}>
              <Switch
                checked={false}
                name="test"
                onChange={() => {}}
                label="미사용"
              />
              <div className={styles.withText}>
                <TextField />
                <span>명</span>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};
