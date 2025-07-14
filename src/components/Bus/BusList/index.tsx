import { Dispatch, SetStateAction } from "react";
import SkeletonComponent from "components/common/Skeleton";
import BusListItem from "./BusListItem";
import * as S from "./style";
import { useGetAllBusListQuery } from "queries/Bus/bus.query";

interface BusListProps {
  setSection: Dispatch<SetStateAction<string>>;
}

const BusList = ({ setSection }: BusListProps) => {
  const { data, isLoading } = useGetAllBusListQuery({  suspense: true  });

  return (
    <S.BusContainer>
      <S.BusListWrap>
        <S.BusListHeader>
          <p>버스 목록</p>
        </S.BusListHeader>
        <S.BusList>
            {isLoading ? (
              <SkeletonComponent height={48} customStyle={{ borderRadius: "8px" }} />
            ) : (
              data && <BusListItem data={data} setSection={setSection} />
            )}
        </S.BusList>
      </S.BusListWrap>
    </S.BusContainer>
  );
};

export default BusList;