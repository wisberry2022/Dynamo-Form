import { FC, useState } from "react";
import { AttachStatView, SimpelFileView } from "../model/types";
import styles from "./styles/stat-common.module.css";
import {
  Button,
  Checkbox,
  File,
  handleError,
  ServiceError,
  useListData,
} from "@/6_shared";

type AttachStatProps = {
  stat: AttachStatView;
};

export const AttachStat: FC<AttachStatProps> = (props) => {
  const { stat } = props;
  const { list } = useListData<SimpelFileView>(stat.files);

  const [selected, setSelected] = useState<string[]>([]);

  const onChecked = (value: string) => {
    setSelected((prev) => {
      if (selected.includes(value)) {
        return prev.filter((seq) => seq !== value);
      } else {
        return [...prev, value];
      }
    });
  };

  /// 파일 다운로드
  const onFileDownload = async () => {
    try {
      if (!selected.length) {
        throw new ServiceError(
          "FRONT_ERROR",
          "다운로드를 할 파일을 선택해주세요"
        );
        return;
      }
      await File.download({ fileKeys: selected });
    } catch (e) {
      handleError(e);
    }
  };

  const onAllFileDownload = async (fileKeys: string[]) => {
    try {
      await File.download({ fileKeys });
    } catch (e) {
      handleError(e);
    }
  };

  return (
    <div className={styles.statContainer}>
      <h3>{stat.question}</h3>
      <div className={styles.box}>
        <div className={styles.attachSummary}>
          <div className={`${styles.content} ${styles.attachContent}`}>
            <strong>첨부파일 목록</strong>
            <div className={styles.btnBox}>
              <Button
                variant="primary"
                onClick={() =>
                  onAllFileDownload(
                    list.map((file) => file.value?.fileKey as string)
                  )
                }
              >
                전체 다운로드
              </Button>
              <Button variant="brighten" onClick={onFileDownload}>
                파일 다운로드
              </Button>
            </div>
          </div>
          <ul className={styles.attachList}>
            {list?.map((file) => {
              return (
                <li key={file.seq}>
                  <Checkbox
                    onChecked={onChecked}
                    checked={selected.includes(file.value?.fileKey as string)}
                    value={file.value?.fileKey}
                    label={file.value?.fileName}
                  />
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};
