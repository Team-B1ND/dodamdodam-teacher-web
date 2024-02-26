import * as S from "./style";
import { Suspense, useState } from "react";
import { SearchBar, Select } from "@b1nd/b1nd-dodamdodam-ui";
import { useRecoilState } from "recoil";
import { NightStudyGrade } from "stores/NightStudy/nightstudy.store";
import TableAttribute from "../../common/TableAttribute";
import { NIGHTSTUDY_ALLOW_ITEMS } from "constants/LateNight/latenight.constant";
import ErrorBoundary from "../../common/ErrorBoundary";
import NightStudyAllowItem from "./NightStudyAllowItem";
import { changeGrade } from "../../../utils/Member/changeGrade";
import { GRADE_ITEMS } from "../../../constants/Grade/grade.constant";

const NightStudyAllow = () => {
  const [studentName, setStudentName] = useState("");
  const [nightStudyGrade, setNightStudyGrade] = useRecoilState(NightStudyGrade);
  return (
    <>
      <S.NightStudyHeaderContainer>
        <S.SearchBarContainer>
          <SearchBar value={studentName} onChange={setStudentName} />
          <S.InfoText>
            <span>*</span>심자 사유를 눌러 상세보기가 가능합니다.
          </S.InfoText>
        </S.SearchBarContainer>
        <S.SelectContainer>
          <Select
            items={GRADE_ITEMS}
            value={nightStudyGrade}
            onChange={setNightStudyGrade}
            zIndex={2}
          />
        </S.SelectContainer>
      </S.NightStudyHeaderContainer>
      <TableAttribute
        constant={NIGHTSTUDY_ALLOW_ITEMS}
        thStyle={{ width: "14%" }}
      >
        <ErrorBoundary
          fallback={<>심자 신청을 한 학생을 불러오지 못했습니다.</>}
        >
          <Suspense fallback={<>로딩중...</>}>
            <NightStudyAllowItem
              NightStudyGrade={changeGrade(nightStudyGrade)}
              studentName={studentName}
            />
          </Suspense>
        </ErrorBoundary>
      </TableAttribute>
    </>
  );
};

export default NightStudyAllow;
