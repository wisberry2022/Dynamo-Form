import { FC, useState } from "react";
import DatePicker from "react-datepicker";
import styles from "./styles/datetimepicker.module.css";

import "react-datepicker/dist/react-datepicker.css";
import { BiCalendar } from "react-icons/bi";

export const DateTimePicker: FC = () => {
  return (
    <DatePicker
      className={styles.dtPicker}
      showTimeSelect
      dateFormat={"yyyy-MM-dd HH:mm"}
    />
  );
};
