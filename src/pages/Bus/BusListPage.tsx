import BusList from "components/Bus/BusList";
import SectionHeaderProvider from "components/common/SectionHeaderProvider";

const BusListPage = () => {
  return (
    <SectionHeaderProvider
      title="버스 전체 기록 조회"
      subTitle="원하는 날짜를 선택하여 버스를 조회할 수 있습니다."
    >
      <BusList />
    </SectionHeaderProvider>
  );
};

export default BusListPage;
