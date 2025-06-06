import * as S from "./style";
import { Suspense, useState } from "react";
import ErrorBoundary from "components/common/ErrorBoundary";
import TableAttribute from "components/common/TableAttribute";
import TodayOffBaseItem from "./TodayOutSleepingItem";
import { OUT_SLEEPING_ITEMS } from "constants/Out/offbase.constant";
import { SearchBar, Select } from "@b1nd/b1nd-dodamdodam-ui";
import { useRecoilState } from "recoil";
import { SelectApprovalAtom, SelectGradeAtom } from "stores/Out/out.store";
import { changeApproval } from "utils/Out/changeApproval";
import { changeGrade } from "utils/Member/changeGrade";
import { GRADE_ITEMS } from "constants/Grade/grade.constant";
import { APPROVAL_ITEMS } from "constants/Approval/approval.constant";
import dayjs from "dayjs";
import useOffBaseLeave from "hooks/Out/OutSleeping/useOutsleeping";
import { PointSelectRoom } from "stores/Point/point.store";
import { useGetTodayOutSleepingQuery } from "queries/OutSleeping/outsleeping.query";
import { offBaseMemberCalc } from "utils/Out/offbaseMemberCalc";

const TodayOutSleeping = () => {
  const [studentName, setStudentName] = useState("");
  const [selectGrade, setSelectGrade] = useRecoilState(SelectGradeAtom);
  const [selectApproval, setSelectApproval] = useRecoilState(SelectApprovalAtom);
  const [room, setRoom] = useRecoilState(PointSelectRoom);

  const { leaveStudentList } = useOffBaseLeave();

  const { data: todayOffBaseLeave } = useGetTodayOutSleepingQuery();

  return (
    <>
      <S.OffBaseHeaderContainer>
        <div style={{ display: "flex", alignItems: "center" }}>
          <SearchBar value={studentName} onChange={setStudentName} />
          <span style={{ marginLeft: 10 }}>
            {offBaseMemberCalc(todayOffBaseLeave?.data!).length === 0
              ? "오늘은 외박한 학생이 없습니다."
              : `오늘의 외박자 수 : ${offBaseMemberCalc(todayOffBaseLeave?.data!).length}명`}
          </span>
        </div>

        <S.SelectContainer>
          <S.CsvButtonContainer>
            {/* <CsvButton csvData={leaveStudentList} fileName={dayjs().format("YYYY-MM-DD") + "외박 중인 학생"} /> */}
          </S.CsvButtonContainer>
          <Select items={APPROVAL_ITEMS} value={selectApproval} onChange={setSelectApproval} zIndex={2} />
          <Select items={GRADE_ITEMS} value={selectGrade} onChange={setSelectGrade} zIndex={2} />
          <Select
            items={["모든 학반", "1반", "2반", "3반", "4반"]}
            value={room || "학반을 선택해주세요"}
            onChange={setRoom}
            zIndex={2}
          />
        </S.SelectContainer>
      </S.OffBaseHeaderContainer>

      <TableAttribute constant={OUT_SLEEPING_ITEMS} thStyle={{ width: "14%" }}>
        <ErrorBoundary text="오늘의 외박자를 불러오지 못했습니다." showButton={true}>
          <Suspense fallback={<>로딩중...</>}>
            <TodayOffBaseItem
              selectRoom={room}
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

export default TodayOutSleeping;
