import { useEffect, useRef, useState } from "react";
import { useGetAllowedGroupMemberQuery } from "queries/Group/group.query";
import { GroupMemberType } from "repositories/Group/group.repository";

export const useAddMember = (id: number) => {
  const [groupId, setGroupId] = useState<number>(0);
  const { data } = useGetAllowedGroupMemberQuery(groupId);
  const { data: CurrentGroupData } = useGetAllowedGroupMemberQuery(id);
  const [groupMemberList, setGroupMemberList] = useState<GroupMemberType[]>([]);
  const [memberIdList, setMemberIdList] = useState<string[]>([]);
  const searchRef = useRef<HTMLInputElement>(null);
  const searchSubmit = () => {
    console.log("검색어 post");
  };
  
  console.log("dfsasfad", CurrentGroupData?.data)

  const handleClickGroup = (id: number) => {
    setGroupId(id);
  };

  const handleClickAllMember = () => {
    if (groupMemberList.every((group) => group.isAtv)) {
      setMemberIdList((prevId) =>
        prevId.filter(
          (id) => !groupMemberList.some((group) => id === group.id.toString())
        )
      );
    } else {
      setMemberIdList((prevId) => {
        const remainMemberList = groupMemberList
          .filter((group) => !memberIdList.some((id) => id === group.id.toString()))
          .map((group) => group.id.toString());

        return [...prevId, ...remainMemberList];
      });
    }
  };

  const handleClickMember = (memberId: number) => {
    console.log(memberId);
    setGroupMemberList((prev) => {
      const updateList = prev.map((item) => ({
        ...item,
        isAtv: item.id === memberId ? !item.isAtv : item.isAtv,
      }));

      setMemberIdList((prevId) => {
        // isAtv가 true인 멤버만 가져옴
        const activeMembers = updateList
          .filter((item) => item.isAtv)
          .map((item) => item.id.toString());

        // 현재 선택한 memberId가 activeMembers에 없으면 제거
        if (!activeMembers.includes(memberId.toString())) {
          return prevId.filter((id) => id !== memberId.toString());
        }

        // 새로운 멤버 추가 (중복 제거)
        return Array.from(new Set([...prevId, ...activeMembers]));
      });

      return updateList;
    });
  };

  useEffect(() => {
    if (!data || !memberIdList) return;

    setGroupMemberList(() => {
      const GroupData = data.data.filter((group) => !CurrentGroupData?.data.some((currentGroup) => group.id === currentGroup.id))

      return GroupData.map((item) => ({
        ...item,
        isAtv: memberIdList.includes(item.id.toString()),
      }))
  });
  }, [data, memberIdList]);

  return {
    groupMemberList,
    searchRef,
    setMemberIdList,
    searchSubmit,
    handleClickGroup,
    handleClickAllMember,
    handleClickMember,
  };
};
