import { SearchBar, Select } from "@b1nd/b1nd-dodamdodam-ui";
import * as S from "./style";
import { Suspense, useState } from "react";
import Calendars from "../../common/Calendars";
import { useRecoilState } from "recoil";
import {
  SelectApprovalAtom,
  SelectGradeAtom,
  UploadDateAtom,
} from "../../../stores/OffBase/offbase.store";
import TableAttribute from "../../common/TableAttribute";
import ErrorBoundary from "../../common/ErrorBoundary";
import { OFFBASE_PASS_ITEMS } from "../../../constants/OffBase/offbase.constant";
import OffBaseLeaveItem from "./OffBaseLeaveItem";
import { changeApproval } from "../../../utils/OffBase/changeApproval";
import { changeGrade } from "../../../utils/Member/changeGrade";
import { GRADE_ITEMS } from "../../../constants/Grade/grade.constant";
import { APPROVAL_ITEMS } from "../../../constants/Approval/approval.constant";
import { PointSelectRoom } from "stores/Point/point.store";

const OffBaseLeave = () => {
  const [studentName, setStudentName] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [uploadDate, setUploadDate] = useRecoilState<string>(UploadDateAtom);
  const [room, setRoom] = useRecoilState(PointSelectRoom);
  const [selectGrade, setSelectGrade] = useRecoilState(SelectGradeAtom);
  const [selectApproval, setSelectApproval] =
    useRecoilState(SelectApprovalAtom);
  return (
    <>
      <S.OffBaseHeaderContainer>
        <div style={{ display: "flex" }}>
          <SearchBar value={studentName} onChange={setStudentName} />

          <Calendars
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            uploadDate={uploadDate}
            setUploadDate={setUploadDate}
          />
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
          <Select
            items={["모든 학반", "1반", "2반", "3반", "4반"]}
            value={room || "학반을 선택해주세요"}
            onChange={setRoom}
            zIndex={2}
          />
        </S.SelectContainer>
      </S.OffBaseHeaderContainer>
      <TableAttribute constant={OFFBASE_PASS_ITEMS} thStyle={{ width: "14%" }}>
        <ErrorBoundary fallback={<>외박한 학생을 불러오지 못했습니다.</>}>
          <Suspense fallback={<>로딩중...</>}>
            <OffBaseLeaveItem
              selectRoom={room}
              selectApproval={changeApproval(selectApproval)}
              selectGrade={changeGrade(selectGrade)}
              studentName={studentName}
              uploadDate={uploadDate}
            />
          </Suspense>
        </ErrorBoundary>
      </TableAttribute>
    </>
  );
};
export default OffBaseLeave;
