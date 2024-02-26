import { SearchBar, Select } from "@b1nd/b1nd-dodamdodam-ui";
import * as S from "./style";
import { Suspense, useState } from "react";
import { GRADE_ITEMS } from "../../../constants/Grade/grade.constant";
import { useRecoilState } from "recoil";
import { NightStudyGrade } from "stores/NightStudy/nightstudy.store";
import TableAttribute from "components/common/TableAttribute";
import { NIGHTSTUDY_ALLOW_ITEMS } from "constants/LateNight/latenight.constant";
import ErrorBoundary from "components/common/ErrorBoundary";
import NightStudyTodayItem from "./NightStudyTodayItem";
import { changeGrade } from "utils/Member/changeGrade";
import { CsvButtonContainer } from "components/Bus/BusModal/BusPassenger/style";
import CsvButton from "components/common/ExtractCsvData";
import { useNightStudyStudentList } from "hooks/NightStudy/useNightStudyStudentList";
import dayjs from "dayjs";

const NightStudyToday = () => {
  const [studentName, setStudentName] = useState("");
  const [nightStudyGrade, setNightStudyGrade] = useRecoilState(NightStudyGrade);
  const { NightStudyInfo } = useNightStudyStudentList();

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
          <CsvButtonContainer>
            <CsvButton
              csvData={NightStudyInfo}
              fileName={dayjs().format("YYYY-MM-DD") + "심자 중인 학생"}
            />
          </CsvButtonContainer>
        </S.SelectContainer>
      </S.NightStudyHeaderContainer>
      <TableAttribute
        constant={NIGHTSTUDY_ALLOW_ITEMS}
        thStyle={{ width: "14%" }}
      >
        <ErrorBoundary fallback={<>심자 중인 학생을 불러오지 못했습니다.</>}>
          <Suspense fallback={<>로딩중...</>}>
            <NightStudyTodayItem
              studentName={studentName}
              NightStudyGrade={changeGrade(nightStudyGrade)}
            />
          </Suspense>
        </ErrorBoundary>
      </TableAttribute>
    </>
  );
};

export default NightStudyToday;
