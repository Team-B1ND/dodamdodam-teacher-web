import styled from "styled-components";
import { DodamTheme } from "@b1nd/dds-web";

export const ClubDateWrapBox = styled.div`
  width: 265px;
  height: 260px;
  background-color: ${({ theme }) => theme.backgroundNormal};
  border-radius: 16px;
  padding: 28px;
  gap: 4px;
  margin-bottom: 16px;
`;

export const ClubTitle = styled.div`
  font-size: 20px;
  font-weight: 800;
  line-height: 28px;
  letter-spacing: -1%;
  margin-bottom: 10px;
`;

export const ClubContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ClubDetail = styled.div`
  font-size: 18px;
  line-height: 27px;
`;
export const HighlightedDetail = styled(ClubDetail)`
  color: #008bff;
  cursor: pointer;
`;

export const WrapDatePicker = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 10px;
`;
