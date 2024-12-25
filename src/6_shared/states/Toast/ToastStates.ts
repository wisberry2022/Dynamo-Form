import { ToastType } from "@/6_shared/types";
import { atom } from "recoil";

export const ToastState = atom<ToastType>({
  key: "ToastState",
  default: {
    type: "success",
    message: "",
  },
});
