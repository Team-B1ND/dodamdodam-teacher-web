import BusManagement from "../../components/Bus/BusManagement";
import SectionHeaderProvider from "../../components/common/SectionHeaderProvider";

const BusPage = () => {
  return (
    <SectionHeaderProvider
      title="버스 관리"
      subTitle="버스를 추가 / 수정 / 삭제하여 관리할 수 있습니다."
    >
      <BusManagement />
    </SectionHeaderProvider>
  );
};

export default BusPage;
