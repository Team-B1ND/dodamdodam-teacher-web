import { usePatchApproval } from "../../queries/OffBasePass/offbasepass.query";

const useOffBasePass = () => {
  const patchApprovals = usePatchApproval();

  const handleOffBaseApproval = (outId: number) => {
    patchApprovals.mutate(outId, {
      onSuccess: () => {
        console.log("성공");
      },
      onError: () => {
        console.log("실패");
      },
    });
  };

  return { handleOffBaseApproval };
};

export default useOffBasePass;
