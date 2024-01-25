import { Table, TBody, TD, TH, THead, TR } from "@b1nd/b1nd-dodamdodam-ui";
import { BusPassengerType } from "../../../../../types/Bus/Bus.type";
import { addPhoneHyphen } from "../../../../../utils/common/addPhoneHyphen";
import { BUS_PASSENGER_TITLE_ITEMS } from "./constant";
import * as S from "./style";

interface Props {
  busPassengerData: BusPassengerType;
}

const BusPassengerItem = ({ busPassengerData }: Props) => {
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
            <TR customStyle={S.PassengerItemTRStyle} key={item.idx}>
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
