import { TBody } from "@b1nd/b1nd-dodamdodam-ui";
import { useGetPendingNightStudyProject } from "queries/NightStudy/nightstudy.query";
import ProjectNightStudyItem from "./ProjectNightStudyItem";
import { MemberTBody } from "./style";
import * as S from "./style";

const ProjectNightStudyList = () => {
  const { data } = useGetPendingNightStudyProject({
    suspense: true, 
  });

  return (
    <>
      {data?.data?.length ? (
        <TBody customStyle={MemberTBody}>
          {data.data.map((project) => (
            <ProjectNightStudyItem key={project.id} project={project} />
          ))}
        </TBody>
      ) : (
        <S.NoProjects>표시할 프로젝트가 없습니다.</S.NoProjects>
      )}
    </>
  );
};

export default ProjectNightStudyList;
