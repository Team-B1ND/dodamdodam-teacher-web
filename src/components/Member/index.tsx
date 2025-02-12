import React, { Suspense } from "react";
import * as S from "./style";
import { MEMBER_TABLE_ITEMS } from "./constant";
import ErrorBoundary from "components/common/ErrorBoundary";
import MemberItem from "./MemberItem";
import SkeletonComponent from "components/common/Skeleton";
import MemberHeader from "./MemberHeader";
import TableAttribute from "components/common/TableAttribute";

function Member() {
  return (
    <S.MemberContainer>
      <MemberHeader />

      <TableAttribute
        constant={MEMBER_TABLE_ITEMS}
        thStyle={{ width: "10.5%" }}
      >
       <ErrorBoundary text="데이터를 불러오지 못했습니다." showButton={true}>
          <Suspense fallback={<SkeletonComponent height={60} />}>
            <MemberItem />
          </Suspense>
        </ErrorBoundary>
      </TableAttribute>
    </S.MemberContainer>
  );
}

export default React.memo(Member);
