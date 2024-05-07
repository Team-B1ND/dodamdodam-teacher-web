import { SectionHeader } from "@b1nd/b1nd-dodamdodam-ui";
import { BsTable } from "react-icons/bs";
import { FcCalendar } from "react-icons/fc";
import styled from "styled-components";
import { Dispatch, SetStateAction } from "react";
import { viewingType } from "..";

interface Props {
  viewingPoint: viewingType;
  setViewingPoint: Dispatch<SetStateAction<viewingType>>;
}

const ScheduleManageHeader = ({ viewingPoint, setViewingPoint }: Props) => {
  return (
    <>
      <SectionHeader
        title="학사일정 관리"
        subTitle="학사 일정을 관리 할 수 있습니다."
      >
        {viewingPoint === "calendar" ? (
          <ChangeViewBox onClick={() => setViewingPoint("table")}>
            <BsTable />
            테이블로 보기
          </ChangeViewBox>
        ) : (
          <ChangeViewBox onClick={() => setViewingPoint("calendar")}>
            <FcCalendar />
            캘린더로 보기
          </ChangeViewBox>
        )}
      </SectionHeader>
    </>
  );
};

export default ScheduleManageHeader;

const ChangeViewBox = styled.div`
  cursor: pointer;

  width: 150px;
  height: 35px;

  display: flex;
  justify-content: center;
  align-items: center;

  gap: 10px;

  background-color: #ebeae8;
  margin-left: 10px;

  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
`;
