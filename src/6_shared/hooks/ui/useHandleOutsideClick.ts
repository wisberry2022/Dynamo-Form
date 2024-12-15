import { useEffect, useRef, useState } from "react";

export const useHandleOutsideClick = <T extends HTMLElement>() => {
  const [isOpen, setIsOpen] = useState<boolean>(false); // 열림 상태
  const selectRef = useRef<T>(null); // 드롭다운 외부 클릭 감지용 Ref

  // 드롭다운 외부 클릭 감지
  useEffect(() => {
    const handleOutsideClick = (event: any) => {
      if (selectRef.current && !selectRef.current.contains(event.target)) {
        setIsOpen(false); // 드롭다운 닫기
      }
    };

    document.addEventListener("click", handleOutsideClick);
    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  return {
    isOpen,
    setIsOpen,
    selectRef,
  };
};
