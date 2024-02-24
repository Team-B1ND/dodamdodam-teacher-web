import { Portal } from "../Portal";
import { CommonComponentProps } from "../common.type";
import * as S from "./style";

export interface ModalProps extends CommonComponentProps {
  isOpen: boolean;
  onClose?: () => void;
}

const Modal = ({ isOpen, onClose, children, customStyle }: ModalProps) => {
  return (
    <>
      {isOpen && (
        <Portal>
          <S.ModalContainer onClick={onClose} style={customStyle}>
            {children}
          </S.ModalContainer>
        </Portal>
      )}
    </>
  );
};

export default Modal;
