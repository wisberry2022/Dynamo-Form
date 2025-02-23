import { FC, useEffect } from "react";
import styles from "./styles/Index.module.css";
import { Cookie } from "@/6_shared";

export const Index: FC = () => {
  const cookie = Cookie.of();

  return (
    <div className={styles.titleBox}>
      <h1 onClick={() => console.log(cookie.get("token"))}>Dyna Form</h1>
    </div>
  );
};
