import { Button, TBody, TD, TR } from "@b1nd/b1nd-dodamdodam-ui";
import * as S from "./style";
import { useGetRegisteredBusQuery } from "queries/Bus/bus.query";
import convertTime from "utils/Time/convertTime";
import { useSetRecoilState } from "recoil";
import { ExistingBusDataAtom } from "stores/Bus/bus.store";
import { useSearchBusByBusName } from "hooks/Bus/useSearchBusByBusName";
import { useDeleteBus } from "hooks/Bus/useDeleteBus";
import { useOpenBusModal } from "hooks/Bus/useOpenBusModal";
import {
  NoneDataText,
  CommonBusPassengerStyle,
  CommonBusTBody,
  CommonBusTR,
} from "../../style";

const BusManagementItem = ({ busName }: { busName: string }) => {
  const { data: busData } = useGetRegisteredBusQuery({ suspense: true });

  const { searchByBusName } = useSearchBusByBusName();
  const searchByBusNameData = searchByBusName(busData!, busName);

  const { handleDeleteBusClick } = useDeleteBus();
  const { handleOpenRegisterModal, handleOpenPassengerModal } =
    useOpenBusModal();

  const setExistingBusData = useSetRecoilState(ExistingBusDataAtom);

  return (
    <TBody customStyle={CommonBusTBody}>
      {searchByBusNameData.length > 0 ? (
        searchByBusNameData?.map((bus) =>
          bus.bus.map((item) => (
            <TR key={item.idx} customStyle={CommonBusTR}>
              <TD customStyle={S.BusTD}>{item.busName}</TD>

              <TD customStyle={S.BusTD}>{item.description}</TD>

              <TD customStyle={S.BusLeaveTime}>
                <p>
                  {convertTime.getDateTime(new Date(item.leaveTime), "date")}
                </p>
                <p>
                  {convertTime.getDateTime(new Date(item.leaveTime), "time")}
                </p>
              </TD>

              <TD customStyle={S.BusTD}>
                {convertTime.getTimeRequired(item.timeRequired)}
              </TD>

              <TD customStyle={S.BusTD}>
                {item.busMember.length} / {item.peopleLimit}명
              </TD>

              <TD customStyle={S.BusTD}>
                <Button
                  ButtonType="agree"
                  style={CommonBusPassengerStyle}
                  onClick={() =>
                    handleOpenPassengerModal(item.busName, item.busMember)
                  }
                >
                  탑승자
                </Button>
              </TD>

              <TD customStyle={S.ButtonContainerStyle}>
                <Button
                  ButtonType="agree"
                  style={S.EditStyle}
                  onClick={() => {
                    setExistingBusData(item);
                    handleOpenRegisterModal(item.idx);
                  }}
                >
                  수정
                </Button>
                <Button
                  ButtonType="disagree"
                  style={S.DelStyle}
                  onClick={(e) => handleDeleteBusClick(e, item.idx)}
                >
                  삭제
                </Button>
              </TD>
            </TR>
          ))
        )
      ) : (
        <NoneDataText>등록된 버스가 없습니다</NoneDataText>
      )}
    </TBody>
  );
};

export default BusManagementItem;
