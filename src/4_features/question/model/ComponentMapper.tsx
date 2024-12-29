import {
  DropdownQuestion,
  MultiSelectQuestion,
  RatingQuestion,
  TextualQuestion,
} from "@/5_entities/question";
import {
  ComponentMapperType,
  DropDownQuestion as DropdownQuestionResponse,
  Question,
  RatingQuestion as RatingQuestionResponse,
  SelectQuestion,
  TextualQuestion as TextualQuestionResponse,
} from "@/6_shared";
import { QuestionComponentMapperType } from "./types";

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
};
