import { DataHandlerType, Question } from "@/6_shared";
import { JSX } from "react";

export type QuestionComponentMapperType = (view: any) => JSX.Element;
export type CategoryComponentMapperType = (
  handler: DataHandlerType<any>,
  onQuestionSave: (question: Question) => void
) => JSX.Element;
