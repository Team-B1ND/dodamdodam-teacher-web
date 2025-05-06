import { TD, TR } from "@b1nd/b1nd-dodamdodam-ui";
import { DodamModal } from "@b1nd/dds-web";
import { useState } from "react";
import * as S from "./style";
import ProjectNightStudyModal from "components/NightStudy/ProjectNightStudyModal";
import { ProjectStudyType } from "types/NightStudy/nightstudy.type";
import NightStudyProjectButton from "./NightStudyProjectButton";

interface ProjectNightStudyItemProps {
  project: ProjectStudyType;
}

const ProjectNightStudyItem = ({ project }: ProjectNightStudyItemProps) => {
  const [isProjectModalOpen, setIsProjectModalOpen] = useState(false);
  
  const handleCloseModal = () => {
    setIsProjectModalOpen(false);
  };

  const projectType = project.type == "NIGHT_STUDY_PROJECT_1" ? '심자1': '심자2';

  return (
    <>
      <TR customStyle={S.WrapProject}>
        <TD customStyle={S.NameColumnStyle}>
          {project.name}
        </TD>
        <TD customStyle={S.DescriptionColumnStyle} >
          <S.ProjectExplainWrap onClick={() => setIsProjectModalOpen(!isProjectModalOpen)}>
            {project.description}
          </S.ProjectExplainWrap>
        </TD>
        <TD customStyle={S.TypeColumnStyle}>
          {projectType}
        </TD>
        <TD customStyle={S.DateColumnStyle}>
          {project.startAt}
        </TD>
        <TD customStyle={S.DateColumnStyle}>
          {project.endAt}
        </TD>
        <TD customStyle={S.RoomColumnStyle}>
          {project.room}
        </TD>
        <TD>
            <NightStudyProjectButton projectId={project.id} projectStatus={project.status}/>
        </TD>
      </TR>

      <DodamModal isOpen={isProjectModalOpen} background>
        <ProjectNightStudyModal 
          close={handleCloseModal} 
          project={project}
        />
      </DodamModal>
    </>
  );
};

export default ProjectNightStudyItem;