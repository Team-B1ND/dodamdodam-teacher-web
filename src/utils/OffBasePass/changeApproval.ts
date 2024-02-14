export const changeApproval = (selectApproval: string) => {
  switch (selectApproval) {
    case "전체보기":
      return "";
    case "대기중":
      return "PENDING";
    case "거절됨":
      return "DENY";
    case "승인됨":
      return "ALLOWED";
  }
};
