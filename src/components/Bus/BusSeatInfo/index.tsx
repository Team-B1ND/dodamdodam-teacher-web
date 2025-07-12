import * as S from "./style";
import { useRecoilValue } from "recoil";
import { SelectBusDataAtom } from "stores/Bus/bus.store";
import { useGetBusDetailQuery } from "queries/Bus/bus.query";
import { DodamBus } from "@b1nd/dds-web";

const BusSeatInfo = () => {
  const selectedBus = useRecoilValue(SelectBusDataAtom);
  const { data } = useGetBusDetailQuery(selectedBus.bus.id);

  const array: number[] = [];

  data?.users?.map((user) => {
    if (user.seat != 0 && user.boardingType == "BOARDED") {
      array.push(user.seat);
    }
  });

  return (
    <S.BusInfoWrap>
      <S.BusInfoHeader>
        {selectedBus.bus.name}
        <br /> 버스 이용 현황
      </S.BusInfoHeader>
      <DodamBus clickEvent={() => {}} selectedSeat={array} />
    </S.BusInfoWrap>
  );
};

export default BusSeatInfo;
