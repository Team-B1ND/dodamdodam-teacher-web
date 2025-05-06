import useProjectNightStudyApproval from "hooks/NightStudy/NightStudyProjectAllow/useProjectNightStudyApproval";
import { DodamFilledButton } from "@b1nd/dds-web";

interface NightStudyProjectButtonProps {
  projectId: number;
  projectStatus: string;
}

const NightStudyProjectButton = ({ projectId, projectStatus }: NightStudyProjectButtonProps) => {
  const { approveProject, rejectProject, revertProject } = useProjectNightStudyApproval();

  if (projectStatus === "PENDING") {
    return (
      <>
        <DodamFilledButton
          text="승인"
          width={90}
          size="Small"
          textTheme="staticWhite"
          backgroundColorType="Primary"
          customStyle={{ minHeight: "24px" }}
          typography={['Body1', 'Medium']}
          onClick={() => approveProject(projectId)}
        />
        <div style={{ paddingBottom: "4px" }} />
        <DodamFilledButton
          text="거절"
          width={90}
          size="Small"
          textTheme="staticWhite"
          backgroundColorType="Negative"
          customStyle={{ minHeight: "24px" }}
          typography={['Body1', 'Medium']}
          onClick={() => rejectProject(projectId)}
        />
      </>
    );
  }

  if (projectStatus === "ALLOWED") {
    return (
      <DodamFilledButton
        text="승인취소"
        width={90}
        size="Small"
        textTheme="staticWhite"
        backgroundColorType="Negative"
        customStyle={{ minHeight: "24px" }}
        typography={['Body1', 'Medium']}
        onClick={() => revertProject(projectId)}
      />
    );
  }
  return null;
};

export default NightStudyProjectButton;
