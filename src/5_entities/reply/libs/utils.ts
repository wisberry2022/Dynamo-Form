import {
  AttachReply,
  DropdownReply,
  Question,
  RatingReply,
  Reply,
  SelectReply,
  TextualReply,
} from "@/6_shared";

export const getReplies = (questions: Question[]): Reply[] => {
  return questions
    .sort((a, b) => a.viewOrder - b.viewOrder)
    .map((question) => {
      switch (question.subCategory) {
        case "MULTI_QUESTION":
          return {
            id: question.id,
            category: "SELECT",
            subCategory: "MULTI_QUESTION",
            answers: [],
          } as SelectReply;
        case "DROPDOWN":
          return {
            id: question.id,
            category: "SELECT",
            subCategory: "DROPDOWN",
            answer: "",
          } as DropdownReply;
        case "TEXTUAL":
          return {
            id: question.id,
            category: "DESCRIPTIVE",
            subCategory: "TEXTUAL",
            text: "",
          } as TextualReply;
        case "RATING":
          return {
            id: question.id,
            category: "EVALUATIVE",
            subCategory: "RATING",
            score: 0,
          } as RatingReply;
        case "SLIDER":
          return {
            id: question.id,
            category: "EVALUATIVE",
            subCategory: "SLIDER",
            score: 0,
          } as RatingReply;
        case "FILE_ATTACH":
          return {
            id: question.id,
            category: "EVIDENCE",
            subCategory: "FILE_ATTACH",
          } as AttachReply;
        default:
          return {} as Reply;
      }
    });
};
