import "tui-date-picker/dist/tui-date-picker.css";
import "tui-time-picker/dist/tui-time-picker.css";
import "@toast-ui/calendar/dist/toastui-calendar.min.css";
import Calendar from "@toast-ui/react-calendar";
import useHandleSchedule from "hooks/Schedule/useHandleSchedule";
import CalendarViewHeader from "./CalendarViewHeader";
import useCalendarSchedule from "hooks/Schedule/useCalendarSchedule";

const CalendarView = () => {
  const { calendarRef, date, nextMonth, prevMonth, todayMonth } =
    useHandleSchedule();

  const { schedules } = useCalendarSchedule();

  return (
    <>
      <CalendarViewHeader
        date={date}
        nextMonth={nextMonth}
        prevMonth={prevMonth}
        todayMonth={todayMonth}
      />
      <Calendar
        height="73vh"
        ref={calendarRef}
        useDetailPopup
        useFormPopup
        view="month"
        events={schedules}
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
