import { useOverlay } from "@toss/use-overlay";
import BusRegistForm from "../../components/Bus/BusModal/BusRegistForm";

export const useBus = () => {
  const busFormOverlay = useOverlay();

  const openRegistBusFormOverlay = () => {
    new Promise((resolve) => {
      busFormOverlay.open(({ isOpen, close }) => (
        <BusRegistForm
          isOpen={isOpen}
          close={() => {
            resolve(true);
            close();
          }}
        />
      ));
    });
  };

  return {
    openRegistBusFormOverlay,
  };
};
