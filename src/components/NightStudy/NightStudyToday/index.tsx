import { SearchBar, Select } from "@b1nd/b1nd-dodamdodam-ui";
import * as S from "./style";
import { Suspense, useState } from "react";
import { GRADE_ITEMS } from "constants/Grade/grade.constant";
import { useRecoilState } from "recoil";
import { NightStudyGrade } from "stores/NightStudy/nightstudy.store";
import TableAttribute from "components/common/TableAttribute";
import { NIGHTSTUDY_ALLOW_ITEMS, PROJECT_NIGHTSTUDY_STUDENTS_ITEM } from "constants/LateNight/latenight.constant";
import ErrorBoundary from "components/common/ErrorBoundary";
import NightStudyTodayItem from "./NightStudyTodayItem";
import { changeGrade } from "utils/Member/changeGrade";
import CsvButton from "components/common/ExtractCsvData";
import { useNightStudyStudentList } from "hooks/NightStudy/useNightStudyStudentList";
import dayjs from "dayjs";
import { PointSelectRoom } from "stores/Point/point.store";
import { DodamSegmentedButton } from "@b1nd/dds-web";
import NightStudyProjectItem from "./NightStudyProjectToday";
import { useNightStudyProjectStudentsList } from "hooks/NightStudy/useNightStudyProjectStudentsList";

const NightStudyToday = () => {
  const [studentName, setStudentName] = useState("");
  const [nightStudyGrade, setNightStudyGrade] = useRecoilState(NightStudyGrade);
  const { NightStudyInfo } = useNightStudyStudentList();
  const [room, setRoom] = useRecoilState(PointSelectRoom);
  const [isActive, setIsActive] = useState(true);
  const {NightStudyProjectInfo} = useNightStudyProjectStudentsList();

  return (
    <>
      <S.NightStudyHeaderContainer>
        <DodamSegmentedButton
          width={220}
          num={2}
          type="inline"
          data={[
            { text: "개인", isAtv: isActive },
            { text: "프로젝트", isAtv: !isActive },
          ]}
          onClick={()=>{setIsActive(!isActive)}}
        />
        <div
          style={{
            display: "flex",
          }}
        >
          <S.SearchBarContainer>
            <SearchBar value={studentName} onChange={setStudentName} />
          </S.SearchBarContainer>
          <S.SelectContainer>
            <Select
              items={GRADE_ITEMS}
              value={nightStudyGrade}
              onChange={setNightStudyGrade}
              zIndex={2}
            />
            <Select
              items={["모든 학반", "1반", "2반", "3반", "4반"]}
              value={room || "학반을 선택해주세요"}
              onChange={setRoom}
              zIndex={2}
            />
            <S.CsvButtonContainer>
            {isActive ?
                <CsvButton
                  csvData={NightStudyInfo}
                  fileName={dayjs().format("YYYY-MM-DD") + "심자 중인 학생"}/>
                : 
                <CsvButton
                csvData={NightStudyProjectInfo}
                fileName={dayjs().format("YYYY-MM-DD") + "프로젝트 심자 중인 학생"}/>
            }
            </S.CsvButtonContainer>
          </S.SelectContainer>
        </div>
      </S.NightStudyHeaderContainer>
      <S.InfoText>
        <span>*</span>심자 사유를 눌러 상세보기가 가능합니다.
      </S.InfoText>
      {isActive ? (
      <TableAttribute
        constant={NIGHTSTUDY_ALLOW_ITEMS}
        thStyle={{ width: "14%" }}
      >
        <ErrorBoundary
          text="심자 중인 학생을 불러오지 못했습니다."
          showButton={true}
        >
          <Suspense fallback={<>로딩중...</>}>
            <NightStudyTodayItem
              selectRoom={room}
              studentName={studentName}
              NightStudyGrade={changeGrade(nightStudyGrade)}
            />
          </Suspense>
        </ErrorBoundary>
      </TableAttribute>
      ):(
      <TableAttribute constant={PROJECT_NIGHTSTUDY_STUDENTS_ITEM}>
        <ErrorBoundary text="심자 중인 학생을 불러오지 못했습니다." showButton={true}>
          <Suspense fallback={<>로딩중...</>}>
            <NightStudyProjectItem
            selectRoom={room}
            studentName={studentName}
            NightStudyGrade={changeGrade(nightStudyGrade)}
            />
          </Suspense>
        </ErrorBoundary>
      </TableAttribute>)}
    </>
  );
};

export default NightStudyToday;