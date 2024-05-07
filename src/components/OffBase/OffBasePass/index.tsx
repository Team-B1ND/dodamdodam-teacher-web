import { Button, SearchBar, Select } from "@b1nd/b1nd-dodamdodam-ui";
import { Suspense, useState } from "react";
import Calendars from "../../common/Calendars";
import * as S from "./style";
import { useRecoilState } from "recoil";
import {
  SelectApprovalAtom,
  SelectGradeAtom,
  PassSelectIdAtom,
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
import { CsvButtonContainer } from "components/Bus/BusModal/BusPassenger/style";
import CsvButton from "components/common/ExtractCsvData";
import dayjs from "dayjs";
import { PointSelectRoom } from "stores/Point/point.store";

const OffBasePass = () => {
  const [studentName, setStudentName] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [uploadDate, setUploadDate] = useRecoilState<string>(UploadDateAtom);
  const [selectedIds, setSelectedIds] =
    useRecoilState<number[]>(PassSelectIdAtom);

  const [selectGrade, setSelectGrade] = useRecoilState(SelectGradeAtom);
  const [selectApproval, setSelectApproval] =
    useRecoilState(SelectApprovalAtom);
  const [room, setRoom] = useRecoilState(PointSelectRoom);

  const { handleOffBasePass, patchApprovals, patchCancel, offbaseInfo } =
    useOffBasePass();

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

          {selectedIds.length !== 0 && (
            <S.ButtonContainer>
              <Button
                ButtonType="agree"
                style={S.EditStyle}
                onClick={() => {
                  selectedIds.forEach((id) => {
                    handleOffBasePass(id, patchApprovals);
                  });
                }}
              >
                모두 승인
              </Button>
              <Button
                ButtonType="disagree"
                style={S.DelStyle}
                onClick={() => {
                  selectedIds.forEach((id) => {
                    handleOffBasePass(id, patchCancel);
                  });
                }}
              >
                모두 거절
              </Button>
              <Button
                ButtonType="disagree"
                style={S.ClearStyle}
                onClick={() => setSelectedIds([])}
              >
                선택 해제
              </Button>
            </S.ButtonContainer>
          )}
        </div>

        <S.SelectContainer>
          <CsvButtonContainer>
            <CsvButton
              csvData={[
                ...offbaseInfo.data,
                {
                  이름: "인원수",
                  반번호: offbaseInfo.length.toString(),
                  비고: "",
                },
              ]}
              fileName={dayjs().format("YYYY-MM-DD") + "외출 중인 학생"}
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
        <ErrorBoundary fallback={<>외출한 학생을 불러오지 못했습니다.</>}>
          <Suspense fallback={<SkeletonComponent height={60} />}>
            <OffBasePassItem
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

export default OffBasePass;
