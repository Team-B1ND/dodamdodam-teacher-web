import BusManagement from "components/Bus/BusManagement";
import BusProvider from "components/Bus/BusProvider";

const BusPage = () => {
  return (
    <BusProvider
      title="버스 관리"
      subTitle="버스를 추가 / 수정 / 삭제하여 관리할 수 있습니다."
    >
      <BusManagement />
    </BusProvider>
  );
};

export default BusPage;
