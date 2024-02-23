import BusDate from "components/Bus/BusDate";
import SectionHeaderProvider from "components/common/SectionHeaderProvider";

const BusDatePage = () => {
  return (
    <SectionHeaderProvider
      title="날짜별 버스 조회"
      subTitle="원하는 날짜를 선택하여 버스를 조회할 수 있습니다."
    >
      <BusDate />
    </SectionHeaderProvider>
  );
};

export default BusDatePage;
