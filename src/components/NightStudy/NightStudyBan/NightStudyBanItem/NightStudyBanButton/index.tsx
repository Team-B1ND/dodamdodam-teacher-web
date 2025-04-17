import {Button} from "@b1nd/b1nd-dodamdodam-ui";
import useNightStudyBanCancel from "hooks/NightStudy/NightStudyBan/UseNightStudyBanCancel";

interface NightStudyBanButtonProps {
  isBanned: boolean,
  studentId: number
}

const NightStudyBanButton = ({isBanned, studentId}: NightStudyBanButtonProps
) => {
  const {onDeleteNightStudyBan} = useNightStudyBanCancel()

  if (isBanned) {
    return (
      <Button
        ButtonType="cancel"
        onClick={() => onDeleteNightStudyBan(studentId)}>
        취소
      </Button>
    )
  } else {
    return (
      <Button
        ButtonType="disagree"
        onClick={() => console.log("ad")}>
        정지
      </Button>
    )
  }
}

export default NightStudyBanButton