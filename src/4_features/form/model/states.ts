import { SimpleFormDetailResponse } from "@/6_shared";
import { atom } from "recoil";

export const SimpleFormDetailState = atom<SimpleFormDetailResponse>({
  key: "SimpleFormDetailState",
  default: {} as SimpleFormDetailResponse,
});
