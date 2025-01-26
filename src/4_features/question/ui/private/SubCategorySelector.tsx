import { Question, QuestionSubCategory } from "@/6_shared";
import { FC } from "react";
import EvaluativeQuestionDetailSelector from "./EvaluativeQuestionDetailSelector";
import DescriptiveQuestionDetailSelector from "./DescriptiveQuestionDetailSelector";
import EvidenceQuestionDetailSelector from "./EvidenceQuestionDetailSelector";
import SelectQuestionDetailSelector from "./SelectQuestionDetailSelector";
import { QuestionHandlerType } from "@/5_entities/question";

type SubCategorySelectorProps = {
  state: Question;
  onChangeSubCategory: (category: QuestionSubCategory) => void;
  questionHandler: QuestionHandlerType;
};

const SubCategorySelector: FC<SubCategorySelectorProps> = (props) => {
  const { state, onChangeSubCategory, questionHandler } = props;

  const componentMapper = {
    SELECT: (
      <SelectQuestionDetailSelector
        state={state}
        onChangeSubCategory={onChangeSubCategory}
        onChangeMultipleQuestion={questionHandler.onChangeMultipleQuestion}
        onChangeDropDownQuestion={questionHandler.onChangeDropDownQuestion}
      />
    ),
    DESCRIPTIVE: <DescriptiveQuestionDetailSelector />,
    EVALUATIVE: (
      <EvaluativeQuestionDetailSelector
        state={state}
        onChangeSubCategory={onChangeSubCategory}
      />
    ),
    EVIDENCE: <EvidenceQuestionDetailSelector />,
  };

  return componentMapper[state.category];
};

export default SubCategorySelector;
