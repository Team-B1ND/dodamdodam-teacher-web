import styled from "styled-components";
import { DodamShape, DodamTypography } from "@b1nd/dds-web";

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

export const CategoryTag = styled.span`
  width: auto;
  height: auto;

  color: ${({ theme }) => theme.labelNormal};
  ${DodamTypography.Label.Medium}

  border: 1px solid ${({ theme }) => theme.lineAlternative};
  border-radius: 31px;
  background-color: ${({ theme }) => theme.backgroundNormal};

  padding: 8px 18px;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.fillNetural};
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
