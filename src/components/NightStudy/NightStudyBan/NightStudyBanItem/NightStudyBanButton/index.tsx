import {Button} from "@b1nd/b1nd-dodamdodam-ui";

interface NightStudyBanButtonProps {
  isDisabled: boolean
}

const NightStudyBanButton = ({isDisabled}: NightStudyBanButtonProps
) => {

  if (isDisabled) {
    return <Button ButtonType="cancel" onChange={() => console.log("ad")}>취소</Button>
  } else {
    return <Button ButtonType="agree" onChange={() => console.log("ad")}>정지</Button>
  }
}

export default NightStudyBanButton