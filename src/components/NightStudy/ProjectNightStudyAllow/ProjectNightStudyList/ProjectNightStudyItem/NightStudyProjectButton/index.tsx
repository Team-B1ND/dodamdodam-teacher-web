import useProjectNightStudyApproval from "hooks/NightStudy/NightStudyProjectAllow/useProjectNightStudyApproval";
import { DodamFilledButton, DodamModal } from "@b1nd/dds-web";
import ProjectNightStudyAllowModal from "components/NightStudy/ProjectNightStudyModal/ProjectNightStudyAllowModal";
import { useEffect, useState } from "react";
import { ProjectStudyType } from "types/NightStudy/nightstudy.type";


interface NightStudyProjectButtonProps {
  projectId: number;
  projectStatus: string;
  project : ProjectStudyType;
}

const NightStudyProjectButton = ({
  projectId,
  project,
  projectStatus,
}: NightStudyProjectButtonProps) => {
  const { approveProject, rejectProject, revertProject } =
    useProjectNightStudyApproval();
  const [isModalOpen, setIsOpenModal] = useState(false);

  const handleCloseModal = () =>{setIsOpenModal(!isModalOpen)}
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
          typography={["Body1", "Medium"]}
          onClick={() => setIsOpenModal(!isModalOpen)}
        />
        <div style={{ paddingBottom: "4px" }} />
        <DodamFilledButton
          text="거절"
          width={90}
          size="Small"
          textTheme="staticWhite"
          backgroundColorType="Negative"
          customStyle={{ minHeight: "24px" }}
          typography={["Body1", "Medium"]}
          onClick={() => rejectProject(projectId)}
        />
          <DodamModal isOpen={isModalOpen} background={true}>
            <ProjectNightStudyAllowModal close={handleCloseModal} project={project}/>
          </DodamModal>
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
        typography={["Body1", "Medium"]}
        onClick={() => revertProject(projectId)}
      />
    );
  }

  return null;
};

export default NightStudyProjectButton;
