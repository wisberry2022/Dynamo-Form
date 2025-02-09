import { FC, MouseEvent, useState } from "react";
import styles from "./styles/form-list.module.css";
import { Chip, endpoints, FormListResponse, ListButton } from "@/6_shared";
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

  return (
    <>
      {formList.map((form) => {
        return (
          <ListButton
            key={form.id}
            onClick={() => goPage(form.id)}
            left={
              <ListButton.Left
                // ToDo: 양식 상태 API 연동 필요
                // ToDo: 양식 리스트, 설명값 필드 추가
                left={<Chip text="사용" variant="primary" />}
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
