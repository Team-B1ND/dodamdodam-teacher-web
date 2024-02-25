import * as S from "./style";
import { Suspense, useState } from "react";
import { SearchBar, Select } from "@b1nd/b1nd-dodamdodam-ui";
import { useRecoilState } from "recoil";
import { LateNightGrade } from "../../../stores/LateNight/latenight.store";
import TableAttribute from "../../common/TableAttribute";
import { LATENIGHT_ALLOW_ITEMS } from "../../../constants/LateNight/latenight.constant";
import ErrorBoundary from "../../common/ErrorBoundary";
import LateNightAllowItem from "./LateNightAllowItem";
import { changeGrade } from "../../../utils/Member/changeGrade";
import { GRADE_ITEMS } from "../../../constants/Grade/grade.constant";

const LateNightAllow = () => {
  const [studentName, setStudentName] = useState("");
  const [lateNightGrade, setlateNightGrade] = useRecoilState(LateNightGrade);
  return (
    <>
      <S.LateNightHeaderContainer>
        <S.SearchBarContainer>
          <SearchBar value={studentName} onChange={setStudentName} />
          <S.InfoText>
            <span>*</span>심자 사유를 눌러 상세보기가 가능합니다.
          </S.InfoText>
        </S.SearchBarContainer>
        <S.SelectContainer>
          <Select
            items={GRADE_ITEMS}
            value={lateNightGrade}
            onChange={setlateNightGrade}
            zIndex={2}
          />
        </S.SelectContainer>
      </S.LateNightHeaderContainer>
      <TableAttribute
        constant={LATENIGHT_ALLOW_ITEMS}
        thStyle={{ width: "14%" }}
      >
        <ErrorBoundary
          fallback={<>심자 신청을 한 학생을 불러오지 못했습니다.</>}
        >
          <Suspense fallback={<>로딩중...</>}>
            <LateNightAllowItem
              lateNightGrade={changeGrade(lateNightGrade)}
              studentName={studentName}
            />
          </Suspense>
        </ErrorBoundary>
      </TableAttribute>
    </>
  );
};

export default LateNightAllow;
