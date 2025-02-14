import { useGetAllowedGroupMemberQuery } from "queries/Group/group.query";
import { useRef, useState } from "react";

export const useAddMember = () => {
  const [groupId, setGroupId] = useState<number>(0);
  const { data: GroupMemberData } = useGetAllowedGroupMemberQuery(groupId);
  const searchRef = useRef<HTMLInputElement>(null);
  const searchSubmit = () => {
    console.log("검색어 post");
  };

  const handleClickGroup = (id: number) => {
    setGroupId(id);
  };

  return {
    groupId,
    GroupMemberData,
    searchRef,
    searchSubmit,
    handleClickGroup,
  };
};
