import { FC } from "react";
import styles from "./styles/top-toolbar.module.css";
import { FaArrowLeft, FaHome } from "react-icons/fa";
import { useRouter } from "next/router";
import { endpoints } from "@/6_shared/constants";

type TopToolBarProps = {
  disableNavigation?: boolean;
  backLink?: string;
};

export const TopToolBar: FC<TopToolBarProps> = (props) => {
  const { disableNavigation = false, backLink = "" } = props;

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

  return (
    <div className={styles.toolBar}>
      {!disableNavigation && (
        <div className={styles.utilBar}>
          <FaArrowLeft onClick={goPage} />
          <FaHome onClick={goHome} />
        </div>
      )}
    </div>
  );
};
