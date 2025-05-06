import { useGetNightStudyProjects } from "queries/NightStudy/nightstudy.query";
import { TBody } from "@b1nd/b1nd-dodamdodam-ui";
import ProjectNightStudyItem from "components/NightStudy/ProjectNightStudyAllow/ProjectNightStudyList/ProjectNightStudyItem";
import { MemberTBody } from "components/Member/MemberItem/style";

const ProjectNightStudyList = () =>{
    const {data} = useGetNightStudyProjects();
    console.log(data)
    return(
        <>
        <TBody customStyle={MemberTBody}>
        {data?.data?.map((project) => (
          <ProjectNightStudyItem key={project.id} project={project} />
        ))}
      </TBody>
        </>
    )
}

export default ProjectNightStudyList;