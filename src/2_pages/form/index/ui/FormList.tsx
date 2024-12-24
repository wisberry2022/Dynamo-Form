import { FC } from "react";
import styles from "./styles/form-list.module.css";
import { ListButton } from "@/6_shared";
import {
  FaFileAlt,
  FaPen,
  FaRegPlusSquare,
  FaRegTrashAlt,
} from "react-icons/fa";

export const FormList: FC = () => {
  return (
    <div id={styles.listContainer}>
      <ListButton
        bgColor="primary"
        center={
          <ListButton.Center
            left={<FaRegPlusSquare className={styles.tIcon} />}
            right={
              <strong className={styles.tTitle}>새로운 양식 만들기</strong>
            }
          />
        }
      />
      <ListButton
        left={
          <ListButton.Left
            left={<FaFileAlt className={styles.tIcon} />}
            right={<strong className={styles.tTitle}>양식 제목</strong>}
          />
        }
        right={
          <ListButton.Right
            left={<FaPen className={styles.tIcon} />}
            right={<FaRegTrashAlt className={styles.tIcon} />}
          />
        }
      />
    </div>
  );
};
