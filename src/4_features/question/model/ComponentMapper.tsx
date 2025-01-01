import {
  DropdownQuestion,
  MultiSelectQuestion,
  RatingQuestion,
  TextualQuestion,
} from "@/5_entities/question";
import {
  ComponentMapperType,
  DropDownQuestion as DropdownQuestionResponse,
  RatingQuestion as RatingQuestionResponse,
  SelectQuestion,
  SliderQuestion as SliderQuestionResponse,
  TextualQuestion as TextualQuestionResponse,
} from "@/6_shared";
import { QuestionComponentMapperType } from "./types";
import { SliderQuestion } from "@/5_entities/question/ui/SliderQuestion";

export const Questions: ComponentMapperType<QuestionComponentMapperType> = {
  MULTI_QUESTION: (view: SelectQuestion) => (
    <MultiSelectQuestion question={view} />
  ),
  DROPDOWN: (view: DropdownQuestionResponse) => (
    <DropdownQuestion question={view} />
  ),
  TEXTUAL: (view: TextualQuestionResponse) => (
    <TextualQuestion question={view} />
  ),
  RATING: (view: RatingQuestionResponse) => <RatingQuestion question={view} />,
  SLIDER: (view: SliderQuestionResponse) => <SliderQuestion question={view} />,
};
