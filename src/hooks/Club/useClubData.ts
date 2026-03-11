import { useGetClubDateQuery, useGetClubDetailQuery, useGetClubJoinRequestsMemberQuery, useGetClubMembersQuery, useGetTimeQuery } from "queries/Club/club.query";

export const useClubList = () => {
  const { data, isLoading, error } = useGetClubDateQuery();
  const clubs = data?.data?.filter((club) => club !== null && club !== undefined) || [];
  return { clubs, isLoading, error };
};

export const useClubDetail = (clubId: number) => {
  const { data: club, isLoading: clubIsLoading } = useGetClubDetailQuery({ id: clubId });
  const { data: members, isLoading: memberIsLoading } = useGetClubMembersQuery({ id: clubId });
  const { data: clubApplyMembers, isLoading: clubApplyMembersIsLoading } = useGetClubJoinRequestsMemberQuery({ id: clubId })
  return { club, members, clubApplyMembers, isLoading: clubIsLoading || memberIsLoading || clubApplyMembersIsLoading };
};

export const useClubTime = () => {
  const { data: timeData, isLoading } = useGetTimeQuery();
  return { timeData, isLoading };
};
