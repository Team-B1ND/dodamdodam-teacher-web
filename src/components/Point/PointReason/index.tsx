import { useSearchParams } from "react-router-dom";
import { Flex } from "components/common/Flex/Flex";
import PointProvider from "../PointProvider";
import PointReasonForm from "./PointReasonForm";
import PointReasonList from "./PointReasonList";

const PointReason = () => {
  const [searchParam] = useSearchParams();
  const pointQueryParam = searchParam.get("type");

  return (
    <PointProvider
      title={
        pointQueryParam === "DORMITORY"
          ? "기숙사 상벌점 사유"
          : "학교 상벌점 사유"
      }
      subTitle="사유 추가 등록 및 수정, 삭제가 가능합니다"
    >
      <Flex customStyle={{ gap: "7%" }}>
        <PointReasonList pointQueryParam={pointQueryParam} />
        <PointReasonForm pointQueryParam={pointQueryParam} />
      </Flex>
    </PointProvider>
  );
};

export default PointReason;
