export const changeBanToBool = (banState: string): boolean | null => {
  switch (banState) {
    case "정지":
      return true;
    case "미정지":
      return false;
    default:
      return null;
  }
}