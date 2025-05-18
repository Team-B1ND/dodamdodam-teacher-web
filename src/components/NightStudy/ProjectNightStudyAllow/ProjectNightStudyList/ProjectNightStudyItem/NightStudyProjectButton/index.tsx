import { DodamFilledButton, DodamModal } from "@b1nd/dds-web";
import ProjectNightStudyAllowModal from "components/NightStudy/ProjectNightStudyModal/ProjectNightStudyAllowModal";
import { useState } from "react";
import { ProjectStudyType } from "types/NightStudy/nightstudy.type";
import useRevertProjectNightStudy from "hooks/NightStudy/NightStudyProjectAllow/useRevertProjectNightStudy";
import ProjectNightRejectModal from "components/NightStudy/ProjectNightStudyModal/ProjectNightStudyRejectModal";

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
  const { onRevertProject } = useRevertProjectNightStudy();

  const [isModalOpen, setIsOpenModal] = useState(false);
  const [isRejectModalOpen, setIsRejctModalOpen] = useState(false);

  const handleCloseModal = () =>{
    if(isModalOpen){
      setIsOpenModal(!isModalOpen)
    }else{
      setIsRejctModalOpen(!isRejectModalOpen)
    }
  }


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
          onClick={()=> setIsRejctModalOpen(!isRejectModalOpen)}
        />
          <DodamModal isOpen={isModalOpen} background={true}>
            <ProjectNightStudyAllowModal close={handleCloseModal} project={project}/>
          </DodamModal>

          <DodamModal isOpen={isRejectModalOpen} background>
            <ProjectNightRejectModal onClose={handleCloseModal} projectId={project.id}/>
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
        onClick={() => onRevertProject(projectId)}
      />
    );
  }

  return null;
};

export default NightStudyProjectButton;
