import { useClubMutation } from "queries/Club/club.query";

export const useClubActions = () => {
  const { mutate } = useClubMutation();

  const approveClub = (clubId: number) => {
    mutate({ clubIds: [clubId], status: "ALLOWED" });
  };

  const rejectClub = (clubId: number, reason: string) => {
    mutate({ clubIds: [clubId], status: "REJECTED", reason });
  };

  const bulkApproveClubs = (clubIds: number[]) => {
    mutate({ clubIds, status: "ALLOWED" });
  };

  return { approveClub, rejectClub, bulkApproveClubs };
};
