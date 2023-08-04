import * as S from "./style";

export default function MemberSkeleton() {
  return (
    <S.MemberSkeletonContainer>
      {Array.from({ length: 15 }).map((item, idx) => (
        <S.MemberSkeletonItem key={idx} />
      ))}
    </S.MemberSkeletonContainer>
  );
}
