import TodayOffBase from "components/Out/TodayOffBase";
import SectionHeaderProvider from "components/common/SectionHeaderProvider";

const TodayOffBaseLeavePage = () => {
  return (
    <SectionHeaderProvider title="외박중" subTitle="외박 중인 학생이 보여집니다.">
      <TodayOffBase />
    </SectionHeaderProvider>
  );
};

export default TodayOffBaseLeavePage;
