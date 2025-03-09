import { useState, useEffect } from "react";

const useClubSelection = (selectedClubIds: number[], setSelectedClubIds: (ids: number[]) => void, clubId: number) => {
  const [isChecked, setIsChecked] = useState<boolean>(selectedClubIds.includes(clubId));

  useEffect(() => {
    setIsChecked(selectedClubIds.includes(clubId));
  }, [selectedClubIds, clubId]);

  const toggleSelection = () => {
    const newCheckedState = !isChecked;
    setIsChecked(newCheckedState);
    setSelectedClubIds(
      newCheckedState ? [...selectedClubIds, clubId] : selectedClubIds.filter((id) => id !== clubId)
    );
  };

  return { isChecked, toggleSelection };
};

export default useClubSelection;
