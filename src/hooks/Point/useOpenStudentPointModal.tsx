import { useOverlay } from "@toss/use-overlay";
import GivePointStudentModal from "components/Point/PointModal/GivePointStudentModal";
import StudentPointInfoModal from "components/Point/PointModal/StudentPointInfoModal";
import Modal from "components/common/Modal";
import { PointType } from "types/Point/types";

export const useOpenStudentPointInfoModal = () => {
  const StudnetPointInfoOverlay = useOverlay();

  const openStudentPointInfoModalOverlay = (
    modal:
      | {
          type: "studentInfo";
          studentId: number;
          pointType: PointType;
          studentName: string;
        }
      | { type: "modify"; pointReasonId: number }
      | { type: "givePoint"; pointType: PointType }
  ) => {
    return new Promise((resolve) => {
      StudnetPointInfoOverlay.open(({ isOpen, close }) => {
        switch (modal.type) {
          case "modify":
            return (
              <Modal isOpen={isOpen} close={close}>
                <></>
              </Modal>
            );
          case "studentInfo":
            return (
              <Modal isOpen={isOpen} close={close}>
                <StudentPointInfoModal
                  studentName={modal.studentName}
                  pointType={modal.pointType}
                  studentId={modal.studentId}
                  close={close}
                />
              </Modal>
            );
          case "givePoint":
            return (
              <Modal isOpen={isOpen} close={close}>
                <GivePointStudentModal
                  pointQueryParam={modal.pointType}
                  close={close}
                  title="학생 상벌점 부여"
                />
              </Modal>
            );
          default:
            return <></>;
        }
      });
    });
  };

  return {
    openStudentPointInfoModalOverlay,
  };
};
