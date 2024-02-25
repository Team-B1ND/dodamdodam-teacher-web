import * as S from "./style";
import { Portal } from "components/common/Portal";
import { LateNightType } from "types/LateNight/latenight.type";
import LateNightIcon from "assets/icons/LateNight/LateNight.svg";
import { TH, THead, TR, Table, TD } from "@b1nd/b1nd-dodamdodam-ui";
import convertTime from "utils/Time/convertTime";
import { LATENIGHT_MODAL_ITEMS } from "./connstant";
interface LateNightModalProps {
  isOpen: boolean;
  data: LateNightType | undefined;
  handleModalClick: () => void;
}

const LateNightModal = ({
  isOpen,
  data,
  handleModalClick,
}: LateNightModalProps) => {
  return (
    <Portal>
      <>
        {isOpen && (
          <S.ModalContainer>
            <S.ModalWrap>
              <S.TitleContainer>
                <S.ModalTitle>
                  <img src={LateNightIcon} />
                  심자 상세보기
                </S.ModalTitle>
                <S.CloseIcon size={32} onClick={() => handleModalClick()} />
              </S.TitleContainer>
              <Table customStyle={S.TableStyle}>
                <THead>
                  <TR customStyle={S.TRStyle}>
                    {LATENIGHT_MODAL_ITEMS.map((item, idx) => (
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
                      {convertTime.getDateTime(new Date(data?.startAt), "date")}
                    </TD>
                    <TD>
                      {convertTime.getDateTime(new Date(data?.endAt), "date")}
                    </TD>
                    <TD>{data.place}</TD>
                    <TD>
                      <S.PhoneItem>{data.isPhone ? "O" : "X"}</S.PhoneItem>
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
                {data?.isPhone && (
                  <>
                    <TH>휴대폰 필요 이유</TH>

                    <TR customStyle={S.TRListStyle}>
                      <TD>{data.reason}</TD>
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
export default LateNightModal;
