import styled, { CSSObject } from "styled-components";

export const NightStudyHeaderContainer = styled.div`
  display: flex;
width: 100%;
  justify-content: space-between;
  align-items: center;
`;
export const SearchBarContainer = styled.div`
  display: flex;
`;
export const SelectContainer = styled.div`
  display: flex;

  gap: 5px;
`;
export const InfoText = styled.p`
  font-size: 12px;
  color: red;

  margin: 4px 0px 0px 10px;
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
