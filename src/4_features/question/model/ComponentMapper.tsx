import { DropdownQuestion, MultiSelectQuestion } from "@/5_entities/question";
import {
  ComponentMapperType,
  DropDownQuestion as DropdownQuestionResponse,
  Question,
  SelectQuestion,
} from "@/6_shared";
import { QuestionComponentMapperType } from "./types";

export const Questions: ComponentMapperType<QuestionComponentMapperType> = {
  MULTI_QUESTION: (view: SelectQuestion) => (
    <MultiSelectQuestion question={view} />
  ),
  DROPDOWN: (view: DropdownQuestionResponse) => (
    <DropdownQuestion question={view} />
  ),
};
