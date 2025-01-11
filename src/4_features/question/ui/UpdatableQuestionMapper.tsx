import { DataHandlerType, Question } from "@/6_shared";
import { FC } from "react";
import { UpdatableCategoryLayout } from "@/5_entities/question/ui/updatable/UpdatableCategoryLayout";
import { CategorySelector, SubCategorySelector } from "@/5_entities/question";

type UpdatableQuestionMapperProps = {
  handler: DataHandlerType<Question>;
  onQuestionSave: (question: Question) => void;
};

const UpdatableQuestionMapper: FC<UpdatableQuestionMapperProps> = (props) => {
  const { handler, onQuestionSave } = props;
  const { state: question, onTextField } = handler;

  const onSectionSave = () => {
    onQuestionSave(question);
  };

  return (
    <UpdatableCategoryLayout
      status="MODIFY"
      question={question}
      onQuestion={onTextField}
      onSectionSave={onSectionSave}
    >
      <CategorySelector
        category={question.category}
        onChangeCategory={() => {}}
      />
      <SubCategorySelector subCategory={question.subCategory} />
    </UpdatableCategoryLayout>
  );
};

export default UpdatableQuestionMapper;
