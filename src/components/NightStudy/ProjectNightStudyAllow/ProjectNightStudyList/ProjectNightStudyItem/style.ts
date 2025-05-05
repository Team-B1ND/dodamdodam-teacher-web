import { NowMonth } from "components/Schedule/ScheduleManage/CalendarView/CalendarViewHeader/style";
import styled, { CSSObject } from "styled-components";

export const WrapProject: CSSObject = {
  width: "100%",
  height: "60px",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  borderTop: "none",
  borderBottom: "1px solid #d9d9d9",
  cursor:"default",
};

export const ProjectExplainWrap = styled.div`
  width: 180px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  cursor: pointer;
`;
