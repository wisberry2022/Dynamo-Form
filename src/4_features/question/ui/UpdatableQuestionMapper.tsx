import { DataHandlerType, Question, QuestionCategory } from "@/6_shared";
import { FC } from "react";
import { UpdatableCategoryLayout } from "@/5_entities/question/ui/updatable/UpdatableCategoryLayout";
import { CategorySelector, RespValueSelector } from "@/5_entities/question";
import { useCategoryHandler } from "../libs/useCategoryHandler";
import SubCategorySelector from "./private/SubCategorySelector";

type UpdatableQuestionMapperProps = {
  handler: DataHandlerType<Question>;
  onQuestionSave: (question: Question) => void;
};

const UpdatableQuestionMapper: FC<UpdatableQuestionMapperProps> = (props) => {
  const { handler, onQuestionSave } = props;
  const { state: question, onTextField } = handler;
  const {
    state: isolatedState,
    onChangeCategory,
    onChangeSubCategory,
    questionHandler,
  } = useCategoryHandler(question);

  const onSectionSave = () => {
    onQuestionSave({
      ...isolatedState,
      question: question.question,
      required: question.required,
      title: question.title,
      viewOrder: question.viewOrder,
      id: question.id,
    });
  };

  return (
    <UpdatableCategoryLayout
      status="MODIFY"
      question={question}
      onQuestion={onTextField}
      onSectionSave={onSectionSave}
    >
      <CategorySelector
        category={isolatedState.category}
        onChangeCategory={onChangeCategory}
      />
      <SubCategorySelector
        state={isolatedState}
        onChangeSubCategory={onChangeSubCategory}
        questionHandler={questionHandler}
      />
    </UpdatableCategoryLayout>
  );
};

export default UpdatableQuestionMapper;
