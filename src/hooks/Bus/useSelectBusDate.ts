import { useState } from "react";
import { useRecoilState } from "recoil";
import { SelectBusDateAtom } from "stores/Bus/bus.store";
import convertDateTime from "../../utils/Time/convertDateTime";

export const useSelectBusDate = () => {
  const [isFoucs, setIsFoucs] = useState(false);
  const [selectDate, setSelectDate] = useRecoilState(SelectBusDateAtom);

  const handleSelectDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsFoucs(false);
    setSelectDate(
      convertDateTime.parseDesiredDateTime(
        new Date(e.target.value),
        "YYYY-MM-DD"
      )
    );
  };

  return {
    selectDate,
    isFoucs,
    setIsFoucs,
    handleSelectDateChange,
  };
};
