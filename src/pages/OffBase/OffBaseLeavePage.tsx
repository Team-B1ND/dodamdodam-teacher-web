import OffBaseLeave from "components/OffBase/OffBaseLeave";
import SectionHeaderProvider from "components/common/SectionHeaderProvider";

const OffBaseLeavePage = () => {
  return (
    <SectionHeaderProvider title="외박" subTitle="현재시간을 기준으로 외박승인을 받지못했거나 또는 외박중인 학생이 보여집니다.">
      <OffBaseLeave />
    </SectionHeaderProvider>
  );
};

export default OffBaseLeavePage;
