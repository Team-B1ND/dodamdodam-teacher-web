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
  UploadDateAtom,
} from "../../../stores/OffBase/offbase.store";
import { changeApproval } from "../../../utils/OffBasePass/changeApproval";
import { changeGrade } from "../../../utils/Member/changeGrade";

const TodayOffBase = () => {
  const [studentName, setStudentName] = useState<string>("");
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
            items={["전체보기", "대기중", "거절됨", "승인됨", "복귀 완료"]}
            value={selectApproval}
            onChange={setSelectApproval}
            zIndex={2}
          />
          <Select
            items={["모든학년", "1학년", "2학년", "3학년"]}
            value={selectGrade}
            onChange={setSelectGrade}
            zIndex={2}
          />
        </S.SelectContainer>
      </S.OffBaseHeaderContainer>

      <TableAttribute constant={OFFBASE_PASS_ITEMS} thStyle={{ width: "14%" }}>
        <ErrorBoundary fallback={<>에러:)</>}>
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
