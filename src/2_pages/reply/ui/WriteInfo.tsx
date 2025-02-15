import { FC, useEffect, useMemo } from "react";
import styles from "./styles/write-info.module.css";
import { useGetSurveyInfo } from "../libs/hooks";
import {
  Button,
  endpoints,
  handleError,
  isEmpty,
  LabelRadio,
  LabelTextiField,
  Respondent,
  Toast,
  useGetFormBySurveySWR,
} from "@/6_shared";
import { useReplyHandler } from "@/5_entities/reply/libs/useReplyHandler";
import { convert2RespondentValid } from "../libs/TypeMapper";
import { useRouter } from "next/router";

export const WriteInfo: FC = () => {
  const { id, title, token, startDate, endDate } = useGetSurveyInfo();
  const { form } = useGetFormBySurveySWR(id);
  const { state, respondent } = useReplyHandler(form);

  const radioSet = [
    { id: 1, value: "MALE", label: "남성" },
    { id: 2, value: "FEMALE", label: "여성" },
  ];

  // 조사 기간 반환 함수
  const getSurveyPeriod = (startDate: string, endDate: string) => {
    let msg = "설문 기간: ";

    // 시작일이 있을 경우
    if (startDate) {
      msg = msg.concat(` ${startDate}`);
    }

    // 종료일이 있을 경우
    if (endDate) {
      msg = msg.concat(` ~ ${endDate}`);
    }

    if (isEmpty(startDate) && isEmpty(endDate)) {
      msg = msg.concat(" 관리자가 마감할 때까지");
    }

    return msg;
  };

  const periodMsg = useMemo(
    () => getSurveyPeriod(startDate, endDate),
    [startDate, endDate]
  );

  // 설문자 정보
  const { value, onChangeTextField, onRadio } = respondent;
  const router = useRouter();

  const onValid = async () => {
    try {
      const resp = await Respondent.valid(
        form?.survey.id as number,
        convert2RespondentValid(value)
      );
      if (resp.response === "0000") {
        Toast.success("설문 조사를 진행할 수 있습니다.");
        router.replace(endpoints.reply.submit(token));
      }
    } catch (e) {
      handleError(e);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.surveyInfo}>
        <h2>{title}</h2>
        <span>
          {/* {getSurveyPeriod(startDate, endDate)} */}
          {periodMsg}
        </span>
      </div>
      <div className={styles.userInfo}>
        <h4>설문자 정보 입력하기</h4>
        <ul>
          <li>
            <LabelTextiField
              label="이름"
              placeholder="이름을 입력하세요"
              name="name"
              value={value.name}
              onChange={onChangeTextField}
            />
          </li>
          <li>
            <LabelTextiField
              label="이메일"
              placeholder="이메일을 입력하세요"
              name="email"
              value={value.email}
              onChange={onChangeTextField}
            />
          </li>
          <li>
            <LabelTextiField
              label="연락처"
              placeholder="연락처를 입력하세요"
              name="phoneNumber"
              onChange={onChangeTextField}
              value={value.phoneNumber}
            />
          </li>
          <li>
            <LabelRadio
              label="성별"
              radioSet={radioSet}
              row
              value={value.gender}
              onChange={onRadio}
            />
          </li>
        </ul>
        <Button className={styles.btn} onClick={onValid}>
          참여하기
        </Button>
      </div>
    </div>
  );
};
