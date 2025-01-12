import {
  DescriptiveSelector,
  EvaluativeSelector,
  RespValueSelector,
  SelectSubCategorySelector,
} from "@/5_entities/question";
import { Question } from "@/6_shared";
import { FC } from "react";

type SubCategorySelectorProps = {
  state: Question;
};

const SubCategorySelector: FC<SubCategorySelectorProps> = (props) => {
  const { state } = props;

  if (state.category === "SELECT") {
    return (
      <>
        <SelectSubCategorySelector subCategory={state.subCategory} />
        <RespValueSelector />
      </>
    );
  }

  if (state.category === "DESCRIPTIVE") {
    return <DescriptiveSelector />;
  }

  if (state.category === "EVALUATIVE") {
    return (
      <>
        <EvaluativeSelector question={state} onChangeSubCategory={() => {}} />
        <RespValueSelector />
      </>
    );
  }

  if (state.category === "EVIDENCE") {
    return <></>;
  }

  return <div></div>;
};

export default SubCategorySelector;
