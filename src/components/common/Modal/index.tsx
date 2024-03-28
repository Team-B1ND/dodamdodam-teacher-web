import { ModalProps } from "./types";
import { Portal } from "../Portal";
import { Background } from "./style";

const Modal = ({
  width,
  height,
  zIndex,
  isOpen,
  close,
  children,
  customStyle,
}: ModalProps) => {
  return (
    <Portal>
      {isOpen && (
        <>
          <Background onClick={close} customStyle={customStyle}>
            {children}
          </Background>
        </>
      )}
    </Portal>
  );
};

export default Modal;
