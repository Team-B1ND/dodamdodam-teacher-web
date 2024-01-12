import React, { Suspense } from "react";
import * as S from "./style";
import { MEMBER_TABLE_ITEMS } from "./constant";
import ErrorBoundary from "../common/ErrorBoundary";
import MemberItem from "./MemberItem";
import MemberSkeleton from "../common/Skeleton/Member";
import MemberHeader from "./MemberHeader";
import TableAttribute from "../common/TableAttribute";

function Member() {
  return (
    <S.MemberContainer>
      <MemberHeader />

      <TableAttribute
        constant={MEMBER_TABLE_ITEMS}
        thStyle={{ width: "10.5%" }}
      >
        <ErrorBoundary fallback={<>Error:)</>}>
          <Suspense fallback={<MemberSkeleton />}>
            <MemberItem />
          </Suspense>
        </ErrorBoundary>
      </TableAttribute>
    </S.MemberContainer>
  );
}

export default React.memo(Member);
