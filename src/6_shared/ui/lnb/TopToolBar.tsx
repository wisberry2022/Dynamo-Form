import { FC } from "react";
import styles from "./styles/top-toolbar.module.css";
import { FaArrowLeft, FaHome, FaSignOutAlt } from "react-icons/fa";
import { useRouter } from "next/router";
import { endpoints } from "@/6_shared/constants";
import { Button } from "../button";
import { handleError } from "@/6_shared/utils";
import { Auth } from "@/6_shared/api";
import { Toast } from "../popup";
import { useSWRConfig } from "swr";

type TopToolBarProps = {
  navigation?: boolean;
  signOut?: boolean;
  backLink?: string;
};

export const TopToolBar: FC<TopToolBarProps> = (props) => {
  const { navigation = false, signOut = false, backLink = "" } = props;

  const router = useRouter();

  const goPage = () => {
    if (backLink) {
      router.replace(backLink);
      return;
    }
    router.back();
  };

  const goHome = () => {
    router.push(endpoints.index);
  };

  const onSignOut = async () => {
    try {
      await Auth.signOut();
      Toast.success("로그아웃 되었습니다.");
      router.replace(endpoints.auth.signIn);
    } catch (e) {
      handleError(e);
    }
  };

  return (
    <div className={styles.toolBar}>
      <div className={styles.left}>
        {navigation && (
          <div className={styles.utilBar}>
            <FaArrowLeft onClick={goPage} />
            <FaHome onClick={goHome} />
          </div>
        )}
      </div>
      <div className={styles.right}>
        {signOut && (
          <div className={styles.signOut} onClick={onSignOut}>
            <FaSignOutAlt />
            <span>로그아웃</span>
          </div>
        )}
      </div>
    </div>
  );
};
