import { useOverlay } from "@toss/use-overlay";
import ScheduleCreateModal from "components/Schedule/Modal";
import Modal from "components/common/Modal";

export const useOpenScheduleModal = () => {
  const ScheduleModalOverlay = useOverlay();

  const openScheduleModalOverlay = () => {
    return new Promise((resolve) => {
      ScheduleModalOverlay.open(({ isOpen, close }) => (
        <Modal isOpen={isOpen} close={close}>
          <ScheduleCreateModal />
        </Modal>
      ));
    });
  };

  return {
    openScheduleModalOverlay,
  };
};
