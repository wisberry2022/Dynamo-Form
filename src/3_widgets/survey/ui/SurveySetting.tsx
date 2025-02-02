import { FC, useState } from "react";
import styles from "./styles/survey-setting.module.css";
import {
  Button,
  DataHandlerType,
  handleError,
  ObjType,
  parseDate,
  Survey,
  SurveyRequest,
  Switch,
  TextField,
  Toast,
} from "@/6_shared";
import { DateTimePicker } from "@/6_shared/ui/calendar";

type SurveySettingProps = {
  surveyHandler: DataHandlerType<SurveyRequest>;
};

export const SurveySetting: FC<SurveySettingProps> = (props) => {
  const { surveyHandler } = props;
  const { state, setter, onTextField, onChangeDateWithFormat } = surveyHandler;

  // 시작일, 마감일 설정 함수
  const _onChangeDate = (name: string, value?: Date) => {
    if (!(state as ObjType)[name]) {
      onChangeDateWithFormat(
        name,
        parseDate(value ? value : new Date(), "yyyy-MM-ddTHH:mm")
      );
      return;
    }
    onChangeDateWithFormat(name, null);
  };

  const onChangeStartDate = () => {
    _onChangeDate("startDate");
  };

  const onChangeEndDate = () => {
    const after7Days = new Date();
    after7Days.setDate(after7Days.getDate() + 7);
    _onChangeDate("endDate", after7Days);
  };

  // 참석 인원 제한 설정 함수
  const [used, setUsed] = useState<boolean>(!!state.limitParticipant);

  const onSwitchLimitParticipant = () => {
    setUsed((prev) => !prev);
  };

  // 링크 자동 생성 함수
  const onGenerateLink = async () => {
    try {
      const response = await Survey.createToken();
      setter(
        "surveyLink",
        `${process.env.NEXT_PUBLIC_FRONTEND_URL}/survey/join?token=${response.data.surveyToken}`
      );
      Toast.success("링크가 자동 생성되었습니다.");
    } catch (e) {
      handleError(e);
    }
  };

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
            <TextField
              placeholder="제목을 입력하세요."
              name="title"
              onChange={onTextField}
              value={state.title}
              width={364}
            />
          </li>
          <li>
            <strong>설문 조사 설명</strong>
            <TextField
              placeholder="설명을 입력하세요."
              name="description"
              onChange={onTextField}
              value={state.description}
              width={364}
            />
          </li>
          <li>
            <div className={styles.descBox}>
              <strong>설문 조사 시작일</strong>
              <span>설정한 날짜로부터 설문 조사에 참여할 수 있습니다.</span>
            </div>
            <div className={styles.subContent}>
              <Switch
                checked={!!state.startDate}
                onChange={onChangeStartDate}
                label={state.startDate ? "사용" : "미사용"}
              />
              {state.startDate && (
                <DateTimePicker
                  name="startDate"
                  onChange={onChangeDateWithFormat}
                  value={state.startDate}
                />
              )}
            </div>
          </li>
          <li>
            <div className={styles.descBox}>
              <strong>설문 조사 마감일</strong>
              <span>설정한 날짜에 설문 조사가 마감됩니다.</span>
            </div>
            <div className={styles.subContent}>
              <Switch
                checked={!!state.endDate}
                onChange={onChangeEndDate}
                label={state.endDate ? "사용" : "미사용"}
              />
              {state.endDate && (
                <DateTimePicker
                  name="endDate"
                  onChange={onChangeDateWithFormat}
                  value={state.endDate}
                />
              )}
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
                checked={used}
                onChange={onSwitchLimitParticipant}
                label={used ? "사용" : "미사용"}
              />
              {used && (
                <div className={styles.withText}>
                  <TextField
                    name="limitParticipant"
                    value={state.limitParticipant}
                    onChange={onTextField}
                  />
                  <span>명</span>
                </div>
              )}
            </div>
          </li>
          <li className={styles.linkBox}>
            <div className={styles.descBox}>
              <strong>설문 조사 링크</strong>
              <p>
                설문 조사 링크를 생성할 수 있습니다. <br />
                설문 조사 링크를 공유하여 설문에 참여할 수 있습니다.
              </p>
            </div>
            <div className={styles.subContent}>
              <Button variant="hazy" onClick={onGenerateLink}>
                링크 생성
              </Button>
              <TextField className={styles.linkText} value={state.surveyLink} />
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};
