import BusList from "components/Bus/BusList";
import SectionHeaderProvider from "components/common/SectionHeaderProvider";

const BusListPage = () => {
  return (
    <SectionHeaderProvider
      title="버스 전체 기록 조회"
      subTitle="버스 전체 기록을 조회할 수 있습니다."
    >
      <BusList />
    </SectionHeaderProvider>
  );
};

export default BusListPage;
