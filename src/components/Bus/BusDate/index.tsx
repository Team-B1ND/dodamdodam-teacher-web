import { Suspense } from "react";
import { useSelectBusDate } from "../../../hooks/Bus/useSelectBusDate";
import ErrorBoundary from "../../common/ErrorBoundary";
import BusSkeleton from "../../common/Skeleton/Bus";
import TableAttribute from "../../common/TableAttribute";
import { NoneDataText } from "../style";
import BusDateItem from "./BusDateItem";
import { BUS_ITEMS } from "../constant";
import * as S from "./style";

const BusDate = () => {
  const { handleSelectDateChange, handleConvertToBusParamFormat, ...hooks } =
    useSelectBusDate();

  return (
    <>
      <S.SelectBusDateToView isFocus={hooks.isFoucs}>
        <p>조회할 날짜를 선택하세요</p>
        <input
          type="date"
          value={hooks.selectDate}
          onChange={handleSelectDateChange}
          onClick={() => hooks.setIsFoucs(true)}
          onBlur={() => hooks.setIsFoucs(false)}
        />
      </S.SelectBusDateToView>

      <TableAttribute constant={BUS_ITEMS} thStyle={{ width: "16.5%" }}>
        <ErrorBoundary
          fallback={<NoneDataText>데이터를 불러오지 못했습니다.</NoneDataText>}
        >
          <Suspense fallback={<BusSkeleton />}>
            <BusDateItem
              handleConvertToBusParamFormat={() =>
                handleConvertToBusParamFormat(hooks.selectDate)
              }
            />
          </Suspense>
        </ErrorBoundary>
      </TableAttribute>
    </>
  );
};

export default BusDate;
