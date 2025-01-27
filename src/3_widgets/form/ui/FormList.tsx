import { FC, MouseEvent, useState } from "react";
import styles from "./styles/form-list.module.css";
import { endpoints, FormListResponse, ListButton } from "@/6_shared";
import { FaFileAlt, FaPen, FaRegPlusSquare } from "react-icons/fa";
import { FormDelete, FormTitleUpdate } from "@/4_features/form";
import { useRouter } from "next/router";

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

  const router = useRouter();

  const goPage = (id: number) => {
    router.push(endpoints.form.detail(id));
  };

  const goCreate = () => {
    router.push(endpoints.form.create);
  };

  return (
    <>
      <ListButton
        bgColor="primary"
        onClick={goCreate}
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
            onClick={() => goPage(form.id)}
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
