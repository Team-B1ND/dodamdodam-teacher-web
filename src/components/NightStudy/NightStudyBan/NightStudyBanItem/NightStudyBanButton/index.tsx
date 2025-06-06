import useNightStudyBanCancel from "hooks/NightStudy/NightStudyBan/useNightStudyBanCancel";
import {StudentBanType} from "types/NightStudy/nightstudy.type";
import {useSetRecoilState} from "recoil";
import {NightStudyModalAtom} from "stores/NightStudy/nightstudy.store";
import {DodamFilledButton} from "@b1nd/dds-web";

interface NightStudyBanButtonProps {
  student: StudentBanType,
  openModal: () => void;
}

const NightStudyBanButton = ({student, openModal}: NightStudyBanButtonProps
) => {
  const {onDeleteNightStudyBan} = useNightStudyBanCancel()
  const setSelectedStudent = useSetRecoilState(NightStudyModalAtom);

  if (student.isBanned) {
    return (
      <DodamFilledButton
          text="취소"
          width={90}
          size="Small"
          textTheme="staticWhite"
          backgroundColorType='Negative'
          onClick={() => onDeleteNightStudyBan(student.id)}
      />
    )
  } else {
    return (
      <DodamFilledButton
        text="정지"
        width={90}
        size="Small"
        textTheme="labelNetural"
        typography={['Body1', 'Medium']}
        backgroundColorType="Assisitive"
        onClick={() => {
          openModal();
          setSelectedStudent(student.id)
        }}
      />
    )
  }
}

export default NightStudyBanButton