import { SearchBar, Button } from "@b1nd/b1nd-dodamdodam-ui";
import { Suspense, useState } from "react";
import { BUS_MANAGEMENT_ITEMS } from "../../../constants/Bus/bus.constant";
import { useBus } from "../../../hooks/Bus/useBus";
import ErrorBoundary from "../../common/ErrorBoundary";
import TableAttribute from "../../common/TableAttribute";
import BusManagementItem from "./BusManagementItem";
import * as S from "./style";

const BusManagement = () => {
  const [busName, setBusName] = useState("");
  const { openRegistBusFormOverlay } = useBus();
  const [activeBusForm, setActiveBusForm] = useState(false);

  return (
    <>
      <S.SearchAndAddBus>
        <SearchBar value={busName} onChange={setBusName} />
        <Button ButtonType="agree" style={S.AddButtonStyle}>
          추가하기
        </Button>
      </S.SearchAndAddBus>

      <TableAttribute
        constant={BUS_MANAGEMENT_ITEMS}
        thStyle={{ width: "14%" }}
      >
        <ErrorBoundary fallback={<>에러:)</>}>
          <Suspense fallback={<>로딩중...</>}>
            <BusManagementItem busName={busName} />
          </Suspense>
        </ErrorBoundary>
      </TableAttribute>
    </>
  );
};

export default BusManagement;
