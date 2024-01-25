import dayjs from "dayjs";

class ConvertTime {
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
}

export default new ConvertTime();
