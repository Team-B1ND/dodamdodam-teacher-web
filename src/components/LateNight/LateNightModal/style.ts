import { CgClose } from "react-icons/cg";
import styled, { CSSObject } from "styled-components";

export const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 999;
`;
export const ModalWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: white;

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  color: black;

  width: 50%;

  border-radius: 10px;
`;

export const ModalTitle = styled.p`
  display: flex;
  align-items: center;

  font-size: 17px;
  font-weight: bold;

  gap: 5px;

  img {
    width: 23px;
    height: 23px;

    margin-top: -5px;
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

export const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;

  width: 100%;

  padding-left: 20px;
  padding-right: 20px;

  margin-top: 18px;
`;

export const TableStyle: CSSObject = {
  width: "94%",
  height: "auto",

  fontSize: "16px",
  fontWeight: "bold",
};

export const TRStyle: CSSObject = {
  width: "90%",
  fontWeight: "bold",
  borderTop: "2px solid #dcddde",
  borderBottom: "2px solid #dcddde",
};

export const TRItemStyle: CSSObject = {
  width: "90%",
  height: "75px",
  fontWeight: "bold",
  borderTop: "2px solid #dcddde",
  borderBottom: "2px solid #dcddde",
};

export const TRListStyle: CSSObject = {
  width: "90%",
  height: "110px",
  fontWeight: "bold",
  borderTop: "2px solid #dcddde",
  borderBottom: "2px solid #dcddde",
};

export const TBodyStyle: CSSObject = {
  width: "100%",
  height: "auto",
};

export const PhoneItem = styled.div`
  margin-left: 15px;
`;

export const Content = styled.div`
  width: 90%;
  height: 110px;
  font-weight: bold;

  margin: 15px 0px 0px 13px;
`;
