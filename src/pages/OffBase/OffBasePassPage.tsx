import OffBasePass from "../../components/OffBase/OffBasePass";
import SectionHeaderProvider from "../../components/common/SectionHeaderProvider";

const OffBasePassPage = () => {
  return (
    <SectionHeaderProvider title="외출" subTitle="외출한 학생이 보여집니다.">
      <OffBasePass />
    </SectionHeaderProvider>
  );
};

export default OffBasePassPage;
