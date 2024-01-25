import { SearchBar, Button } from "@b1nd/b1nd-dodamdodam-ui";
import { Suspense, useState } from "react";
import { BUS_MANAGEMENT_ITEMS } from "./constant";
import { useOpenBusModal } from "../../../hooks/Bus/useOpenBusModal";
import ErrorBoundary from "../../common/ErrorBoundary";
import BusSkeleton from "../../common/Skeleton/Bus";
import TableAttribute from "../../common/TableAttribute";
import BusManagementItem from "./BusManagementItem";
import * as S from "./style";
import { NoneDataText } from "../style";

const BusManagement = () => {
  const [busName, setBusName] = useState("");
  const { handleOpenRegisterModal } = useOpenBusModal();

  return (
    <>
      <S.SearchAndAddBus>
        <SearchBar value={busName} onChange={setBusName} />
        <Button
          ButtonType="agree"
          style={S.AddButtonStyle}
          onClick={() => handleOpenRegisterModal()}
        >
          버스 추가하기
        </Button>
      </S.SearchAndAddBus>

      <TableAttribute
        constant={BUS_MANAGEMENT_ITEMS}
        thStyle={{ width: "14%" }}
      >
        <ErrorBoundary
          fallback={<NoneDataText>데이터를 불러오지 못했습니다.</NoneDataText>}
        >
          <Suspense fallback={<BusSkeleton />}>
            <BusManagementItem busName={busName} />
          </Suspense>
        </ErrorBoundary>
      </TableAttribute>
    </>
  );
};

export default BusManagement;
