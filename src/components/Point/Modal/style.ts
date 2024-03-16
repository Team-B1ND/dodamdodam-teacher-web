import styled, { CSSObject } from "styled-components";
import { CgClose } from "react-icons/cg";

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

export const Container = styled.div`
  width: 40%;
  height: 70%;
  overflow: auto;

  background-color: #fff;
  position: fixed;
  padding: 1.5rem;
`;

export const UnderLine = styled.div`
  outline: none;
  border-bottom: 1px solid #c8cdd1;
  margin-top: 5px;
`;

export const Wrap = styled.div`
  height: 192px;

  margin-top: 30px;
`;

export const TableStyle: CSSObject = {
  width: "100%",
  height: "auto",
  fontSize: "17px",
};

export const TitleTRStyle: CSSObject = {
  width: "100%",
  fontWeight: "bold",
  borderTop: "2px solid #dcddde",
  borderBottom: "2px solid #dcddde",
};

export const TBodyStyle: CSSObject = {
  width: "100%",
  height: "auto",
};

export const PassengerItemTRStyle: CSSObject = {
  width: "100%",
  height: "60px",
  borderBottom: "1px solid #ddd",
};
