import styled from "styled-components";
import { DodamTypography} from "@b1nd/dds-web";


export const NightStudyHeaderContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`;
export const SearchBarContainer = styled.div`
  display: flex;
  margin-right: 10px;
`;
export const SelectContainer = styled.div`
  display: flex;

  gap: 10px;
`;
export const InfoText = styled.p`
  ${DodamTypography.Body2.Regular}
  color: ${({ theme }) => theme.statusNegative};

  margin: 4px 0px 0px 10px;
`;

export const CsvButtonContainer = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: flex-end;
`;
