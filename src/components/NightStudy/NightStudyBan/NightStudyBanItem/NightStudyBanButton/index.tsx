import {Button} from "@b1nd/b1nd-dodamdodam-ui";
import useNightStudyBanCancel from "hooks/NightStudy/NightStudyBan/UseNightStudyBanCancel";
import {StudentBanType} from "types/NightStudy/nightstudy.type";
import {useRecoilState} from "recoil";
import {NightStudyModalAtom} from "stores/NightStudy/nightstudy.store";

interface NightStudyBanButtonProps {
  student: StudentBanType
}

const NightStudyBanButton = ({student}: NightStudyBanButtonProps
) => {
  const {onDeleteNightStudyBan} = useNightStudyBanCancel()
  const [, setIsOpen] = useRecoilState(NightStudyModalAtom)

  if (student.isBanned) {
    return (
      <Button
        ButtonType="cancel"
        onClick={() => onDeleteNightStudyBan(student.id)}>
        취소
      </Button>
    )
  } else {
    return (
      <Button
        ButtonType="disagree"
        onClick={() => setIsOpen({isOpened: true, student: student.id})}>
        정지
      </Button>
    )
  }
}

export default NightStudyBanButton