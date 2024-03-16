import dayjs from "dayjs";
import { useGetSchedulesByPeriodQuery } from "queries/Schedule/query";
import { useCallback, useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { scheduleDateAtom } from "stores/Schedule/store";
import { Schedule } from "types/Schedule/types";
import dataTransform from "utils/Transform/dataTransform";
import dateTransform from "utils/Transform/dateTransform";

const useCalendarSchedule = () => {
  const [schedules, setSchedules] = useState<any[]>([]);
  const date = useRecoilValue(scheduleDateAtom);
  const { data: schedulesData } = useGetSchedulesByPeriodQuery({
    startDate: date,
    endDate: `${date.slice(0, 8)}${dayjs(date).daysInMonth()}`,
  });

  const loadCalendarSchedule = useCallback(() => {
    let newSchedulesData = schedulesData!.data;
    newSchedulesData!.forEach((schedule) =>
      setSchedules((prev) => {
        const newHandleCalendarSchedule = calendarScheduleTransform(schedule);
        return [...prev, newHandleCalendarSchedule];
      })
    );
  }, [schedulesData]);

  const calendarScheduleTransform = (schedule: Schedule) => {
    const scheduleColor = dataTransform.scheduleTargetTransform("1학년"); //todo : api 수정시 변경 필요

    const newHandleSchedule = {
      id: schedule.id,
      title: schedule.name,
      target: schedule.targetGrades,
      attendees: [schedule.targetGrades],
      location: schedule.place || "장소 없음",
      category: "time",
      isReadOnly: true,
      borderColor: scheduleColor,
      backgroundColor: scheduleColor,
      start: schedule.startDate,
      end: schedule.endDate,
      state: null,
    };

    return newHandleSchedule;
  };

  useEffect(() => {
    setSchedules([]);

    if (schedulesData?.data) {
      loadCalendarSchedule();
    }
  }, [schedulesData?.data, loadCalendarSchedule]);

  return { schedules };
};

export default useCalendarSchedule;
