import { useState, ChangeEvent } from "react";
import { DodamTextField, DodamFilledButton } from "@b1nd/dds-web";
import * as S from "../../../Club/ClubMain/ClubContext/DetailClub/JoinConfirm/style";
import { useRejectProjectNightStudy } from "hooks/NightStudy/NightStudyProjectAllow/useRejectNightStudyProject";
interface ProjectRejectProps {
  onClose: () => void;
  projectId: number;
}

const ProjectNightRejectModal = ({
  onClose,
  projectId,
}: ProjectRejectProps) => {
  const [rejectReason, setRejectReason] = useState<string>("");
  const { onRejectProject } = useRejectProjectNightStudy();
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setRejectReason(event.target.value);
  };

  const handleRejectButton = () => {
    if (!rejectReason.trim()) {
      alert("거절 사유를 입력해주세요.");
      return;
    }
    onRejectProject({ id: projectId, rejectReason },)
  };

  return (
    <S.ClubJoinContainer>
      <S.InputBoxContainer>
        <S.RejectReason>거절 사유를 입력해주세요.</S.RejectReason>
        <DodamTextField
          id="rejectReason"
          name="rejectReason"
          type="text"
          value={rejectReason}
          label="거절 사유"
          width={273}
          onChange={handleChange}
          customStyle={{ marginTop: "20px" }}
        />
      </S.InputBoxContainer>
      <S.RejectButtonContainer>
        <DodamFilledButton
          size={"Large"}
          enabled={true}
          text="취소"
          typography={["Body1", "Medium"]}
          backgroundColorType={"Assisitive"}
          onClick={onClose}
        />
        <DodamFilledButton
          size={"Large"}
          enabled={rejectReason.trim().length > 0}
          text="확인"
          textTheme={"staticWhite"}
          typography={["Body1", "Medium"]}
          style={{ marginLeft: "8px" }}
          onClick={handleRejectButton}
        />
      </S.RejectButtonContainer>
    </S.ClubJoinContainer>
  );
};

export default ProjectNightRejectModal;
