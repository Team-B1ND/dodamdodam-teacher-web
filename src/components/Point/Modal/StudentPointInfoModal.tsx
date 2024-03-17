import { Flex } from "components/common/Flex/Flex";
import { TBody, TD, TH, THead, TR, Table } from "@b1nd/b1nd-dodamdodam-ui";
import * as S from "./style";
import {
  BONUS_INFO_COLUMS,
  MINUS_INFO_COLUMS,
  OFFSET_INFO_COLUMS,
} from "./constant";
import ModalHeader from "components/common/Modal/ModalHeader";

interface Props {
  close: () => void;
}

const StudentPointInfoModal = ({ close }: Props) => {
  return (
    <S.Container onClick={(e) => e.stopPropagation()}>
      <ModalHeader close={close} title="백승하님의 상벌점 정보입니다" />
      <Flex direction="column" gap={30} customStyle={{ marginTop: "15px" }}>
        <Table customStyle={S.TableStyle}>
          <THead>
            <TR customStyle={S.TitleTRStyle}>
              {BONUS_INFO_COLUMS.map((data) => (
                <TH>{data}</TH>
              ))}
            </TR>
          </THead>
          <TBody customStyle={S.TBodyStyle}>
            <TR customStyle={S.PassengerItemTRStyle}>
              <TD>5점</TD>
              <TD>백승하</TD>
              <TD>2024-03-06</TD>
            </TR>
          </TBody>
        </Table>
        <Table customStyle={S.TableStyle}>
          <THead>
            <TR customStyle={S.TitleTRStyle}>
              {MINUS_INFO_COLUMS.map((data) => (
                <TH>{data}</TH>
              ))}
            </TR>
          </THead>
          <TBody customStyle={S.TBodyStyle}>
            <TR customStyle={S.PassengerItemTRStyle}>
              <TD>5점</TD>
              <TD>백승하</TD>
              <TD>2024-03-06</TD>
            </TR>
          </TBody>
        </Table>
        <Table customStyle={S.TableStyle}>
          <THead>
            <TR customStyle={S.TitleTRStyle}>
              {OFFSET_INFO_COLUMS.map((data) => (
                <TH>{data}</TH>
              ))}
            </TR>
          </THead>
          <TBody customStyle={S.TBodyStyle}>
            <TR customStyle={S.PassengerItemTRStyle}>
              <TD>5점</TD>
              <TD>백승하</TD>
              <TD>2024-03-06</TD>
            </TR>
          </TBody>
        </Table>
      </Flex>
    </S.Container>
  );
};

export default StudentPointInfoModal;
