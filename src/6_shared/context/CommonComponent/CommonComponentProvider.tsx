import { FC, ReactNode, useEffect, useState } from "react";
import { CommonComponentContext } from "./CommonComponentContext";
import { CommonToast, Toast } from "@/6_shared/ui";
import { useSetRecoilState } from "recoil";
import { ToastState } from "@/6_shared/states/Toast/ToastStates";

type CommonComponentProviderProps = {
  children: ReactNode;
};

export const CommonComponentProvider: FC<CommonComponentProviderProps> = (
  props
) => {
  const { children } = props;
  const [value, setValue] = useState<boolean>(false);
  const setToast = useSetRecoilState(ToastState);

  const onValue = (val: boolean) => {
    setValue(val);
  };

  useEffect(() => {
    Toast.init(setToast);
  }, []);

  return (
    <CommonComponentContext.Provider value={{ value, setValue: onValue }}>
      {children}
      <CommonToast />
    </CommonComponentContext.Provider>
  );
};
