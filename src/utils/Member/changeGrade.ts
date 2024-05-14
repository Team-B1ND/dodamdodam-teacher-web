export const changeGrade = (selectValue: string) => {
  switch (selectValue) {
    case "모든학년":
    case "전체보기":
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

export const changeRoom = (room: string) => {
  switch (room) {
    case "전체 보기":
    case "모든 학반":
      return 0;
    case "1반":
      return 1;
    case "2반":
      return 2;
    case "3반":
      return 3;
    case "4반":
      return 4;
    default:
      return -1;
  }
};
