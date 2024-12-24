import { FaArrowLeft, FaHome } from "react-icons/fa";
import styles from "./header.module.css";
import { FC } from "react";
import { useRouter } from "next/router";
import { endpoints } from "@/6_shared/constants";

type DetailHeaderProps = {
  title: string;
  backLink?: string;
};

export const DetailHeader: FC<DetailHeaderProps> = (props) => {
  const { title, backLink = "" } = props;
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
    <>
      <div className={styles.utilBar}>
        <FaArrowLeft onClick={goPage} />
        <FaHome onClick={goHome} />
      </div>
      <div className={styles.detailHeader}>
        <h2>{title}</h2>
      </div>
    </>
  );
};
