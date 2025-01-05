import { FC } from "react";
import styles from "./styles/form-detail.module.css";
import { Question } from "@/4_features/question";
import { FormInfo } from "@/3_widgets/form";
import { useFormDetailContext } from "@/5_entities/form";

export const FormDetail: FC = () => {
  const { form, formHandler, onSectionSave } = useFormDetailContext();

  return (
    <div id={styles.formDetail}>
      {form && (
        <FormInfo
          form={form}
          formHandler={formHandler}
          onSectionSave={onSectionSave}
        />
      )}
      {form &&
        form.questions.map((quest) => (
          <Question key={quest.id} question={quest} />
        ))}
    </div>
  );
};
