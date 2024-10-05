import * as S from "./style";
import { Suspense, useState } from "react";
import ErrorBoundary from "components/common/ErrorBoundary";
import TableAttribute from "components/common/TableAttribute";
import TodayOffBaseItem from "./TodayOffBaseItem";
import { OFFBASE_PASS_ITEMS } from "constants/OffBase/offbase.constant";
import { SearchBar, Select } from "@b1nd/b1nd-dodamdodam-ui";
import { useRecoilState } from "recoil";
import { SelectApprovalAtom, SelectGradeAtom } from "stores/OffBase/offbase.store";
import { changeApproval } from "utils/OffBase/changeApproval";
import { changeGrade } from "utils/Member/changeGrade";
import { GRADE_ITEMS } from "constants/Grade/grade.constant";
import { APPROVAL_ITEMS } from "constants/Approval/approval.constant";
import { CsvButtonContainer } from "components/Bus/BusModal/BusPassenger/style";
import CsvButton from "components/common/ExtractCsvData";
import dayjs from "dayjs";
import useOffBaseLeave from "hooks/OffBase/OffBaseLeave/useOffBaseLeave";
import { PointSelectRoom } from "stores/Point/point.store";
import { useGetTodayLeaveQuery } from "queries/OffBaseLeave/offbaseleave.query";
import { Flex } from "components/common/Flex/Flex";

const TodayOffBase = () => {
  const [studentName, setStudentName] = useState("");
  const [selectGrade, setSelectGrade] = useRecoilState(SelectGradeAtom);
  const [selectApproval, setSelectApproval] = useRecoilState(SelectApprovalAtom);
  const [room, setRoom] = useRecoilState(PointSelectRoom);

  const { leaveStudentList } = useOffBaseLeave();

  const { data: todayOffBaseLeave } = useGetTodayLeaveQuery();

  const allowedStudents =
    todayOffBaseLeave?.data
      .filter((todayOffBaseLeave) => todayOffBaseLeave.status === "ALLOWED")
      .map((todayOffBaseLeave) => todayOffBaseLeave.student.name) || [];

  return (
    <>
      <S.OffBaseHeaderContainer>
        <div style={{ display: "flex", alignItems: "flex-end" }}>
          <SearchBar value={studentName} onChange={setStudentName} />
          <span style={{ marginLeft: 10 }}>
            {allowedStudents.length === 0
              ? "오늘은 외박한 학생이 없습니다."
              : `오늘의 외박자 수 : ${allowedStudents.length}명`}
          </span>
        </div>

        <S.SelectContainer>
          <CsvButtonContainer>
            <CsvButton csvData={leaveStudentList} fileName={dayjs().format("YYYY-MM-DD") + "외박 중인 학생"} />
          </CsvButtonContainer>
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

      <TableAttribute constant={OFFBASE_PASS_ITEMS} thStyle={{ width: "14%" }}>
        <ErrorBoundary fallback={<>오늘의 외박자를 불러오지 못했습니다.</>}>
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

export default TodayOffBase;
