"use client";

import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";

import { DateRange, Range, RangeKeyDict } from "react-date-range";

interface DatePickerProps {
  value: Range;
  onChange?: (value: RangeKeyDict) => void;
  disabledDates?: Date[];
}
const DatePicker: React.FC<DatePickerProps> = ({
  value,
  onChange,
  disabledDates
}) => {
  return (
    <div dir="ltr">
      <DateRange
        rangeColors={["#262626"]}
        ranges={[value]}
        date={new Date()}
        onChange={onChange}
        direction="vertical"
        showDateDisplay={false}
        minDate={new Date()}
        disabledDates={disabledDates}
      />
    </div>
  );
};

export default DatePicker;
