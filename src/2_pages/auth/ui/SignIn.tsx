import { FC } from "react";
import styles from "./styles/sign-in.module.css";
import { Button, LabelTextiField } from "@/6_shared";

export const SignIn: FC = () => {
  return (
    <div className={styles.container}>
      <h2>Dynamo Form</h2>
      <div className={styles.content}>
        <div className={styles.signInForm}>
          <div className={styles.inputs}>
            <LabelTextiField label="아이디" className={styles.labelField} />
            <LabelTextiField label="비밀번호" className={styles.labelField} />
          </div>
          <Button variant="primary">로그인 하기</Button>
        </div>
        <div className={styles.bottomBar}>
          <strong>회원 가입하기</strong>
          <strong>로그인 정보를 잊어버렸나요?</strong>
        </div>
      </div>
    </div>
  );
};
