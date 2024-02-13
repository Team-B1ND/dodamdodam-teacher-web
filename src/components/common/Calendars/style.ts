import styled from "styled-components";

export const CalendarContainer = styled.div`
  margin-top: 3px;
  padding-left: 10px;

  user-select: none;

  cursor: pointer;

  .Calender {
    /* border-radius: 15px; */
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

export const CalendarBox = styled.div``;

export const CalendarText = styled.div`
  font-size: 12px;
  color: #0000008a;

  margin-bottom: 6px;
`;

export const Date = styled.div`
  width: 130px;
  border-bottom: 1px solid black;

  &:hover {
    transition: color 0.5s ease-in, border-color 0.1s ease-in;
    /* border-bottom: 2px solid black; */
  }
`;
