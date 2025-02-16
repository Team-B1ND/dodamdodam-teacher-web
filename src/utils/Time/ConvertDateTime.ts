import dayjs from "dayjs";
import "dayjs/locale/ko";

dayjs.locale("ko");

class ConvertDateTime {
  public getDateTime = (date: Date, dateType: "date" | "time" | "both") => {
    if (dateType === "date") {
      return dayjs(date).format("YYYY년 MM월 DD일");
    }
    if (dateType === "time") {
      return dayjs(date).format("HH시 mm분");
    }
    if (dateType === "both") {
      return dayjs(date).format("YYYY년 MM월 DD일 HH시 mm분");
    }
  };

  public getTimeRequired = (date: string) => {
    const hours = Number(date.split(":")[0]);
    const minutes = Number(date.split(":")[1]);

    let time = "";

    if (hours > 0) {
      time += `${hours}시간`;
    }
    if (minutes > 0) {
      time += ` ${minutes}분`;
    }

    return time;
  };

  public parseDesiredDateTime = (time: string | Date, format: string) => {
    return dayjs(time).format(format);
  };

  public splitConvertDateFormat = (selectedDate: string) => {
    const [year, month, day] = selectedDate.split("-").map(Number);
    return { year, month, day };
  };
  
  public getDayOfWeek = (date: Date | string) => {
    return dayjs(date).format("M월 D일 dddd");
  };
}

const convertDateTime = new ConvertDateTime();
export default convertDateTime;
