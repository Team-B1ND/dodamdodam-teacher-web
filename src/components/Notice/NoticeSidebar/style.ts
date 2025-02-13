import styled from "styled-components";
import { DodamShape, DodamTypography, hexToRgba } from "@b1nd/dds-web";

export const NoticeSidebarWrap = styled.div`
  width: auto;
  height: auto;

  display: flex;
  flex-direction: column;

  padding: 12px 10px;
  gap: 10px;
`;

export const CategoryWrap = styled.div`
  width: 404px;
  height: auto;

  display: flex;
  flex-direction: column;

  ${DodamShape.ExtraSmall}
  background-color: ${({ theme }) => theme.backgroundNormal};

  padding: 30px 20px 25px;
  gap: 12px;
`;

export const Title = styled.span`
  color: ${({ theme }) => theme.labelNormal};
  ${DodamTypography.Heading1.Bold}
`;

export const Category = styled.div`
  width: auto;
  height: auto;

  display: flex;
  flex-wrap: wrap;

  ${DodamShape.ExtraSmall}
  background-color: ${({ theme }) => theme.fillNormal};

  padding: 16px 16px 48px;
  gap: 8px;
`;

export const CategoryTag = styled.span<{ isAtv?: boolean }>`
  width: auto;
  height: auto;

  color: ${({ theme, isAtv }) => isAtv ? theme.staticWhite : theme.labelAlternative};
  ${DodamTypography.Label.Medium}

  border: 1px solid ${({ theme, isAtv }) => isAtv ? theme.primaryNormal : theme.lineAlternative};
  border-radius: 31px;
  background-color: ${({ theme, isAtv }) => isAtv ? theme.primaryNormal : theme.backgroundNormal};

  padding: 8px 18px;
  cursor: pointer;

  &:hover {
    border: 1px solid ${({ theme, isAtv }) => isAtv ? hexToRgba(theme.primaryNormal, 0) : theme.lineAlternative};
    background-color: ${({ theme, isAtv }) => isAtv ? hexToRgba(theme.primaryNormal, 0.75) : theme.fillNeutral};
  }
`;

export const Button = styled.button`
  width: auto;
  height: auto;

  color: ${({ theme }) => theme.staticWhite};
  ${DodamTypography.Body1.Bold}

  border: none;
  ${DodamShape.Medium}
  background-color: ${({ theme }) => theme.primaryNormal};

  cursor: pointer;
  padding: 13px 28px;
`;
