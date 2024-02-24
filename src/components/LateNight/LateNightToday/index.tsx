import { SearchBar, Select } from "@b1nd/b1nd-dodamdodam-ui";
import * as S from "./style";
import { useState } from "react";
import { GRADE_ITEMS } from "../../../constants/Grade/grade.constant";
import { useRecoilState } from "recoil";
import { LateNightGrade } from "../../../stores/LateNight/latenight.store";

const LateNightToday = () => {
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
    </>
  );
};

export default LateNightToday;
