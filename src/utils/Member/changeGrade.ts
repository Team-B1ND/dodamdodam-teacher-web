export const changeGrade = (selectValue: string) => {
  switch (selectValue) {
    case "전체보기" && "모든학년":
      return 0;
    case "1학년":
      return 1;
    case "2학년":
      return 2;
    case "3학년":
      return 3;
    case "선생님":
      return 4;
    default:
      return -1;
  }
};
