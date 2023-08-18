import React, { Suspense } from "react";
import * as S from "./style";
import { Table, THead, TH, TR, TableScrollWrapper } from "@b1nd/b1nd-dodam-ui";
import { MEMBER_TABLE_ITEMS } from "../../constants/Member/member.constant";
import ErrorBoundary from "../common/ErrorBoundary";
import MemberItem from "./MemberItem";
import MemberSkeleton from "../common/Skeleton/Member";
import MemberHeader from "./MemberHeader";

function Member() {
  return (
    <S.MemberContainer>
      <MemberHeader />
      <Table customStyle={S.MemberTable}>
        <THead>
          <TR customStyle={S.MemberTR}>
            {MEMBER_TABLE_ITEMS.map((item) => (
              <TH key={item.id} customStyle={{ width: "14%" }}>
                {item.title}
              </TH>
            ))}
          </TR>
        </THead>

        <TableScrollWrapper customStyle={{ height: "65vh" }}>
          <ErrorBoundary fallback={<>Error:)</>}>
            <Suspense fallback={<MemberSkeleton />}>
              <MemberItem />
            </Suspense>
          </ErrorBoundary>
        </TableScrollWrapper>
      </Table>
    </S.MemberContainer>
  );
}

export default React.memo(Member);
