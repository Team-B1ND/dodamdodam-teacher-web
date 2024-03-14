import { Button, SearchBar, Select } from "@b1nd/b1nd-dodamdodam-ui";
import { Suspense, useState } from "react";
import Calendars from "../../common/Calendars";
import * as S from "./style";
import { useRecoilState } from "recoil";
import {
  SelectApprovalAtom,
  SelectGradeAtom,
  SelectIdAtom,
  UploadDateAtom,
} from "../../../stores/OffBase/offbase.store";
import TableAttribute from "../../common/TableAttribute";
import { OFFBASE_PASS_ITEMS } from "../../../constants/OffBase/offbase.constant";
import ErrorBoundary from "../../common/ErrorBoundary";
import OffBasePassItem from "./OffBasePassItem";
import { changeGrade } from "../../../utils/Member/changeGrade";
import { changeApproval } from "../../../utils/OffBase/changeApproval";
import useOffBasePass from "../../../hooks/OffBase/OffBasePass/useOffBasePass";
import { GRADE_ITEMS } from "../../../constants/Grade/grade.constant";
import { APPROVAL_ITEMS } from "../../../constants/Approval/approval.constant";
import SkeletonComponent from "components/common/Skeleton";

const OffBasePass = () => {
  const [studentName, setStudentName] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [uploadDate, setUploadDate] = useRecoilState<string>(UploadDateAtom);
  const [selectedIds, setSelectedIds] = useRecoilState<number>(SelectIdAtom);

  const [selectGrade, setSelectGrade] = useRecoilState(SelectGradeAtom);
  const [selectApproval, setSelectApproval] =
    useRecoilState(SelectApprovalAtom);

  const { handleOffBasePass, patchApprovals, patchCancel } = useOffBasePass();

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
          {selectedIds !== 0 && (
            <S.ButtonContainer>
              <Button
                ButtonType="agree"
                style={S.EditStyle}
                onClick={() => handleOffBasePass(selectedIds, patchApprovals)}
              >
                모두 승인
              </Button>
              <Button
                ButtonType="disagree"
                style={S.DelStyle}
                onClick={() => handleOffBasePass(selectedIds, patchCancel)}
              >
                모두 거절
              </Button>
              <Button
                ButtonType="disagree"
                style={S.ClearStyle}
                onClick={() => setSelectedIds(0)}
              >
                선택 해제
              </Button>
            </S.ButtonContainer>
          )}
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
        </S.SelectContainer>
      </S.OffBaseHeaderContainer>

      <TableAttribute constant={OFFBASE_PASS_ITEMS} thStyle={{ width: "14%" }}>
        <ErrorBoundary fallback={<>외출한 학생을 불러오지 못했습니다.</>}>
          <Suspense fallback={<SkeletonComponent height={60} />}>
            <OffBasePassItem
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

export default OffBasePass;
