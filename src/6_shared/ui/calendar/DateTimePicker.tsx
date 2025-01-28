import { FC, useState } from "react";
import DatePicker from "react-datepicker";
import styles from "./styles/datetimepicker.module.css";

import "react-datepicker/dist/react-datepicker.css";
import { formatDate, parseDate } from "@/6_shared/utils";

type DateTimePickerProps = {
  name?: string;
  value?: string;
  onChange?: (name: string, value: string | null) => void;
};

export const DateTimePicker: FC<DateTimePickerProps> = (props) => {
  const { name = "", value, onChange = () => {} } = props;
  const [selected, setSelected] = useState<Date | null>(
    value ? new Date(value) : null
  );

  const onChangeDate = (date: Date | null) => {
    setSelected(date);
    onChange?.(name, date ? parseDate(date, "yyyy-MM-ddTHH:mm") : "");
  };

  return (
    <DatePicker
      selected={selected}
      onChange={onChangeDate}
      className={styles.dtPicker}
      showTimeSelect
      dateFormat={"yyyy-MM-dd HH:mm"}
    />
  );
};
