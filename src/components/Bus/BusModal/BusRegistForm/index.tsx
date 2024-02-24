import { useEscCloseModal } from "../../../../hooks/common/useEscCloseModal";
import { Portal } from "../../../common/Portal";
import * as S from "./style";

interface Props {
  isOpen: boolean;
  close: () => void;
}

const BusRegistForm = ({ isOpen, close }: Props) => {
  useEscCloseModal(close);
  return (
    <Portal>
      {isOpen && (
        <S.Container onClick={close}>
          <S.Form onClick={(e) => e.stopPropagation()}></S.Form>
        </S.Container>
      )}
    </Portal>
  );
};

export default BusRegistForm;
