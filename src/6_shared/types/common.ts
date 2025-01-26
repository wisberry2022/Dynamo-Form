import { ChangeEventHandler, Dispatch, SetStateAction } from "react";

export type DataStatus = "MODIFY" | "READ" | "ADD";

export type DataHandlerType<T> = {
  state: T;
  setState: Dispatch<SetStateAction<T>>;
  setter: (name: string, value: any) => void;
  onTextField: ChangeEventHandler<HTMLInputElement>;
  onSwitch: (name: string, checked: boolean) => void;
};

export type FormLabelType<T = any> = {
  id: number;
  label: string;
  value: T;
};

export type Unique = {
  id: number;
};

export type SequenceData<T> = {
  seq: number;
  value: T | null;
};

export type UseListDataOptionType<T = any> = {
  defaultData: T;
};
