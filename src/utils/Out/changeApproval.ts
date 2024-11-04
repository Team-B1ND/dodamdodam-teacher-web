export const changeApproval = (selectApproval: string) => {
  switch (selectApproval) {
    case "승인여부":
      return "";
    case "대기중":
      return "PENDING";
    case "거절됨":
      return "DENIED";
    case "승인됨":
      return "ALLOWED";
  }
};
