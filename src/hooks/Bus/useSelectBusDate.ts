import { useState } from "react";
import { BusDateParam } from "../../repositories/Bus/BusRepository";
import convertTime from "../../utils/Time/convertTime";

export const useSelectBusDate = () => {
  const [isFoucs, setIsFoucs] = useState(false);
  const [selectDate, setSelectDate] = useState(
    convertTime.parseDesiredDateTime(new Date(), "YYYY-MM-DD")
  );

  const handleSelectDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsFoucs(false);
    setSelectDate(
      convertTime.parseDesiredDateTime(new Date(e.target.value), "YYYY-MM-DD")
    );
  };

  const handleConvertToBusParamFormat = (selectDate: string): BusDateParam => {
    const [year, month, day] = selectDate.split("-").map(Number);
    return { year, month, day };
  };

  return {
    selectDate,
    isFoucs,
    setIsFoucs,
    handleSelectDateChange,
    handleConvertToBusParamFormat,
  };
};
