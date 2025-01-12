import { Question, QuestionSubCategory } from "@/6_shared";
import { FC } from "react";
import EvaluativeQuestionDetailSelector from "./EvaluativeQuestionDetailSelector";
import DescriptiveQuestionDetailSelector from "./DescriptiveQuestionDetailSelector";
import EvidenceQuestionDetailSelector from "./EvidenceQuestionDetailSelector";
import SelectQuestionDetailSelector from "./SelectQuestionDetailSelector";

type SubCategorySelectorProps = {
  state: Question;
  onChangeSubCategory: (category: QuestionSubCategory) => void;
};

const SubCategorySelector: FC<SubCategorySelectorProps> = (props) => {
  const { state, onChangeSubCategory } = props;

  const componentMapper = {
    SELECT: (
      <SelectQuestionDetailSelector
        state={state}
        onChangeSubCategory={onChangeSubCategory}
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
