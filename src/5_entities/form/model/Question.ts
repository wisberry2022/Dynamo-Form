import { SelectQuestion } from "@/6_shared";

export const DefaultQuestion: SelectQuestion = {
  id: null,
  title: "",
  question: "",
  category: "SELECT",
  subCategory: "MULTI_QUESTION",
  viewOrder: 0,
  required: false,
  questions: [],
  multiple: false,
  responseLimit: 0,
};
