import Calendar from "react-calendar";
import moment from "moment";
import * as S from "./style";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import "react-calendar/dist/Calendar.css";

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

interface CalendarProps {
  uploadDate: string;
  setUploadDate: Dispatch<SetStateAction<string>>;
  setIsOpen: (isOpen: boolean) => void;
  isOpen: boolean;
}

const Calendars = ({
  uploadDate,
  setUploadDate,
  setIsOpen,
  isOpen,
}: CalendarProps) => {
  const [date, setDateChange] = useState<Value>(new Date());

  const handleDateChange = (newValue: Value) => {
    if (newValue instanceof Date) {
      const formattedDate = new Date(
        newValue.getTime() - newValue.getTimezoneOffset() * 60000
      )
        .toISOString()
        .split("T")[0];

      setUploadDate(formattedDate);
      setDateChange(newValue);
      setIsOpen(!isOpen);
    }
  };

  return (
    <S.CalendarContainer>
      <S.CalendarBox onClick={() => setIsOpen(!isOpen)}>
        <S.CalendarText>조회할 날짜를 선택해주세요</S.CalendarText>
        <S.Date>
          {uploadDate ? uploadDate : moment().format("YYYY-MM-DD")}
        </S.Date>
      </S.CalendarBox>

      {isOpen && (
        <Calendar
          value={date}
          onChange={handleDateChange}
          className="Calender"
          formatDay={(locale, date) => moment(date).format("DD")}
          minDetail="month"
          maxDetail="month"
          showNeighboringMonth={false}
        />
      )}
    </S.CalendarContainer>
  );
};

export default Calendars;
