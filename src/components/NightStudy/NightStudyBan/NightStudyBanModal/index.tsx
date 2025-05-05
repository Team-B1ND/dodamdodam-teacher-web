import {Close, DodamCheckBox, DodamDatePicker, DodamFilledButton, DodamModal} from "@b1nd/dds-web";
import dayjs from "dayjs";
import * as S from './style';
import {useRecoilState} from "recoil";
import {NIGHTSTUDY_BAN_REASONS} from "constants/LateNight/latenight.constant";
import {NightStudyModalAtom} from "stores/NightStudy/nightstudy.store";
import useNightStudyBan from "hooks/NightStudy/NightStudyBan/useNightStudyBan";

interface NightStudyBanModalProps {
  isOpen: boolean;
  onClose: () => void;
  student: number
}

const NightStudyBanModal = ({isOpen, onClose, student}: NightStudyBanModalProps) => {

  const {
    onCreateNightStudyBan,
    state,
    setEnded,
    setReason,
    setReasonType
  } = useNightStudyBan();

  return (
    <DodamModal isOpen={isOpen} background>
      <S.NightStudyBanContainer>
        <div onClick={onClose}>
          <Close $svgStyle={{ cursor: 'pointer' }} />
        </div>
        <p>심자정지</p>
        <S.DateInfoBox>
          <p>정지 종료일</p>
          <DodamDatePicker
            itemKey="ended"
            value={state.ended}
            title="정지 만료일"
            color="primaryNormal"
            type="entire"
            customStyle={{border: "none"}}
            onChange={(e: Date) => setEnded(dayjs(e).format("YYYY-MM-DD"))}
          />
        </S.DateInfoBox>
        {
          NIGHTSTUDY_BAN_REASONS.map((item) => (
            <S.BanedReasonWrap>
              <DodamCheckBox isDisabled={item == state.reasonType} onClick={() => {setReasonType(item)}}/>
              <span>{item}</span>
            </S.BanedReasonWrap>
          ))
        }
        {state.reasonType === "기타" && (
          <S.BannedReasonTextArea
            placeholder="정지 사유를 직접 입력해주세요."
            value={state.reason}
            onChange={(e) => setReason(e.target.value)}
          />
        )}
        <S.BannedReasonButtonWrap>
          <DodamFilledButton
            text="심자정지"
            size="Small"
            width={100}
            textTheme="staticWhite"
            onClick={() => {
              onCreateNightStudyBan(student);
              onClose();
            }}
          />
        </S.BannedReasonButtonWrap>
      </S.NightStudyBanContainer>
    </DodamModal>
  )
}

export default NightStudyBanModal;