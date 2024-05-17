import OffBaseLeave from "components/OffBase/OffBaseLeave";
import SectionHeaderProvider from "components/common/SectionHeaderProvider";

const OffBaseLeavePage = () => {
  return (
    <SectionHeaderProvider title="외박" subTitle="외박한 학생이 보여집니다.">
      <OffBaseLeave />
    </SectionHeaderProvider>
  );
};

export default OffBaseLeavePage;
