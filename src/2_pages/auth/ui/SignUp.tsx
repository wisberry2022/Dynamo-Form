import { ChangeEventHandler, FC, useState } from "react";
import styles from "./styles/sign-up.module.css";
import {
  Button,
  endpoints,
  handleError,
  SignUpRequest,
  TextField,
  Toast,
  useDataHandler,
  User,
} from "@/6_shared";
import { SignUpData } from "../model/model";
import { useRouter } from "next/router";

export const SignUp: FC = () => {
  const { state, onTextField } = useDataHandler<SignUpRequest>(SignUpData);

  // 비밀번호 체크
  const [validPassword, setPassword] = useState<string>(state.password);

  const revalidPassword: ChangeEventHandler<HTMLInputElement> = (e) => {
    const { value } = e.target;
    setPassword(value);
  };

  const router = useRouter();

  const onSignUp = async () => {
    try {
      await User.signUp(state);
      Toast.success("회원가입이 완료되었습니다!");
      router.replace(endpoints.auth.signIn);
    } catch (e) {
      handleError(e);
    }
  };

  return (
    <div className={styles.container}>
      <h3>회원가입</h3>
      <ul>
        <li>
          <strong>
            아이디 <i>*</i>
          </strong>
          <div className={styles.idField}>
            <Button variant="brighten">아이디 중복확인</Button>
            <TextField
              placeholder="아이디를 입력하세요"
              name="userId"
              onChange={onTextField}
              value={state.userId}
            />
          </div>
        </li>
        <li>
          <strong>
            비밀번호 <i>*</i>
          </strong>
          <TextField
            type="password"
            placeholder="비밀번호를 입력하세요"
            className={styles.field}
            name="password"
            onChange={onTextField}
            value={state.password}
          />
        </li>
        <li>
          <strong>
            비밀번호
            <br />
            재확인 <i>*</i>
          </strong>
          <TextField
            type="password"
            placeholder="비밀번호를 다시 입력하세요"
            className={styles.field}
            onChange={revalidPassword}
            value={validPassword}
            isError={validPassword !== state.password}
          />
        </li>
        <li>
          <strong>
            이메일 <i>*</i>
          </strong>
          <TextField
            placeholder="example@naver.com"
            className={styles.field}
            name="email"
            value={state.email}
            onChange={onTextField}
          />
        </li>
        <li>
          <strong>
            전화번호 <i>*</i>
          </strong>
          <TextField
            placeholder="010-XXXX-XXXX"
            className={styles.field}
            name="phoneNumber"
            value={state.phoneNumber}
            onChange={onTextField}
          />
        </li>
        <li className={styles.columnList}>
          <strong>
            이름 <i>*</i>
          </strong>
          <div className={styles.rowFields}>
            <TextField
              placeholder="성"
              name="lastName"
              value={state.lastName}
              onChange={onTextField}
            />
            <TextField
              placeholder="이름"
              name="firstName"
              value={state.firstName}
              onChange={onTextField}
            />
          </div>
        </li>
        <li>
          <strong>닉네임</strong>
          <TextField
            placeholder="닉네임을 입력하세요"
            className={styles.field}
            name="nickName"
            value={state.nickName}
            onChange={onTextField}
          />
        </li>
      </ul>
      <Button variant="primary" onClick={onSignUp}>
        회원가입 하기
      </Button>
    </div>
  );
};
