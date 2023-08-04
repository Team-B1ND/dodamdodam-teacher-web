export const searchName = (name: string, searchValue: string) => {
  return name.toLowerCase().includes(searchValue.toLowerCase());
};
