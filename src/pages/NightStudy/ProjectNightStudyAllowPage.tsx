import ProjectNightStudyAllow from "components/NightStudy/ProjectNightStudyAllow";
import SectionHeaderProvider from "components/common/SectionHeaderProvider";

const ProjectNightStudyAllowPage = () => {
  return (
    <SectionHeaderProvider
      title="프로젝트 심자 수락/거절"
      subTitle="프로젝트 심자 신청한 학생들을 수락/거절 할 수 있습니다."
    >
      <ProjectNightStudyAllow />
    </SectionHeaderProvider>
  );
};

export default ProjectNightStudyAllowPage;
