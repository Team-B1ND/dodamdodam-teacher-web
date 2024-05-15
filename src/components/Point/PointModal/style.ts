import styled, { CSSObject } from "styled-components";
import { CgClose } from "react-icons/cg";
import { PointValueEnglishType } from "types/Point/point.type";
import dataTransform from "utils/Transform/dataTransform";
import { palette } from "styles/palette";

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
  border-radius: 10px;

  display: flex;
  flex-direction: column;

  gap: 30px;
`;

export const UnderLine = styled.div`
  width: 100%;
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
  marginTop: "14px",
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

export const ScoreTypeText = styled.span<{ scoreType: PointValueEnglishType }>`
  color: ${({ scoreType }) =>
    dataTransform.pointScoreTypeTransform(scoreType).color};
`;

export const DateInput = styled.input<{ isFocus: boolean }>`
  width: 180px;
  font-size: 17px;

  border: none;
  outline: none;
  padding-bottom: 5px;

  transition: all ease-in-out ${({ isFocus }) => (isFocus ? "0.13s" : "0.3s")};
  border-bottom: 1.5px solid
    ${({ isFocus }) => (isFocus ? `${palette.main}` : "#ddd")};
`;
