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
  SelectReply,
  DropdownReply,
  TextualReply,
  RatingReply,
  SliderReply,
  AttachReply,
} from "@/6_shared";
import {
  CategoryComponentMapperType,
  QuestionComponentMapperType,
  ReplyQuestionComponentMapperType,
} from "./types";
import { ReplySetterHandler } from "@/5_entities/reply/model/types";

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

export const ReplyQuestions: ComponentMapperType<ReplyQuestionComponentMapperType> =
  {
    MULTI_QUESTION: (view: SelectQuestion, handler: ReplySetterHandler) => {
      const { value, onReplySelectQuestion } = handler;
      const selectValue = value.find((v) => v.id === view.id);
      return (
        <MultiSelectQuestion
          question={view}
          value={selectValue as SelectReply}
          handler={onReplySelectQuestion}
        />
      );
    },
    DROPDOWN: (view: DropdownQuestionResponse, handler: ReplySetterHandler) => {
      const { value, onReplyDropDownQuestion } = handler;
      const selectValue = value.find((v) => v.id === view.id);
      return (
        <DropdownQuestion
          question={view}
          value={selectValue as DropdownReply}
          handler={onReplyDropDownQuestion}
        />
      );
    },
    TEXTUAL: (view: TextualQuestionResponse, handler: ReplySetterHandler) => {
      const { value, onReplyTextualQuestion } = handler;
      const selectValue = value.find((v) => v.id === view.id);
      return (
        <TextualQuestion
          question={view}
          value={selectValue as TextualReply}
          handler={onReplyTextualQuestion}
        />
      );
    },
    RATING: (view: RatingQuestionResponse, handler: ReplySetterHandler) => {
      const { value, onReplyRatingQuestion } = handler;
      const selectValue = value.find((v) => v.id === view.id);
      return (
        <RatingQuestion
          question={view}
          value={selectValue as RatingReply}
          handler={onReplyRatingQuestion}
        />
      );
    },
    SLIDER: (view: SliderQuestionResponse, handler: ReplySetterHandler) => {
      const { value, onReplySliderQuestion } = handler;
      const selectValue = value.find((v) => v.id === view.id);
      return (
        <SliderQuestion
          question={view}
          value={selectValue as SliderReply}
          handler={onReplySliderQuestion}
        />
      );
    },
    FILE_ATTACH: (
      view: AttachQuestionResponse,
      handler: ReplySetterHandler
    ) => {
      const { value, onReplyAttachQuestion } = handler;
      const selectValue = value.find((v) => v.id === view.id);
      return (
        <AttachQuestion
          question={view}
          value={selectValue as AttachReply}
          handler={onReplyAttachQuestion}
        />
      );
    },
  };
