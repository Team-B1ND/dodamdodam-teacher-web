import * as S from "./style";
import { Button, TBody, TD } from "@b1nd/b1nd-dodamdodam-ui";
import profileImg from "assets/profileImg.svg";
import useOffBaseLeave from "hooks/OffBase/OffBaseLeave/useOffBaseLeave";
import convertDateTime from "utils/Time/ConvertDateTime";
import { useGetOffBaseLeaveQuery } from "queries/OffBaseLeave/offbaseleave.query";
import { offBaseLeaveDataFilter } from "utils/OffBase/offbaseLeaveDataFilter";
import { useRecoilState } from "recoil";
import { LeaveSelectIdAtom } from "stores/OffBase/offbase.store";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import dayjs from "dayjs";
import { truncateText } from "utils/common/truncate";
import { OutListType } from "types/OffBasePass/offbasepass.type";
import OffBaseModal from "../OffBaseLeaveModal";

interface OffBaseLeaveProps {
  studentName: string;
  uploadDate: string;
  setUploadData: Dispatch<SetStateAction<string>>;
  selectGrade: number;
  selectApproval: string | undefined;
  selectRoom: string;
}

const OffBaseLeaveItem = ({
  selectApproval,
  selectGrade,
  studentName,
  uploadDate,
  selectRoom,
  setUploadData,
}: OffBaseLeaveProps) => {
  const { data: offBaseLeave } = useGetOffBaseLeaveQuery(uploadDate, {
    suspense: true,
  });
  const [leaveSelectedIds, setLeaveSelectedIds] = useRecoilState<number[]>(LeaveSelectIdAtom);
  const { handleOffBaseLeave, patchLeaveApproval, patchLeaveApprovalCancel, patchLeaveCancel } = useOffBaseLeave();
  const [isOPen, setIsOpen] = useState<boolean>(false);
  const [leaveData, setLeaveData] = useState<OutListType>();

  const handleModalClick = () => {
    setIsOpen((prev) => !prev);
  };

  useEffect(() => {
    setUploadData(dayjs().format("YYYY-MM-DD"));
  }, [setUploadData]);

  const selectComponent = (Id: number) => {
    const component = offBaseLeaveDataFilter(offBaseLeave, studentName, selectGrade, selectApproval, selectRoom)?.find(
      (key) => key.id === Id,
    )?.status;

    if (component === "ALLOWED") {
      return (
        <div>
          <Button
            ButtonType="disagree"
            style={S.DelStyle}
            onClick={() => handleOffBaseLeave(Id, patchLeaveApprovalCancel)}
          >
            승인 취소
          </Button>
        </div>
      );
    } else if (component === "PENDING") {
      return (
        <>
          <Button ButtonType="agree" style={S.EditStyle} onClick={() => handleOffBaseLeave(Id, patchLeaveApproval)}>
            승인
          </Button>
          <Button ButtonType="disagree" style={S.DelStyle} onClick={() => handleOffBaseLeave(Id, patchLeaveCancel)}>
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
      {!offBaseLeaveDataFilter ||
      offBaseLeaveDataFilter(offBaseLeave, studentName, selectGrade, selectApproval, selectRoom)?.length === 0 ? (
        <S.NoneTile>현재 외박 신청한 학생이 없습니다.</S.NoneTile>
      ) : (
        <>
          <TBody customStyle={S.OffBaseTBody}>
            {offBaseLeaveDataFilter(offBaseLeave, studentName, selectGrade, selectApproval, selectRoom)?.map(
              (offbaseleave, key) => (
                <S.OffBaseTR
                  onClick={() => {
                    if (offbaseleave.status === "PENDING") {
                      if (leaveSelectedIds.includes(offbaseleave.id)) {
                        setLeaveSelectedIds((prevIds) => prevIds.filter((id) => id !== offbaseleave.id));
                      } else {
                        setLeaveSelectedIds([...leaveSelectedIds, offbaseleave.id]);
                      }
                    }
                  }}
                  key={key}
                  style={{
                    backgroundColor: leaveSelectedIds.includes(offbaseleave.id) ? "#EEF3F9" : "",
                  }}
                >
                  <TD customStyle={S.OffBaseTD}>
                    <S.MemberImage src={profileImg} />
                  </TD>
                  <TD customStyle={S.OffBaseTD}>{offbaseleave.student.name}</TD>
                  <TD customStyle={S.OffBaseTD}>
                    {offbaseleave.student.grade}학년
                    {offbaseleave.student.room}반{offbaseleave.student.number}번
                  </TD>
                  <TD customStyle={S.OffBaseTD}>
                    <S.DateContainer>
                      <div>{convertDateTime.getDateTime(new Date(offbaseleave.startAt), "date")}</div>
                      <div>{convertDateTime.getDateTime(new Date(offbaseleave.startAt), "time")}</div>
                    </S.DateContainer>
                  </TD>
                  <TD customStyle={S.OffBaseTD}>
                    <S.DateContainer>
                      <div>{convertDateTime.getDateTime(new Date(offbaseleave.endAt), "date")}</div>
                      <div>{convertDateTime.getDateTime(new Date(offbaseleave.endAt), "time")}</div>
                    </S.DateContainer>
                  </TD>
                  <TD customStyle={S.OffBaseTD}>
                    <S.Reason>
                      <div onClick={() => {
                        handleModalClick();
                        setLeaveData(offbaseleave);
                      }}>{truncateText(offbaseleave.reason, 7)}</div>
                    </S.Reason>
                  </TD>
                  <TD customStyle={S.ButtonContainerStyle}>{selectComponent(offbaseleave.id)}</TD>
                </S.OffBaseTR>
              ),
            )}
          </TBody>
          <OffBaseModal isOpen={isOPen} data={leaveData} handleModalClick={handleModalClick} />
        </>
      )}
    </>
  );
};

export default OffBaseLeaveItem;
