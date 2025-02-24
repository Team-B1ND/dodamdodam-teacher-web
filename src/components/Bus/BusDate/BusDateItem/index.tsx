import { Button, TBody, TD, TR } from "@b1nd/b1nd-dodamdodam-ui";
import { useGetBusDateQuery } from "queries/Bus/bus.query";
import { BusDateParam } from "repositories/Bus/BusRepository";
import convertDateTime from "utils/Time/ConvertDateTime";
import { useOpenBusModal } from "hooks/Bus/useOpenBusModal";
import * as S from "./style";
import {
  CommonBusPassengerStyle,
  CommonBusTBody,
  CommonBusTR,
  NoneDataText,
} from "../../style";
import { ExistingBusDataAtom } from "stores/Bus/bus.store";
import { useSetRecoilState } from "recoil";
import { useDeleteBus } from "hooks/Bus/useDeleteBus";

interface BusDateItemProps {
  busParamFormat: () => BusDateParam;
}

const BusDateItem = ({ busParamFormat }: BusDateItemProps) => {
  const dateBusData = useGetBusDateQuery(busParamFormat(), {
    suspense: true,
  }).data?.data;

  const setExistingBusData = useSetRecoilState(ExistingBusDataAtom);
  const { handleOpenPassengerModal, handleOpenBusRegisterModal } =
    useOpenBusModal();
  const { handleDeleteBusClick } = useDeleteBus();

  return (
    <TBody customStyle={CommonBusTBody}>
      a
      {/* {dateBusData?.length! > 0 ? (
        dateBusData?.map((item) => (
          <TR customStyle={CommonBusTR}>
            <TD customStyle={S.BusTD}>{item.bus.busName}</TD>

            <TD customStyle={S.BusTD}>{item.bus.description}</TD>

            <TD customStyle={S.BusLeaveTime}>
              <p>
                {convertDateTime.getDateTime(
                  new Date(item.bus.leaveTime),
                  "date"
                )}
              </p>
              <p>
                {convertDateTime.getDateTime(
                  new Date(item.bus.leaveTime),
                  "time"
                )}
              </p>
            </TD>

            <TD customStyle={S.BusTD}>
              {convertDateTime.getTimeRequired(item.bus.timeRequired)}
            </TD>

            <TD customStyle={S.BusTD}>
              {item.bus.applyCount} / {item.bus.peopleLimit}명
            </TD>

            <TD customStyle={S.BusTD}>
              <Button
                ButtonType="agree"
                style={CommonBusPassengerStyle}
                onClick={() =>
                  handleOpenPassengerModal(
                    `${convertDateTime.getDateTime(
                      new Date(item.bus.leaveTime),
                      "date"
                    )}
                    ${item.bus.busName}`,
                    item.members
                  )
                }
              >
                탑승자
              </Button>
            </TD>

            <TD customStyle={S.ButtonContainerStyle}>
              {new Date() < new Date(item.bus.leaveTime) && (
                <Button
                  ButtonType="agree"
                  style={S.EditStyle}
                  onClick={() => {
                    setExistingBusData(item.bus);
                    handleOpenBusRegisterModal(item.bus.id);
                  }}
                >
                  수정
                </Button>
              )}
              <Button
                ButtonType="disagree"
                style={S.DelStyle}
                onClick={(e) =>
                  handleDeleteBusClick(e, {
                    busId: item.bus.id,
                    busDate: convertDateTime.splitConvertDateFormat(
                      convertDateTime.parseDesiredDateTime(
                        item.bus.leaveTime,
                        "YYYY-MM-DD"
                      )
                    ),
                  })
                }
              >
                삭제
              </Button>
            </TD>
          </TR>
        ))
      ) : (
        <NoneDataText>
          선택하신 날짜에 해당하는 버스정보가 없습니다.
        </NoneDataText>
      )} */}
    </TBody>
  );
};

export default BusDateItem;
