import { TBody } from "@b1nd/b1nd-dodamdodam-ui";
import ProjectNightStudyItem from "./ProjectNightStudyItem";
import { MemberTBody } from "./style";
import { useGetPendingNightStudyProject } from "queries/NightStudy/nightstudy.query";

const ProjectNightStudyList = () => {
  const { data } = useGetPendingNightStudyProject();
  console.log(data)
  return (
    <>
    <TBody customStyle={MemberTBody}>
        {data?.data?.map((project) => (
          <ProjectNightStudyItem key={project.id} project={project} />
        ))}
      </TBody>
    </>
  );
};

export default ProjectNightStudyList;
