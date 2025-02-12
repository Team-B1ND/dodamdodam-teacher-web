import { Suspense } from "react";
import { useSelectBusDate } from "hooks/Bus/useSelectBusDate";
import ErrorBoundary from "components/common/ErrorBoundary";
import SkeletonComponent from "components/common/Skeleton";
import TableAttribute from "components/common/TableAttribute";
import BusDateItem from "./BusDateItem";
import * as S from "./style";
import { Button } from "@b1nd/b1nd-dodamdodam-ui";
import { useOpenBusModal } from "hooks/Bus/useOpenBusModal";
import { BUS_DATE_ITEMS } from "./constant";
import convertDateTime from "utils/Time/ConvertDateTime";

const BusDate = () => {
  const { handleOpenBusRegisterModal } = useOpenBusModal();
  const { handleSelectDateChange, ...hooks } = useSelectBusDate();

  return (
    <>
      <S.SearchAndSelectDateBus>
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

        <Button
          ButtonType="agree"
          style={S.AddButtonStyle}
          onClick={() => handleOpenBusRegisterModal()}
        >
          버스 추가하기
        </Button>
      </S.SearchAndSelectDateBus>

      <TableAttribute constant={BUS_DATE_ITEMS} thStyle={{ width: "16.5%" }}>
        <ErrorBoundary
         text="데이터를 불러오지 못했습니다" showButton={true}
        >
          <Suspense fallback={<SkeletonComponent height={80} />}>
            <BusDateItem
              busParamFormat={() =>
                convertDateTime.splitConvertDateFormat(hooks.selectDate)
              }
            />
          </Suspense>
        </ErrorBoundary>
      </TableAttribute>
    </>
  );
};

export default BusDate;
