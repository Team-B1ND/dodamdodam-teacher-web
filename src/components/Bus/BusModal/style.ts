import { CgClose } from "react-icons/cg";
import styled from "styled-components";

export const BusModalContainer = styled.div`
  width: 100%;
  height: 100vh;

  position: fixed;
  top: 0;
  left: 0;

  background-color: rgba(0, 0, 0, 0.5);
  z-index: 3;

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 20px 0;

  overflow: auto;
`;

export const TitleContainer = styled.div`
  width: 100%;
  height: 53px;
  border-bottom: 1px solid #ddd;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Title = styled.div`
  font-size: 17px;
  font-weight: bold;

  display: flex;
  align-items: center;
  column-gap: 10px;

  img {
    width: 23px;
    height: 23px;
  }
`;

export const CloseIcon = styled(CgClose)`
  cursor: pointer;
  padding: 5px;
  border-radius: 5px;

  transform: scale(1);
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: #ddd;
    transform: scale(0.96);
  }
  &:active {
    background-color: #eee;
  }
`;
