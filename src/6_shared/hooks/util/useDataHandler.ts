import { DataHandlerType } from "@/6_shared/types";
import { ChangeEventHandler, useEffect, useState } from "react";

export const useDataHandler = <T extends { id: number }>(
  data: T
): DataHandlerType<T> => {
  const [state, setState] = useState<T>(data);

  useEffect(() => {
    setState(data);
  }, [data]);

  const setter = (name: string, value: any) => {
    setState((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const onTextField: ChangeEventHandler<HTMLInputElement> = (e) => {
    const { name, value } = e.target;
    setter(name, value);
  };

  const onSwitch = (name: string, checked: boolean) => {
    setter(name, checked);
  };

  return {
    state,
    setState,
    setter,
    onTextField,
    onSwitch,
  };
};
