import useEscCloseModal from "hooks/common/useEscCloseModal";
import useLockScroll from "hooks/common/useLockScroll";
import { Portal } from "components/common/Portal";
import BusRegisterForm from "./BusRegisterForm";
import schoolBus from "assets/icons/Bus/schoolBus.svg";
import * as S from "../style";
import styled from "styled-components";

interface Props {
  busId: number;
  isOpen: boolean;
  close: () => void;
}

const BusRegister = ({ busId, isOpen, close }: Props) => {
  useLockScroll();
  useEscCloseModal(close);

  return (
    <Portal>
      {isOpen && (
        <S.BusModalContainer onClick={close}>
          <BusWrap onClick={(e) => e.stopPropagation()}>
            <S.TitleContainer>
              <S.Title>
                <img src={schoolBus} alt="스쿨버스" />
                <p>{busId ? "버스 수정하기" : "버스 추가하기"}</p>
              </S.Title>

              <S.CloseIcon size={32} onClick={close} />
            </S.TitleContainer>

            <BusRegisterForm closeBusRegister={close} />
          </BusWrap>
        </S.BusModalContainer>
      )}
    </Portal>
  );
};

export default BusRegister;

const BusWrap = styled.div`
  width: 450px;
  height: auto;

  background-color: #fff;
  border: 2px solid #ddd;
  border-radius: 10px;
  overflow: hidden;

  display: flex;
  flex-direction: column;
  row-gap: 25px;
  padding: 18px 25px 5px;
`;
