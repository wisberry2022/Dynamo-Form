import { cloneElement, FC, ReactElement, ReactNode } from "react";
import styles from "./styles/button.module.css";
import { useRouter } from "next/router";

type SquareButtonProps = {
  title: string;
  icon: ReactNode;
  link?: string;
};

export const SquareButton: FC<SquareButtonProps> = (props) => {
  const { title, icon, link } = props;
  const router = useRouter();

  const goPage = () => {
    if (!link) {
      return;
    }
    router.push(link);
  };

  return (
    <div className={styles.squaredBtn} onClick={goPage}>
      <div>
        <strong>{title}</strong>
        {cloneElement(icon as ReactElement<any>, { className: styles.icon })}
      </div>
    </div>
  );
};
