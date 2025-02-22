import { FC } from "react";
import styles from "./styles/sign-in.module.css";
import {
  Auth,
  Button,
  Cookie,
  endpoints,
  handleError,
  LabelTextiField,
  SignInRequest,
  useDataHandler,
} from "@/6_shared";
import { useRouter } from "next/router";
import { signInData } from "../model/model";

export const SignIn: FC = () => {
  const router = useRouter();

  const goSignUp = () => {
    router.push(endpoints.auth.signUp);
  };

  // 로그인
  const { state, onTextField } = useDataHandler<SignInRequest>(signInData);
  const cookie = Cookie.of({ secure: true, path: "/", httpOnly: true });

  const onSignIn = async () => {
    try {
      await Auth.signIn(state);
      router.replace(endpoints.index);
    } catch (e) {
      handleError(e);
    }
  };

  return (
    <div className={styles.container}>
      <h2>Dynamo Form</h2>
      <div className={styles.content}>
        <div className={styles.signInForm}>
          <div className={styles.inputs}>
            <LabelTextiField
              label="아이디"
              className={styles.labelField}
              name="userId"
              onChange={onTextField}
              value={state.userId}
            />
            <LabelTextiField
              type="password"
              label="비밀번호"
              className={styles.labelField}
              name="password"
              value={state.password}
              onChange={onTextField}
            />
          </div>
          <Button variant="primary" onClick={onSignIn}>
            로그인 하기
          </Button>
        </div>
        <div className={styles.bottomBar}>
          <strong onClick={goSignUp}>회원 가입하기</strong>
          <strong>로그인 정보를 잊어버렸나요?</strong>
        </div>
      </div>
    </div>
  );
};
