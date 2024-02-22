import BusDate from "components/Bus/BusDate";
import BusProvider from "components/Bus/BusProvider";

const BusDatePage = () => {
  return (
    <BusProvider
      title="날짜별 버스 조회"
      subTitle="원하는 날짜를 선택하여 버스를 조회할 수 있습니다."
    >
      <BusDate />
    </BusProvider>
  );
};

export default BusDatePage;
