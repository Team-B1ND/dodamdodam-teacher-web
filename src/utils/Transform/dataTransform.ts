import { PointValueEnglishType } from "types/Point/point.type";
import { ScheduleTargetGrade } from "types/Schedule/schedule.type";

class DataTransform {
  public scheduleTargetTransform(target: string): string {
    switch (target) {
      case "1학년":
        return "#fca800";
      case "2학년":
        return "#3dbde5";
      case "3학년":
        return "#a252e1";
      case "전교생":
        return "#f97e6d";
      case "기타":
        return "#0067bc";

      default:
        return "#f97e6d";
    }
  }
  public schedulePlaceTransform(place: string) {
    switch (place) {
      case "PROGRAMMING_1":
        return "프로그래밍1실";
      case "PROGRAMMING_2":
        return "프로그래밍2실";
      case "PROGRAMMING_3":
        return "프로그래밍3실";
      case "KOREAN":
        return "국어실";
      case "MATH":
        return "수학실";
      case "SOCIETY":
        return "사회실";
      case "HALL":
        return "강당";
      case "AUDIOVISUAL_ROOM":
        return "시청각실";
      case "NONE":
        return "장소없음";
      case "ETC":
        return "기타";
    }
  }

  public scheduleTargetGradesTransform(grade: ScheduleTargetGrade) {
    switch (grade) {
      case "GRADE_1":
        return "1학년";
      case "GRADE_2":
        return "2학년";
      case "GRADE_3":
        return "3학년";
      case "GRADE_ALL":
        return "전교생";
      case "GRADE_ETC":
        return "기타";
    }
  }

  public pointScoreTypeTransform(scoreType: PointValueEnglishType) {
    switch (scoreType) {
      case "BONUS":
        return {
          name: "상점",
          color: "#0083F0",
        };
      case "MINUS":
        return {
          name: "벌점",
          color: "#EF2B2A",
        };
      case "OFFSET":
        return {
          name: "상쇄점",
          color: "#00C265",
        };
    }
  }
}

const dataTransform = new DataTransform();
export default dataTransform;
