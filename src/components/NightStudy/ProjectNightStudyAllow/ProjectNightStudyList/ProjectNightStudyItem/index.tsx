import { TD, TR } from "@b1nd/b1nd-dodamdodam-ui";
import { WrapProject } from "./style";
import { DodamModal } from "@b1nd/dds-web";
import { useState } from "react";
import * as S from "./style";
import ProjectNightStudyModal from "components/NightStudy/ProjectNightStudyModal";
import { ProjectStudyType } from "types/NightStudy/nightstudy.type";

interface ProjectNightStudyItemProps {
  project: ProjectStudyType;
}

const ProjectNightStudyItem = ({ project }: ProjectNightStudyItemProps) => {
  const [isProjectModalOpen, setIsProjectModalOpen] = useState(false);
  
  const handleCloseModal = () => {
    setIsProjectModalOpen(false);
  };

  return (
    <>
      <TR customStyle={WrapProject}>
        <TD>{project.name}</TD>
        <div onClick={() => setIsProjectModalOpen(!isProjectModalOpen)}>
          <TD>
            <S.ProjectExplainWrap>
              {project.description}
            </S.ProjectExplainWrap>
          </TD>
        </div>
        <TD>{project.leader.name}</TD>
        <TD>{project.startAt}</TD>
        <TD>{project.endAt}</TD>
        <TD>{project.room}</TD>
        {/* 버튼 승인-> 대기X 프로젝트 하고 잇는 사람들 거절-> 그냥 거절 / 프로젝트 하고잇는 사람들에서 Patch로 하고있는 사람들 승인 취소 할수 있음*/}
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