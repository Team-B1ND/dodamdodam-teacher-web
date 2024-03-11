import * as S from "./style";
import { Suspense, useState } from "react";
import ErrorBoundary from "../../common/ErrorBoundary";
import TableAttribute from "../../common/TableAttribute";
import TodayOffBaseItem from "./TodayOffBaseItem";
import { OFFBASE_PASS_ITEMS } from "../../../constants/OffBase/offbase.constant";
import { SearchBar, Select } from "@b1nd/b1nd-dodamdodam-ui";
import { useRecoilState } from "recoil";
import {
  SelectApprovalAtom,
  SelectGradeAtom,
} from "../../../stores/OffBase/offbase.store";
import { changeApproval } from "../../../utils/OffBase/changeApproval";
import { changeGrade } from "../../../utils/Member/changeGrade";
import { GRADE_ITEMS } from "../../../constants/Grade/grade.constant";
import { APPROVAL_ITEMS } from "../../../constants/Approval/approval.constant";

const TodayOffBase = () => {
  const [studentName, setStudentName] = useState("");
  const [selectGrade, setSelectGrade] = useRecoilState(SelectGradeAtom);
  const [selectApproval, setSelectApproval] =
    useRecoilState(SelectApprovalAtom);

  return (
    <>
      <S.OffBaseHeaderContainer>
        <div>
          <SearchBar value={studentName} onChange={setStudentName} />
        </div>

        <S.SelectContainer>
          <Select
            items={APPROVAL_ITEMS}
            value={selectApproval}
            onChange={setSelectApproval}
            zIndex={2}
          />
          <Select
            items={GRADE_ITEMS}
            value={selectGrade}
            onChange={setSelectGrade}
            zIndex={2}
          />
        </S.SelectContainer>
      </S.OffBaseHeaderContainer>

      <TableAttribute constant={OFFBASE_PASS_ITEMS} thStyle={{ width: "14%" }}>
        <ErrorBoundary fallback={<>오늘의 외박자를 불러오지 못했습니다.</>}>
          <Suspense fallback={<>로딩중...</>}>
            <TodayOffBaseItem
              selectApproval={changeApproval(selectApproval)}
              selectGrade={changeGrade(selectGrade)}
              studentName={studentName}
            />
          </Suspense>
        </ErrorBoundary>
      </TableAttribute>
    </>
  );
};

export default TodayOffBase;
