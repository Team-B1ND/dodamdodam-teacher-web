import { Table, TBody, TD, TH, THead, TR } from "@b1nd/b1nd-dodamdodam-ui";
import { BusPassengerType } from "types/Bus/bus.type";
import { addPhoneHyphen } from "utils/common/addPhoneHyphen";
import { BUS_PASSENGER_TITLE_ITEMS } from "./constant";
import * as S from "./style";

interface BusPassengerItemProps {
  busPassengerData: BusPassengerType;
}

const BusPassengerItem = ({ busPassengerData }: BusPassengerItemProps) => {
  return (
    <S.Container>
      <Table customStyle={S.TableStyle}>
        <THead>
          <TR customStyle={S.TitleTRStyle}>
            {BUS_PASSENGER_TITLE_ITEMS.map((item, idx) => (
              <TH key={idx}>{item}</TH>
            ))}
          </TR>
        </THead>

        <TBody customStyle={S.TBodyStyle}>
          {busPassengerData?.busMember.map((item) => (
            <TR customStyle={S.PassengerItemTRStyle} key={item.memberId}>
              <TD>{item.name}</TD>
              <TD>{item.memberId}</TD>
              <TD>{addPhoneHyphen(item.phone)}</TD>
              <TD>{busPassengerData.busName}</TD>
            </TR>
          ))}
        </TBody>
      </Table>
    </S.Container>
  );
};

export default BusPassengerItem;
