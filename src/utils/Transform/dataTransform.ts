import { ScheduleTargetGrade } from "types/Schedule/types";

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
}

export default new DataTransform();
