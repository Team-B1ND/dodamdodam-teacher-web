export const changeMealDemand = (selectMealDemand: string): number => {
  switch (selectMealDemand) {
    case "석식희망여부":
      return 0;
    case "석식 희망":
      return 1;
    case "석식 비희망":
      return 2;
    default:
      return -1;
  }
};
