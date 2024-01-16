import styled from "styled-components";

export const HomeScheduleHeaderColorSetItemContainer = styled.div`
  display: flex;
  align-items: flex-end;
  column-gap: 5px;
`;

export const HomeScheduleHeaderColorSetItemCircle = styled.span<{
  backgroundColor: string;
}>`
  width: 14px;
  height: 14px;
  background-color: ${({ backgroundColor }) => backgroundColor};
  border-radius: 100%;
`;

export const HomeScheduleHeaderColorSetItemText = styled.p`
  font-size: 14px;
  color: ${({ theme }) => theme.contrast};
`;
