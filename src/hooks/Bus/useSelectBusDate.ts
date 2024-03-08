import { useState } from "react";
import { useRecoilState } from "recoil";
import { SelectBusDateAtom } from "stores/Bus/bus.store";
import { BusDateParam } from "../../repositories/Bus/BusRepository";
import convertTime from "../../utils/Time/convertTime";

export const useSelectBusDate = () => {
  const [isFoucs, setIsFoucs] = useState(false);
  const [selectDate, setSelectDate] = useRecoilState(SelectBusDateAtom);

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
