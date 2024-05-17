import NightStudyToday from "components/NightStudy/NightStudyToday";
import SectionHeaderProvider from "components/common/SectionHeaderProvider";

export const NightStudyTodayPage = () => {
  return (
    <SectionHeaderProvider
      title="심자중인 학생"
      subTitle="심자중인 학생들을 검색 및 확인할 수 있습니다."
    >
      <NightStudyToday />
    </SectionHeaderProvider>
  );
};
