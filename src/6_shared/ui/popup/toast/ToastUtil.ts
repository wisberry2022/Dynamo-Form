import { ToastType } from "@/6_shared/types";
import { SetterOrUpdater } from "recoil";

export class Toast {
  private static setter: SetterOrUpdater<ToastType>;

  public static init(setter: SetterOrUpdater<ToastType>) {
    this.setter = setter;
  }

  static success(message: string) {
    this.setter({ type: "success", message });
  }

  static error(message: string) {
    this.setter({ type: "error", message });
  }

  static warning(message: string) {
    this.setter({ type: "warning", message });
  }

  static close() {
    this.setter({ type: "success", message: "" });
  }
}
