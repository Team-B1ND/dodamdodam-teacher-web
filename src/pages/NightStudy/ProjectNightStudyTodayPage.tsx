import SectionHeaderProvider from "components/common/SectionHeaderProvider";
import ProjectNightStudyToday from "components/NightStudy/ProjectNightStudyToday";

const ProjectNightStudyTodayPage=()=>{
    return(
        <>
            <SectionHeaderProvider title="프로젝트 심자 중인 학생" subTitle="진행중인 프로젝트를 확인할 수 있습니다.">
            <ProjectNightStudyToday/>
            </SectionHeaderProvider>
        </>
    )
}

export default ProjectNightStudyTodayPage;