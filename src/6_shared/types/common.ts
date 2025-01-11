import { ChangeEventHandler, Dispatch, SetStateAction } from "react";

export type DataStatus = "MODIFY" | "READ" | "ADD";

export type DataHandlerType<T> = {
  state: T;
  setState: Dispatch<SetStateAction<T>>;
  setter: (name: string, value: any) => void;
  onTextField: ChangeEventHandler<HTMLInputElement>;
  onSwitch: (name: string, checked: boolean) => void;
};

export type RadioLabelType<T = any> = {
  id: number;
  label: string;
  value: T;
};
