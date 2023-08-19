import * as S from "./style";

const MemberSkeleton = () => {
  return (
    <S.MemberSkeletonContainer>
      {Array.from({ length: 15 }).map((item, idx) => (
        <S.MemberSkeletonItem key={idx} />
      ))}
    </S.MemberSkeletonContainer>
  );
};

export default MemberSkeleton;
