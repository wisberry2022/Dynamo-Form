import { ToastType } from "@/6_shared/types";
import { SetterOrUpdater } from "recoil";

export class Toast {
  private static setter: SetterOrUpdater<ToastType>;

  public static init(setter: SetterOrUpdater<ToastType>) {
    this.setter = setter;
  }

  static success(message: string) {
    this.setter({ open: true, type: "success", message });
  }

  static error(message: string) {
    this.setter({ open: true, type: "error", message });
  }

  static warning(message: string) {
    this.setter({ open: true, type: "warning", message });
  }

  static close() {
    this.setter({ open: false, type: "success", message: "" });
  }
}
