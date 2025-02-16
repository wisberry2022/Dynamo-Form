import { FC } from "react";
import styles from "./styles/sign-up.module.css";
import { Button, TextField } from "@/6_shared";

export const SignUp: FC = () => {
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
            <TextField placeholder="아이디를 입력하세요" />
          </div>
        </li>
        <li>
          <strong>
            비밀번호 <i>*</i>
          </strong>
          <TextField
            placeholder="비밀번호를 입력하세요"
            className={styles.field}
          />
        </li>
        <li>
          <strong>
            비밀번호
            <br />
            재확인 <i>*</i>
          </strong>
          <TextField
            placeholder="비밀번호를 다시 입력하세요"
            className={styles.field}
          />
        </li>
        <li>
          <strong>
            이메일 <i>*</i>
          </strong>
          <TextField placeholder="example@naver.com" className={styles.field} />
        </li>
        <li>
          <strong>
            전화번호 <i>*</i>
          </strong>
          <TextField placeholder="010-XXXX-XXXX" className={styles.field} />
        </li>
        <li className={styles.columnList}>
          <strong>
            이름 <i>*</i>
          </strong>
          <div className={styles.rowFields}>
            <TextField placeholder="성" />
            <TextField placeholder="이름" />
          </div>
        </li>
        <li>
          <strong>닉네임</strong>
          <TextField
            placeholder="닉네임을 입력하세요"
            className={styles.field}
          />
        </li>
      </ul>
      <Button variant="primary">회원가입 하기</Button>
    </div>
  );
};
