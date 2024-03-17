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
}

export default new DataTransform();
