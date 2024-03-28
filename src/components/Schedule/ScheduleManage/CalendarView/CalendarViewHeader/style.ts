import styled from "styled-components";

export const TopWrap = styled.div`
  width: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const TopLeftWrap = styled.div`
  display: flex;
  column-gap: 10px;
`;

export const ArrowButton = styled.div`
  width: 30px;
  height: 30px;

  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 100%;
  background-color: ${({ theme }) => theme.backgroundPointColor};
  border: 1px solid ${({ theme }) => theme.borderColor};
  cursor: pointer;
  color: ${({ theme }) => theme.contrast};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;

  &:hover {
    background-color: rgba(0, 0, 0, 0.06);
  }
`;

export const NowMonth = styled.div`
  width: 100px;
  height: 30px;

  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 10px;

  background-color: ${({ theme }) => theme.backgroundPointColor};
  border: 1px solid ${({ theme }) => theme.borderColor};
`;

export const ColorSetWrap = styled.div`
  display: flex;
  margin-left: auto;
  column-gap: 10px;
`;

export const TodayButton = styled.button`
  width: 80px;
  height: 35px;

  border-radius: 10px;
  border: none;
  cursor: pointer;

  &:hover {
    border: 1px solid gray;
  }
`;
