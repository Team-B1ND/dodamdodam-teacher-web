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
import { CsvButtonContainer } from "components/Bus/BusModal/BusPassenger/style";
import CsvButton from "components/common/ExtractCsvData";
import dayjs from "dayjs";
import useOffBaseLeave from "hooks/OffBase/OffBaseLeave/useOffBaseLeave";
import { PointSelectRoom } from "stores/Point/point.store";

const TodayOffBase = () => {
  const [studentName, setStudentName] = useState("");
  const [selectGrade, setSelectGrade] = useRecoilState(SelectGradeAtom);
  const [selectApproval, setSelectApproval] =
    useRecoilState(SelectApprovalAtom);
  const [room, setRoom] = useRecoilState(PointSelectRoom);

  const { leaveStudentList } = useOffBaseLeave();
  return (
    <>
      <S.OffBaseHeaderContainer>
        <div>
          <SearchBar value={studentName} onChange={setStudentName} />
        </div>

        <S.SelectContainer>
          <CsvButtonContainer>
            <CsvButton
              csvData={leaveStudentList}
              fileName={dayjs().format("YYYY-MM-DD") + "외박 중인 학생"}
            />
          </CsvButtonContainer>
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
