import { useGetNightStudyAllowedProjects } from "queries/NightStudy/nightstudy.query";
import { TBody } from "@b1nd/b1nd-dodamdodam-ui";
import ProjectNightStudyItem from "components/NightStudy/ProjectNightStudyAllow/ProjectNightStudyList/ProjectNightStudyItem";
import { MemberTBody } from "components/Member/MemberItem/style";

const ProjectNightStudyList = () => {
  const { data } = useGetNightStudyAllowedProjects({
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
