import LateNightAllow from "../../components/LateNight/LateNightAllow";
import SectionHeaderProvider from "../../components/common/SectionHeaderProvider";

export const LateNightAllowPage = () => {
  return (
    <SectionHeaderProvider
      title="심자신청 수락/거절"
      subTitle="심자신청한 학생들을 수락/거절 할 수 있습니다."
    >
      <LateNightAllow />
    </SectionHeaderProvider>
  );
};
