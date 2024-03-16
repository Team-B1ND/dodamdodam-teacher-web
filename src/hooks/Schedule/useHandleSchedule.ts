import ToastUIReactCalendar from "@toast-ui/react-calendar/*";
import dayjs from "dayjs";
import { createRef, useCallback } from "react";
import { useRecoilState } from "recoil";
import { scheduleDateAtom } from "stores/Schedule/store";

const useHandleSchedule = () => {
  const calendarRef = createRef<ToastUIReactCalendar>();

  const [date, setDate] = useRecoilState(scheduleDateAtom);

  const nextMonth = useCallback(() => {
    const calendarInstance = calendarRef!.current!.getInstance();
    calendarInstance?.next();

    setDate((prev) => {
      const nextMonth = dayjs(prev).add(1, "month").format("YYYY-MM-DD");

      return nextMonth;
    });
  }, [calendarRef, setDate]);

  const prevMonth = useCallback(() => {
    const calendarInstance = calendarRef!.current!.getInstance();
    calendarInstance?.prev();

    setDate((prev) => {
      const prevMonth = dayjs(prev).subtract(1, "month").format("YYYY-MM-DD");

      return prevMonth;
    });
  }, [calendarRef, setDate]);

  const todayMonth = useCallback(() => {
    const calendarInstance = calendarRef!.current!.getInstance();
    calendarInstance?.today();

    const today = `${dayjs().format("YYYY-MM-DD").slice(0, 8)}01`;

    setDate(today);
  }, [calendarRef, setDate]);

  return { calendarRef, nextMonth, prevMonth, todayMonth, date };
};

export default useHandleSchedule;
