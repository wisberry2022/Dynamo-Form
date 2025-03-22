import {
  Children,
  cloneElement,
  FC,
  ReactElement,
  ReactNode,
  useState,
} from "react";
import styles from "./tab.module.css";

type BasicTabProps = {
  tabs: string[];
  children: ReactNode;
};

export const BasicTab: FC<BasicTabProps> = (props) => {
  const { tabs, children } = props;
  const [clicked, setClicked] = useState<number>(0);

  const onClick = (val: number) => {
    setClicked(val);
  };

  return (
    <div className={styles.tabContainer}>
      <div className={styles.panel}>
        {tabs.map((tab, idx) => (
          <>
            <div
              key={idx}
              className={`${styles.index} ${
                clicked === idx ? styles.clicked : ""
              }`}
              onClick={() => onClick(idx)}
            >
              {tab}
            </div>
            {idx === tabs.length - 1 && <div className={styles.effect}></div>}
          </>
        ))}
      </div>
      <div className={styles.content}>
        {Children.toArray(children).map((child, idx) => {
          if (clicked === idx) {
            return cloneElement(child as ReactElement, { key: idx });
          }
        })}
      </div>
    </div>
  );
};
