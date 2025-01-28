import { ChangeEventHandler, FC } from "react";
import styles from "./searcher.module.css";
import { FaSearch } from "react-icons/fa";

type SearcherProps = {
  value?: string;
  placeholder?: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
};

export const Searcher: FC<SearcherProps> = (props) => {
  const { value, placeholder, onChange } = props;

  return (
    <div className={styles.searcherContainer}>
      <input
        className={styles.searcher}
        type="text"
        placeholder={placeholder}
        onChange={onChange}
        value={value}
      />
      <FaSearch />
    </div>
  );
};
