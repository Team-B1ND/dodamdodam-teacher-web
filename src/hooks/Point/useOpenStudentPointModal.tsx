import { useOverlay } from "@toss/use-overlay";
import StudentPointInfoModal from "components/Point/Modal/StudentPointInfoModal";
import Modal from "components/common/Modal";

export const useOpenStudentPointInfoModal = () => {
  const StudnetPointInfoOverlay = useOverlay();

  const openStudentPointInfoModalOverlay = (
    modal:
      | { type: "studentInfo"; studentId: number }
      | { type: "modify"; pointReasonId: number }
  ) => {
    return new Promise((resolve) => {
      StudnetPointInfoOverlay.open(({ isOpen, close }) =>
        modal.type === "modify" ? (
          <Modal title="학생 상벌점 정보" isOpen={isOpen} close={close}>
            <StudentPointInfoModal close={close} />
          </Modal>
        ) : (
          <div>학생 상벌점 정보 모달</div>
        )
      );
    });
  };

  return {
    openStudentPointInfoModalOverlay,
  };
};
