import ToastUIReactCalendar from "@toast-ui/react-calendar/*";
import React, { createRef, useState } from "react";

const useCreateSchedule = () => {
  const handleClickSchedule = () => {
    const calendarRef = createRef<ToastUIReactCalendar>();

    const calendar = calendarRef!.current!.getInstance();

    const schedule = {
      id: "1",
      calendarId: "1",
      title: "샘플 일정",
      category: "time",
      dueDateClass: "",
      start: "2024-02-26T09:00:00+09:00",
      end: "2024-02-26T10:00:00+09:00",
    };
  };
  return {};
};

export default useCreateSchedule;
