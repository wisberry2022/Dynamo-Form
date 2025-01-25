import {
  Children,
  cloneElement,
  FC,
  MouseEventHandler,
  ReactElement,
  ReactNode,
  useState,
} from "react";
import styles from "./select.module.css";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import { useHandleOutsideClick } from "@/6_shared/hooks";
import { FormLabelType } from "@/6_shared/types";

type SelectProps = {
  value: any;
  children: ReactNode;
  width?: number;
  height?: number;
  onChange?: (value: any) => void;
};

type SelectCompound<T = {}> = FC<T> & {
  Item: FC<ItemProps>;
};

export const Select: SelectCompound<SelectProps> = (props) => {
  const { value, children, onChange, width, height } = props;
  const childArr = Children.toArray(children);
  const [selectedValue, setSelectedValue] = useState(value); // 선택된 값
  const { isOpen, setIsOpen, selectRef } =
    useHandleOutsideClick<HTMLDivElement>();

  const selectLabels: FormLabelType[] = childArr.map(
    (child) => (child as ReactElement).props as FormLabelType
  );

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
    <div
      className={styles.select}
      ref={selectRef}
      style={{ width: `${width ? `${width}%` : "200px"}` }}
    >
      {/* 드롭다운 헤더 */}
      <div
        className={`${styles.selectHeader}`}
        onClick={toggleDropdown}
        style={{
          zIndex: isOpen ? 12 : 1,
          padding: height && `${height + 0.2}rem`,
          height: height ? `${height}rem` : "auto",
        }}
      >
        <span style={{ fontSize: height && `${height + 0.2}rem` }}>
          {
            selectLabels?.find((labelSet) => labelSet.value === selectedValue)
              ?.label
          }
        </span>
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
        style={{ zIndex: 10 }}
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
