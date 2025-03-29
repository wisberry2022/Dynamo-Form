import { AttachStat, RatingStat, SelectStat, TextualStat } from "@/6_shared";
import {
  AttachStatView,
  RatingStatView,
  SelectStatView,
  TextualStatView,
} from "../model/types";

export const SelectStat2View = (stat: SelectStat): SelectStatView => {
  return {
    question: stat.question,
    subCategory: stat.subCategory,
    answers: stat.answers,
  };
};

export const TextualStat2View = (stat: TextualStat): TextualStatView => {
  return {
    question: stat.question,
    subCategory: stat.subCategory,
    answers: stat.answers,
    averageAnswers: stat.averageAnswers,
  };
};

export const RatingStat2View = (stat: RatingStat): RatingStatView => {
  return {
    question: stat.question,
    subCategory: stat.subCategory,
    min: stat.min,
    max: stat.max,
    average: stat.average,
  };
};

export const AttachStat2View = (stat: AttachStat): AttachStatView => {
  return {
    question: stat.question,
    subCategory: stat.subCategory,
    files: stat.files,
  };
};
