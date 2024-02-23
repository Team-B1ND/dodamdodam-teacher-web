export const truncateText = (value: string, num: number) => {
  return value?.length > num ? value.substr(0, num - 1) + "..." : value;
};
