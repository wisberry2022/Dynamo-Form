import {
  DropdownQuestion,
  MultiSelectQuestion,
  RatingQuestion,
  TextualQuestion,
  SliderQuestion,
  AttachQuestion,
} from "@/5_entities/question";
import {
  ComponentMapperType,
  DropDownQuestion as DropdownQuestionResponse,
  RatingQuestion as RatingQuestionResponse,
  SelectQuestion,
  SliderQuestion as SliderQuestionResponse,
  TextualQuestion as TextualQuestionResponse,
  AttachQuestion as AttachQuestionResponse,
  DataHandlerType,
  Question,
} from "@/6_shared";
import {
  CategoryComponentMapperType,
  QuestionComponentMapperType,
} from "./types";

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
  FILE_ATTACH: (view: AttachQuestionResponse) => (
    <AttachQuestion question={view} />
  ),
};
