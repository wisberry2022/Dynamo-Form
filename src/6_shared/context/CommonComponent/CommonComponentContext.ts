import { createContext, useContext } from "react";

type CommonComponentContextType = {
  value: boolean;
  setValue: (value: boolean) => void;
};

export const CommonComponentContext = createContext<CommonComponentContextType>(
  {
    value: false,
    setValue: () => {},
  }
);

export const useCommonComponentContext = () =>
  useContext(CommonComponentContext);
