import styled, { CSSObject } from "styled-components";

export const SelectContainer = styled.div`
  display: flex;
  column-gap: 10px;
`;

export const OffBaseHeaderContainer = styled.div`
  display: flex;

  z-index: 900;
`;

export const ButtonContainer = styled.div`
  display: flex;
  gap: 6px;

  margin-left: 25px;
`;
export const EditStyle: CSSObject = {
  width: "5rem",
  height: "2rem",
  borderRadius: "5px",
  fontSize: "18px",
  transition: "all 0.2s ease-in-out",

  "&:hover": {
    boxShadow: "0 0 0 1px #fff, 0 0 0 3px rgba(50, 100, 150, 0.4)",
  },
};

export const DelStyle: CSSObject = {
  width: "5rem",
  height: "2rem",

  fontSize: "18px",
  borderRadius: "5px",
  transition: "all 0.2s ease-in-out",

  backgroundColor: "#EC9788",
  color: "white",
  border: 0,
  "&:hover": {
    boxShadow: "0 0 0 1px #fff, 0 0 0 3px #ddd",
  },
};

export const ClearStyle: CSSObject = {
  width: "5rem",
  height: "2rem",

  fontSize: "18px",
  borderRadius: "5px",
  transition: "all 0.2s ease-in-out",

  "&:hover": {
    boxShadow: "0 0 0 1px #fff, 0 0 0 3px #ddd",
  },
};
