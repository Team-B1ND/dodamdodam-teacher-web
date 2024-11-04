import * as S from "./style";
import { useGetOffBasePassQuery } from "queries/OffBasePass/offbasepass.query";
import { Button, TBody, TD } from "@b1nd/b1nd-dodamdodam-ui";
import profileImg from "assets/profileImg.svg";
import useOffBasePass from "hooks/OffBase/OffBasePass/useOffBasePass";
import { useRecoilState } from "recoil";
import { PassSelectIdAtom } from "stores/OffBase/offbase.store";
import convertDateTime from "utils/Time/ConvertDateTime";
import { offBaseDataFilter } from "utils/OffBase/offBasePassDataFilter";
import { truncateText } from "utils/common/truncate";
import OffBaseModal from "components/Out/OutSleeping/OutSleepingModal";
import { useState } from "react";
import { OutListType } from "types/OffBasePass/offbasepass.type";

interface OffBasePassProps {
  studentName: string;
  uploadDate: string;
  selectGrade: number;
  selectApproval: string | undefined;
  selectMealDemand: number;
  selectRoom: string;
}

const OutGoingItem = ({
  studentName,
  uploadDate,
  selectGrade,
  selectApproval,
  selectMealDemand,
  selectRoom,
}: OffBasePassProps) => {
  const { data: offBasePass } = useGetOffBasePassQuery(uploadDate, {
    suspense: true,
  });

  const [selectedIds, setSelectedIds] = useRecoilState<number[]>(PassSelectIdAtom);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [passData, setPassData] = useState<OutListType>();

  const handleModalClick = () => {
    setIsOpen((prev) => !prev);
  };

  const { handleOffBasePass, patchApprovalCancel, patchApprovals, patchCancel } = useOffBasePass();

  const selectComponent = (Id: number) => {
    const component = offBaseDataFilter(
      offBasePass,
      studentName,
      selectGrade,
      selectApproval,
      selectMealDemand,
      selectRoom,
    )?.find((key) => key.id === Id)?.status;

    if (component === "ALLOWED") {
      return (
        <div>
          <Button
            ButtonType="disagree"
            style={S.DelStyle}
            onClick={() => {
              handleOffBasePass(Id, patchApprovalCancel);
              setSelectedIds([...selectedIds, Id]);
            }}
          >
            승인 취소
          </Button>
        </div>
      );
    } else if (component === "PENDING") {
      return (
        <>
          <Button
            ButtonType="agree"
            style={S.EditStyle}
            onClick={() => {
              handleOffBasePass(Id, patchApprovals);
            }}
          >
            승인
          </Button>
          <Button ButtonType="disagree" style={S.DelStyle} onClick={() => handleOffBasePass(Id, patchCancel)}>
            거절
          </Button>
        </>
      );
    } else if (component === "REJECTED") {
      return (
        <Button ButtonType="disagree" style={S.ClearStyle}>
          거절됨
        </Button>
      );
    }
  };

  return (
    <>
      {!offBaseDataFilter ||
      offBaseDataFilter(offBasePass, studentName, selectGrade, selectApproval, selectMealDemand, selectRoom)?.length ===
        0 ? (
        <S.NoneTile>현재 외출 신청한 학생이 없습니다.</S.NoneTile>
      ) : (
        <>
          <div>
            {offBaseDataFilter(
              offBasePass,
              studentName,
              selectGrade,
              selectApproval,
              selectMealDemand,
              selectRoom,
            )?.map((offbasepass) => (
              <TBody customStyle={S.OffBaseTBody}>
                <S.OffBaseTR
                  onClick={() => {
                    if (offbasepass.status === "PENDING") {
                      if (selectedIds.includes(offbasepass.id)) {
                        setSelectedIds((prevIds) => prevIds.filter((id) => id !== offbasepass.id));
                      } else {
                        setSelectedIds([...selectedIds, offbasepass.id]);
                      }
                    }
                  }}
                  style={{
                    backgroundColor: selectedIds.includes(offbasepass.id) ? "#EEF3F9" : "",
                  }}
                >
                  <TD customStyle={S.OffBaseProfileImg}>
                    <S.MemberImage src={profileImg} />
                  </TD>
                  <TD customStyle={S.OffBaseTD}>{offbasepass.student.name}</TD>
                  <TD customStyle={S.OffBaseTD}>
                    {offbasepass.student.grade}학년
                    {offbasepass.student.room}반{offbasepass.student.number}번
                  </TD>
                  <TD customStyle={S.OffBaseTD}>
                    <S.DateContainer style={{ width: "80%" }}>
                      <div>{convertDateTime.getDateTime(new Date(offbasepass.startAt), "date")}</div>
                      <div>{convertDateTime.getDateTime(new Date(offbasepass.startAt), "time")}</div>
                    </S.DateContainer>
                  </TD>
                  <TD customStyle={S.OffBaseTD}>
                    <S.DateContainer style={{ width: "80%" }}>
                      <div>{convertDateTime.getDateTime(new Date(offbasepass.endAt), "date")}</div>
                      <div>{convertDateTime.getDateTime(new Date(offbasepass.endAt), "time")}</div>
                    </S.DateContainer>
                  </TD>
                  <TD customStyle={S.OffBaseTD}>
                    <div
                      onClick={() => {
                        handleModalClick();
                        setPassData(offbasepass);
                      }}
                    >
                      {truncateText(offbasepass.reason, 7)}
                    </div>
                  </TD>
                  <TD
                    customStyle={{
                      width: "14%",
                      fontSize: "16px",
                      lineHeight: "20px",
                      userSelect: "none",
                      marginRight: "-3%",
                    }}
                  >
                    {offbasepass.dinnerOrNot ? "O" : "X"}
                  </TD>
                  <TD customStyle={S.ButtonContainerStyle}>{selectComponent(offbasepass.id)}</TD>
                </S.OffBaseTR>
              </TBody>
            ))}
          </div>
          <OffBaseModal isOpen={isOpen} data={passData} handleModalClick={handleModalClick} where="PASS" />
        </>
      )}
    </>
  );
};

export default OutGoingItem;
