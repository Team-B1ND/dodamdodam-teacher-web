import styled from "styled-components";
import { DodamTypography } from "@b1nd/dds-web";

export const MemberCell = styled.div`
  width: 100%;
  height: 13%;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const MemberInfo = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const MemberInfoWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 28px;

  p {
    color: ${({ theme }) => theme.labelNormal};
    ${DodamTypography.Body2.Bold}
  }

  span {
    color: ${({ theme }) => theme.labelAssisitive};
    ${DodamTypography.Body1.Regular}
  }
`;

export const MemberRole = styled.div<{ colorType: string }>`
  display: flex;
  div {
    color: ${({ theme }) => theme.labelAlternative};
    ${DodamTypography.Body2.Medium}
    margin-right: 8px;
  }

  span {
    color: ${({ theme, colorType }) => theme[colorType]};
    ${DodamTypography.Body2.Bold}
  }
`;