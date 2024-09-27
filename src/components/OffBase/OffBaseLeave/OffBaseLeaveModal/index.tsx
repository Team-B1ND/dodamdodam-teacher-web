import { Portal } from "components/common/Portal";
import React from "react";
import * as S from "./style";
import { OutListType } from "types/OffBasePass/offbasepass.type";
import { TD, TH, THead, TR, Table } from "@b1nd/b1nd-dodamdodam-ui";
import { OFFBASELEAVE_MODAL_ITEMS } from "./constant";
import convertDateTime from "utils/Time/ConvertDateTime";
import OffBaseLeaveIcon from "assets/icons/OffBaseLeave/Tent.svg";
import OffBasePassIcon from "assets/icons/OffBasePass/Convenience store.svg";

interface Props {
  isOpen: boolean;
  data: OutListType | undefined;
  where: string;
  handleModalClick: () => void;
}

const OffBaseModal = ({ isOpen, data, where, handleModalClick }: Props) => {
  return (
    <Portal>
      {isOpen && (
        <S.ModalContainer onClick={handleModalClick}>
          <S.ModalWrap onClick={(e) => e.stopPropagation()}>
            <S.TitleContainer>
              <S.ModalTitle>
                <img src={where === "PASS" ? OffBasePassIcon : OffBaseLeaveIcon} alt={where === "PASS" ? "외출 아이콘" : "외박 아이콘"} />
                {where === "PASS" ? "외출 상세보기" : "외박 상세보기"}
              </S.ModalTitle>
              <S.CloseIcon size={32} onClick={handleModalClick} />
            </S.TitleContainer>
            <Table customStyle={S.TableStyle}>
              <THead>
                <TR customStyle={S.TRStyle}>
                  {OFFBASELEAVE_MODAL_ITEMS.map((item, idx) => (
                    <TH key={idx}>{item}</TH>
                  ))}
                </TR>
              </THead>

              {data && (
                <TR customStyle={S.TRItemStyle}>
                  <TD>{data.student.name}</TD>
                  <TD>
                    {data.student.grade}학년{data?.student.room}반{data.student.room}번
                  </TD>
                  <TD>{convertDateTime.getDateTime(new Date(data?.startAt), "date")}</TD>
                  <TD>{convertDateTime.getDateTime(new Date(data?.endAt), "date")}</TD>
                  <TD>{data.reason}</TD>
                  <TD>
                    <S.PhoneItem>{data.status ? "O" : "X"}</S.PhoneItem>
                  </TD>
                </TR>
              )}
            </Table>
            <Table customStyle={S.TableStyle}>
              <TH>심자 사유</TH>

              {data && (
                <TR customStyle={S.TRListStyle}>
                  <TD>{data.reason}</TD>
                </TR>
              )}
            </Table>
          </S.ModalWrap>
        </S.ModalContainer>
      )}
    </Portal>
  );
};

export default OffBaseModal;
