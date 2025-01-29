import { FC, useState } from "react";
import styles from "./styles/survey-setting.module.css";
import dstyles from "./styles/survey-detail-setting.module.css";
import {
  Button,
  DataHandlerType,
  formatDate,
  handleError,
  ObjType,
  parseDate,
  Survey,
  SurveyDetailResponse,
  Switch,
  TextField,
  Toast,
} from "@/6_shared";
import { DateTimePicker } from "@/6_shared/ui/calendar";
import { SurveyStatusChip } from "@/5_entities/survey";

type SurveyDetailSettingProps = {
  surveyHandler: DataHandlerType<SurveyDetailResponse>;
};

export const SurveyDetailSetting: FC<SurveyDetailSettingProps> = (props) => {
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
  const [used, setUsed] = useState<boolean>(!!state?.limitParticipant);

  const onSwitchLimitParticipant = () => {
    if (used) {
      setter("limitParticipant", 0);
    }
    setUsed((prev) => !prev);
  };

  // 링크 복사 기능
  const onCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(state.surveyLink);
      Toast.success("링크가 복사되었습니다.");
    } catch (e) {
      Toast.error("링크 복사에 실패했습니다.");
    }
  };

  // 링크 자동 생성 함수
  const onGenerateLink = async () => {
    try {
      const response = await Survey.createToken();
      setter(
        "surveyLink",
        `${process.env.NEXT_PUBLIC_FRONTEND_URL}/survey/join?=${response.data.surveyToken}`
      );
      Toast.success("링크가 자동 생성되었습니다.");
    } catch (e) {
      handleError(e);
    }
  };

  return (
    <div className={styles.surveySetting}>
      <div className={dstyles.titleBox}>
        <div className={dstyles.title}>
          <div className={dstyles.text}>
            <h2>설문 조사 설정</h2>
            <SurveyStatusChip status={state?.status} />
          </div>
          <div className={dstyles.dttm}>
            <span>
              생성일: {formatDate(state?.regDttm, "yyyy.MM.dd HH:mm")}
            </span>
            {state.status === "COMPLETE" && (
              <span>
                마감일:{" "}
                {formatDate(state.completedDttm as string, "yyyy.MM.dd HH:mm")}
              </span>
            )}
            {state.status === "SUSPENDED" && (
              <span>
                중단일:{" "}
                {formatDate(state.suspendedDttm as string, "yyyy.MM.dd HH:mm")}
              </span>
            )}
          </div>
        </div>
        <p className={dstyles.descPhrase}>
          생성한 양식을 기반으로 설문 조사를 생성할 수 있습니다. <br />
          생성한 설문 조사를 다른 사람에게 공유할 수 있습니다.
        </p>
        {state.status !== "WAITING" && (
          <div className={dstyles.warnBox}>
            <i className={dstyles.asterisk}>*</i>
            <div>
              {state.status === "PROGRESS" && (
                <p className={dstyles.warnPhrase}>
                  진행 중인 설문조사는 수정/삭제할 수 없습니다. <br />
                  단, 진행 기간 중 마감할 수 있습니다. 마감된 설문 조사는 삭제할
                  수 있습니다.
                </p>
              )}
              {state.status === "COMPLETE" && (
                <p className={dstyles.warnPhrase}>
                  본 설문조사는 마감되었습니다.
                </p>
              )}
              {state.status === "SUSPENDED" && (
                <p className={dstyles.warnPhrase}>
                  본 설문 조사는 일시적으로 중단되었습니다. <br />
                  중단된 설문 조사는 제한적인 수정만 허용합니다. (수정 허용
                  설정: 설문 조사 마감일, 설문 참여 인원수 제한)
                </p>
              )}
            </div>
          </div>
        )}
      </div>
      <div className={styles.settings}>
        <ul>
          <li>
            <strong>설문 조사 제목</strong>
            {state.status === "WAITING" ? (
              <TextField
                placeholder="제목을 입력하세요."
                name="title"
                onChange={onTextField}
                value={state?.title}
                width={364}
              />
            ) : (
              <strong className={dstyles.note}>{state.title}</strong>
            )}
          </li>
          <li>
            <strong>설문 조사 설명</strong>
            {state.status === "WAITING" ? (
              <TextField
                placeholder="설명을 입력하세요."
                name="description"
                onChange={onTextField}
                value={state?.description}
                width={364}
              />
            ) : (
              <strong className={dstyles.note}>{state.description}</strong>
            )}
          </li>
          <li>
            <div className={styles.descBox}>
              <strong>설문 조사 시작일</strong>
              <span>설정한 날짜로부터 설문 조사에 참여할 수 있습니다.</span>
            </div>
            {state.status === "WAITING" ? (
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
            ) : (
              <strong className={dstyles.note}>
                {state.startDate
                  ? formatDate(state.startDate, "yyyy.MM.dd HH:mm")
                  : "미사용"}
              </strong>
            )}
          </li>
          <li>
            <div className={styles.descBox}>
              <strong>설문 조사 마감일</strong>
              <span>설정한 날짜에 설문 조사가 마감됩니다.</span>
            </div>
            {["WAITING", "SUSPENDED"].includes(state.status) ? (
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
            ) : (
              <strong className={dstyles.note}>
                {state.endDate
                  ? formatDate(state.endDate, "yyyy.MM.dd HH:mm")
                  : "미사용"}
              </strong>
            )}
          </li>
          <li>
            <div className={styles.descBox}>
              <strong>설문 참여 인원수 제한</strong>
              <p>
                설정한 인원수까지만 설문 조사에 참여할 수 있습니다. <br />
                ex&#41;5명 제한 설명 시 -&gt; 5명에게만 설문조사 공유 가능능
              </p>
            </div>
            {["WAITING", "SUSPENDED"].includes(state.status) ? (
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
            ) : (
              <strong className={dstyles.note}>
                {state.limitParticipant
                  ? `${state.limitParticipant}명`
                  : "미사용"}
              </strong>
            )}
          </li>
          <li className={styles.linkBox}>
            <div className={styles.descBox}>
              <strong>설문 조사 링크</strong>
              <p>
                설문 조사 링크를 생성할 수 있습니다. <br />
                설문 조사 링크를 공유하여 설문에 참여할 수 있습니다.
              </p>
            </div>
            {["WAITING"].includes(state.status) ? (
              <div className={styles.subContent}>
                <Button variant="hazy" onClick={onGenerateLink}>
                  링크 생성
                </Button>
                <TextField
                  className={styles.linkText}
                  value={state.surveyLink}
                />
              </div>
            ) : (
              <strong className={dstyles.note} onClick={onCopyLink}>
                {state.surveyLink}
              </strong>
            )}
          </li>
        </ul>
      </div>
    </div>
  );
};
