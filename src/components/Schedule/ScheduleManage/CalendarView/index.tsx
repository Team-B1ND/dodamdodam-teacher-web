import { Button } from "@b1nd/b1nd-dodamdodam-ui";
import * as S from "./style";
import { RiArrowLeftSLine } from "react-icons/ri";
import { RiArrowRightSLine } from "react-icons/ri";
import { HOME_SCHEDULE_HEADER_COLORSET_LIST } from "../constant";
import ColorSetItem from "./ColorSetItem";
import { createRef } from "react";
import "tui-date-picker/dist/tui-date-picker.css";
import "tui-time-picker/dist/tui-time-picker.css";
import "@toast-ui/calendar/dist/toastui-calendar.min.css";
import Calendar from "@toast-ui/react-calendar";
import ToastUIReactCalendar from "@toast-ui/react-calendar";

const CalendarView = () => {
  const calendarRef = createRef<ToastUIReactCalendar>();
  const onClick = () => {
    console.log("gd");
  };
  return (
    <>
      <S.TopWrap>
        <S.TopLeftWrap>
          <S.ArrowButton>
            <RiArrowLeftSLine />
          </S.ArrowButton>
          <S.NowMonth>2024-01</S.NowMonth>
          <S.ArrowButton>
            <RiArrowRightSLine />
          </S.ArrowButton>
          <Button ButtonType="agree">학사일정</Button>
          <Button ButtonType="cancel">휴일</Button>
        </S.TopLeftWrap>
        <S.ColorSetWrap>
          {HOME_SCHEDULE_HEADER_COLORSET_LIST.map((colorSet) => (
            <ColorSetItem {...colorSet} key={colorSet.backgroundColor} />
          ))}
        </S.ColorSetWrap>
      </S.TopWrap>
      <Calendar
        height="73vh"
        ref={calendarRef}
        useFormPopup
        useDetailPopup
        view="month"
        onClick={onClick}
        month={{
          dayNames: [
            "일요일",
            "월요일",
            "화요일",
            "수요일",
            "목요일",
            "금요일",
            "토요일",
          ],
        }}
      />
    </>
  );
};

export default CalendarView;
