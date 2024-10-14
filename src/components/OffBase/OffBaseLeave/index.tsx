import { Button, SearchBar, Select } from "@b1nd/b1nd-dodamdodam-ui";
import * as S from "./style";
import { Suspense, useEffect, useState } from "react";
import Calendars from "components/common/Calendars";
import { useRecoilState } from "recoil";
import { LeaveSelectIdAtom, SelectApprovalAtom, SelectGradeAtom, UploadDateAtom } from "stores/OffBase/offbase.store";
import TableAttribute from "components/common/TableAttribute";
import ErrorBoundary from "components/common/ErrorBoundary";
import { OFFBASE_LEAVE_ITEMS } from "constants/OffBase/offbase.constant";
import OffBaseLeaveItem from "./OffBaseLeaveItem";
import { changeApproval } from "utils/OffBase/changeApproval";
import { changeGrade } from "utils/Member/changeGrade";
import { GRADE_ITEMS } from "constants/Grade/grade.constant";
import { APPROVAL_ITEMS } from "constants/Approval/approval.constant";
import { PointSelectRoom } from "stores/Point/point.store";
import useOffBaseLeave from "hooks/OffBase/OffBaseLeave/useOffBaseLeave";
import { useGetOffBaseLeaveQuery } from "queries/OffBaseLeave/offbaseleave.query";
import { Flex } from "components/common/Flex/Flex";
import { offBaseMemberCalc } from "utils/OffBase/offbaseMemberCalc";

const OffBaseLeave = () => {
  const [studentName, setStudentName] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [uploadDate, setUploadDate] = useRecoilState<string>(UploadDateAtom);
  const [room, setRoom] = useRecoilState(PointSelectRoom);
  const [selectGrade, setSelectGrade] = useRecoilState(SelectGradeAtom);
  const [selectApproval, setSelectApproval] = useRecoilState(SelectApprovalAtom);
  const [leaveSelectedIds, setLeaveSelectedIds] = useRecoilState<number[]>(LeaveSelectIdAtom);
  const { handleOffBaseLeave, patchLeaveApproval, patchLeaveApprovalCancel } = useOffBaseLeave();

  const { data: offBaseLeave } = useGetOffBaseLeaveQuery(uploadDate);

  return (
    <>
      <S.OffBaseHeaderContainer>
        <div style={{ display: "flex" }}>
          <div>
            <SearchBar value={studentName} onChange={setStudentName} />
          </div>
          <Flex customStyle={{ alignItems: "center", marginLeft: 10 }}>
            <span>
              {offBaseMemberCalc(offBaseLeave?.data!).length === 0
                ? "현재 외박한 학생이 존재하지 않습니다."
                : `현재 외박자 수 : ${offBaseMemberCalc(offBaseLeave?.data!).length}명`}
            </span>
          </Flex>
          {leaveSelectedIds.length !== 0 && (
            <S.ButtonContainer>
              <Button
                ButtonType="agree"
                style={S.EditStyle}
                onClick={() => {
                  leaveSelectedIds.forEach((id) => {
                    handleOffBaseLeave(id, patchLeaveApproval);
                  });
                }}
              >
                모두 승인
              </Button>
              <Button
                ButtonType="disagree"
                style={S.DelStyle}
                onClick={() => {
                  leaveSelectedIds.forEach((id) => {
                    handleOffBaseLeave(id, patchLeaveApprovalCancel);
                  });
                }}
              >
                모두 거절
              </Button>
              <Button ButtonType="disagree" style={S.ClearStyle} onClick={() => setLeaveSelectedIds([])}>
                선택 해제
              </Button>
            </S.ButtonContainer>
          )}
        </div>

        <S.SelectContainer>
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
      <TableAttribute constant={OFFBASE_LEAVE_ITEMS} thStyle={{ width: "14%" }}>
        <ErrorBoundary fallback={<>외박한 학생을 불러오지 못했습니다.</>}>
          <Suspense fallback={<>로딩중...</>}>
            <OffBaseLeaveItem
              selectRoom={room}
              selectApproval={changeApproval(selectApproval)}
              selectGrade={changeGrade(selectGrade)}
              studentName={studentName}
              uploadDate={uploadDate}
              setUploadData={setUploadDate}
            />
          </Suspense>
        </ErrorBoundary>
      </TableAttribute>
    </>
  );
};
export default OffBaseLeave;
