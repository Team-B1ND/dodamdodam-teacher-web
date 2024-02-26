import * as S from "./style";

interface SkeletonProps {
  height: number;
}

const SkeletonComponent = ({ height }: SkeletonProps) => {
  return (
    <S.BusSkeletonContainer>
      {Array.from({ length: 15 }).map((item, idx) => (
        <S.BusSkeletonItem height={height} key={idx} />
      ))}
    </S.BusSkeletonContainer>
  );
};

export default SkeletonComponent;
