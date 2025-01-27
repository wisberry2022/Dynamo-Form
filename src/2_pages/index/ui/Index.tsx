import { FC } from "react";
import styles from "./styles/Index.module.css";
import { FaFileAlt, FaListOl, FaRegPlusSquare } from "react-icons/fa";
import { SquareButton } from "@/6_shared";
import { endpoints } from "@/6_shared/constants";

export const Index: FC = () => {
  return (
    <>
      <div className={styles.titleBox}>
        <h1>Dyna Form</h1>
      </div>
      <div className={styles.btnBox}>
        <SquareButton
          title="양식 생성하기"
          link={endpoints.form.create}
          icon={<FaRegPlusSquare />}
        />
        <SquareButton
          title="양식 관리"
          link={endpoints.form.index}
          icon={<FaListOl />}
        />
        <SquareButton title="설문조사 만들기" icon={<FaFileAlt />} />
      </div>
    </>
  );
};
