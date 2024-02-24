import * as S from "./style";

const BusSkeleton = () => {
  return (
    <S.BusSkeletonContainer>
      {Array.from({ length: 15 }).map((item, idx) => (
        <S.BusSkeletonItem key={idx} />
      ))}
    </S.BusSkeletonContainer>
  );
};

export default BusSkeleton;
