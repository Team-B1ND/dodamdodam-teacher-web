import { TBody } from "@b1nd/b1nd-dodamdodam-ui";
import { useGetPendingNightStudyProject } from "queries/NightStudy/nightstudy.query";
import ProjectNightStudyItem from "./ProjectNightStudyItem";
import { MemberTBody } from "./style";

const ProjectNightStudyList = () => {
  const { data } = useGetPendingNightStudyProject({
    suspense: true, 
  });

  return (
    <TBody customStyle={MemberTBody}>
      {data?.data?.length ? (
        data.data.map((project) => (
          <ProjectNightStudyItem key={project.id} project={project} />
        ))
      ) : (
        <span>표시할 프로젝트가 없습니다.</span>
      )}
    </TBody>
  );
};

export default ProjectNightStudyList;