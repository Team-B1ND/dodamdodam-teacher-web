import { B1ndToast } from "@b1nd/b1nd-toastify";
import { AxiosError } from "axios";
import { useCreateScheduleMutation } from "queries/Schedule/schedule.query";
import { QUERY_KEYS } from "queries/queryKey";
import { ChangeEvent, useState } from "react";
import { useQueryClient } from "react-query";
import convertDateTime from "utils/Time/ConvertDateTime";

const useCreateSchedule = () => {
  const queryClinet = useQueryClient();
  const createScheduleMutation = useCreateScheduleMutation();

  const [place, setPlace] = useState("");
  const [scheduleTargetGrades, setScheduleTargetGrades] = useState<string[]>(
    []
  );
  const [scheduleData, setScheduleData] = useState({
    scheduleName: "",
    startDate: convertDateTime.parseDesiredDateTime(
      new Date(),
      "YYYY-MM-DD HH:mm"
    ),
    endDate: convertDateTime.parseDesiredDateTime(
      new Date(),
      "YYYY-MM-DD HH:mm"
    ),
  });

  const onChangeScheduleData = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setScheduleData((prev) => ({ ...prev, [name]: value }));
  };

  const onChangeScheduleTargetGrades = (grade: string) => {
    if (scheduleTargetGrades.includes(grade)) {
      setScheduleTargetGrades(
        scheduleTargetGrades.filter((item) => item !== grade)
      );
    } else {
      setScheduleTargetGrades((prev) => [...prev, grade]);
    }
  };

  const onSubmitScheduleData = () => {
    const { endDate, scheduleName: name, startDate } = scheduleData;
    createScheduleMutation.mutate(
      {
        endDate,
        name,
        startDate,
        grades: scheduleTargetGrades,
        place,
      },
      {
        onSuccess: () => {
          queryClinet.invalidateQueries(
            QUERY_KEYS.schedule.getSchedulesByPeriod(startDate, endDate)
          );

          B1ndToast.showSuccess("일정이 생성 되었습니다");
        },
        onError: (error) => {
          const errorResponse = (error as AxiosError).response;
          B1ndToast.showError((errorResponse?.data as AxiosError).message);
        },
      }
    );
  };

  return {
    setPlace,
    onChangeScheduleData,
    onSubmitScheduleData,
    onChangeScheduleTargetGrades,
    scheduleData,
    place,
    scheduleTargetGrades,
  };
};

export default useCreateSchedule;
