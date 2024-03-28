import { useOverlay } from "@toss/use-overlay";
import StudentPointInfoModal from "components/Point/Modal/StudentPointInfoModal";
import Modal from "components/common/Modal";
import { PointType } from "types/Point/types";

export const useOpenStudentPointInfoModal = () => {
  const StudnetPointInfoOverlay = useOverlay();

  const openStudentPointInfoModalOverlay = (
    modal:
      | { type: "studentInfo"; studentId: number; pointType: PointType }
      | { type: "modify"; pointReasonId: number }
  ) => {
    return new Promise((resolve) => {
      StudnetPointInfoOverlay.open(({ isOpen, close }) =>
        modal.type === "modify" ? (
          <Modal title="학생 상벌점 정보" isOpen={isOpen} close={close}>
            <></>
          </Modal>
        ) : (
          <Modal title="학생 상벌점 정보" isOpen={isOpen} close={close}>
            <StudentPointInfoModal
              pointType={modal.pointType}
              studentId={modal.studentId}
              close={close}
            />
          </Modal>
        )
      );
    });
  };

  return {
    openStudentPointInfoModalOverlay,
  };
};
