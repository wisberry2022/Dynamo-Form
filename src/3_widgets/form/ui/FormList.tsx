import { FC, MouseEvent, useState } from "react";
import styles from "./styles/form-list.module.css";
import { FormListResponse, ListButton } from "@/6_shared";
import { FaFileAlt, FaPen, FaRegPlusSquare } from "react-icons/fa";
import { FormDelete, FormTitleUpdate } from "@/4_features/form";
import { useRecoilState } from "recoil";
import { ToastState } from "@/6_shared/states/Toast/ToastStates";

type FormListProps = {
  formList?: FormListResponse[];
};

export const FormList: FC<FormListProps> = (props) => {
  const { formList = [] } = props;
  const [update, setUpdate] = useState<number>(0);

  const initUpdate = () => {
    setUpdate(0);
  };

  const onUpdate = (
    e: MouseEvent<SVGElement, globalThis.MouseEvent>,
    id: number
  ) => {
    e.stopPropagation();
    if (update) {
      setUpdate(0);
      return;
    }
    setUpdate(id);
  };

  return (
    <>
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
      {formList.map((form) => {
        return (
          <ListButton
            key={form.id}
            left={
              <ListButton.Left
                left={<FaFileAlt className={styles.tIcon} />}
                right={
                  <FormTitleUpdate
                    id={form.id}
                    open={update === form.id}
                    init={initUpdate}
                    title={form.title}
                  />
                }
              />
            }
            right={
              <ListButton.Right
                left={
                  update !== form.id && (
                    <FaPen
                      onClick={(e) => onUpdate(e, form.id)}
                      className={styles.tIcon}
                    />
                  )
                }
                right={<FormDelete id={form.id} />}
              />
            }
          />
        );
      })}
    </>
  );
};
