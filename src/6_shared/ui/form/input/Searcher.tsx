import { FC } from "react";
import styles from "./searcher.module.css";
import { FaSearch } from "react-icons/fa";

type SearcherProps = {
  value?: string;
  placeholder?: string;
};

export const Searcher: FC<SearcherProps> = (props) => {
  const { value, placeholder } = props;

  return (
    <div className={styles.searcherContainer}>
      <input
        className={styles.searcher}
        type="text"
        placeholder={placeholder}
        value={value}
      />
      <FaSearch />
    </div>
  );
};
