import { Question, QuestionSubCategory, TextualQuestion } from "@/6_shared";
import { FC } from "react";
import EvaluativeQuestionDetailSelector from "./EvaluativeQuestionDetailSelector";
import EvidenceQuestionDetailSelector from "./EvidenceQuestionDetailSelector";
import SelectQuestionDetailSelector from "./SelectQuestionDetailSelector";
import {
  DescriptiveSelector,
  QuestionHandlerType,
} from "@/5_entities/question";

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
    DESCRIPTIVE: (
      <DescriptiveSelector
        state={state as TextualQuestion}
        onChangeTextualQuestion={questionHandler.onChangeTextualQuestion}
      />
    ),
    EVALUATIVE: (
      <EvaluativeQuestionDetailSelector
        state={state}
        onChangeSubCategory={onChangeSubCategory}
        onChangeRatingQuestion={questionHandler.onChangeRatingQuestion}
        onChangeSliderQuestion={questionHandler.onChangeSliderQuestion}
      />
    ),
    EVIDENCE: <EvidenceQuestionDetailSelector />,
  };

  return componentMapper[state.category];
};

export default SubCategorySelector;
