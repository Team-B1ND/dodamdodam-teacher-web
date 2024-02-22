import { Suspense } from "react";
import { useRecoilState } from "recoil";
import { BusListPageAtom } from "stores/Bus/bus.store";
import ErrorBoundary from "components/common/ErrorBoundary";
import BusSkeleton from "components/common/Skeleton/Bus";
import TableAttribute from "components/common/TableAttribute";
import { BUS_ITEMS } from "../constant";
import { NoneDataText } from "../style";
import BusListItem from "./BusListItem";
import * as S from "./style";

const BusList = () => {
  const [page, setPage] = useRecoilState(BusListPageAtom);
  return (
    <>
      <TableAttribute constant={BUS_ITEMS} thStyle={{ width: "16.5%" }}>
        <ErrorBoundary
          fallback={<NoneDataText>데이터를 불러오지 못했습니다.</NoneDataText>}
        >
          <Suspense fallback={<BusSkeleton />}>
            <BusListItem page={page} />
          </Suspense>
        </ErrorBoundary>
      </TableAttribute>

      <S.PrevNextButtonWrap>
        <S.PrevButton
          page={page}
          onClick={() => page > 1 && setPage((prev) => prev - 1)}
        >
          이전
        </S.PrevButton>
        <S.NextButton onClick={() => setPage((prev) => prev + 1)}>
          다음
        </S.NextButton>
      </S.PrevNextButtonWrap>
    </>
  );
};

export default BusList;
