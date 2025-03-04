import OffBasePass from "components/Out/OutGoing";
import SectionHeaderProvider from "components/common/SectionHeaderProvider";

const OutGoingPage = () => {
  return (
    <SectionHeaderProvider title="외출" subTitle="외출한 학생이 보여집니다.">
      <OffBasePass />
    </SectionHeaderProvider>
  );
};

export default OutGoingPage;
