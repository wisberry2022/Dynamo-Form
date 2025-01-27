import { FormRequest, SelectQuestion } from "@/6_shared";

export const DefaultForm: FormRequest = {
  id: null,
  title: "설문양식",
  description: "",
  autoTitle: false,
  questions: [],
}

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
