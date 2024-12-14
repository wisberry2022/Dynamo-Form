import {
  BaseSyntheticEvent,
  Children,
  cloneElement,
  createElement,
  FC,
  MouseEventHandler,
  ReactElement,
  ReactNode,
  useState,
} from "react";
import styles from "./select.module.css";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import { useHandleOutsideClick } from "@/5_shared/hooks";

type SelectProps = {
  value: any;
  children: ReactNode;
  onChange?: (value: any) => void;
};

type SelectCompound<T = {}> = FC<T> & {
  Item: FC<ItemProps>;
};

export const Select: SelectCompound<SelectProps> = (props) => {
  const { value, children, onChange } = props;
  const childArr = Children.toArray(children);
  const [selectedValue, setSelectedValue] = useState(value); // 선택된 값
  const { isOpen, setIsOpen, selectRef } =
    useHandleOutsideClick<HTMLDivElement>();

  const onItemChange = (value: any) => {
    onChange?.(value);
    setSelectedValue(value);
    setIsOpen(false);
  };

  // 드롭다운 열기/닫기
  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className={styles.select} ref={selectRef}>
      {/* 드롭다운 헤더 */}
      <div
        className={`${styles.selectHeader}`}
        onClick={toggleDropdown}
        style={{ zIndex: isOpen ? 2 : 1 }}
      >
        <span>{selectedValue}</span>
        <svg
          className={`${styles.icon} ${isOpen ? styles.open : ""}`}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="18"
          height="18"
        >
          <path d="M7 10l5 5 5-5z" />
        </svg>
      </div>

      {/* 드롭다운 리스트 */}
      <ul
        className={`${styles.selectList} ${isOpen ? styles.open : ""}`}
        style={{ zIndex: 1 }}
        role="listbox"
      >
        {childArr?.map((child, idx) =>
          cloneElement(child as ReactElement<ItemProps>, {
            key: idx,
            onChange: onItemChange,
          })
        )}
      </ul>
    </div>
  );
};

type ItemProps = {
  label: string;
  value: any;
  onChange?: (value: any) => void;
};

const Item: FC<ItemProps> = (props) => {
  const { label, value, onChange = () => {} } = props;

  const onChangeWrapper: MouseEventHandler<HTMLLIElement> = (e) => {
    const { val } = e.currentTarget.dataset;
    onChange(val);
  };

  return (
    <li
      className={styles.selectItem}
      data-val={value}
      onClick={onChangeWrapper}
    >
      {label}
    </li>
  );
};

Select.Item = Item;
