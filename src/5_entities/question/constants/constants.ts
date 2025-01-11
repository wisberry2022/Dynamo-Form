import { FormLabelType, QuestionSubCategory } from "@/6_shared";

export const CategorySelectRadioLabel: FormLabelType[] = [
  { id: 1, label: "선택형", value: "SELECT" },
  { id: 2, label: "서술형", value: "DESCRIPTIVE" },
  { id: 3, label: "평가형", value: "EVALUATIVE" },
  { id: 4, label: "증빙형", value: "EVIDENCE" },
];

export const QuestionSubCategorySelectLabel: FormLabelType<QuestionSubCategory>[] =
  [
    { id: 1, label: "N지 선다형", value: "MULTI_QUESTION" },
    { id: 2, label: "드롭다운형", value: "DROPDOWN" },
  ];
