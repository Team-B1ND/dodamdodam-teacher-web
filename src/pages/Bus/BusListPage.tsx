import BusList from "../../components/Bus/BusList";
import BusProvider from "../../components/Bus/BusProvider";

const BusListPage = () => {
  return (
    <BusProvider
      title="버스 전체 기록 조회"
      subTitle="원하는 날짜를 선택하여 버스를 조회할 수 있습니다."
    >
      <BusList />
    </BusProvider>
  );
};

export default BusListPage;