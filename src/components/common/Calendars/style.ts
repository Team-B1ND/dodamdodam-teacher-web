import styled from "styled-components";

export const CalendarContainer = styled.div`
  margin-top: 3px;
  padding-left: 10px;

  user-select: none;

  cursor: pointer;

  .Calender {
    background-color: #ffffff;
    color: black;
    border: 0;
    box-shadow: 2px 4px 2px 2px rgba(41, 41, 41, 0.3);

    height: 306px;
    width: 310px;

    position: absolute;
    z-index: 900;

    font-size: 15px;
  }
`;

export const CalendarText = styled.div`
  font-size: 12px;
  color: #0000008a;

  margin-bottom: 6px;
`;

export const Date = styled.div`
  width: 130px;
  border-bottom: 1px solid black;
`;
