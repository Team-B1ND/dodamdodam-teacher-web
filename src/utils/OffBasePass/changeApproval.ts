import { B1ndToast } from "@b1nd/b1nd-toastify";

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

// switch (query:any) {
//   case "patchLeaveApproval":
//     B1ndToast.showSuccess("외박 승인 성공");
//     break;
//   case "patchLeaveCancel":
//     B1ndToast.showSuccess("외박 거절 성공");
//     break;
//   case "patchLeaveApprovalCancel":
//     B1ndToast.showSuccess("외박 승인 취소 성공");
//     break;
//   default:
//     // 처리할 쿼리가 없을 때의 기본 동작
//     break;
// }
