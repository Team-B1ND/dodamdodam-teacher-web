import { SearchBar, Select } from "@b1nd/b1nd-dodamdodam-ui";
import { Suspense, useState } from "react";
import Calendars from "../../common/Calendars";
import * as S from "./style";
import { useRecoilState } from "recoil";
import {
  SelectApprovalAtom,
  SelectGradeAtom,
  StudentNameAtom,
} from "../../../stores/OffBase/offbase.store";
import TableAttribute from "../../common/TableAttribute";
import { OFFBASE_PASS_ITEMS } from "../../../constants/OffBase/offbase.constant";
import ErrorBoundary from "../../common/ErrorBoundary";
import OffBasePassItem from "./OffBasePassItem";

const OffBasePass = () => {
  const [studentName, setStudentName] = useRecoilState<any>(StudentNameAtom);
  const [isOpen, setIsOpen] = useState(false);
  const [uploadDate, setUploadDate] = useState<string>("");

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
            items={["전체보기", "대기중", "거절됨", "승인됨", "복귀 완료"]}
            value={selectApproval}
            onChange={setSelectApproval}
            zIndex={2}
          />
          <Select
            items={["모든학년", "1학년", "2학년", "3학년"]}
            value={selectGrade}
            onChange={setSelectGrade}
            zIndex={2}
          />
        </S.SelectContainer>
      </S.OffBaseHeaderContainer>

      <TableAttribute constant={OFFBASE_PASS_ITEMS} thStyle={{ width: "14%" }}>
        <ErrorBoundary fallback={<>에러:)</>}>
          <Suspense fallback={<>로딩중...</>}>
            <OffBasePassItem
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
