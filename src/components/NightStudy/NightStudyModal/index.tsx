import * as S from "./style";
import { Portal } from "components/common/Portal";
import { NightStudyType } from "types/NightStudy/nightstudy.type";
import NightStudyIcon from "assets/icons/NightStudy/LateNight.svg";
import { TH, THead, TR, Table, TD } from "@b1nd/b1nd-dodamdodam-ui";
import convertDateTime from "utils/Time/ConvertDateTime";
import { NIGHTSTUDY_MODAL_ITEMS } from "./constant";

interface NightStudyModalProps {
  isOpen: boolean;
  data: NightStudyType | undefined;
  handleModalClick: () => void;
}

const NightStudyModal = ({
  isOpen,
  data,
  handleModalClick,
}: NightStudyModalProps) => {
  return (
    <Portal>
      <>
        {isOpen && (
          <S.ModalContainer>
            <S.ModalWrap>
              <S.TitleContainer>
                <S.ModalTitle>
                  <img src={NightStudyIcon} />
                  심자 상세보기
                </S.ModalTitle>
                <S.CloseIcon size={32} onClick={() => handleModalClick()} />
              </S.TitleContainer>
              <Table customStyle={S.TableStyle}>
                <THead>
                  <TR customStyle={S.TRStyle}>
                    {NIGHTSTUDY_MODAL_ITEMS.map((item, idx) => (
                      <TH key={idx}>{item}</TH>
                    ))}
                  </TR>
                </THead>

                {data && (
                  <TR customStyle={S.TRItemStyle}>
                    <TD>{data.student.name}</TD>
                    <TD>
                      {data.student.grade}학년{data?.student.room}반
                      {data.student.room}번
                    </TD>
                    <TD>
                      {convertDateTime.getDateTime(
                        new Date(data?.startAt),
                        "date"
                      )}
                    </TD>
                    <TD>
                      {convertDateTime.getDateTime(
                        new Date(data?.endAt),
                        "date"
                      )}
                    </TD>
                    <TD>{data.place}</TD>
                    <TD>
                      <S.PhoneItem>{data.doNeedPhone ? "O" : "X"}</S.PhoneItem>
                    </TD>
                  </TR>
                )}
              </Table>
              <Table customStyle={S.TableStyle}>
                <TH>심자 사유</TH>

                {data && (
                  <TR customStyle={S.TRListStyle}>
                    <TD>{data.content}</TD>
                  </TR>
                )}
              </Table>
              <Table customStyle={S.TableStyle}>
                {data?.doNeedPhone && (
                  <>
                    <TH>휴대폰 필요 이유</TH>

                    <TR customStyle={S.TRListStyle}>
                      <TD>{data.reasonForPhone}</TD>
                    </TR>
                  </>
                )}
              </Table>
            </S.ModalWrap>
          </S.ModalContainer>
        )}
      </>
    </Portal>
  );
};
export default NightStudyModal;
